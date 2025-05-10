import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
          alt="Restaurant interior with ambient lighting" 
          className="object-cover w-full h-full" 
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-playfair text-4xl md:text-6xl lg:text-7xl text-white mb-4 text-shadow"
        >
          Saveur
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-montserrat text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto opacity-90 text-shadow"
        >
          Where culinary art meets exceptional ingredients
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a 
            href="#menu" 
            className="px-8 py-3 bg-accent text-white font-montserrat text-sm tracking-wider hover:bg-opacity-90 transition-all duration-300"
          >
            EXPLORE OUR MENU
          </a>
          <a 
            href="#reservations" 
            className="px-8 py-3 border border-white text-white font-montserrat text-sm tracking-wider hover:bg-white hover:text-primary transition-all duration-300"
          >
            RESERVE A TABLE
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
