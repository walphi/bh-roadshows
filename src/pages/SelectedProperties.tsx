import FeaturedPropertiesSection from '@/components/FeaturedPropertiesSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Home,
  Calendar,
  FileText,
  Settings,
  LogOut,
  User,
  Building,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const SelectedProperties = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!isAuthenticated) {
    return null; 
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex">
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
              className="w-full justify-start text-white hover:bg-white/10 bg-white/10"
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
        <main className="flex-1 bg-gray-50 p-6">
          <FeaturedPropertiesSection />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default SelectedProperties;