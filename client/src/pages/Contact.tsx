import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MapSection from '@/components/MapSection';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();
  
  const onSubmit = (data: ContactFormData) => {
    // This is a static form demo, no actual submission
    console.log('Form data:', data);
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. In a production environment, your message would be sent to our team.",
      variant: "default",
    });
    reset();
  };

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
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
            alt="Contact header" 
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
          Contact Us
        </motion.h1>
      </div>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-playfair text-3xl mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                We'd love to hear from you! Whether you're looking to make a reservation, inquire about private events, 
                or provide feedback about your dining experience, please don't hesitate to reach out.
              </p>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-montserrat text-gray-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-accent"
                    {...register("name", { required: true })}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">This field is required</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-montserrat text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-accent"
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">Please enter a valid email</p>}
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-montserrat text-gray-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-accent"
                    {...register("subject", { required: true })}
                  />
                  {errors.subject && <p className="text-red-500 text-xs mt-1">This field is required</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-montserrat text-gray-700 mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-accent"
                    {...register("message", { required: true })}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1">This field is required</p>}
                </div>
                
                <motion.button 
                  type="submit" 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-accent text-white font-montserrat py-3 px-6 rounded-md hover:bg-opacity-90 transition-all duration-300"
                >
                  SEND MESSAGE
                </motion.button>
                
                <p className="text-xs text-gray-500 mt-4">
                  This is a static form for demonstration purposes.
                  In a production environment, this would send a message to the restaurant.
                </p>
              </form>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-neutral rounded-lg p-8"
            >
              <h3 className="font-playfair text-2xl mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-accent p-3 rounded-full text-white mr-4">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold mb-1">Address</h4>
                    <p className="text-gray-600">123 Culinary Avenue</p>
                    <p className="text-gray-600">New York, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent p-3 rounded-full text-white mr-4">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold mb-1">Phone</h4>
                    <p className="text-gray-600">Reservations: (212) 555-1234</p>
                    <p className="text-gray-600">Events: (212) 555-5678</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent p-3 rounded-full text-white mr-4">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold mb-1">Email</h4>
                    <p className="text-gray-600">info@saveur.com</p>
                    <p className="text-gray-600">reservations@saveur.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent p-3 rounded-full text-white mr-4">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold mb-1">Hours</h4>
                    <p className="text-gray-600">Monday - Thursday: 5:30 PM - 10:00 PM</p>
                    <p className="text-gray-600">Friday - Saturday: 5:00 PM - 11:00 PM</p>
                    <p className="text-gray-600">Sunday: 5:00 PM - 9:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-montserrat font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-200 p-3 rounded-full text-gray-700 hover:bg-accent hover:text-white transition-colors duration-300">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="bg-gray-200 p-3 rounded-full text-gray-700 hover:bg-accent hover:text-white transition-colors duration-300">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="bg-gray-200 p-3 rounded-full text-gray-700 hover:bg-accent hover:text-white transition-colors duration-300">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="bg-gray-200 p-3 rounded-full text-gray-700 hover:bg-accent hover:text-white transition-colors duration-300">
                    <i className="fab fa-yelp"></i>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <MapSection />
      <Footer />
    </motion.div>
  );
};

export default Contact;