
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

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
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-bh-coral text-white px-3 py-1 rounded-full text-sm font-medium">
            Off-Plan
          </span>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-bh-navy mb-2">{name}</h3>
        <p className="text-gray-600 mb-3">{location}</p>
        <div className="mb-4">
          <p className="text-2xl font-bold text-bh-coral">{price}</p>
          <p className="text-sm text-gray-500">Starting From</p>
        </div>
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            <span className="font-medium">Completion:</span> {completion}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2 mb-4 text-sm text-gray-600">
          <div className="text-center">
            <p className="font-medium">{beds}</p>
            <p>Beds</p>
          </div>
          <div className="text-center border-l border-r border-gray-200">
            <p className="font-medium">{baths}</p>
            <p>Baths</p>
          </div>
          <div className="text-center">
            <p className="font-medium">{size}</p>
            <p>Size</p>
          </div>
        </div>
        <Button className="w-full bg-bh-navy hover:bg-bh-navy/90 text-white">
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
