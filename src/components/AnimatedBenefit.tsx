
import { useState } from 'react';

interface AnimatedBenefitProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const AnimatedBenefit = ({ title, description, icon, delay = 0 }: AnimatedBenefitProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`flex items-start space-x-4 transform transition-all duration-500 hover:scale-105 animate-[fade-in_0.6s_ease-out_${delay}ms_both] cursor-default`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`text-2xl transition-all duration-300 transform ${isHovered ? 'scale-125 rotate-12' : 'scale-100'} text-bh-coral`}>
        {icon}
      </div>
      <div>
        <h4 className={`text-xl font-semibold mb-2 text-bh-coral transition-all duration-300 ${isHovered ? 'text-bh-coral/80' : ''}`}>
          {title}
        </h4>
        <p className={`opacity-90 transition-all duration-300 ${isHovered ? 'opacity-100 text-white' : ''}`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default AnimatedBenefit;
