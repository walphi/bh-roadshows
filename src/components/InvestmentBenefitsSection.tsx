
import { Card, CardContent } from '@/components/ui/card';

const InvestmentBenefitsSection = () => {
  const benefits = [
    {
      title: "High ROI",
      description: "Average rental yields of 5-9%, significantly higher than global averages",
      icon: "📈"
    },
    {
      title: "Tax Benefits", 
      description: "Zero income tax, capital gains tax, and property tax for investors",
      icon: "💰"
    },
    {
      title: "Residency Visa",
      description: "Property investment of AED 1M+ qualifies for residency visa",
      icon: "🏠"
    },
    {
      title: "Safe Investment",
      description: "Strong regulatory framework protecting investor interests",
      icon: "🛡️"
    }
  ];

  const marketStats = [
    { label: "Capital Appreciation (2023)", value: "12.4%" },
    { label: "Average Rental Yield", value: "7.2%" },
    { label: "Transaction Volume Growth", value: "18.6%" },
    { label: "Off-Plan Sales Growth", value: "15.3%" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bh-navy mb-4">
            Why Invest in Dubai Real Estate
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dubai offers exceptional investment opportunities with high returns, tax benefits, and a stable economy.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-bh-navy mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Market Growth Section */}
        <div className="bg-bh-navy rounded-lg p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Dubai Real Estate Market Growth
            </h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Dubai's property market has shown remarkable resilience and growth, 
              with consistent year-on-year appreciation in prime areas.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {marketStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-bh-coral mb-2">
                  {stat.value}
                </div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentBenefitsSection;
