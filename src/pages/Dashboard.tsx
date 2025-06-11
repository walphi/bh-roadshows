import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Chart } from '@/components/ui/chart';
import { 
  Home, 
  Building, 
  TrendingUp, 
  Calendar, 
  FileText, 
  Settings, 
  LogOut,
  Bell,
  User
} from 'lucide-react';

const Dashboard = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

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

  // Handle booking consultation
  const handleBookConsultation = () => {
    navigate('/calendar');
  };

  // Sample data for charts
  const luxuryPriceIndexData = {
    labels: ['Jan 2024', 'Mar 2024', 'May 2024', 'Jul 2024', 'Sep 2024', 'Nov 2024', 'Jan 2025', 'Mar 2025', 'May 2025', 'Jul 2025 (Projected)'],
    datasets: [
      {
        label: 'Luxury Property Price (AED/sqft)',
        data: [1850, 1920, 1980, 2050, 2130, 2210, 2290, 2380, 2450, 2520],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        tension: 0.3,
      },
      {
        label: 'Ultra-Luxury Property Price (AED/sqft)',
        data: [2750, 2850, 2950, 3080, 3200, 3350, 3480, 3620, 3750, 3880],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        tension: 0.3,
      },
    ],
  };

  const marketCompositionData = {
    labels: ['Apartments', 'Villas', 'Townhouses', 'Penthouses', 'Branded Residences'],
    datasets: [
      {
        label: 'Market Composition',
        data: [38, 27, 18, 12, 5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // These arrays are no longer needed as we're using static content in the components

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
              className="w-full justify-start text-white hover:bg-white/10"
              onClick={() => navigate('/calendar')}
            >
              <Calendar className="mr-2 h-5 w-5" />
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
              <h1 className="text-2xl font-bold text-bh-navy">Welcome to Dubai Luxury Real Estate Insights</h1>
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
            
            {/* Market Insights Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Dubai Luxury Market Growth (YTD 2025)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-bh-navy">14.8%</div>
                  <p className="text-sm text-green-600">+3.2% from previous quarter</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Prime Areas Average Rental Yield</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-bh-navy">5.5% - 8.5%</div>
                  <p className="text-sm text-gray-500">Luxury segment performance</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">Sobha Realty's New Launches (2025 YTD)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-bh-navy">7</div>
                  <p className="text-sm text-green-600">+2 from previous year</p>
                </CardContent>
              </Card>
            </div>
            
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="overview" className="data-[state=active]:bg-bh-navy data-[state=active]:text-white">
                  Market Overview
                </TabsTrigger>
                <TabsTrigger value="properties" className="data-[state=active]:bg-bh-navy data-[state=active]:text-white">
                  Investment Opportunities
                </TabsTrigger>
                <TabsTrigger value="activity" className="data-[state=active]:bg-bh-navy data-[state=active]:text-white">
                  Market Updates
                </TabsTrigger>
              </TabsList>
              
              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <CardTitle>Dubai Luxury Property Price Index (AED per sqft)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-80">
                        <Chart
                          type="line"
                          data={luxuryPriceIndexData}
                          options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                              legend: {
                                position: 'top',
                              },
                            },
                            scales: {
                              y: {
                                beginAtZero: false,
                              }
                            }
                          }}
                        />
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <CardTitle>Dubai Luxury Market Composition by Type</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-80">
                        <Chart
                          type="doughnut"
                          data={marketCompositionData}
                          options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                              legend: {
                                position: 'right',
                              },
                            },
                          }}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle>Exclusive Sobha Realty Opportunities</CardTitle>
                    <CardDescription>Premium developments in Dubai's most sought-after locations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                        <div className="h-40 bg-gray-200 relative">
                          <img src="/lovable-uploads/32fc7aba-c357-4b4b-8ee1-3006f4c64c78.png" alt="Sobha Hartland II" className="w-full h-full object-cover" />
                          <div className="absolute top-2 left-2">
                            <Badge className="bg-bh-coral text-white">Off-Plan</Badge>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-medium">Sobha Hartland II</h3>
                          <p className="text-sm text-gray-500">Mohammed Bin Rashid City</p>
                          <p className="font-medium mt-2">Starting from AED 3,200,000</p>
                          <div className="flex justify-between items-center mt-2">
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                              Q4 2025
                            </span>
                            <Button variant="outline" size="sm">Explore Project</Button>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                        <div className="h-40 bg-gray-200 relative">
                          <img src="/lovable-uploads/ee67a281-bf78-4e44-9ec1-947c6f345cbc.png" alt="Sobha One" className="w-full h-full object-cover" />
                          <div className="absolute top-2 left-2">
                            <Badge className="bg-bh-coral text-white">Off-Plan</Badge>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-medium">Sobha One</h3>
                          <p className="text-sm text-gray-500">Dubai Creek Harbour</p>
                          <p className="font-medium mt-2">Starting from AED 4,500,000</p>
                          <div className="flex justify-between items-center mt-2">
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                              Q2 2026
                            </span>
                            <Button variant="outline" size="sm">Explore Project</Button>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                        <div className="h-40 bg-gray-200 relative">
                          <img src="/lovable-uploads/32fc7aba-c357-4b4b-8ee1-3006f4c64c78.png" alt="Sobha SeaHaven" className="w-full h-full object-cover" />
                          <div className="absolute top-2 left-2">
                            <Badge className="bg-bh-coral text-white">Off-Plan</Badge>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-medium">Sobha SeaHaven</h3>
                          <p className="text-sm text-gray-500">Dubai Harbour</p>
                          <p className="font-medium mt-2">Starting from AED 5,800,000</p>
                          <div className="flex justify-between items-center mt-2">
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                              Q3 2025
                            </span>
                            <Button variant="outline" size="sm">Explore Project</Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Call-to-Action for Bookings */}
                <div className="mt-6 bg-bh-navy text-white p-6 rounded-lg shadow-lg">
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-4 md:mb-0 md:mr-6">
                      <h3 className="text-xl font-bold mb-2">Connect with a Sobha Realty Expert</h3>
                      <p className="text-white/80">
                        Schedule a personalized consultation to discuss investment opportunities and receive tailored advice for your portfolio.
                      </p>
                    </div>
                    <Button
                      className="bg-bh-coral hover:bg-bh-coral/90 text-white px-6 py-2 text-lg"
                      onClick={handleBookConsultation}
                    >
                      Book Your Consultation
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              {/* Investment Opportunities Tab */}
              <TabsContent value="properties">
                <Card>
                  <CardHeader>
                    <CardTitle>Premium Sobha Realty Developments</CardTitle>
                    <CardDescription>Exclusive investment opportunities in Dubai's most prestigious locations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-3 px-4">Development</th>
                            <th className="text-left py-3 px-4">Location</th>
                            <th className="text-left py-3 px-4">Property Types</th>
                            <th className="text-right py-3 px-4">Starting Price (AED)</th>
                            <th className="text-right py-3 px-4">Projected ROI (%)</th>
                            <th className="text-center py-3 px-4">Completion</th>
                            <th className="text-center py-3 px-4">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4">Sobha Hartland II</td>
                            <td className="py-3 px-4">Mohammed Bin Rashid City</td>
                            <td className="py-3 px-4">Apartments, Villas</td>
                            <td className="py-3 px-4 text-right">3,200,000</td>
                            <td className="py-3 px-4 text-right">7.8%</td>
                            <td className="py-3 px-4 text-center">
                              <span className="px-2 py-1 rounded text-xs bg-green-100 text-green-800">
                                Q4 2025
                              </span>
                            </td>
                            <td className="py-3 px-4 text-center">
                              <Button variant="outline" size="sm">View Details</Button>
                            </td>
                          </tr>
                          <tr className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4">Sobha One</td>
                            <td className="py-3 px-4">Dubai Creek Harbour</td>
                            <td className="py-3 px-4">Apartments, Penthouses</td>
                            <td className="py-3 px-4 text-right">4,500,000</td>
                            <td className="py-3 px-4 text-right">6.9%</td>
                            <td className="py-3 px-4 text-center">
                              <span className="px-2 py-1 rounded text-xs bg-green-100 text-green-800">
                                Q2 2026
                              </span>
                            </td>
                            <td className="py-3 px-4 text-center">
                              <Button variant="outline" size="sm">View Details</Button>
                            </td>
                          </tr>
                          <tr className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4">Sobha SeaHaven</td>
                            <td className="py-3 px-4">Dubai Harbour</td>
                            <td className="py-3 px-4">Apartments, Penthouses</td>
                            <td className="py-3 px-4 text-right">5,800,000</td>
                            <td className="py-3 px-4 text-right">7.2%</td>
                            <td className="py-3 px-4 text-center">
                              <span className="px-2 py-1 rounded text-xs bg-green-100 text-green-800">
                                Q3 2025
                              </span>
                            </td>
                            <td className="py-3 px-4 text-center">
                              <Button variant="outline" size="sm">View Details</Button>
                            </td>
                          </tr>
                          <tr className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4">Verde By Sobha</td>
                            <td className="py-3 px-4">Jumeirah Beach Residence</td>
                            <td className="py-3 px-4">Luxury Apartments</td>
                            <td className="py-3 px-4 text-right">6,200,000</td>
                            <td className="py-3 px-4 text-right">6.5%</td>
                            <td className="py-3 px-4 text-center">
                              <span className="px-2 py-1 rounded text-xs bg-yellow-100 text-yellow-800">
                                Q1 2026
                              </span>
                            </td>
                            <td className="py-3 px-4 text-center">
                              <Button variant="outline" size="sm">View Details</Button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Market Updates Tab */}
              <TabsContent value="activity" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Latest Market Insights</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="border-b pb-4 last:border-0 last:pb-0">
                          <h4 className="font-medium">Dubai Luxury Market Reaches New Heights</h4>
                          <p className="text-sm text-gray-600">Dubai's luxury real estate market has seen a 14.8% increase in property values since the beginning of 2025, outperforming global luxury markets.</p>
                          <p className="text-xs text-gray-400 mt-1">May 28, 2025</p>
                        </div>
                        <div className="border-b pb-4 last:border-0 last:pb-0">
                          <h4 className="font-medium">European Investors Flock to Dubai</h4>
                          <p className="text-sm text-gray-600">European investment in Dubai luxury properties has increased by 22% in Q1 2025, with Dutch investors showing particular interest in premium developments.</p>
                          <p className="text-xs text-gray-400 mt-1">May 15, 2025</p>
                        </div>
                        <div className="border-b pb-4 last:border-0 last:pb-0">
                          <h4 className="font-medium">Sobha Realty Announces New Waterfront Project</h4>
                          <p className="text-sm text-gray-600">Sobha Realty has unveiled plans for a new AED 4.8 billion waterfront development featuring ultra-luxury residences with private beach access.</p>
                          <p className="text-xs text-gray-400 mt-1">May 3, 2025</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Upcoming Investment Seminars</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="border-b pb-4 last:border-0 last:pb-0">
                          <h4 className="font-medium">Dubai Luxury Real Estate Masterclass</h4>
                          <p className="text-sm text-gray-600">Betterhomes Amsterdam Office</p>
                          <div className="flex items-center text-xs text-gray-400 mt-1">
                            <Calendar className="h-3 w-3 mr-1" />
                            June 15, 2025 at 2:00 PM
                          </div>
                        </div>
                        <div className="border-b pb-4 last:border-0 last:pb-0">
                          <h4 className="font-medium">Tax Benefits for Dutch Investors in Dubai</h4>
                          <p className="text-sm text-gray-600">Virtual Webinar</p>
                          <div className="flex items-center text-xs text-gray-400 mt-1">
                            <Calendar className="h-3 w-3 mr-1" />
                            June 22, 2025 at 11:00 AM
                          </div>
                        </div>
                        <div className="border-b pb-4 last:border-0 last:pb-0">
                          <h4 className="font-medium">Exclusive Sobha Realty Project Launch</h4>
                          <p className="text-sm text-gray-600">Waldorf Astoria Amsterdam</p>
                          <div className="flex items-center text-xs text-gray-400 mt-1">
                            <Calendar className="h-3 w-3 mr-1" />
                            July 5, 2025 at 6:30 PM
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;