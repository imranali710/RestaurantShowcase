import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  quote: string;
  name: string;
  source: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "An unforgettable dining experience. Every dish was a work of art, and the service was impeccable. We'll definitely be returning for our next special occasion.",
    name: "Emily R.",
    source: "New York Times"
  },
  {
    quote: "Chef Laurent's creations showcase a perfect balance of tradition and innovation. The wine pairings were expertly chosen to complement each course.",
    name: "James M.",
    source: "Food & Wine"
  },
  {
    quote: "The ambiance, the service, and most importantly, the food, were all exceptional. Saveur has earned its place among the city's finest dining establishments.",
    name: "Sarah L.",
    source: "Gourmet Magazine"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl mb-4">Guest Experiences</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#4B5563] p-8 rounded-lg"
            >
              <div className="text-accent mb-4">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="italic mb-6 text-gray-300">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <p className="font-montserrat">
                  <span className="font-semibold">{testimonial.name}</span>
                  <span className="text-sm text-gray-400 ml-2">{testimonial.source}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
