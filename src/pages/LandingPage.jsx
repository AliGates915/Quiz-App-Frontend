import React from 'react';
import AboutSection from '../components/AboutSection.jsx';
import ContactSection from '../components/contactSection/ContactSection';
import Footer from '../components/Footer.jsx';
import HeroSection from '../components/HeroSection.jsx';
import Header from '../components/Header.jsx';
import NewsletterSection from '../components/NewsletterSection.jsx';
import ServicesSection from '../components/services/ServicesSection';
import TeamSection from '../components/team/TeamSection';
import WhatsAppButton from '../components/WhatsAppButton'; // ✅ Import here

function LandingPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TeamSection />
      <NewsletterSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton /> {/* ✅ WhatsApp button added here */}
    </>
  );
}

export default LandingPage;
