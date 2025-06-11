
import ConsultationBenefits from './ConsultationBenefits';
import ConsultationForm from './ConsultationForm';

interface ConsultationBookingSectionProps {
  id?: string;
}

const ConsultationBookingSection: React.FC<ConsultationBookingSectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-16 bg-bh-navy text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 hover:text-bh-coral transition-colors duration-300 cursor-default">
            Book Your Consultation
          </h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto hover:opacity-100 transition-opacity duration-300">
            Schedule a one-on-one meeting with our property experts during the roadshow 
            to discuss your investment goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ConsultationBenefits />
          <ConsultationForm />
        </div>
      </div>
    </section>
  );
};

export default ConsultationBookingSection;
