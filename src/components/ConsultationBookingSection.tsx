
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const ConsultationBookingSection = () => {
  const [date, setDate] = useState<Date>();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);

  const timeSlots = [
    "3:00 PM - 3:30 PM",
    "3:30 PM - 4:00 PM", 
    "4:00 PM - 4:30 PM",
    "4:30 PM - 5:00 PM",
    "5:00 PM - 5:30 PM",
    "5:30 PM - 6:00 PM"
  ];

  const benefits = [
    {
      title: "Personalized Advice",
      description: "Tailored investment strategies based on your goals",
      icon: "👤"
    },
    {
      title: "Exclusive Offers", 
      description: "Special payment plans and promotions only available during the roadshow",
      icon: "🎁"
    },
    {
      title: "Legal Guidance",
      description: "Expert advice on Dubai's property laws and purchase process",
      icon: "⚖️"
    },
    {
      title: "Financial Planning",
      description: "ROI calculations and financing options",
      icon: "📊"
    }
  ];

  const handleConsentChange = (checked: boolean | "indeterminate") => {
    setConsent(checked === true);
  };

  return (
    <section className="py-16 bg-bh-navy text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Book Your Consultation
          </h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Schedule a one-on-one meeting with our property experts during the roadshow 
            to discuss your investment goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Benefits */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Why Book a Consultation?</h3>
            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-2xl">{benefit.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-bh-coral">{benefit.title}</h4>
                    <p className="opacity-90">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-white/10 rounded-lg p-6">
              <p className="text-lg font-medium mb-2">Additional Information</p>
              <p className="opacity-90">
                Each consultation lasts 30 minutes. Our experts speak English, Dutch, and Arabic.
              </p>
            </div>
          </div>

          {/* Booking Form */}
          <div>
            <Card className="bg-white text-gray-900">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-bh-navy mb-6">
                  Select Your Preferred Date & Time
                </h3>
                
                <form className="space-y-4">
                  {/* Date Picker */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Select Date
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Time Slot Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Time Slot
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedTimeSlot(slot)}
                          className={cn(
                            "p-2 text-sm border rounded-lg transition-colors",
                            selectedTimeSlot === slot
                              ? "bg-bh-coral text-white border-bh-coral"
                              : "border-gray-300 hover:border-bh-coral"
                          )}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <Input 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <Input 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Your phone number"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <Input 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message (Optional)
                    </label>
                    <Textarea 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your investment goals..."
                      rows={3}
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox 
                      id="consent"
                      checked={consent}
                      onCheckedChange={handleConsentChange}
                    />
                    <label htmlFor="consent" className="text-sm text-gray-600">
                      I agree to the Privacy Policy and consent to being contacted by Betterhomes.
                    </label>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-bh-coral hover:bg-bh-coral/90 text-white"
                    disabled={!date || !selectedTimeSlot || !name || !email || !phone || !consent}
                  >
                    Confirm Consultation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationBookingSection;
