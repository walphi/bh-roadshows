
import { Card, CardContent } from '@/components/ui/card';
import InteractiveCounter from './InteractiveCounter';
import { Award, Handshake, ConciergeBell, Globe } from 'lucide-react';

interface WhyBetterhomesSectionProps {
  id?: string;
}

const WhyBetterhomesSection: React.FC<WhyBetterhomesSectionProps> = ({ id }) => {
  const differentiators = [
    {
      title: "Decades of Expertise",
      description: "Trusted advisory for discerning clientele since 1986.",
      icon: <Award className="w-12 h-12 mx-auto" />
    },
    {
      title: "Premier Developer Alliances",
      description: "Access to off-market opportunities & bespoke investment structures.",
      icon: <Handshake className="w-12 h-12 mx-auto" />
    },
    {
      title: "White-Glove Concierge",
      description: "From portfolio strategy to seamless asset management.",
      icon: <ConciergeBell className="w-12 h-12 mx-auto" />
    },
    {
      title: "Global Investment Acumen",
      description: "Discreet advisory and worldwide insights for sophisticated investors.",
      icon: <Globe className="w-12 h-12 mx-auto" />
    }
  ];

  const keyStats = [
    { label: "Years of Experience", value: "35+" },
    { label: "Property Experts", value: "150+" },
    { label: "Properties Sold", value: "10000+" },
    { label: "Developer Partners", value: "25+" }
  ];

  return (
    <section id={id} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-bh-navy mb-4 hover:text-bh-coral transition-colors duration-300 cursor-default">
            Why Choose Betterhomes?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto hover:text-bh-navy transition-colors duration-300">
            Betterhomes is the UAE's premier real estate consultancy, specializing in curating exceptional property portfolios for discerning investors.
            Since 1986, we have provided unparalleled expertise in Dubai's luxury market and beyond.
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
                <div className="text-4xl mb-4 transition-transform duration-300 hover:scale-125 hover:rotate-12 text-bh-coral">
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
{/* YouTube Video */}
        <div className="my-12 animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-bold text-bh-navy mb-6 text-center hover:text-bh-coral transition-colors duration-300 cursor-default">
            Meet Our Experts
          </h3>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
            <iframe 
              src="https://www.youtube.com/embed/0AhDkwlicHI?si=NFqKr29GgqllKBO0" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              className="w-full h-full absolute top-0 left-0"
            ></iframe>
          </div>
        </div>
<img src="https://d33om22pidobo4.cloudfront.net/pages/blocks/images/frame-36930png-2523baff-9995-4c0f-bc87-a0100aa8e238png-fa3f4c87-95ac-462e-b3e0-d87e4836be1e99ae6356-3209-46f0-a0cd-5c45d7501db4.png" alt="Sobha Realty Logo" className="h-12 mx-auto mb-6" />

        {/* Additional Info */}
        <div className="bg-gray-50 rounded-lg p-8 transform hover:scale-[1.01] transition-all duration-300 hover:shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="animate-[slide-in-right_0.8s_ease-out]">
              <h3 className="text-xl font-semibold text-bh-navy mb-4 hover:text-bh-coral transition-colors duration-300 cursor-default">
                What We Offer
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="hover:text-bh-navy transition-colors duration-300 hover:translate-x-2 transform cursor-default">
                  • Bespoke property acquisition and strategic portfolio management.
                </li>
                <li className="hover:text-bh-navy transition-colors duration-300 hover:translate-x-2 transform cursor-default">
                  • Dedicated private client advisors with profound market intelligence.
                </li>
                <li className="hover:text-bh-navy transition-colors duration-300 hover:translate-x-2 transform cursor-default">
                  • Privileged access to exclusive developments and preferential investment terms.
                </li>
                <li className="hover:text-bh-navy transition-colors duration-300 hover:translate-x-2 transform cursor-default">
                  • Internationally acclaimed consultancy, recognized for excellence in luxury real estate.
                </li>
              </ul>
            </div>
            <div className="animate-[slide-in-right_1s_ease-out]">
              <h3 className="text-xl font-semibold text-bh-navy mb-4 hover:text-bh-coral transition-colors duration-300 cursor-default">
                Our Developer Partner
              </h3>
              <p className="text-gray-600 mb-4 hover:text-bh-navy transition-colors duration-300">
                Sobha Realty stands as a paragon of luxury real estate development, renowned for its unwavering commitment to
                crafting world-class properties of exceptional quality and timely delivery. With an esteemed legacy of over four decades,
                Sobha is a globally trusted name in creating iconic and sophisticated living experiences.
              </p>
              <a
                href="https://www.sobharealty.com"
                target="_blank"
                rel="noopener noreferrer"
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
