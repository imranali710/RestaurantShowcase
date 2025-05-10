import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import MenuSection from '@/components/MenuSection';
import Footer from '@/components/Footer';
import NewsletterSection from '@/components/NewsletterSection';

const Menu: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
      className="relative overflow-x-hidden"
    >
      <Navbar />
      <div className="h-64 bg-primary relative flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
            alt="Menu header" 
            className="object-cover w-full h-full" 
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-playfair text-4xl md:text-5xl text-white mb-4 relative z-10 text-shadow text-center"
        >
          Our Menu
        </motion.h1>
      </div>
      
      <div className="py-12 bg-neutral">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <p className="max-w-2xl mx-auto text-gray-600">
              At Saveur, we pride ourselves on creating exquisite dishes that combine traditional techniques with innovative flavors. 
              Our menu changes seasonally to showcase the freshest ingredients.
            </p>
          </motion.div>
        </div>
      </div>
      
      <MenuSection />
      <NewsletterSection />
      <Footer />
    </motion.div>
  );
};

export default Menu;