
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMeChange = (checked: boolean | "indeterminate") => {
    setRememberMe(checked === true);
  };

  return (
    <section className="relative bg-gradient-to-r from-bh-navy to-bh-navy/90 text-white min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] hover:scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&h=800&fit=crop')`
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-[fade-in_0.8s_ease-out]">
              Dubai Property
              <span className="block text-bh-coral animate-[fade-in_1.2s_ease-out] hover:scale-105 transition-transform duration-300 inline-block">
                Roadshow Amsterdam
              </span>
            </h1>
            <div className="text-xl md:text-2xl mb-6 animate-[fade-in_1.6s_ease-out]">
              <span className="bg-bh-coral px-4 py-2 rounded-lg font-semibold pulse hover:bg-bh-coral/90 transition-colors duration-300 inline-block transform hover:scale-105">
                June 28th, 2025
              </span>
            </div>
            <p className="text-lg md:text-xl mb-8 leading-relaxed animate-[fade-in_2s_ease-out]">
              Discover exclusive off-plan properties and investment opportunities 
              in Dubai's most prestigious developments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-[fade-in_2.4s_ease-out]">
              <Button 
                size="lg" 
                className="bg-bh-coral hover:bg-bh-coral/90 text-white px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
              >
                Register Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-bh-navy px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - Login/Register Form */}
          <div className="animate-[slide-in-right_1s_ease-out]">
            <Card className="bg-white/95 backdrop-blur-sm hover:bg-white/100 transition-all duration-300 hover:shadow-2xl transform hover:scale-[1.02]">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-bh-navy mb-6 text-center">
                  Login to Your Account
                </h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Input 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full transition-all duration-300 focus:scale-[1.02] focus:shadow-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <Input 
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="w-full transition-all duration-300 focus:scale-[1.02] focus:shadow-md"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="remember"
                        checked={rememberMe}
                        onCheckedChange={handleRememberMeChange}
                        className="transition-transform duration-300 hover:scale-110"
                      />
                      <label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer hover:text-bh-navy transition-colors duration-300">
                        Remember me
                      </label>
                    </div>
                    <a href="#" className="text-sm text-bh-coral hover:underline hover:text-bh-coral/80 transition-colors duration-300">
                      Forgot password?
                    </a>
                  </div>
                  <Button className="w-full bg-bh-navy hover:bg-bh-navy/90 text-white transform hover:scale-[1.02] transition-all duration-300 hover:shadow-lg">
                    Sign In
                  </Button>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-3">Or continue with</p>
                    <div className="flex space-x-2">
                      <Button variant="outline" className="flex-1 hover:scale-105 transition-all duration-300 hover:shadow-md">
                        Google
                      </Button>
                      <Button variant="outline" className="flex-1 hover:scale-105 transition-all duration-300 hover:shadow-md">
                        Facebook
                      </Button>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      Don't have an account?{' '}
                      <a href="#" className="text-bh-coral hover:underline font-medium hover:text-bh-coral/80 transition-colors duration-300">
                        Register here
                      </a>
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
