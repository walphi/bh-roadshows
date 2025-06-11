
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, MapPin, Calendar, Home, Bath, Ruler } from 'lucide-react';

interface PropertyCardProps {
  image: string;
  name: string;
  location: string;
  price: string;
  completion: string;
  beds: string;
  baths: string;
  size: string;
}

const PropertyCard = ({ image, name, location, price, completion, beds, baths, size }: PropertyCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  return (
    <Card 
      className="overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className={`w-full h-48 object-cover transition-all duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute top-3 left-3">
          <Badge className="bg-bh-coral text-white hover:bg-bh-coral/90 transition-colors duration-300">
            Off-Plan
          </Badge>
        </div>
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
      
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold text-bh-navy mb-2 group-hover:text-bh-coral transition-colors duration-300">
          {name}
        </h3>
        
        <div className="flex items-center text-gray-600 mb-3 hover:text-bh-navy transition-colors duration-300">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        
        <div className="text-2xl font-bold text-bh-coral mb-3 group-hover:scale-105 transition-transform duration-300 inline-block">
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
        
        <Button 
          className="w-full bg-bh-navy hover:bg-bh-coral text-white transform hover:scale-[1.02] transition-all duration-300 hover:shadow-lg"
          onClick={() => {
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
  );
};

export default PropertyCard;
