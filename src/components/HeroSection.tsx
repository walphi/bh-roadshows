
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
// Checkbox might not be needed anymore if we removed remember me, but keeping for now.
// import { Checkbox } from '@/components/ui/checkbox';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useNavigate } from 'react-router-dom';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();
  const { scrollToSection } = useSmoothScroll();
  const isMobile = useIsMobile();

  const desktopCarouselImages = [
    "https://sobharealty.com/sites/default/files/styles/webp/public/2025-04/Community%20Banner%201440x651.jpg.webp?itok=wEuoXPHO",
    "https://sobharealty.com/sites/default/files/styles/webp/public/2025-05/Banner%201440x618%20%E2%80%93%207.jpg.webp?itok=b0O23i5Q",
    "https://sobharealty.com/sites/default/files/styles/webp/public/2025-05/Banner%201440x651%20%E2%80%93%201.jpg.webp?itok=7yn046pr"
  ];

  const mobileCarouselImages = [
    "https://sobharealty.com/sites/default/files/styles/webp/public/2025-05/Sobha%20Central%20Community%20Page%20mobile%20390x666%20%E2%80%93%207_0.jpg.webp?itok=RSMxB-Qm",
    "https://sobharealty.com/sites/default/files/styles/webp/public/2025-05/Main%20Banner%20mob%20390x666%20%E2%80%93%2013.jpg.webp?itok=xxIbaqfw",
    "https://sobharealty.com/sites/default/files/styles/webp/public/2024-11/Communitybanner-390x666%E2%80%93%20mobile%20%E2%80%93%201.jpg.webp?itok=PwvsinBA"
  ];

  const [currentImages, setCurrentImages] = useState(desktopCarouselImages);

  useEffect(() => {
    setCurrentImages(isMobile ? mobileCarouselImages : desktopCarouselImages);
  }, [isMobile]);

  const autoplayPlugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  const handleRegisterClick = () => {
    scrollToSection('contact');
  };

  const handleEventRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Event Registration:', { fullName, email, phone });
    navigate('/thank-you');
  };

  return (
    <section className="relative text-white min-h-[80vh] flex items-center overflow-hidden bg-bh-navy"> {/* Added fallback bg */}
      {/* Background Carousel */}
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[autoplayPlugin.current as any]}
        className="absolute inset-0 w-full h-full z-0"
      >
        <div className="h-full"> {/* Added wrapper div with h-full */}
          <CarouselContent className="-ml-0 h-full">
            {currentImages.map((src, index) => (
              <CarouselItem key={index} className="pl-0 h-full min-h-0 relative flex"> {/* Added min-h-0 */}
                <img
                  src={src}
                  alt={`Sobha Property ${index + 1}`}
                  className="w-full h-full object-cover" // Removed flex-1
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:block absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/50 hover:bg-white/80 text-bh-navy p-2 rounded-full" />
          <CarouselNext className="hidden sm:block absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/50 hover:bg-white/80 text-bh-navy p-2 rounded-full" />
        </div>
      </Carousel>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div> {/* Ensures overlay is above carousel */}
      
      <div className="container mx-auto px-4 relative z-20"> {/* Ensures content is above overlay */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 animate-[fade-in_0.8s_ease-out]">
              Dubai Property
              <span className="block text-bh-coral animate-[fade-in_1.2s_ease-out] hover:scale-105 transition-transform duration-300 inline-block">
                Roadshow Amsterdam
              </span>
            </h1>
            <div className="text-lg sm:text-xl md:text-2xl mb-6 animate-[fade-in_1.6s_ease-out]">
              <span className="bg-bh-coral px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-semibold pulse hover:bg-bh-coral/90 transition-colors duration-300 inline-block transform hover:scale-105">
                June 28th & 29th, 2025
              </span>
            </div>
            <p className="text-base sm:text-lg md:text-xl mb-8 leading-relaxed animate-[fade-in_2s_ease-out]">
              Discover exclusive off-plan properties and investment opportunities
              in Dubai's most prestigious developments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-[fade-in_2.4s_ease-out]">
              <Button
                size="lg"
                className="bg-bh-coral hover:bg-bh-coral/90 text-white px-6 py-2.5 text-base sm:px-8 sm:py-3 sm:text-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
                onClick={handleRegisterClick}
              >
                Register Now
              </Button>
            </div>
          </div>

          {/* Right Content - Form for desktop, Button for mobile */}
          <div className="animate-fade-in lg:animate-[slide-in-right_1s_ease-out]">
            {/* Show form on desktop */}
            <div className="hidden lg:block">
              <Card className="bg-white/20 dark:bg-black/20 backdrop-blur-lg border border-white/30 dark:border-black/30 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] rounded-xl">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-white dark:text-white mb-6 text-center">
                    Register for Event & Download Dubai 2025 Investment Guide
                  </h3>
                  <form className="space-y-4" onSubmit={handleEventRegistration}>
                    <div>
                      <label htmlFor="fullNameHero" className="block text-sm font-medium text-white mb-1">
                        Full Name
                      </label>
                      <Input
                        id="fullNameHero"
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Enter your full name"
                        className="w-full bg-white/80 text-bh-navy placeholder-gray-500 transition-all duration-300 focus:scale-[1.02] focus:shadow-md"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="emailAddressHero" className="block text-sm font-medium text-white mb-1">
                        Email Address
                      </label>
                      <Input
                        id="emailAddressHero"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full bg-white/80 text-bh-navy placeholder-gray-500 transition-all duration-300 focus:scale-[1.02] focus:shadow-md"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phoneNumberHero" className="block text-sm font-medium text-white mb-1">
                        Phone Number
                      </label>
                      <Input
                        id="phoneNumberHero"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter your phone number"
                        className="w-full bg-white/80 text-bh-navy placeholder-gray-500 transition-all duration-300 focus:scale-[1.02] focus:shadow-md"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-bh-coral hover:bg-bh-coral/90 text-white transform hover:scale-[1.02] transition-all duration-300 hover:shadow-lg py-2.5 text-base sm:py-3 sm:text-lg"
                    >
                      Submit Registration
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* The button on mobile was removed as per the request */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
