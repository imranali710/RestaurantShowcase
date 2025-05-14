import React from 'react';
import { motion } from 'framer-motion';

const FeaturedDish: React.FC = () => {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
          alt="Texture background" 
          className="object-cover w-full h-full"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-playfair text-4xl mb-4">Signature Dish</h2>
            <div className="w-24 h-1 bg-accent mb-8"></div>
            <h3 className="font-montserrat text-2xl text-accent mb-4">Herb-Crusted Rack of Lamb</h3>
            <p className="mb-6 text-gray-300 leading-relaxed">
              Our most celebrated creation features locally sourced lamb encrusted with herbs from our garden, 
              served with roasted seasonal vegetables and a rich red wine reduction. This dish exemplifies our 
              commitment to honoring traditional techniques while embracing modern presentation.
            </p>
            <div className="flex items-center space-x-4">
              <div className="text-accent">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="text-sm font-montserrat">Chef's Recommendation</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800" 
              alt="Herb-Crusted Rack of Lamb" 
              className="rounded-lg shadow-2xl"
            />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-accent text-white p-4 rounded-lg shadow-lg"
            >
              <p className="font-playfair text-lg">Fresh & Local</p>
              <p className="text-sm">Ingredients</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDish;
