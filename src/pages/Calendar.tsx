import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Home, 
  Building, 
  TrendingUp, 
  Calendar as CalendarIcon, 
  FileText, 
  Settings, 
  LogOut,
  Bell,
  User,
  Plus,
  Clock,
  MapPin,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const CalendarPage = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [date, setDate] = useState<Date | undefined>(new Date('2025-06-28'));
  const [month, setMonth] = useState<Date>(new Date('2025-06-01'));
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Roadshow with Sobha',
      location: 'W Hotel, Amsterdam',
      date: new Date(2025, 5, 28),
      time: '10:00 AM - 6:00 PM',
      type: 'roadshow',
      description: 'Join us for an exclusive roadshow with Sobha at the W Hotel in Amsterdam. Meet with our experts Chirine and Fabio to discover prime real estate opportunities.',
      attendees: ['Chirine', 'Fabio'],
      image: 'https://cache.marriott.com/content/dam/marriott-renditions/AMSWH/amswh-greatroom-1931-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*'
    },
    {
      id: 2,
      title: 'Roadshow with Sobha',
      location: 'W Hotel, Amsterdam',
      date: new Date(2025, 5, 29),
      time: '10:00 AM - 6:00 PM',
      type: 'roadshow',
      description: 'Join us for an exclusive roadshow with Sobha at the W Hotel in Amsterdam. Meet with our experts Chirine and Fabio to discover prime real estate opportunities.',
      attendees: ['Chirine', 'Fabio'],
      image: 'https://cache.marriott.com/content/dam/marriott-renditions/AMSWH/amswh-greatroom-1931-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*'
    },
  ]);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);


  // Handle logout
  const handleLogout = () => {
    logout();
    navigate('/');
  };


  // Get events for selected date
  const selectedDateEvents = date 
    ? events.filter((event) => event.date.toDateString() === date.toDateString())
    : [];


  // Function to navigate to previous month
  const previousMonth = () => {
    const newMonth = new Date(month);
    newMonth.setMonth(newMonth.getMonth() - 1);
    setMonth(newMonth);
  };

  // Function to navigate to next month
  const nextMonth = () => {
    const newMonth = new Date(month);
    newMonth.setMonth(newMonth.getMonth() + 1);
    setMonth(newMonth);
  };

  const generateTimeSlots = () => {
    const slots = [];
    for (let i = 10; i <= 18; i++) {
      slots.push(`${i}:00`);
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  const handleTimeSelect = (time: string) => {
    if (bookedSlots.includes(time)) return;
    setSelectedTime(time);
  };

  const handleBooking = () => {
    if (selectedTime && date) {
      const newBooking = `${date.toDateString()} ${selectedTime}`;
      setBookedSlots([...bookedSlots, newBooking]);
      // Here you would typically make an API call to save the booking
      alert(`Successfully booked slot for ${selectedTime} on ${date.toLocaleDateString()}`);
      setSelectedTime(null);
    }
  };

  // Function to get event type badge color
  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'viewing':
        return 'bg-blue-100 text-blue-800';
      case 'meeting':
        return 'bg-purple-100 text-purple-800';
      case 'roadshow':
        return 'bg-rose-100 text-rose-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (!isAuthenticated) {
    return null; // Don't render anything while redirecting
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-64 bg-bh-navy text-white p-4">
          <div className="mb-8 flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-bh-coral flex items-center justify-center">
              <User className="h-6 w-6" />
            </div>
            <div>
              <p className="font-medium">{user?.name}</p>
              <p className="text-xs text-gray-300">{user?.email}</p>
            </div>
          </div>
          
          <nav className="space-y-1">
            <Button
              variant="ghost"
              className="w-full justify-start text-white hover:bg-white/10"
              onClick={() => navigate('/dashboard')}
            >
              <Home className="mr-2 h-5 w-5" />
              Market Insights
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-white hover:bg-white/10"
              onClick={() => navigate('/selected-properties')}
            >
              <Building className="mr-2 h-5 w-5" />
              Selected Properties
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start bg-white/10 text-white"
              onClick={() => navigate('/calendar')}
            >
              <CalendarIcon className="mr-2 h-5 w-5" />
              Calendar
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-white hover:bg-white/10"
              onClick={() => navigate('/documents')}
            >
              <FileText className="mr-2 h-5 w-5" />
              Market Reports & Guides
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-white hover:bg-white/10"
              onClick={() => navigate('/settings')}
            >
              <Settings className="mr-2 h-5 w-5" />
              Settings
            </Button>
          </nav>
          
          <div className="mt-auto">
            <Button 
              variant="ghost" 
              className="w-full justify-start text-white hover:bg-white/10"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-5 w-5" />
              Logout
            </Button>
          </div>
        </aside>
        
        {/* Main content */}
        <main className="flex-1 bg-gray-50 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-3xl font-bold text-bh-navy">Amsterdam Roadshow</h1>
                <p className="text-gray-500 mt-1">Book your slot for our exclusive event with Sobha at the W Hotel.</p>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="outline" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-bh-coral text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    3
                  </span>
                </Button>
                <Button 
                  variant="outline" 
                  className="md:hidden"
                  onClick={handleLogout}
                >
                  <LogOut className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <h3 className="font-medium mb-4 text-lg">
                  Event Details for {date?.toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </h3>
                {selectedDateEvents.length > 0 ? (
                  <div className="space-y-4">
                    {selectedDateEvents.map((event) => (
                      <div key={event.id}>
                        <Card className="overflow-hidden group">
                          {event.image && (
                            <div className="overflow-hidden">
                              <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          )}
                          <CardContent className="p-6">
                            <div className="flex justify-between items-start">
                              <div>
                                <Badge className={`${getEventTypeColor(event.type)} mb-2`}>
                                  {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                                </Badge>
                                <h4 className="font-bold text-xl">{event.title}</h4>
                                <div className="flex items-center text-md text-gray-500 mt-2">
                                  <MapPin className="h-5 w-5 mr-2" />
                                  <span>{event.location}</span>
                                </div>
                                <div className="flex items-center text-md text-gray-500 mt-1">
                                  <Clock className="h-5 w-5 mr-2" />
                                  <span>{event.time}</span>
                                </div>
                                <p className="text-md text-gray-600 mt-4">{event.description}</p>
                                {event.attendees && (
                                  <div className="mt-4">
                                    <h5 className="text-md font-medium">With</h5>
                                    <div className="flex items-center space-x-4 mt-2">
                                      {event.attendees.map(name => (
                                        <div key={name} className="flex items-center">
                                          <User className="h-5 w-5 mr-2 text-gray-500" />
                                          <span className="text-md">{name}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <MoreHorizontal className="h-5 w-5" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>View Details</DropdownMenuItem>
                                  <DropdownMenuItem>Share</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </CardContent>
                        </Card>

                        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
                          <h4 className="font-medium mb-4 text-lg">Available Time Slots</h4>
                          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                            {timeSlots.map(time => {
                              const isBooked = bookedSlots.includes(`${date?.toDateString()} ${time}`);
                              return (
                                <Button
                                  key={time}
                                  variant={selectedTime === time ? 'default' : 'outline'}
                                  onClick={() => handleTimeSelect(time)}
                                  disabled={isBooked}
                                  className={`
                                    py-6 text-lg
                                    ${isBooked ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : ''}
                                    ${selectedTime === time ? 'bg-bh-coral text-white hover:bg-bh-coral/90' : 'hover:bg-gray-100'}
                                  `}
                                >
                                  {time}
                                </Button>
                              )
                            })}
                          </div>
                          {selectedTime && (
                            <div className="mt-6 text-center">
                              <Button onClick={handleBooking} size="lg" className="bg-bh-navy text-white hover:bg-bh-navy/90 w-full md:w-auto">
                                Confirm Booking for {selectedTime}
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 text-gray-500 bg-white rounded-lg shadow-md">
                    <CalendarIcon className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-2 text-lg font-medium">No event selected</h3>
                    <p className="mt-1 text-md text-gray-500">Please select June 28th or 29th on the calendar to see details and book a slot.</p>
                  </div>
                )}
              </div>
              
              <div className="lg:col-span-1">
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle>
                        {month.toLocaleString('default', { month: 'long', year: 'numeric' })}
                      </CardTitle>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="icon" onClick={previousMonth}>
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" onClick={nextMonth}>
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CalendarComponent
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      month={month}
                      onMonthChange={setMonth}
                      className="rounded-md border"
                      modifiers={{
                        event: (d) =>
                          events.some(
                            (event) => event.date.toDateString() === d.toDateString()
                          ),
                      }}
                      modifiersStyles={{
                        event: {
                          fontWeight: 'bold',
                          backgroundColor: 'rgba(239, 68, 68, 0.1)',
                          color: 'rgb(239, 68, 68)',
                        }
                      }}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default CalendarPage;