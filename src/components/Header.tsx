
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/ee67a281-bf78-4e44-9ec1-947c6f345cbc.png" 
              alt="Betterhomes" 
              className="h-8 md:h-10"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-bh-navy hover:text-bh-coral transition-colors">Event Info</Link>
            <Link to="/properties" className="text-bh-navy hover:text-bh-coral transition-colors">Properties</Link>
            <Link to="/investment-benefits" className="text-bh-navy hover:text-bh-coral transition-colors">Investment Benefits</Link>
            <Link to="/about" className="text-bh-navy hover:text-bh-coral transition-colors">About Us</Link>
            <Link to="/contact" className="text-bh-navy hover:text-bh-coral transition-colors">Contact</Link>
          </nav>

          {/* Language Selector & Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
              <option>English</option>
            </select>
            <Button variant="outline" className="border-bh-navy text-bh-navy hover:bg-bh-navy hover:text-white">
              Login
            </Button>
            <Button className="bg-bh-coral hover:bg-bh-coral/90 text-white">
              Register
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-bh-navy"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 mt-4">
              <Link to="/" className="text-bh-navy hover:text-bh-coral transition-colors">Event Info</Link>
              <Link to="/properties" className="text-bh-navy hover:text-bh-coral transition-colors">Properties</Link>
              <Link to="/investment-benefits" className="text-bh-navy hover:text-bh-coral transition-colors">Investment Benefits</Link>
              <Link to="/about" className="text-bh-navy hover:text-bh-coral transition-colors">About Us</Link>
              <Link to="/contact" className="text-bh-navy hover:text-bh-coral transition-colors">Contact</Link>
              <div className="flex space-x-2 pt-4">
                <Button variant="outline" className="border-bh-navy text-bh-navy hover:bg-bh-navy hover:text-white">
                  Login
                </Button>
                <Button className="bg-bh-coral hover:bg-bh-coral/90 text-white">
                  Register
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
