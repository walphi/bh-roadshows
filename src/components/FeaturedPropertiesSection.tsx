
import { Button } from '@/components/ui/button';
import PropertyCard from './PropertyCard';

const FeaturedPropertiesSection = () => {
  const properties = [
    {
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=400&h=300&fit=crop",
      name: "Sobha Reserve Villas",
      location: "MBR City, Dubai",
      price: "AED 15,000,000",
      completion: "Q4 2026",
      beds: "4-6",
      baths: "5-7", 
      size: "5,000+ sqft"
    },
    {
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=400&h=300&fit=crop",
      name: "Sobha Hartland Apartments",
      location: "MBR City, Dubai",
      price: "AED 1,200,000",
      completion: "Q2 2027",
      beds: "1-3",
      baths: "2-4",
      size: "800-2,500 sqft"
    },
    {
      image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=400&h=300&fit=crop",
      name: "Sobha Creek Vistas",
      location: "Dubai Creek Harbour",
      price: "AED 950,000",
      completion: "Q1 2026",
      beds: "1-2",
      baths: "1-3",
      size: "600-1,400 sqft"
    },
    {
      image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?w=400&h=300&fit=crop",
      name: "Sobha One Towers",
      location: "Dubai Harbour",
      price: "AED 2,800,000",
      completion: "Q3 2027",
      beds: "2-4",
      baths: "3-5",
      size: "1,200-3,000 sqft"
    },
    {
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop",
      name: "Sobha Waves Grande",
      location: "Sobha Hartland 2",
      price: "AED 4,500,000",
      completion: "Q4 2028",
      beds: "3-5",
      baths: "4-6",
      size: "2,000-4,500 sqft"
    },
    {
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=400&h=300&fit=crop",
      name: "Sobha Seahaven Villas",
      location: "Dubai Maritime City",
      price: "AED 8,900,000",
      completion: "Q2 2029",
      beds: "4-7",
      baths: "5-8",
      size: "3,500-7,000 sqft"
    }
  ];

  const filters = ["All", "Apartments", "Villas", "Penthouses", "Townhouses", "Off-Plan"];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bh-navy mb-4">
            Featured Sobha Properties
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Discover premium off-plan properties in Dubai's most prestigious locations. 
            Exclusive payment plans available only during the roadshow.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={filter === "All" ? "default" : "outline"}
                className={filter === "All" 
                  ? "bg-bh-coral hover:bg-bh-coral/90 text-white" 
                  : "border-gray-300 text-gray-600 hover:border-bh-coral hover:text-bh-coral"
                }
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button size="lg" className="bg-bh-navy hover:bg-bh-navy/90 text-white px-8">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPropertiesSection;
