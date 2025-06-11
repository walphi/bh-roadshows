import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Home, 
  Building, 
  TrendingUp, 
  Calendar, 
  FileText, 
  Settings as SettingsIcon, 
  LogOut,
  Bell,
  User,
  Lock,
  CreditCard,
  BellRing,
  Globe,
  Shield,
  HelpCircle,
  ChevronRight
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Settings = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

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

  // Handle save settings
  const handleSaveSettings = () => {
    setSaveStatus('Saving...');
    
    // Simulate API call
    setTimeout(() => {
      setSaveStatus('Settings saved successfully!');
      
      // Clear status after 3 seconds
      setTimeout(() => {
        setSaveStatus(null);
      }, 3000);
    }, 1000);
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
              Dashboard
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
              onClick={() => navigate('/selected-properties')}
            >
              <Building className="mr-2 h-5 w-5" />
              Selected Properties
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start text-white hover:bg-white/10"
              onClick={() => navigate('/documents')}
            >
              <FileText className="mr-2 h-5 w-5" />
              Documents
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start bg-white/10 text-white"
              onClick={() => navigate('/settings')}
            >
              <SettingsIcon className="mr-2 h-5 w-5" />
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
              <h1 className="text-2xl font-bold text-bh-navy">Settings</h1>
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
            
            <Tabs defaultValue="account" className="w-full">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-64">
                  <TabsList className="flex flex-col h-auto bg-transparent p-0 space-y-1">
                    <TabsTrigger 
                      value="account" 
                      className="w-full justify-start px-3 py-2 h-auto data-[state=active]:bg-bh-navy data-[state=active]:text-white"
                    >
                      <User className="mr-2 h-5 w-5" />
                      Account
                    </TabsTrigger>
                    <TabsTrigger 
                      value="security" 
                      className="w-full justify-start px-3 py-2 h-auto data-[state=active]:bg-bh-navy data-[state=active]:text-white"
                    >
                      <Lock className="mr-2 h-5 w-5" />
                      Security
                    </TabsTrigger>
                    <TabsTrigger 
                      value="billing" 
                      className="w-full justify-start px-3 py-2 h-auto data-[state=active]:bg-bh-navy data-[state=active]:text-white"
                    >
                      <CreditCard className="mr-2 h-5 w-5" />
                      Billing
                    </TabsTrigger>
                    <TabsTrigger 
                      value="notifications" 
                      className="w-full justify-start px-3 py-2 h-auto data-[state=active]:bg-bh-navy data-[state=active]:text-white"
                    >
                      <BellRing className="mr-2 h-5 w-5" />
                      Notifications
                    </TabsTrigger>
                    <TabsTrigger 
                      value="preferences" 
                      className="w-full justify-start px-3 py-2 h-auto data-[state=active]:bg-bh-navy data-[state=active]:text-white"
                    >
                      <Globe className="mr-2 h-5 w-5" />
                      Preferences
                    </TabsTrigger>
                  </TabsList>
                  
                  <div className="mt-6 space-y-4">
                    <Button variant="outline" className="w-full justify-start">
                      <Shield className="mr-2 h-5 w-5" />
                      Privacy Policy
                      <ChevronRight className="ml-auto h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <HelpCircle className="mr-2 h-5 w-5" />
                      Help & Support
                      <ChevronRight className="ml-auto h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex-1">
                  {/* Account Tab */}
                  <TabsContent value="account" className="mt-0">
                    <Card>
                      <CardHeader>
                        <CardTitle>Account Information</CardTitle>
                        <CardDescription>
                          Manage your account details and preferences
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                          <div className="flex flex-col items-center space-y-2">
                            <Avatar className="w-24 h-24">
                              <AvatarImage src="https://placehold.co/200" alt={user?.name} />
                              <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <Button variant="outline" size="sm">Change Photo</Button>
                          </div>
                          
                          <div className="flex-1 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="firstName">First Name</Label>
                                <Input id="firstName" defaultValue="Phillip" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input id="lastName" defaultValue="W" />
                              </div>
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="email">Email Address</Label>
                              <Input id="email" type="email" defaultValue="test@example.com" />
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="phone">Phone Number</Label>
                              <Input id="phone" type="tel" defaultValue="+971 50 123 4567" />
                            </div>
                          </div>
                        </div>
                        
                        <Separator />
                        
                        <div className="space-y-4">
                          <h3 className="text-lg font-medium">Address Information</h3>
                          
                          <div className="space-y-2">
                            <Label htmlFor="address">Street Address</Label>
                            <Input id="address" defaultValue="123 Sheikh Zayed Road" />
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="city">City</Label>
                              <Input id="city" defaultValue="Dubai" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="state">State/Emirates</Label>
                              <Input id="state" defaultValue="Dubai" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="zip">Postal Code</Label>
                              <Input id="zip" defaultValue="12345" />
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="country">Country</Label>
                            <Select defaultValue="uae">
                              <SelectTrigger id="country">
                                <SelectValue placeholder="Select country" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="uae">United Arab Emirates</SelectItem>
                                <SelectItem value="sa">Saudi Arabia</SelectItem>
                                <SelectItem value="qa">Qatar</SelectItem>
                                <SelectItem value="kw">Kuwait</SelectItem>
                                <SelectItem value="bh">Bahrain</SelectItem>
                                <SelectItem value="om">Oman</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        
                        <div className="flex justify-end">
                          {saveStatus && (
                            <p className={`mr-4 self-center ${
                              saveStatus === 'Saving...' ? 'text-gray-500' : 'text-green-600'
                            }`}>
                              {saveStatus}
                            </p>
                          )}
                          <Button 
                            className="bg-bh-coral hover:bg-bh-coral/90"
                            onClick={handleSaveSettings}
                          >
                            Save Changes
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  {/* Security Tab */}
                  <TabsContent value="security" className="mt-0">
                    <Card>
                      <CardHeader>
                        <CardTitle>Security Settings</CardTitle>
                        <CardDescription>
                          Manage your password and security preferences
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="space-y-4">
                          <h3 className="text-lg font-medium">Change Password</h3>
                          
                          <div className="space-y-2">
                            <Label htmlFor="currentPassword">Current Password</Label>
                            <Input id="currentPassword" type="password" />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="newPassword">New Password</Label>
                            <Input id="newPassword" type="password" />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="confirmPassword">Confirm New Password</Label>
                            <Input id="confirmPassword" type="password" />
                          </div>
                        </div>
                        
                        <Separator />
                        
                        <div className="space-y-4">
                          <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Enable Two-Factor Authentication</p>
                              <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                            </div>
                            <Switch />
                          </div>
                        </div>
                        
                        <Separator />
                        
                        <div className="space-y-4">
                          <h3 className="text-lg font-medium">Login Sessions</h3>
                          
                          <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-gray-100 rounded-md">
                              <div>
                                <p className="font-medium">Current Session</p>
                                <p className="text-sm text-gray-500">Dubai, UAE • Chrome on Windows</p>
                              </div>
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                            </div>
                            
                            <div className="flex items-center justify-between p-3 bg-gray-100 rounded-md">
                              <div>
                                <p className="font-medium">Mobile App</p>
                                <p className="text-sm text-gray-500">Dubai, UAE • Betterhomes App on iPhone</p>
                              </div>
                              <Button variant="outline" size="sm" className="text-red-600">Revoke</Button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex justify-end">
                          {saveStatus && (
                            <p className={`mr-4 self-center ${
                              saveStatus === 'Saving...' ? 'text-gray-500' : 'text-green-600'
                            }`}>
                              {saveStatus}
                            </p>
                          )}
                          <Button 
                            className="bg-bh-coral hover:bg-bh-coral/90"
                            onClick={handleSaveSettings}
                          >
                            Save Changes
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  {/* Billing Tab */}
                  <TabsContent value="billing" className="mt-0">
                    <Card>
                      <CardHeader>
                        <CardTitle>Billing Information</CardTitle>
                        <CardDescription>
                          Manage your payment methods and billing preferences
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="space-y-4">
                          <h3 className="text-lg font-medium">Payment Methods</h3>
                          
                          <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 border rounded-md">
                              <div className="flex items-center">
                                <div className="w-12 h-8 bg-blue-100 rounded flex items-center justify-center mr-3">
                                  <span className="text-blue-800 font-bold text-sm">VISA</span>
                                </div>
                                <div>
                                  <p className="font-medium">Visa ending in 4242</p>
                                  <p className="text-sm text-gray-500">Expires 12/2026</p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Badge>Default</Badge>
                                <Button variant="ghost" size="sm">Edit</Button>
                              </div>
                            </div>
                            
                            <Button variant="outline" className="w-full">
                              Add Payment Method
                            </Button>
                          </div>
                        </div>
                        
                        <Separator />
                        
                        <div className="space-y-4">
                          <h3 className="text-lg font-medium">Billing Address</h3>
                          
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" id="sameAsAddress" className="rounded" defaultChecked />
                            <Label htmlFor="sameAsAddress">Same as account address</Label>
                          </div>
                        </div>
                        
                        <Separator />
                        
                        <div className="space-y-4">
                          <h3 className="text-lg font-medium">Billing History</h3>
                          
                          <div className="overflow-x-auto">
                            <table className="w-full">
                              <thead>
                                <tr className="border-b">
                                  <th className="text-left py-3 px-4">Invoice</th>
                                  <th className="text-left py-3 px-4">Date</th>
                                  <th className="text-left py-3 px-4">Amount</th>
                                  <th className="text-left py-3 px-4">Status</th>
                                  <th className="text-center py-3 px-4">Actions</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-b">
                                  <td className="py-3 px-4">INV-2025-001</td>
                                  <td className="py-3 px-4">May 15, 2025</td>
                                  <td className="py-3 px-4">AED 1,500.00</td>
                                  <td className="py-3 px-4">
                                    <Badge className="bg-green-100 text-green-800">Paid</Badge>
                                  </td>
                                  <td className="py-3 px-4 text-center">
                                    <Button variant="ghost" size="sm">Download</Button>
                                  </td>
                                </tr>
                                <tr className="border-b">
                                  <td className="py-3 px-4">INV-2025-002</td>
                                  <td className="py-3 px-4">Apr 15, 2025</td>
                                  <td className="py-3 px-4">AED 1,500.00</td>
                                  <td className="py-3 px-4">
                                    <Badge className="bg-green-100 text-green-800">Paid</Badge>
                                  </td>
                                  <td className="py-3 px-4 text-center">
                                    <Button variant="ghost" size="sm">Download</Button>
                                  </td>
                                </tr>
                                <tr className="border-b">
                                  <td className="py-3 px-4">INV-2025-003</td>
                                  <td className="py-3 px-4">Mar 15, 2025</td>
                                  <td className="py-3 px-4">AED 1,500.00</td>
                                  <td className="py-3 px-4">
                                    <Badge className="bg-green-100 text-green-800">Paid</Badge>
                                  </td>
                                  <td className="py-3 px-4 text-center">
                                    <Button variant="ghost" size="sm">Download</Button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  {/* Notifications Tab */}
                  <TabsContent value="notifications" className="mt-0">
                    <Card>
                      <CardHeader>
                        <CardTitle>Notification Preferences</CardTitle>
                        <CardDescription>
                          Manage how and when you receive notifications
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="space-y-4">
                          <h3 className="text-lg font-medium">Email Notifications</h3>
                          
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">Property Updates</p>
                                <p className="text-sm text-gray-500">Receive updates about your properties</p>
                              </div>
                              <Switch defaultChecked />
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">Investment Opportunities</p>
                                <p className="text-sm text-gray-500">Get notified about new investment opportunities</p>
                              </div>
                              <Switch defaultChecked />
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">Market Reports</p>
                                <p className="text-sm text-gray-500">Receive monthly market analysis reports</p>
                              </div>
                              <Switch defaultChecked />
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">Promotional Emails</p>
                                <p className="text-sm text-gray-500">Receive special offers and promotions</p>
                              </div>
                              <Switch />
                            </div>
                          </div>
                        </div>
                        
                        <Separator />
                        
                        <div className="space-y-4">
                          <h3 className="text-lg font-medium">Push Notifications</h3>
                          
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">Property Alerts</p>
                                <p className="text-sm text-gray-500">Receive alerts about your properties</p>
                              </div>
                              <Switch defaultChecked />
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">Document Updates</p>
                                <p className="text-sm text-gray-500">Get notified when documents are updated</p>
                              </div>
                              <Switch defaultChecked />
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">Calendar Reminders</p>
                                <p className="text-sm text-gray-500">Receive reminders for upcoming events</p>
                              </div>
                              <Switch defaultChecked />
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex justify-end">
                          {saveStatus && (
                            <p className={`mr-4 self-center ${
                              saveStatus === 'Saving...' ? 'text-gray-500' : 'text-green-600'
                            }`}>
                              {saveStatus}
                            </p>
                          )}
                          <Button 
                            className="bg-bh-coral hover:bg-bh-coral/90"
                            onClick={handleSaveSettings}
                          >
                            Save Changes
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  {/* Preferences Tab */}
                  <TabsContent value="preferences" className="mt-0">
                    <Card>
                      <CardHeader>
                        <CardTitle>User Preferences</CardTitle>
                        <CardDescription>
                          Customize your experience with Betterhomes
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="space-y-4">
                          <h3 className="text-lg font-medium">Language & Region</h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="language">Language</Label>
                              <Select defaultValue="en">
                                <SelectTrigger id="language">
                                  <SelectValue placeholder="Select language" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="en">English</SelectItem>
                                  <SelectItem value="ar">Arabic</SelectItem>
                                  <SelectItem value="hi">Hindi</SelectItem>
                                  <SelectItem value="ru">Russian</SelectItem>
                                  <SelectItem value="zh">Chinese</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="timezone">Timezone</Label>
                              <Select defaultValue="gst">
                                <SelectTrigger id="timezone">
                                  <SelectValue placeholder="Select timezone" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="gst">Gulf Standard Time (UTC+4)</SelectItem>
                                  <SelectItem value="ist">India Standard Time (UTC+5:30)</SelectItem>
                                  <SelectItem value="bst">British Summer Time (UTC+1)</SelectItem>
                                  <SelectItem value="est">Eastern Standard Time (UTC-5)</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="currency">Currency</Label>
                            <Select defaultValue="aed">
                              <SelectTrigger id="currency">
                                <SelectValue placeholder="Select currency" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="aed">AED (United Arab Emirates Dirham)</SelectItem>
                                <SelectItem value="usd">USD (US Dollar)</SelectItem>
                                <SelectItem value="eur">EUR (Euro)</SelectItem>
                                <SelectItem value="gbp">GBP (British Pound)</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        
                        <Separator />
                        
                        <div className="space-y-4">
                          <h3 className="text-lg font-medium">Appearance</h3>
                          
                          <div className="space-y-2">
                            <Label htmlFor="theme">Theme</Label>
                            <Select defaultValue="light">
                              <SelectTrigger id="theme">
                                <SelectValue placeholder="Select theme" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System Default</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Compact Mode</p>
                              <p className="text-sm text-gray-500">Use a more compact layout throughout the app</p>
                            </div>
                            <Switch />
                          </div>
                        </div>
                        
                        <Separator />
                        
                        <div className="space-y-4">
                          <h3 className="text-lg font-medium">Investment Preferences</h3>
                          
                          <div className="space-y-2">
                            <Label htmlFor="investmentType">Preferred Investment Type</Label>
                            <Select defaultValue="residential">
                              <SelectTrigger id="investmentType">
                                <SelectValue placeholder="Select investment type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="residential">Residential</SelectItem>
                                <SelectItem value="commercial">Commercial</SelectItem>
                                <SelectItem value="industrial">Industrial</SelectItem>
                                <SelectItem value="land">Land</SelectItem>
                                <SelectItem value="all">All Types</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="budget">Investment Budget Range</Label>
                            <Select defaultValue="1-3m">
                              <SelectTrigger id="budget">
                                <SelectValue placeholder="Select budget range" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="under-1m">Under AED 1 Million</SelectItem>
                                <SelectItem value="1-3m">AED 1-3 Million</SelectItem>
                                <SelectItem value="3-5m">AED 3-5 Million</SelectItem>
                                <SelectItem value="5-10m">AED 5-10 Million</SelectItem>
                                <SelectItem value="above-10m">Above AED 10 Million</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="locations">Preferred Locations</Label>
                            <Select defaultValue="dubai-marina">
                              <SelectTrigger id="locations">
                                <SelectValue placeholder="Select preferred locations" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="dubai-marina">Dubai Marina</SelectItem>
                                <SelectItem value="downtown">Downtown Dubai</SelectItem>
                                <SelectItem value="palm-jumeirah">Palm Jumeirah</SelectItem>
                                <SelectItem value="business-bay">Business Bay</SelectItem>
                                <SelectItem value="jumeirah">Jumeirah</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        
                        <div className="flex justify-end">
                          {saveStatus && (
                            <p className={`mr-4 self-center ${
                              saveStatus === 'Saving...' ? 'text-gray-500' : 'text-green-600'
                            }`}>
                              {saveStatus}
                            </p>
                          )}
                          <Button 
                            className="bg-bh-coral hover:bg-bh-coral/90"
                            onClick={handleSaveSettings}
                          >
                            Save Changes
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </div>
              </div>
            </Tabs>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Settings;
