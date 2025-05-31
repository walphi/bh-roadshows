
import { useState, useEffect } from 'react';

interface InteractiveCounterProps {
  targetValue: string;
  label: string;
  duration?: number;
}

const InteractiveCounter = ({ targetValue, label, duration = 2000 }: InteractiveCounterProps) => {
  const [displayValue, setDisplayValue] = useState('0');
  const [isVisible, setIsVisible] = useState(false);

  // Extract numeric value from string like "35+" or "12.4%"
  const getNumericValue = (value: string) => {
    const match = value.match(/[\d.]+/);
    return match ? parseFloat(match[0]) : 0;
  };

  const formatValue = (current: number, target: string) => {
    if (target.includes('%')) {
      return `${current.toFixed(1)}%`;
    }
    if (target.includes('+')) {
      return `${Math.floor(current)}+`;
    }
    return Math.floor(current).toString();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
          
          const numericTarget = getNumericValue(targetValue);
          const steps = 60;
          const increment = numericTarget / steps;
          let current = 0;
          
          const timer = setInterval(() => {
            current += increment;
            if (current >= numericTarget) {
              current = numericTarget;
              clearInterval(timer);
            }
            setDisplayValue(formatValue(current, targetValue));
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`counter-${label.replace(/\s+/g, '-')}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [targetValue, label, duration, isVisible]);

  return (
    <div 
      id={`counter-${label.replace(/\s+/g, '-')}`}
      className="text-center transform hover:scale-105 transition-all duration-300 cursor-default"
    >
      <div className="text-4xl md:text-5xl font-bold text-bh-coral mb-2 transition-all duration-300 hover:text-bh-coral/80">
        {displayValue}
      </div>
      <div className="text-gray-600 font-medium hover:text-bh-navy transition-colors duration-300">
        {label}
      </div>
    </div>
  );
};

export default InteractiveCounter;
