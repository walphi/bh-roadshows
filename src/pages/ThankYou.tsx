import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

const ThankYou = () => {
  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'Lead');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center bg-gray-50 text-center px-4">
        <div className="bg-white p-10 rounded-lg shadow-lg max-w-lg w-full">
          <h1 className="text-4xl font-bold text-bh-navy mb-4">Thank You!</h1>
          <p className="text-lg text-gray-600 mb-8">Your registration has been successfully submitted. We look forward to seeing you at the event.</p>
          <Link 
            to="/" 
            className="bg-bh-coral hover:bg-bh-coral/90 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
          >
            Back to Homepage
          </Link>
<a 
            href="/lovable-uploads/Amsterdam - Investment Guide.pdf" 
            download
            className="mt-4 inline-block bg-bh-navy hover:bg-bh-navy/90 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
          >
            Download Investment Guide
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYou;