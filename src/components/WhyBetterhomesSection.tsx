
import { Card, CardContent } from '@/components/ui/card';
import InteractiveCounter from './InteractiveCounter';

const WhyBetterhomesSection = () => {
  const differentiators = [
    {
      title: "35+ Years of Experience",
      description: "Trusted real estate advisory since 1986",
      icon: "🏆"
    },
    {
      title: "Exclusive Developer Partnerships",
      description: "Access to the best properties and payment plans",
      icon: "🤝"
    },
    {
      title: "End-to-End Services",
      description: "Property selection, financing, legal, and management",
      icon: "🔄"
    },
    {
      title: "International Expertise",
      description: "Multilingual team with global experience",
      icon: "🌍"
    }
  ];

  const keyStats = [
    { label: "Years of Experience", value: "35+" },
    { label: "Property Experts", value: "150+" },
    { label: "Properties Sold", value: "10000+" },
    { label: "Developer Partners", value: "25+" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-bh-navy mb-4 hover:text-bh-coral transition-colors duration-300 cursor-default">
            Why Choose Betterhomes?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto hover:text-bh-navy transition-colors duration-300">
            Betterhomes is one of the UAE's most recognized and respected real estate agencies. 
            Since 1986, we've been helping clients find their perfect property in Dubai and beyond.
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {keyStats.map((stat, index) => (
            <InteractiveCounter
              key={index}
              targetValue={stat.value}
              label={stat.label}
              duration={1800 + index * 150}
            />
          ))}
        </div>

        {/* Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {differentiators.map((item, index) => (
            <Card 
              key={index} 
              className={`text-center hover:shadow-lg transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer animate-[fade-in_0.6s_ease-out_${index * 200}ms_both]`}
            >
              <CardContent className="p-6">
                <div className="text-4xl mb-4 transition-transform duration-300 hover:scale-125 hover:rotate-12">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-bh-navy mb-3 hover:text-bh-coral transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 hover:text-bh-navy transition-colors duration-300">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-gray-50 rounded-lg p-8 transform hover:scale-[1.01] transition-all duration-300 hover:shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="animate-[slide-in-right_0.8s_ease-out]">
              <h3 className="text-xl font-semibold text-bh-navy mb-4 hover:text-bh-coral transition-colors duration-300 cursor-default">
                What We Offer
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="hover:text-bh-navy transition-colors duration-300 hover:translate-x-2 transform cursor-default">
                  • Comprehensive property services from search to handover
                </li>
                <li className="hover:text-bh-navy transition-colors duration-300 hover:translate-x-2 transform cursor-default">
                  • Multilingual advisors with deep market knowledge
                </li>
                <li className="hover:text-bh-navy transition-colors duration-300 hover:translate-x-2 transform cursor-default">
                  • Exclusive developer partnerships and preferential terms
                </li>
                <li className="hover:text-bh-navy transition-colors duration-300 hover:translate-x-2 transform cursor-default">
                  • Award-winning agency with multiple industry recognitions
                </li>
              </ul>
            </div>
            <div className="animate-[slide-in-right_1s_ease-out]">
              <h3 className="text-xl font-semibold text-bh-navy mb-4 hover:text-bh-coral transition-colors duration-300 cursor-default">
                Our Developer Partner
              </h3>
              <p className="text-gray-600 mb-4 hover:text-bh-navy transition-colors duration-300">
                Sobha Realty is a leading premium real estate developer committed to the timely delivery 
                of world-class standards and quality properties. With a legacy spanning over four decades, 
                Sobha has established itself as one of the most trusted and respected real estate brands in the UAE and beyond.
              </p>
              <a 
                href="#" 
                className="text-bh-coral hover:underline font-medium hover:text-bh-coral/80 transition-all duration-300 transform hover:translate-x-2 inline-block"
              >
                Visit Sobha Realty →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBetterhomesSection;
