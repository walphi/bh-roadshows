import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { User } from 'lucide-react';

const ConsultantSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-bh-navy hover:text-bh-coral transition-colors duration-300 cursor-default">
            Meet Your Consultants
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with our Dubai real estate expert during the Amsterdam roadshow
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-full lg:max-w-7xl mx-auto">
          {/* Chirine Elsebai Card */}
          <Card className="bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] h-full flex flex-col">
            <CardContent className="p-8 flex flex-col flex-grow">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"> {/* Changed items-center to items-start */}
                {/* Profile Picture */}
                <div className="flex justify-center lg:justify-start animate-[fade-in_0.8s_ease-out]">
                  <div className="relative group">
                    <Avatar className="w-40 h-40 ring-4 ring-bh-coral/20 transition-all duration-300 group-hover:ring-bh-coral/40 group-hover:scale-105">
                      <AvatarImage 
                        src="/lovable-uploads/32fc7aba-c357-4b4b-8ee1-3006f4c64c78.png" 
                        alt="Chirine Elsebai - Sales Manager"
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-bh-navy text-white text-2xl">
                        <User size={48} />
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-bh-coral/10 to-bh-navy/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Bio Content */}
                <div className="lg:col-span-2 text-center lg:text-left animate-[fade-in_1.2s_ease-out]">
                  <h3 className="text-2xl md:text-3xl font-bold text-bh-navy mb-2 consultant-name-gradient">
                    Chirine Elsebai
                  </h3>
                  <p className="text-xl text-bh-coral font-semibold mb-4">
                    Sales Manager
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    A leading force in Dubai's off-plan real estate market with{' '}
                    <span className="font-semibold text-bh-navy">17 years in Dubai</span> and a solid track record in real estate. 
                    Chirine has become a trusted name in the off-plan sector, known for her strategic insight, 
                    leadership, and results-driven approach.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-white/80 rounded-lg p-4 hover:bg-white transition-colors duration-300">
                      <p className="text-gray-700">
                        She currently heads a dynamic team, driving sales and delivering growth in one of the 
                        region's most competitive markets. Her sharp market knowledge, deep developer relationships, 
                        and ability to identify the right opportunities at the right time have made her a go-to 
                        expert for investors and end-users alike.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-bh-navy/5 to-bh-coral/5 rounded-lg p-4">
                      <p className="text-gray-700 italic">
                        "She leads with vision, mentors with purpose, and closes with confidence—setting a high 
                        bar for excellence in Dubai's real estate landscape."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="mt-auto pt-8 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-[fade-in_1.6s_ease-out]">
                  <div className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300 transform hover:scale-105 h-full flex flex-col justify-between">
                    <div className="text-2xl font-bold text-bh-coral mb-2">17+</div>
                    <div className="text-sm text-gray-600">Years in Dubai</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300 transform hover:scale-105 h-full flex flex-col justify-between">
                    <div className="text-2xl font-bold text-bh-navy mb-2">Expert</div>
                    <div className="text-sm text-gray-600">Off-Plan Specialist</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300 transform hover:scale-105 h-full flex flex-col justify-between">
                    <div className="text-2xl font-bold text-bh-coral mb-2">Leader</div>
                    <div className="text-sm text-gray-600">Team Manager</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Fabio Lombardi Card */}
          <Card className="bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] h-full flex flex-col">
            <CardContent className="p-8 flex flex-col flex-grow">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"> {/* Changed items-center to items-start */}
                {/* Profile Picture */}
                <div className="flex justify-center lg:justify-start animate-[fade-in_0.8s_ease-out]">
                  <div className="relative group">
                    <Avatar className="w-40 h-40 ring-4 ring-bh-coral/20 transition-all duration-300 group-hover:ring-bh-coral/40 group-hover:scale-105">
                      <AvatarImage
                        src="/lovable-uploads/fabio-lombardi.webp"
                        alt="Fabio Lombardi - Director & Head of Global Affiliates"
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-bh-navy text-white text-2xl">
                        <User size={48} />
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-bh-coral/10 to-bh-navy/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Bio Content */}
                <div className="lg:col-span-2 text-center lg:text-left animate-[fade-in_1.2s_ease-out]">
                  <h3 className="text-2xl md:text-3xl font-bold text-bh-navy mb-2 consultant-name-gradient">
                    Fabio Lombardi
                  </h3>
                  <p className="text-xl text-bh-coral font-semibold mb-4">
                    Director & Head of Global Affiliates
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Fabio Lombardi was born and raised in Italy and obtained a Masters in Economy of Tourism from the University Bocconi in Milan. After living in England and Switzerland, Fabio moved to Dubai in 2003. The fast-developing property market quickly peaked Fabio's interest and he completely transferred his profession focus to Real Estate.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-white/80 rounded-lg p-4 hover:bg-white transition-colors duration-300">
                      <p className="text-gray-700">
                        Fabio has close to three decades of experience in customer service and sales, which includes working for Betterhomes since 2009. Here, he has been one of our top performing agents since 2010 and continues to demonstrate the same dedication year after year. Specialising in Dubai Marina and Palm Jumeirah districts, Fabio strives to provide outstanding results for his clients.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-bh-navy/5 to-bh-coral/5 rounded-lg p-4">
                      <p className="text-gray-700 italic">
                        "I have earned the trust and confidence of clients through my commitment to providing outstanding service. They rely on my professionalism and know I am always available for their real estate needs."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="mt-auto pt-8 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-[fade-in_1.6s_ease-out]">
                  <div className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300 transform hover:scale-105 h-full flex flex-col justify-between">
                    <div className="text-2xl font-bold text-bh-coral mb-2">~30</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300 transform hover:scale-105 h-full flex flex-col justify-between">
                    <div className="text-2xl font-bold text-bh-navy mb-2">Specialist</div>
                    <div className="text-sm text-gray-600">Dubai Marina & Palm Jumeirah</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300 transform hover:scale-105 h-full flex flex-col justify-between">
                    <div className="text-2xl font-bold text-bh-coral mb-2">Trusted</div>
                    <div className="text-sm text-gray-600">Passionate & Transparent</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ConsultantSection;
