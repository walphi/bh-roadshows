
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import EventInfoSection from '@/components/EventInfoSection';
import FeaturedPropertiesSection from '@/components/FeaturedPropertiesSection';
import InvestmentBenefitsSection from '@/components/InvestmentBenefitsSection';
import WhyBetterhomesSection from '@/components/WhyBetterhomesSection';
import ConsultationBookingSection from '@/components/ConsultationBookingSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <EventInfoSection />
        <FeaturedPropertiesSection />
        <InvestmentBenefitsSection />
        <WhyBetterhomesSection />
        <ConsultationBookingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
