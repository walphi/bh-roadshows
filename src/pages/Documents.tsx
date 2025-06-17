import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Home, 
  Building, 
  TrendingUp, 
  Calendar, 
  FileText, 
  Settings, 
  LogOut,
  Bell,
  User,
  Plus,
  Search,
  File,
  FileImage,
  FilePlus,
  FileSpreadsheet,
  FileText as FileTextIcon,
  Download,
  Share2,
  MoreHorizontal,
  FolderOpen,
  Star,
  Clock,
  Trash2
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';

const Documents = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDocuments, setSelectedDocuments] = useState<string[]>([]);

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

  // Sample report categories
  const folders = [
    { id: 'market-insights', name: 'Market Insights', count: 9 },
    { id: 'investment-guides', name: 'Investment Guides', count: 5 },
    { id: 'legal-tax', name: 'Legal & Tax', count: 4 },
    { id: 'sobha-reports', name: 'Sobha Realty Reports', count: 6 },
    { id: 'area-guides', name: 'Dubai Area Guides', count: 7 },
  ];

  // Sample market reports and guides
  const documents = [
    {
      id: 'doc1',
      name: 'Dubai Luxury Property Investment Outlook 2025 for European HNWIs',
      type: 'pdf',
      size: '4.8 MB',
      lastModified: '2025-05-15',
      folder: 'market-insights',
      starred: true,
      image: 'https://d33om22pidobo4.cloudfront.net/blogs/covers/bh-will-trumps-tariffs-impact-uae-real-estate_r-headerpng-9d6ea3eb-84eb-4f03-8b78-5a8fa50119c2.png?d=1500x999&f=webp',
      description: 'A deep dive into the market trends and opportunities for European high-net-worth individuals.',
    },
    {
      id: 'doc2',
      name: 'Sobha Realty Investment Performance Analysis 2020-2025',
      type: 'pdf',
      size: '3.7 MB',
      lastModified: '2025-04-22',
      folder: 'sobha-reports',
      starred: true,
      image: 'https://d33om22pidobo4.cloudfront.net/blogs/covers/bh-will-trumps-tariffs-impact-uae-real-estate_r-headerpng-9d6ea3eb-84eb-4f03-8b78-5a8fa50119c2.png?d=1500x999&f=webp',
      description: 'An analysis of Sobha Realty\'s investment performance over the last five years.',
    },
    {
      id: 'doc3',
      name: 'Dubai Luxury Market Quarterly Report Q1 2025',
      type: 'spreadsheet',
      size: '2.3 MB',
      lastModified: '2025-04-10',
      folder: 'market-insights',
      starred: false,
      image: 'https://d33om22pidobo4.cloudfront.net/blogs/covers/bh-will-trumps-tariffs-impact-uae-real-estate_r-headerpng-9d6ea3eb-84eb-4f03-8b78-5a8fa50119c2.png?d=1500x999&f=webp',
      description: 'The latest quarterly report on the Dubai luxury market.',
    },
    {
      id: 'doc4',
      name: 'Dubai Tax & Legal Overview for Dutch Investors',
      type: 'pdf',
      size: '3.2 MB',
      lastModified: '2025-03-28',
      folder: 'legal-tax',
      starred: true,
      image: 'https://d33om22pidobo4.cloudfront.net/blogs/covers/bh-will-trumps-tariffs-impact-uae-real-estate_r-headerpng-9d6ea3eb-84eb-4f03-8b78-5a8fa50119c2.png?d=1500x999&f=webp',
      description: 'A comprehensive overview of the tax and legal landscape for Dutch investors in Dubai.',
    },
    {
      id: 'doc5',
      name: 'Mohammed Bin Rashid City Area Guide',
      type: 'pdf',
      size: '5.1 MB',
      lastModified: '2025-05-20',
      folder: 'area-guides',
      starred: false,
      image: 'https://d33om22pidobo4.cloudfront.net/blogs/covers/bh-will-trumps-tariffs-impact-uae-real-estate_r-headerpng-9d6ea3eb-84eb-4f03-8b78-5a8fa50119c2.png?d=1500x999&f=webp',
      description: 'An in-depth guide to the Mohammed Bin Rashid City area.',
    },
    {
      id: 'doc6',
      name: 'Dubai Creek Harbour Investment Guide',
      type: 'pdf',
      size: '4.2 MB',
      lastModified: '2025-01-15',
      folder: 'investment-guides',
      starred: true,
      image: 'https://d33om22pidobo4.cloudfront.net/blogs/covers/bh-will-trumps-tariffs-impact-uae-real-estate_r-headerpng-9d6ea3eb-84eb-4f03-8b78-5a8fa50119c2.png?d=1500x999&f=webp',
      description: 'A guide to investing in the Dubai Creek Harbour area.',
    },
    {
      id: 'doc7',
      name: 'Dubai Luxury Property Market Trends 2025',
      type: 'image',
      size: '3.5 MB',
      lastModified: '2025-02-10',
      folder: 'market-insights',
      starred: false,
      image: 'https://d33om22pidobo4.cloudfront.net/blogs/covers/bh-will-trumps-tariffs-impact-uae-real-estate_r-headerpng-9d6ea3eb-84eb-4f03-8b78-5a8fa50119c2.png?d=1500x999&f=webp',
      description: 'A visual overview of the latest trends in the Dubai luxury property market.',
    },
    {
      id: 'doc8',
      name: 'Sobha Hartland II Investment Brochure',
      type: 'pdf',
      size: '6.2 MB',
      lastModified: '2025-03-05',
      folder: 'sobha-reports',
      starred: true,
      image: 'https://d33om22pidobo4.cloudfront.net/blogs/covers/bh-will-trumps-tariffs-impact-uae-real-estate_r-headerpng-9d6ea3eb-84eb-4f03-8b78-5a8fa50119c2.png?d=1500x999&f=webp',
      description: 'A brochure detailing the investment opportunities in Sobha Hartland II.',
    },
    {
      id: 'doc9',
      name: 'Dubai Luxury Property ROI Analysis 2020-2025',
      type: 'spreadsheet',
      size: '1.8 MB',
      lastModified: '2025-05-01',
      folder: 'market-insights',
      starred: true,
      image: 'https://d33om22pidobo4.cloudfront.net/blogs/covers/bh-will-trumps-tariffs-impact-uae-real-estate_r-headerpng-9d6ea3eb-84eb-4f03-8b78-5a8fa50119c2.png?d=1500x999&f=webp',
      description: 'An analysis of the return on investment for luxury properties in Dubai.',
    },
    {
      id: 'doc10',
      name: 'UAE Property Ownership Guide for Foreign Investors',
      type: 'pdf',
      size: '2.8 MB',
      lastModified: '2025-04-15',
      folder: 'legal-tax',
      starred: true,
      image: 'https://d33om22pidobo4.cloudfront.net/blogs/covers/bh-will-trumps-tariffs-impact-uae-real-estate_r-headerpng-9d6ea3eb-84eb-4f03-8b78-5a8fa50119c2.png?d=1500x999&f=webp',
      description: 'A guide for foreign investors on property ownership in the UAE.',
    },
    {
      id: 'doc11',
      name: 'Will Trump’s Tariffs Impact UAE Real Estate?',
      type: 'pdf',
      size: '2.5 MB',
      lastModified: '2025-06-08',
      folder: 'market-insights',
      starred: false,
      image: 'https://d33om22pidobo4.cloudfront.net/blogs/covers/bh-will-trumps-tariffs-impact-uae-real-estate_r-headerpng-9d6ea3eb-84eb-4f03-8b78-5a8fa50119c2.png?d=1500x999&f=webp',
      description: 'An analysis of the potential impact of US tariffs on the UAE real estate market.',
    },
  ];

  // Get recent documents (last 30 days)
  const recentDocuments = documents.filter((doc) => {
    const lastModified = new Date(doc.lastModified);
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    return lastModified >= thirtyDaysAgo;
  });

  // Get starred documents
  const starredDocuments = documents.filter((doc) => doc.starred);

  // Filter documents based on search query
  const filteredDocuments = searchQuery
    ? documents.filter((doc) =>
        doc.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : documents;

  // Toggle document selection
  const toggleDocumentSelection = (docId: string) => {
    setSelectedDocuments((prev) =>
      prev.includes(docId)
        ? prev.filter((id) => id !== docId)
        : [...prev, docId]
    );
  };

  // Select all documents
  const selectAllDocuments = () => {
    if (selectedDocuments.length === filteredDocuments.length) {
      setSelectedDocuments([]);
    } else {
      setSelectedDocuments(filteredDocuments.map((doc) => doc.id));
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
              className="w-full justify-start text-white hover:bg-white/10"
              onClick={() => navigate('/calendar')}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Calendar
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start bg-white/10 text-white"
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
                <h1 className="text-3xl font-bold text-bh-navy">Market Reports & Guides</h1>
                <p className="text-gray-500 mt-1">Your central hub for all market insights, reports, and investment guides.</p>
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
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Left sidebar */}
              <div className="lg:col-span-1">
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-4">
                    <Button className="w-full bg-bh-coral hover:bg-bh-coral/90 mb-4">
                      <Plus className="mr-2 h-4 w-4" />
                      Request New Report
                    </Button>
                    
                    <div className="space-y-1 mt-6">
                      <Button variant="ghost" className="w-full justify-start">
                        <File className="mr-2 h-5 w-5" />
                        All Reports & Guides
                        <Badge className="ml-auto">{documents.length}</Badge>
                      </Button>
                      <Button variant="ghost" className="w-full justify-start">
                        <Clock className="mr-2 h-5 w-5" />
                        Recent
                        <Badge className="ml-auto">{recentDocuments.length}</Badge>
                      </Button>
                      <Button variant="ghost" className="w-full justify-start">
                        <Star className="mr-2 h-5 w-5 text-yellow-400" />
                        Starred
                        <Badge className="ml-auto">{starredDocuments.length}</Badge>
                      </Button>
                      <Button variant="ghost" className="w-full justify-start">
                        <Trash2 className="mr-2 h-5 w-5 text-red-500" />
                        Trash
                      </Button>
                    </div>
                    
                    <div className="mt-6">
                      <h3 className="font-medium text-sm text-gray-500 mb-2">CATEGORIES</h3>
                      <div className="space-y-1">
                        {folders.map((folder) => (
                          <Button 
                            key={folder.id} 
                            variant="ghost" 
                            className="w-full justify-start"
                          >
                            <FolderOpen className="mr-2 h-5 w-5 text-bh-navy" />
                            {folder.name}
                            <Badge className="ml-auto">{folder.count}</Badge>
                          </Button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h3 className="font-medium text-sm text-gray-500 mb-2">STORAGE</h3>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-bh-coral h-2.5 rounded-full w-[65%]"></div>
                      </div>
                      <p className="text-sm mt-2">
                        <span className="font-medium">65% used</span> - 6.5 GB of 10 GB
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Main content */}
              <div className="lg:col-span-3">
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle>All Reports & Guides</CardTitle>
                      <div className="relative w-64">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input 
                          placeholder="Search reports..."
                          className="pl-10"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="all" className="w-full">
                      
                      {/* All Documents Tab */}
                      <TabsContent value="all">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {filteredDocuments.map((doc) => (
                            <Card key={doc.id} className="overflow-hidden group">
                              <div className="relative h-48 bg-gray-200">
                                <img src={doc.image} alt={doc.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/40" />
                                <div className="absolute bottom-0 left-0 p-4">
                                  <h3 className="text-white font-bold text-lg">{doc.name}</h3>
                                </div>
                              </div>
                              <CardContent className="p-4">
                                <p className="text-sm text-gray-600 mb-4">{doc.description}</p>
                                <div className="flex justify-between items-center text-xs text-gray-500">
                                  <span>{doc.size}</span>
                                  <span>{new Date(doc.lastModified).toLocaleDateString()}</span>
                                </div>
                                <div className="flex items-center justify-end space-x-2 mt-4">
                                  <Button variant="ghost" size="icon">
                                    <Download className="h-4 w-4" />
                                  </Button>
                                  <Button variant="ghost" size="icon">
                                    <Share2 className="h-4 w-4" />
                                  </Button>
                                  <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                      <Button variant="ghost" size="icon">
                                        <MoreHorizontal className="h-4 w-4" />
                                      </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                      <DropdownMenuItem>View</DropdownMenuItem>
                                      <DropdownMenuItem>Rename</DropdownMenuItem>
                                      <DropdownMenuItem>Move</DropdownMenuItem>
                                      <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                                    </DropdownMenuContent>
                                  </DropdownMenu>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                        
                        {filteredDocuments.length === 0 && (
                          <div className="text-center py-8 text-gray-500">
                            No reports found matching your search
                          </div>
                        )}
                      </TabsContent>
                      
                    </Tabs>
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

export default Documents;