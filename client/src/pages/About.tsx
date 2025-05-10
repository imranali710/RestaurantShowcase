import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import NewsletterSection from '@/components/NewsletterSection';

const About: React.FC = () => {
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
            src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
            alt="About header" 
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
          Our Story
        </motion.h1>
      </div>
      
      <AboutSection />
      
      <section className="py-16 bg-neutral">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-playfair text-3xl mb-6">Our Philosophy</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                At Saveur, we believe that dining is an art form that engages all the senses. Our philosophy is rooted in respect 
                for ingredients, culinary traditions, and the shared experience of enjoying exceptional food.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We are committed to sustainability, working closely with local farmers and producers to ensure that we source 
                the finest seasonal ingredients while minimizing our environmental impact.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Every dish that leaves our kitchen represents our dedication to culinary excellence and our passion for creating 
                memorable dining experiences for our guests.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1556911220-bda9f6fc6dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=600" 
                alt="Chef preparing a dish" 
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl mb-4">Meet Our Team</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300" 
                alt="Chef Michel Laurent" 
                className="rounded-full w-48 h-48 object-cover mx-auto mb-6"
              />
              <h3 className="font-playfair text-xl mb-2">Michel Laurent</h3>
              <p className="text-accent mb-4">Executive Chef & Founder</p>
              <p className="text-gray-600 px-4">
                With over 25 years of experience in prestigious kitchens across Europe, Chef Michel brings his passion for 
                traditional French cuisine with a modern twist to Saveur.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <img 
                src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300" 
                alt="Sofia Rodriguez" 
                className="rounded-full w-48 h-48 object-cover mx-auto mb-6"
              />
              <h3 className="font-playfair text-xl mb-2">Sofia Rodriguez</h3>
              <p className="text-accent mb-4">Head Pastry Chef</p>
              <p className="text-gray-600 px-4">
                A culinary artist known for her innovative dessert creations, Sofia combines classical techniques with unexpected 
                flavors to create memorable sweet finales.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <img 
                src="https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300" 
                alt="James Chen" 
                className="rounded-full w-48 h-48 object-cover mx-auto mb-6"
              />
              <h3 className="font-playfair text-xl mb-2">James Chen</h3>
              <p className="text-accent mb-4">Sommelier</p>
              <p className="text-gray-600 px-4">
                With an exceptional palate and extensive knowledge of wines from around the world, James curates our wine list 
                and creates perfect pairings for our seasonal menus.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <NewsletterSection />
      <Footer />
    </motion.div>
  );
};

export default About;