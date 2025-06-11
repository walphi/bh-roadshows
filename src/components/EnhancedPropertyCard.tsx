import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  MapPin, 
  Calendar, 
  Home, 
  Bath, 
  Ruler, 
  ChevronLeft, 
  ChevronRight, 
  Banknote,
  Sparkles,
  Check,
  ExternalLink
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface PropertyCardProps {
  onBookConsultationClick: () => void;
  images: string[];
  name: string;
  location: string;
  price: string;
  completion: string;
  beds: string;
  baths: string;
  size: string;
  description: string;
  features: string[];
  paymentPlan: {
    downPayment: string;
    installments: string;
    handover: string;
  };
  propertyType: string;
  exclusive?: boolean;
  threeDTourUrl?: string;
  floorPlanUrl?: string;
}

const EnhancedPropertyCard = ({
  onBookConsultationClick,
  images,
  name,
  location,
  price,
  completion,
  beds,
  baths,
  size,
  description,
  features,
  paymentPlan,
  propertyType,
  exclusive = false,
  threeDTourUrl,
  floorPlanUrl
}: PropertyCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card
          className="overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl h-full flex flex-col"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative overflow-hidden">
            {/* Image Carousel */}
            <div className="relative">
              <img 
                src={images[currentImageIndex]} 
                alt={`${name} - Image ${currentImageIndex + 1}`}
                className={`w-full h-56 object-cover transition-all duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
              />
              
              {/* Navigation Arrows (only visible on hover) */}
              {images.length > 1 && isHovered && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full hover:bg-white transition-colors duration-300"
                  >
                    <ChevronLeft className="w-5 h-5 text-bh-navy" />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full hover:bg-white transition-colors duration-300"
                  >
                    <ChevronRight className="w-5 h-5 text-bh-navy" />
                  </button>
                </>
              )}
              
              {/* Image Counter */}
              {images.length > 1 && (
                <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                  {currentImageIndex + 1}/{images.length}
                </div>
              )}
            </div>
            
            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              <Badge className="bg-bh-coral text-white hover:bg-bh-coral/90 transition-colors duration-300">
                Off-Plan
              </Badge>
              
              {exclusive && (
                <Badge className="bg-bh-navy text-white hover:bg-bh-navy/90 transition-colors duration-300">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Exclusive
                </Badge>
              )}
              
              <Badge className="bg-white text-bh-navy border border-bh-navy hover:bg-gray-100 transition-colors duration-300">
                {propertyType}
              </Badge>
            </div>
            
            {/* Like Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsLiked(!isLiked);
              }}
              className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
                isLiked 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white/80 text-gray-700 hover:bg-white'
              }`}
            >
              <Heart className={`w-4 h-4 transition-all duration-300 ${isLiked ? 'fill-current' : ''}`} />
            </button>
            
            <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
          </div>
          
          <CardContent className="p-4 flex-1 flex flex-col">
            <h3 className="text-xl font-semibold text-bh-navy mb-2 group-hover:text-bh-coral transition-colors duration-300">
              {name}
            </h3>
            
            <div className="flex items-center text-gray-600 mb-3 hover:text-bh-navy transition-colors duration-300">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">{location}</span>
            </div>
            
            <div className="text-base md:text-lg font-bold text-bh-coral mb-3 group-hover:scale-105 transition-transform duration-300 break-words">
              {price}
            </div>
            
            <div className="flex items-center text-gray-600 mb-4 hover:text-bh-navy transition-colors duration-300">
              <Calendar className="w-4 h-4 mr-1" />
              <span className="text-sm">Completion: {completion}</span>
            </div>
            
            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="flex items-center text-gray-600 hover:text-bh-navy transition-colors duration-300">
                <Home className="w-4 h-4 mr-1" />
                <span className="text-sm">{beds}</span>
              </div>
              <div className="flex items-center text-gray-600 hover:text-bh-navy transition-colors duration-300">
                <Bath className="w-4 h-4 mr-1" />
                <span className="text-sm">{baths}</span>
              </div>
              <div className="flex items-center text-gray-600 hover:text-bh-navy transition-colors duration-300">
                <Ruler className="w-4 h-4 mr-1" />
                <span className="text-sm">{size}</span>
              </div>
            </div>
            
            {/* Payment Plan Preview */}
            <div className="bg-gray-50 p-3 rounded-md mb-4">
              <div className="flex items-center text-bh-navy mb-1">
                <Banknote className="w-4 h-4 mr-1" />
                <span className="text-sm font-medium">Payment Plan</span>
              </div>
              <div className="text-xs text-gray-600">
                {paymentPlan.downPayment} down • {paymentPlan.installments} installments
              </div>
            </div>
            
            <Button
              className="w-full bg-bh-navy hover:bg-bh-coral text-white transform hover:scale-[1.02] transition-all duration-300 hover:shadow-lg mt-auto"
              onClick={(e) => {
                e.stopPropagation(); // Prevent Dialog from opening
                if (isAuthenticated) {
                  navigate('/dashboard');
                } else {
                  navigate('/register');
                }
              }}
            >
              View Details
            </Button>
          </CardContent>
        </Card>
      </DialogTrigger>
      
      <DialogContent className="max-w-4xl w-full">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-bh-navy">{name}</DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue="overview" className="mt-4">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
            <TabsTrigger value="payment">Payment Plan</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <img 
                  src={images[0]} 
                  alt={name}
                  className="w-full h-64 object-cover rounded-lg"
                />
                
                <div className="mt-4 grid grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <Home className="w-5 h-5 mx-auto text-bh-navy mb-1" />
                    <div className="text-sm font-medium">{beds} Beds</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <Bath className="w-5 h-5 mx-auto text-bh-navy mb-1" />
                    <div className="text-sm font-medium">{baths} Baths</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <Ruler className="w-5 h-5 mx-auto text-bh-navy mb-1" />
                    <div className="text-sm font-medium">{size}</div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center text-gray-600 mb-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{location}</span>
                    </div>
                    <div className="text-xl md:text-2xl font-bold text-bh-coral break-words">{price}</div>
                  </div>
                  
                  <Badge className="bg-bh-navy text-white px-3 py-1">
                    {propertyType}
                  </Badge>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-medium text-bh-navy mb-2">Completion Date</h4>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-bh-coral mr-2" />
                    <span>{completion}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium text-bh-navy mb-2">Description</h4>
                  <p className="text-gray-600">{description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {threeDTourUrl && (
                    <Button variant="outline" className="border-bh-coral text-bh-coral hover:bg-bh-coral hover:text-white">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      3D Tour
                    </Button>
                  )}
                  
                  {floorPlanUrl && (
                    <Button variant="outline" className="border-bh-navy text-bh-navy hover:bg-bh-navy hover:text-white">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Floor Plan
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="gallery">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((image, index) => (
                <img 
                  key={index}
                  src={image} 
                  alt={`${name} - Image ${index + 1}`}
                  className="w-full h-40 object-cover rounded-lg hover:scale-[1.03] transition-transform duration-300 cursor-pointer"
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="payment">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-bh-navy mb-4">Payment Plan Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full bg-bh-coral text-white flex items-center justify-center text-xl font-bold mr-4">
                    {paymentPlan.downPayment}
                  </div>
                  <div>
                    <h4 className="font-medium text-bh-navy">Down Payment</h4>
                    <p className="text-gray-600">Due at contract signing</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full bg-bh-navy text-white flex items-center justify-center text-xl font-bold mr-4">
                    {paymentPlan.installments}
                  </div>
                  <div>
                    <h4 className="font-medium text-bh-navy">Construction Installments</h4>
                    <p className="text-gray-600">Paid during construction period</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full bg-bh-coral text-white flex items-center justify-center text-xl font-bold mr-4">
                    {paymentPlan.handover}
                  </div>
                  <div>
                    <h4 className="font-medium text-bh-navy">Handover Payment</h4>
                    <p className="text-gray-600">Due at property handover</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-lg border border-bh-coral/20">
                <h4 className="font-medium text-bh-navy flex items-center mb-2">
                  <Sparkles className="w-4 h-4 text-bh-coral mr-2" />
                  Roadshow Exclusive Offer
                </h4>
                <p className="text-gray-600">
                  Special payment terms available only during the Amsterdam roadshow. 
                  Book a consultation for personalized payment plan options.
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="features">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-bh-navy mb-4">Property Features</h3>
                <ul className="space-y-2">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-bh-coral mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-bh-navy mb-4">Sobha Quality Assurance</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600 mb-4">
                    Sobha Realty is renowned for its unwavering commitment to quality and craftsmanship. 
                    Each property is built to exacting standards with premium materials and finishes.
                  </p>
                  
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-bh-coral mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Backward integration ensures quality control at every stage</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-bh-coral mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Premium fixtures and fittings from renowned global brands</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-bh-coral mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Rigorous quality checks throughout construction</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-bh-coral mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">98% on-time delivery record across all projects</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-6 flex justify-end">
          <DialogClose asChild>
            <Button
              className="bg-bh-coral hover:bg-bh-coral/90 text-white"
              onClick={onBookConsultationClick}
            >
              Book Consultation
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EnhancedPropertyCard;