
import AnimatedBenefit from './AnimatedBenefit';
import { User, Gift, Scale, BarChart } from 'lucide-react';

const ConsultationBenefits = () => {
  const benefits = [
    {
      title: "Personalized Advice",
      description: "Tailored investment strategies based on your goals",
      icon: <User className="w-8 h-8" />
    },
    {
      title: "Exclusive Offers",
      description: "Special payment plans and promotions only available during the roadshow",
      icon: <Gift className="w-8 h-8" />
    },
    {
      title: "Legal Guidance",
      description: "Expert advice on Dubai's property laws and purchase process",
      icon: <Scale className="w-8 h-8" />
    },
    {
      title: "Financial Planning",
      description: "ROI calculations and financing options",
      icon: <BarChart className="w-8 h-8" />
    }
  ];

  return (
    <div className="animate-[slide-in-right_0.8s_ease-out]">
      <h3 className="text-2xl font-semibold mb-6 hover:text-bh-coral transition-colors duration-300 cursor-default">
        Why Book a Consultation?
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
          Additional Information
        </p>
        <p className="opacity-90 hover:opacity-100 transition-opacity duration-300">
          Each consultation lasts 30 minutes. Our experts speak English, French, Italian and Arabic.
        </p>
      </div>
    </div>
  );
};

export default ConsultationBenefits;
