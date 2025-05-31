
import { Card, CardContent } from '@/components/ui/card';

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
    { label: "Properties Sold", value: "10,000+" },
    { label: "Developer Partners", value: "25+" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bh-navy mb-4">
            Why Choose Betterhomes?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Betterhomes is one of the UAE's most recognized and respected real estate agencies. 
            Since 1986, we've been helping clients find their perfect property in Dubai and beyond.
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {keyStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-bh-coral mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {differentiators.map((item, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-bh-navy mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-gray-50 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-bh-navy mb-4">What We Offer</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Comprehensive property services from search to handover</li>
                <li>• Multilingual advisors with deep market knowledge</li>
                <li>• Exclusive developer partnerships and preferential terms</li>
                <li>• Award-winning agency with multiple industry recognitions</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-bh-navy mb-4">Our Developer Partner</h3>
              <p className="text-gray-600 mb-4">
                Sobha Realty is a leading premium real estate developer committed to the timely delivery 
                of world-class standards and quality properties. With a legacy spanning over four decades, 
                Sobha has established itself as one of the most trusted and respected real estate brands in the UAE and beyond.
              </p>
              <a href="#" className="text-bh-coral hover:underline font-medium">
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
