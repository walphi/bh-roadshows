
import { Card, CardContent } from '@/components/ui/card';
import InteractiveCounter from './InteractiveCounter';
import { TrendingUp, Landmark, Home, ShieldCheck } from 'lucide-react';

interface InvestmentBenefitsSectionProps {
  id?: string;
}

const InvestmentBenefitsSection: React.FC<InvestmentBenefitsSectionProps> = ({ id }) => {
  const benefits = [
    {
      title: "High ROI",
      description: "Average rental yields of 5-9%, significantly higher than global averages",
      icon: <TrendingUp className="w-12 h-12 mx-auto" />
    },
    {
      title: "Tax Benefits",
      description: "Zero income tax, capital gains tax, and property tax for investors",
      icon: <Landmark className="w-12 h-12 mx-auto" />
    },
    {
      title: "Residency Visa",
      description: "Property investment of AED 1M+ qualifies for residency visa",
      icon: <Home className="w-12 h-12 mx-auto" />
    },
    {
      title: "Safe Investment",
      description: "Strong regulatory framework protecting investor interests",
      icon: <ShieldCheck className="w-12 h-12 mx-auto" />
    }
  ];

  const marketStats = [
    { label: "Capital Appreciation (2023)", value: "12.4%" },
    { label: "Average Rental Yield", value: "7.2%" },
    { label: "Transaction Volume Growth", value: "18.6%" },
    { label: "Off-Plan Sales Growth", value: "15.3%" }
  ];

  return (
    <section id={id} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-bh-navy mb-4 hover:text-bh-coral transition-colors duration-300 cursor-default">
            Why Invest in Dubai Real Estate
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto hover:text-bh-navy transition-colors duration-300">
            Dubai offers exceptional investment opportunities with high returns, tax benefits, and a stable economy.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className={`text-center hover:shadow-lg transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer animate-[fade-in_0.6s_ease-out_${index * 200}ms_both]`}
            >
              <CardContent className="p-6">
                <div className="text-4xl mb-4 transition-transform duration-300 hover:scale-125 hover:rotate-12 text-bh-coral">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-bh-navy mb-3 hover:text-bh-coral transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 hover:text-bh-navy transition-colors duration-300">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Market Growth Section */}
        <div className="bg-bh-navy rounded-lg p-8 text-white transform hover:scale-[1.01] transition-all duration-300 hover:shadow-2xl">
          <div className="text-center mb-8 animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 hover:text-bh-coral transition-colors duration-300 cursor-default">
              Dubai Real Estate Market Growth
            </h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto hover:opacity-100 transition-opacity duration-300">
              Dubai's property market has shown remarkable resilience and growth, 
              with consistent year-on-year appreciation in prime areas.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {marketStats.map((stat, index) => (
              <InteractiveCounter
                key={index}
                targetValue={stat.value}
                label={stat.label}
                duration={2000 + index * 200}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentBenefitsSection;
