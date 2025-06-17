
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { User, LogOut, Settings, Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const { scrollToSection } = useSmoothScroll();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  const handleAuthNav = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src="/lovable-uploads/ee67a281-bf78-4e44-9ec1-947c6f345cbc.png"
                alt="Betterhomes"
                className="h-4 md:h-5"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => handleNavClick('event-info')} className="text-bh-navy hover:text-bh-coral transition-colors">Event Info</button>
            <button onClick={() => handleNavClick('properties')} className="text-bh-navy hover:text-bh-coral transition-colors">Properties</button>
            <button onClick={() => handleNavClick('investment-benefits')} className="text-bh-navy hover:text-bh-coral transition-colors">Investment Benefits</button>
            <button onClick={() => handleNavClick('about-us')} className="text-bh-navy hover:text-bh-coral transition-colors">About Us</button>
            <button onClick={() => handleNavClick('contact')} className="text-bh-navy hover:text-bh-coral transition-colors">Contact</button>
          </nav>

          {/* Language Selector & Auth Buttons/User Menu */}
          <div className="hidden lg:flex items-center space-x-4">
            <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
              <option>English</option>
            </select>
            
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="border-bh-navy text-bh-navy hover:bg-bh-navy hover:text-white">
                    <User className="mr-2 h-4 w-4" />
                    {user?.name}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate('/dashboard')}>
                    Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/settings')}>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button
                  className="bg-bh-coral hover:bg-bh-coral/90 text-white"
                  onClick={() => handleNavClick('contact')}
                >
                  Register
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Sheet */}
          <div className="lg:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-bh-navy">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
                <nav className="flex flex-col space-y-4 mt-8">
                  <button onClick={() => handleNavClick('event-info')} className="text-bh-navy hover:text-bh-coral transition-colors text-left text-lg">Event Info</button>
                  <button onClick={() => handleNavClick('properties')} className="text-bh-navy hover:text-bh-coral transition-colors text-left text-lg">Properties</button>
                  <button onClick={() => handleNavClick('investment-benefits')} className="text-bh-navy hover:text-bh-coral transition-colors text-left text-lg">Investment Benefits</button>
                  <button onClick={() => handleNavClick('about-us')} className="text-bh-navy hover:text-bh-coral transition-colors text-left text-lg">About Us</button>
                  <button onClick={() => handleNavClick('contact')} className="text-bh-navy hover:text-bh-coral transition-colors text-left text-lg">Contact</button>
                </nav>
                <div className="absolute bottom-8 left-6 right-6">
                  {isAuthenticated ? (
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-bh-coral flex items-center justify-center text-white mr-3">
                          <User className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-bold text-bh-navy">{user?.name}</p>
                          <p className="text-sm text-gray-500">{user?.email}</p>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full mb-2 border-bh-navy text-bh-navy" onClick={() => handleAuthNav('/dashboard')}>Dashboard</Button>
                      <Button variant="outline" className="w-full border-gray-300" onClick={handleLogout}>Logout</Button>
                    </div>
                  ) : (
                    <div className="flex flex-col space-y-3">
                       <Button className="w-full bg-bh-coral hover:bg-bh-coral/90 text-white" onClick={() => handleNavClick('contact')}>
                        Register
                      </Button>
                    </div>
                  )}
                   <div className="mt-6">
                      <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                        <option>English</option>
                      </select>
                    </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
