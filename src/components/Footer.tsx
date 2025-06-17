
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const Footer = () => {
  const { scrollToSection } = useSmoothScroll();

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  return (
    <footer className="bg-bh-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img 
              src="/lovable-uploads/ee67a281-bf78-4e44-9ec1-947c6f345cbc.png" 
              alt="Betterhomes" 
              className="h-8 mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-300 mb-4">
              Betterhomes is one of the UAE's most recognized and respected real estate agencies, 
              with over 35 years of experience in the market.
            </p>
            <div className="text-sm text-gray-400">
              <p>Vision Tower 42nd floor, Business Bay, Dubai.</p>
              <p>+971 600 52 2233</p>
              <p>customercare@bhomes.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <button onClick={() => handleNavClick('event-info')} className="text-gray-300 hover:text-bh-coral transition-colors text-left">Event Information</button>
              <button onClick={() => handleNavClick('properties')} className="text-gray-300 hover:text-bh-coral transition-colors text-left">Featured Properties</button>
              <button onClick={() => handleNavClick('investment-benefits')} className="text-gray-300 hover:text-bh-coral transition-colors text-left">Investment Benefits</button>
              <button onClick={() => handleNavClick('about-us')} className="text-gray-300 hover:text-bh-coral transition-colors text-left">About Betterhomes</button>
              <button onClick={() => handleNavClick('contact')} className="text-gray-300 hover:text-bh-coral transition-colors text-left">Contact Us</button>
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter for the latest updates on Dubai property market and upcoming events.
            </p>
            <div className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white text-black"
              />
              <Button className="bg-bh-coral hover:bg-bh-coral/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Betterhomes. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link>
            <Link to="/cookies" className="text-gray-400 hover:text-white text-sm">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
