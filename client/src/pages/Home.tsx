import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeaturedDish from '@/components/FeaturedDish';
import MenuSection from '@/components/MenuSection';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ReservationsSection from '@/components/ReservationsSection';
import MapSection from '@/components/MapSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
      className="relative overflow-x-hidden"
    >
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturedDish />
      <MenuSection />
      <GallerySection />
      <TestimonialsSection />
      <ReservationsSection />
      <MapSection />
      <NewsletterSection />
      <Footer />
    </motion.div>
  );
};

export default Home;
