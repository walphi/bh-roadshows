
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <section className="relative bg-gradient-to-r from-bh-navy to-bh-navy/90 text-white min-h-[80vh] flex items-center">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&h=800&fit=crop')`
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Dubai Property
              <span className="block text-bh-coral">Roadshow Amsterdam</span>
            </h1>
            <div className="text-xl md:text-2xl mb-6">
              <span className="bg-bh-coral px-4 py-2 rounded-lg font-semibold">
                June 28th, 2025
              </span>
            </div>
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              Discover exclusive off-plan properties and investment opportunities 
              in Dubai's most prestigious developments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-bh-coral hover:bg-bh-coral/90 text-white px-8 py-3 text-lg"
              >
                Register Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-bh-navy px-8 py-3 text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - Login/Register Form */}
          <div className="animate-fade-in">
            <Card className="bg-white/95 backdrop-blur-sm">
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
                      className="w-full"
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
                      className="w-full"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="remember"
                        checked={rememberMe}
                        onCheckedChange={setRememberMe}
                      />
                      <label htmlFor="remember" className="text-sm text-gray-600">
                        Remember me
                      </label>
                    </div>
                    <a href="#" className="text-sm text-bh-coral hover:underline">
                      Forgot password?
                    </a>
                  </div>
                  <Button className="w-full bg-bh-navy hover:bg-bh-navy/90 text-white">
                    Sign In
                  </Button>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-3">Or continue with</p>
                    <div className="flex space-x-2">
                      <Button variant="outline" className="flex-1">
                        Google
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Facebook
                      </Button>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      Don't have an account?{' '}
                      <a href="#" className="text-bh-coral hover:underline font-medium">
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
