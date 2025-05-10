import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This is a static form, no actual submission
    if (email) {
      toast({
        title: "Subscription Successful",
        description: "Thank you for subscribing to our newsletter!",
        variant: "default",
      });
      setEmail('');
    }
  };

  return (
    <section className="py-16 bg-neutral">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h3 className="font-playfair text-2xl mb-4">Stay Updated</h3>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for seasonal menu updates, special events, and exclusive offers.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-accent"
              required
            />
            <motion.button 
              type="submit" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300 font-montserrat text-sm tracking-wider"
            >
              SUBSCRIBE
            </motion.button>
          </form>
          
          <div className="mt-8 flex items-center justify-center space-x-6">
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.2 }}
              className="text-gray-600 hover:text-accent transition-colors duration-300"
            >
              <i className="fab fa-facebook-f text-xl"></i>
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.2 }}
              className="text-gray-600 hover:text-accent transition-colors duration-300"
            >
              <i className="fab fa-instagram text-xl"></i>
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.2 }}
              className="text-gray-600 hover:text-accent transition-colors duration-300"
            >
              <i className="fab fa-twitter text-xl"></i>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
