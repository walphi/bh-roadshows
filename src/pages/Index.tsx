
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import EventInfoSection from '@/components/EventInfoSection';
import MarketInsightsDashboard from '@/components/MarketInsightsDashboard';
import ConsultantSection from '@/components/ConsultantSection';
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
        <EventInfoSection id="event-info" />
        <MarketInsightsDashboard />
        <ConsultantSection />
        <FeaturedPropertiesSection id="properties" />
        <InvestmentBenefitsSection id="investment-benefits" />
        <WhyBetterhomesSection id="about-us" />
        <ConsultationBookingSection id="contact" />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
