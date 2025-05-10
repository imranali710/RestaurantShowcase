import React from 'react';
import { motion } from 'framer-motion';

const MapSection: React.FC = () => {
  return (
    <section id="contact" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-96 lg:h-auto bg-gray-200"
        >
          {/* In a production site, this would be an actual map integration */}
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center p-8">
              <i className="fas fa-map-marked-alt text-4xl text-accent mb-4"></i>
              <p className="font-montserrat">
                123 Culinary Avenue, New York, NY 10001
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Located in the heart of Manhattan's culinary district
              </p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-96 lg:h-auto"
        >
          <img 
            src="https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=600" 
            alt="Restaurant exterior at night" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;
