import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';

interface ReservationFormData {
  name: string;
  email: string;
  phone: string;
  guests: string;
  date: string;
  time: string;
  specialRequests: string;
}

const ReservationsSection: React.FC = () => {
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ReservationFormData>();
  
  const onSubmit = (data: ReservationFormData) => {
    // This is a static form demo, no actual submission
    console.log('Form data:', data);
    toast({
      title: "Reservation Request Received",
      description: "Thank you for your reservation request. In a production environment, this would be processed by our system.",
      variant: "default",
    });
    reset();
  };

  return (
    <section id="reservations" className="py-20 bg-neutral relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-playfair text-4xl mb-4">Make a Reservation</h2>
            <div className="w-24 h-1 bg-accent mb-8"></div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Reserve your table to experience our seasonal menu. For parties larger than 8 people or special events, 
              please contact us directly by phone.
            </p>
            
            <div className="mb-8">
              <h3 className="font-montserrat font-semibold text-lg mb-4">Hours of Operation</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Monday - Thursday</span>
                  <span>5:30 PM - 10:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Friday - Saturday</span>
                  <span>5:00 PM - 11:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>5:00 PM - 9:00 PM</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-montserrat font-semibold text-lg mb-4">Contact Information</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <i className="fas fa-map-marker-alt text-accent w-8"></i>
                  <span>123 Culinary Avenue, New York, NY 10001</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-phone text-accent w-8"></i>
                  <span>(212) 555-1234</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-envelope text-accent w-8"></i>
                  <span>reservations@saveur.com</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-montserrat text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-accent"
                      {...register("name", { required: true })}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">This field is required</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-montserrat text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-accent"
                      {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">Please enter a valid email</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-montserrat text-gray-700 mb-2">Phone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-accent"
                      {...register("phone", { required: true })}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">This field is required</p>}
                  </div>
                  <div>
                    <label htmlFor="guests" className="block text-sm font-montserrat text-gray-700 mb-2">Number of Guests</label>
                    <select 
                      id="guests" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-accent"
                      {...register("guests", { required: true })}
                    >
                      <option value="1">1 person</option>
                      <option value="2">2 people</option>
                      <option value="3">3 people</option>
                      <option value="4">4 people</option>
                      <option value="5">5 people</option>
                      <option value="6">6 people</option>
                      <option value="7">7 people</option>
                      <option value="8">8 people</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-sm font-montserrat text-gray-700 mb-2">Date</label>
                    <input 
                      type="date" 
                      id="date" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-accent"
                      {...register("date", { required: true })}
                    />
                    {errors.date && <p className="text-red-500 text-xs mt-1">This field is required</p>}
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-montserrat text-gray-700 mb-2">Time</label>
                    <select 
                      id="time" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-accent"
                      {...register("time", { required: true })}
                    >
                      <option value="17:30">5:30 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="specialRequests" className="block text-sm font-montserrat text-gray-700 mb-2">Special Requests</label>
                  <textarea 
                    id="specialRequests" 
                    rows={3} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-accent"
                    {...register("specialRequests")}
                  ></textarea>
                </div>
                
                <motion.button 
                  type="submit" 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-accent text-white font-montserrat py-3 rounded-md hover:bg-opacity-90 transition-all duration-300"
                >
                  BOOK YOUR TABLE
                </motion.button>
                
                <p className="text-xs text-gray-500 text-center mt-4">
                  This is a static form for demonstration purposes.
                  In a production environment, this would connect to a reservation system.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReservationsSection;
