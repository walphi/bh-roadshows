
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Calendar, Coffee } from 'lucide-react';

interface EventInfoSectionProps {
  id?: string;
}

const EventInfoSection: React.FC<EventInfoSectionProps> = ({ id }) => {
  const agenda = [
    {
      time: "10:00 AM - 11:00 AM",
      title: "Registration & Welcome Coffee",
      description: "Meet and greet with the Betterhomes team",
      icon: Coffee
    },
    {
      time: "11:00 AM - 12:30 PM", 
      title: "Dubai Real Estate Market Overview",
      description: "Presentation on market trends, ROI, and investment opportunities",
      icon: Calendar
    },
    {
      time: "12:30 PM - 1:30 PM",
      title: "Lunch Break",
      description: "Networking opportunity with refreshments",
      icon: Coffee
    },
    {
      time: "1:30 PM - 3:00 PM",
      title: "Sobha Realty Project Showcase", 
      description: "Exclusive presentation of premium off-plan properties",
      icon: Calendar
    },
    {
      time: "3:00 PM - 6:00 PM",
      title: "One-on-One Consultations",
      description: "Personal meetings with property experts",
      icon: Clock
    }
  ];

  return (
    <section id={id} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bh-navy mb-4">
            Event Information
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join us for an exclusive roadshow event showcasing premium off-plan properties in Dubai. 
            Meet our experts and discover lucrative investment opportunities.
          </p>
        </div>

        {/* Event Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Calendar className="w-12 h-12 text-bh-coral mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-bh-navy mb-2">Date & Time</h3>
                <p className="text-gray-600">June 28th & 29th, 2025</p>
                <p className="text-gray-600">10:00 AM - 6:00 PM</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <MapPin className="w-12 h-12 text-bh-coral mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-bh-navy mb-2">Location</h3>
                <p className="text-gray-600">W Hotel Amsterdam</p>
                <p className="text-gray-600">Spuistraat 175, 1012 VN Amsterdam, Netherlands</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Coffee className="w-12 h-12 text-bh-coral mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-bh-navy mb-2">Entry</h3>
                <p className="text-gray-600">Complimentary entry with registration</p>
                <p className="text-gray-600">Refreshments provided</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="overflow-hidden rounded-lg">
              <img src="https://cache.marriott.com/content/dam/marriott-renditions/AMSWH/amswh-greatroom-1931-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*" alt="W Hotel Amsterdam" className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-lg">
                <img src="https://cache.marriott.com/is/image/marriotts7prod/wh-amswh-the-duchess-w-amste-38941-21805:Classic-Hor?wid=1336&fit=constrain" alt="W Hotel Amsterdam" className="w-full h-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img src="https://static.ra.co/images/clubs/lg/wh.jpg?dateUpdated=1519478069147" alt="W Hotel Amsterdam" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Event Agenda */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-bh-navy text-center mb-8">
            Event Agenda
          </h3>
          <div className="max-w-4xl mx-auto">
            {agenda.map((item, index) => (
              <div key={index} className="flex items-start mb-6 last:mb-0">
                <div className="flex-shrink-0 w-16 h-16 bg-bh-coral rounded-full flex items-center justify-center mr-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-xl font-semibold text-bh-navy">{item.title}</h4>
                      <span className="text-bh-coral font-medium">{item.time}</span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventInfoSection;
