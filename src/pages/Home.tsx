import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SuccessStories from '@/components/SuccessStories';
import ContactSection from '@/components/ContactSection';
import MembersSection from '@/components/MembersSection';
import RegistrationSection from '@/components/RegistrationSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Home: React.FC = () => {
  // 滚动到指定区域
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection />
      <MembersSection />
      <SuccessStories />
      <RegistrationSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;