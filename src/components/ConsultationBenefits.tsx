
import AnimatedBenefit from './AnimatedBenefit';
import { User, Gift, Scale, BarChart, Download } from 'lucide-react';

const ConsultationBenefits = () => {
  const benefits = [
    {
      title: "Dubai Property Outlook 2025",
      description: "Get exclusive access to our comprehensive market analysis and investment forecast.",
      icon: <BarChart className="w-8 h-8" />
    },
    {
      title: "Exclusive Event Access",
      description: "Secure your spot at our upcoming luxury property event in Amsterdam.",
      icon: <Gift className="w-8 h-8" />
    },
    {
      title: "Expert Consultation",
      description: "Opportunity for a one-on-one consultation with our property specialists at the event.",
      icon: <User className="w-8 h-8" />
    },
    {
      title: "Curated Property Portfolio",
      description: "Receive a selection of premium properties that match your investment criteria.",
      icon: <Download className="w-8 h-8" />
    }
  ];

  return (
    <div className="animate-[slide-in-right_0.8s_ease-out]">
      <h3 className="text-2xl font-semibold mb-6 hover:text-bh-coral transition-colors duration-300 cursor-default">
        What You'll Get By Registering
      </h3>
      <div className="space-y-6 mb-8">
        {benefits.map((benefit, index) => (
          <AnimatedBenefit
            key={index}
            title={benefit.title}
            description={benefit.description}
            icon={benefit.icon}
            delay={index * 200}
          />
        ))}
      </div>
      
      <div className="bg-white/10 rounded-lg p-6 transform hover:scale-[1.02] transition-all duration-300 hover:bg-white/15">
        <p className="text-lg font-medium mb-2 hover:text-bh-coral transition-colors duration-300">
          Event Details
        </p>
        <p className="opacity-90 hover:opacity-100 transition-opacity duration-300">
          Further details about the event will be sent to your registered email address. Our experts speak English, French, Italian, and Arabic.
        </p>
      </div>
    </div>
  );
};

export default ConsultationBenefits;
