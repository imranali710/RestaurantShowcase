import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl mb-4">Our Story</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h3 className="font-playfair text-3xl mb-6">A Culinary Journey</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded in 2010 by acclaimed Chef Michel Laurent, Saveur brings together traditional 
              culinary techniques with modern innovation. Our philosophy centers around sourcing 
              the finest local ingredients and transforming them into unforgettable dining experiences.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Each dish tells a story of passion, creativity, and respect for culinary traditions. 
              We believe that dining is not just about food, but about creating moments that linger 
              in memory long after the last bite.
            </p>
            <div className="flex items-center">
              <div className="mr-6">
                <img 
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300" 
                  alt="Chef Michel Laurent" 
                  className="rounded-full w-20 h-20 object-cover"
                />
              </div>
              <div>
                <p className="font-montserrat font-semibold">Michel Laurent</p>
                <p className="text-accent text-sm">Executive Chef & Founder</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 grid grid-cols-2 gap-4"
          >
            <img 
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=700" 
              alt="Restaurant interior" 
              className="rounded-lg shadow-lg object-cover h-full w-full"
            />
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=700" 
              alt="Restaurant exterior at dusk" 
              className="rounded-lg shadow-lg object-cover h-full w-full mt-8"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
