
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

const ConsultationForm = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState<Date>();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);

  const timeSlots = [
    "10:00 AM - 10:30 AM", "10:30 AM - 11:00 AM",
    "11:00 AM - 11:30 AM", "11:30 AM - 12:00 PM",
    "12:00 PM - 12:30 PM", "12:30 PM - 1:00 PM",
    "1:00 PM - 1:30 PM", "1:30 PM - 2:00 PM",
    "2:00 PM - 2:30 PM", "2:30 PM - 3:00 PM",
    "3:00 PM - 3:30 PM", "3:30 PM - 4:00 PM",
    "4:00 PM - 4:30 PM", "4:30 PM - 5:00 PM",
    "5:00 PM - 5:30 PM", "5:30 PM - 6:00 PM"
  ];

  const availableDates = [
    new Date('2025-06-28'),
    new Date('2025-06-29')
  ];

  const handleConsentChange = (checked: boolean | "indeterminate") => {
    setConsent(checked === true);
  };

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    setSelectedTimeSlot('');
  };

  const availableTimeSlots = date && availableDates.some(d => d.getTime() === date.getTime()) ? timeSlots : [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/thank-you');
  };

  return (
    <div className="animate-[slide-in-right_1.2s_ease-out]">
      <Card className="bg-white text-gray-900 transform hover:scale-[1.01] transition-all duration-300 hover:shadow-2xl">
        <CardContent className="p-6">
          <h3 className="text-2xl font-bold text-bh-navy mb-6 hover:text-bh-coral transition-colors duration-300 cursor-default">
            Select Your Preferred Date & Time
          </h3>
          
          <form className="space-y-4" onSubmit={handleSubmit}>
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
                      "w-full justify-start text-left font-normal hover:scale-[1.02] transition-all duration-300",
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
                    onSelect={handleDateSelect}
                    initialFocus
                    disabled={(date) =>
                      !availableDates.some(
                        (d) => d.toDateString() === date.toDateString()
                      )
                    }
                    modifiers={{
                      available: availableDates
                    }}
                    modifiersClassNames={{
                      available: 'bg-bh-coral text-white'
                    }}
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Time Slot Selection */}
            {date && availableTimeSlots.length > 0 && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Time Slot
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                  {availableTimeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTimeSlot(slot)}
                      className={cn(
                        "p-2 text-sm border rounded-lg transition-all duration-300 transform hover:scale-105",
                        selectedTimeSlot === slot
                          ? "bg-bh-coral text-white border-bh-coral scale-105 shadow-lg"
                          : "border-gray-300 hover:border-bh-coral hover:shadow-md"
                      )}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            )}

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
                  className="transition-all duration-300 focus:scale-[1.02] focus:shadow-md"
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
                  className="transition-all duration-300 focus:scale-[1.02] focus:shadow-md"
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
                className="transition-all duration-300 focus:scale-[1.02] focus:shadow-md"
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
                className="transition-all duration-300 focus:scale-[1.02] focus:shadow-md"
              />
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox 
                id="consent"
                checked={consent}
                onCheckedChange={handleConsentChange}
                className="transition-transform duration-300 hover:scale-110"
              />
              <label htmlFor="consent" className="text-sm text-gray-600 hover:text-bh-navy transition-colors duration-300 cursor-pointer">
                I agree to the Privacy Policy and consent to being contacted by Betterhomes.
              </label>
            </div>

            <Button 
              type="submit"
              className="w-full bg-bh-coral hover:bg-bh-coral/90 text-white transform hover:scale-[1.02] transition-all duration-300 hover:shadow-lg"
              disabled={!date || !name || !email || !phone || !consent}
            >
              Confirm Consultation
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConsultationForm;
