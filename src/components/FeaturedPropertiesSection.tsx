
import { useState, useEffect } from 'react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import EnhancedPropertyCard from './EnhancedPropertyCard';
import rawSobhaProperties from '@/data/sobhaProperties.json';

// Interface for the raw data structure from sobhaProperties.json
interface RawSobhaProperty {
  id: string;
  name: string;
  developer: string;
  location: string;
  propertyType: string;
  projectSummary: string;
  quotedDescription: string;
  status: string;
  launchDate: string;
  completionDate: string;
  priceRange: string;
  goldenVisaEligible: boolean | string; // JSON might have "Please specify"
  unitTypes: {
    bedrooms: string;
    sizeSqft: string;
    plotSizeSqft?: string; // Added for Elwood
    layouts: string;
    bathrooms: string;
    priceRangeAED: string;
    subType?: string;
  }[];
  amenities: string[];
  paymentPlan: Record<string, any>;
  investmentHighlights: string[];
  projectDetails: Record<string, any>;
  locationDetails: Record<string, string | string[]>;
  imageUrls: string[];
  threeDTourUrl?: string;
  floorPlanUrl?: string;
  brochureUrl?: string;
}

// Interface for the data structure that EnhancedPropertyCard and filtering logic will use
interface DisplayProperty {
  id: string;
  name: string;
  location: string;
  propertyType: string;
  description: string;
  features: string[];
  images: string[];
  price: string; // Formatted display price string
  priceToSortBy: number; // Numeric price for robust sorting/filtering
  completion: string;
  beds: string; // Formatted beds string e.g., "1-3 Beds"
  baths: string; // Formatted baths string e.g., "2-4 Baths"
  size: string; // Formatted size string e.g., "800-1200 sqft"
  paymentPlan: {
    downPayment: string;
    installments: string;
    handover: string;
  };
  exclusive?: boolean;
  threeDTourUrl?: string;
  floorPlanUrl?: string;
  originalData: RawSobhaProperty;
}

interface FeaturedPropertiesSectionProps {
  id?: string;
}

const FeaturedPropertiesSection: React.FC<FeaturedPropertiesSectionProps> = ({ id }) => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [priceRangeFilter, setPriceRangeFilter] = useState<[number, number]>([0, 150000000]); // Increased max
  const [bedsFilter, setBedsFilter] = useState("Any");
  const [visibleCount, setVisibleCount] = useState(6);
  const { scrollToSection } = useSmoothScroll();

  const mappedProperties: DisplayProperty[] = (rawSobhaProperties as RawSobhaProperty[]).map((p: RawSobhaProperty): DisplayProperty => {
    const getNumericPrice = (priceStr: string | undefined): number => {
      if (!priceStr || typeof priceStr !== 'string' || priceStr.toLowerCase().includes("please specify") || priceStr.toLowerCase().includes("application")) return Infinity;
      const cleanedPriceStr = priceStr.replace(/AED\s*|,/g, '');
      const match = cleanedPriceStr.match(/([\d\.]+)/);
      return match ? parseFloat(match[0]) * (cleanedPriceStr.toLowerCase().includes('million') ? 1000000 : 1) : Infinity;
    };

    // AED to EUR conversion rate (approximate)
    const AED_TO_EUR = 0.25; // 1 AED ≈ 0.25 EUR

    let displayPrice = "Price on Application";
    let priceToSortBy = Infinity;

    // Extract the minimum price from the price range
    const overallPriceNum = getNumericPrice(p.priceRange);
    if (overallPriceNum !== Infinity) {
      priceToSortBy = overallPriceNum;
      const eurPrice = overallPriceNum * AED_TO_EUR;
      // Always format as "Starting from" with both AED and EUR
      displayPrice = `Starting from AED ${Number(overallPriceNum).toLocaleString()} (€${Number(eurPrice).toLocaleString()})`;
    } else if (p.unitTypes && p.unitTypes.length > 0) {
      const firstUnitPrices = p.unitTypes.map(ut => getNumericPrice(ut.priceRangeAED)).filter(price => price !== Infinity);
      if (firstUnitPrices.length > 0) {
        priceToSortBy = Math.min(...firstUnitPrices);
        const eurPrice = priceToSortBy * AED_TO_EUR;
        displayPrice = `Starting from AED ${Number(priceToSortBy).toLocaleString()} (€${Number(eurPrice).toLocaleString()})`;
      }
    }

    const createRangeString = (items: (string | number | undefined)[], singularSuffix: string, pluralSuffix?: string) => {
      const counts = items
        .map(item => {
          if (typeof item === 'string') {
            const rangeMatch = item.match(/(\d+)\s*–\s*(\d+)/); // "X - Y"
            if (rangeMatch) return [parseFloat(rangeMatch[1]), parseFloat(rangeMatch[2])];
            return parseFloat(item.split(/[^0-9.]/)[0]); // "X (..." -> X
          }
          return typeof item === 'number' ? item : NaN;
        })
        .flat()
        .filter(c => !isNaN(c))
        .sort((a, b) => a - b);

      if (counts.length === 0) return `N/A ${pluralSuffix || singularSuffix}`;
      const min = Math.min(...counts);
      const max = Math.max(...counts);
      const suffix = (min === 1 && max === 1 && !pluralSuffix) ? singularSuffix : (pluralSuffix || singularSuffix + 's');
      return min === max ? `${min} ${suffix}` : `${min}-${max} ${suffix}`;
    };
    
    const bedsStr = createRangeString(p.unitTypes.map(ut => ut.bedrooms), "Bed", "Beds");
    const bathsStr = createRangeString(p.unitTypes.map(ut => ut.bathrooms), "Bath", "Baths");
    
    const allSizesSqft = p.unitTypes.map(ut => ut.sizeSqft?.replace(/[^0-9~–.-]/g, "").trim()).filter(s => s);
    let sizeStr = "N/A sqft";
    if (allSizesSqft.length > 0) {
        const numericSizes = allSizesSqft.map(s => {
            const sClean = s.replace('~', '');
            if (sClean.includes('–')) return sClean.split('–').map(val => parseFloat(val.trim()));
            if (sClean.includes('-')) return sClean.split('-').map(val => parseFloat(val.trim()));
            return [parseFloat(sClean)];
        }).flat().filter(sVal => !isNaN(sVal));
        if (numericSizes.length > 0) {
            const min = Math.min(...numericSizes);
            const max = Math.max(...numericSizes);
            sizeStr = min === max ? `${min.toLocaleString()} sqft` : `${min.toLocaleString()}-${max.toLocaleString()} sqft`;
        }
    }
    
    const downPayment = String((p.paymentPlan as any)?.downPayment || (p.paymentPlan as any)?.bookingEOI || (p.paymentPlan as any)?.booking || "N/A");
    const installments = String((p.paymentPlan as any)?.duringConstruction || ((p.paymentPlan as any)?.installments && (p.paymentPlan as any).installments.length > 0) ? "Multiple" : "See details");
    const handover = String((p.paymentPlan as any)?.onHandover || "N/A");

    return {
      id: p.id,
      name: p.name,
      location: p.location,
      propertyType: p.propertyType && !p.propertyType.toLowerCase().includes("please specify") ? p.propertyType : "N/A",
      description: p.projectSummary || p.quotedDescription || "No description available.",
      features: p.amenities || [],
      images: p.imageUrls && p.imageUrls.length > 0 && !p.imageUrls[0].toLowerCase().includes("please provide") ? p.imageUrls : ["/placeholder.svg"],
      price: displayPrice,
      priceToSortBy: priceToSortBy,
      completion: p.completionDate && !p.completionDate.toLowerCase().includes("please specify") ? p.completionDate : "TBC",
      beds: bedsStr,
      baths: bathsStr,
      size: sizeStr,
      paymentPlan: { downPayment, installments, handover },
      exclusive: (typeof (p.projectDetails as any)?.exclusive === 'boolean' ? (p.projectDetails as any).exclusive : p.investmentHighlights?.some(h => h.toLowerCase().includes("exclusive"))) || false,
      threeDTourUrl: p.threeDTourUrl && !p.threeDTourUrl.toLowerCase().includes("please provide") ? p.threeDTourUrl : undefined,
      floorPlanUrl: p.floorPlanUrl && !p.floorPlanUrl.toLowerCase().includes("please provide") ? p.floorPlanUrl : undefined,
      originalData: p,
    };
  });

  const [filteredProperties, setFilteredProperties] = useState<DisplayProperty[]>(mappedProperties);

  const filters = ["All", ...new Set(mappedProperties.map(p => p.propertyType).filter(pt => pt && pt !== "N/A"))];
  const bedsOptions = ["Any", "1", "2", "3", "4+"];

  useEffect(() => {
    let tempFiltered = mappedProperties;
    
    if (activeFilter !== "All") {
      tempFiltered = tempFiltered.filter(property => property.propertyType === activeFilter);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      tempFiltered = tempFiltered.filter(property =>
        property.name.toLowerCase().includes(query) ||
        property.location.toLowerCase().includes(query) ||
        property.description.toLowerCase().includes(query) ||
        property.originalData.developer.toLowerCase().includes(query)
      );
    }
    
    tempFiltered = tempFiltered.filter(property =>
      property.priceToSortBy >= priceRangeFilter[0] && property.priceToSortBy <= priceRangeFilter[1]
    );
    
    if (bedsFilter !== "Any") {
      const targetBeds = parseInt(bedsFilter.replace('+', ''));
      tempFiltered = tempFiltered.filter(property => {
        const bedsValue = property.beds.split(' ')[0]; // "1-3 Beds" -> "1-3"
        if (bedsValue === "N/A") return false;

        if (bedsValue.includes('-')) {
          const [minBeds, maxBeds] = bedsValue.split('-').map(b => parseInt(b));
          if (bedsFilter.includes('+')) {
            return minBeds >= targetBeds;
          }
          return targetBeds >= minBeds && targetBeds <= maxBeds;
        } else {
          const propertyBedCount = parseInt(bedsValue);
          if (bedsFilter.includes('+')) {
            return propertyBedCount >= targetBeds;
          }
          return propertyBedCount === targetBeds;
        }
      });
    }
    
    setFilteredProperties(tempFiltered);
  }, [activeFilter, searchQuery, priceRangeFilter, bedsFilter, mappedProperties]);

  // formatPrice function is removed as price is formatted during mapping

  return (
    <section id={id} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-bh-navy mb-4 hover:text-bh-coral transition-colors duration-300 cursor-default">
            Featured Sobha Properties
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 hover:text-bh-navy transition-colors duration-300">
            Discover premium off-plan properties in Dubai's most prestigious locations.
            Exclusive payment plans available only during the roadshow.
          </p>
          
          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            <div className="relative w-full md:w-1/3">
              <Input
                type="text"
                placeholder="Search properties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-bh-navy/20 focus:border-bh-coral"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-bh-navy"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            
            <Button
              variant="outline"
              className="border-bh-navy/20 text-bh-navy hover:bg-bh-navy/5"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filters
              {(priceRangeFilter[0] > 0 || priceRangeFilter[1] < 150000000 || bedsFilter !== "Any") && (
                <Badge className="ml-2 bg-bh-coral text-white">Active</Badge>
              )}
            </Button>
          </div>
          
          {/* Advanced Filters */}
          {showFilters && (
            <div className="bg-gray-50 p-4 rounded-lg mb-8 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-sm font-medium text-bh-navy mb-2">Price Range (AED)</h4>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      min="0"
                      max={priceRangeFilter[1]}
                      value={priceRangeFilter[0]}
                      onChange={(e) => setPriceRangeFilter([parseInt(e.target.value), priceRangeFilter[1]])}
                      className="border-bh-navy/20"
                    />
                    <span>to</span>
                    <Input
                      type="number"
                      min={priceRangeFilter[0]}
                      max="150000000" // Increased max
                      value={priceRangeFilter[1]}
                      onChange={(e) => setPriceRangeFilter([priceRangeFilter[0], parseInt(e.target.value)])}
                      className="border-bh-navy/20"
                    />
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-bh-navy mb-2">Bedrooms</h4>
                  <div className="flex gap-2">
                    {bedsOptions.map(option => (
                      <Button
                        key={option}
                        variant={bedsFilter === option ? "default" : "outline"}
                        className={bedsFilter === option
                          ? "bg-bh-coral hover:bg-bh-coral/90 text-white"
                          : "border-bh-navy/20 text-gray-600 hover:border-bh-coral hover:text-bh-coral"
                        }
                        onClick={() => setBedsFilter(option)}
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-end">
                  <Button
                    variant="outline"
                    className="border-bh-navy text-bh-navy hover:bg-bh-navy hover:text-white"
                    onClick={() => {
                      setPriceRangeFilter([0, 150000000]);
                      setBedsFilter("Any");
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              </div>
            </div>
          )}
          
          {/* Property Type Tabs */}
          <Tabs defaultValue="All" className="mb-8" onValueChange={setActiveFilter}>
            <TabsList className="h-auto flex-wrap gap-2 max-w-2xl mx-auto">
              {filters.map((filter) => (
                <TabsTrigger
                  key={filter}
                  value={filter}
                  className="data-[state=active]:bg-bh-coral data-[state=active]:text-white"
                >
                  {filter}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-gray-600">
          <p>
            Showing {Math.min(visibleCount, filteredProperties.length)} of {filteredProperties.length} properties
            {searchQuery && ` matching "${searchQuery}"`}
            {activeFilter !== "All" && ` in ${activeFilter}`}
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 items-stretch">
          {filteredProperties.slice(0, visibleCount).map((property, index) => (
            <div
              key={index}
              className={`animate-[fade-in_0.6s_ease-out_${index * 150}ms_both] h-full`}
            >
              <EnhancedPropertyCard
                {...property}
                onBookConsultationClick={() => scrollToSection('contact')}
              />
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <h3 className="text-xl font-semibold text-bh-navy mb-2">No properties found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters</p>
            <Button
              variant="outline"
              className="border-bh-navy text-bh-navy hover:bg-bh-navy hover:text-white"
              onClick={() => {
                setSearchQuery("");
                setActiveFilter("All");
                setPriceRangeFilter([0, 150000000]);
                setBedsFilter("Any");
              }}
            >
              Reset All Filters
            </Button>
          </div>
        )}

        {/* Load More Button */}
        {visibleCount < filteredProperties.length && (
          <div className="text-center animate-fade-in mb-8">
            <Button
              variant="outline"
              size="lg"
              className="border-bh-navy text-bh-navy hover:bg-bh-navy hover:text-white px-8 transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
              onClick={() => setVisibleCount(prev => prev + 3)}
            >
              Load More Properties
            </Button>
          </div>
        )}

        {/* View All Button */}
        <div className="text-center animate-fade-in">
          <Button
            size="lg"
            className="bg-bh-navy hover:bg-bh-navy/90 text-white px-8 transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
            onClick={() => scrollToSection('contact')}
          >
            Book Bespoke Property Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPropertiesSection;
