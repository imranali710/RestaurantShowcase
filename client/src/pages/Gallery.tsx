import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Dialog, DialogTrigger, DialogContent, DialogClose } from "@/components/ui/dialog";
import { X } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Gourmet appetizer",
    category: "Food"
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Restaurant interior dining area",
    category: "Interior"
  },
  {
    src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Chef preparing food",
    category: "Chefs"
  },
  {
    src: "https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Gourmet dessert",
    category: "Food"
  },
  {
    src: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Restaurant exterior",
    category: "Interior"
  },
  {
    src: "https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Gourmet main course",
    category: "Food"
  },
  {
    src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Private dining room",
    category: "Interior"
  },
  {
    src: "https://images.unsplash.com/photo-1507434965515-31112a593422?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Waiter serving dish",
    category: "Service"
  },
  {
    src: "https://images.unsplash.com/photo-1515668236457-83c3b8764839?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Cocktail preparation",
    category: "Drinks"
  },
  {
    src: "https://images.unsplash.com/photo-1623156346149-d5cec8b29818?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Wine selection",
    category: "Drinks"
  },
  {
    src: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Steak preparation",
    category: "Chefs"
  },
  {
    src: "https://images.unsplash.com/photo-1608855238293-a8853e7f7c98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Restaurant table setting",
    category: "Service"
  }
];

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Food', 'Interior', 'Chefs', 'Drinks', 'Service'];
  
  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === filter);

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
            src="https://images.unsplash.com/photo-1515668236457-83c3b8764839?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
            alt="Gallery header" 
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
          Our Gallery
        </motion.h1>
      </div>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <p className="max-w-2xl mx-auto text-gray-600 mb-10">
              Explore our visual journey through culinary excellence, ambiance, and the people who make Saveur special.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button 
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-md transition-all duration-300 ${
                    filter === category 
                      ? 'bg-accent text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <Dialog key={image.src}>
                  <DialogTrigger asChild>
                    <motion.div 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      layout
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="gallery-item overflow-hidden rounded-lg shadow-lg h-64 cursor-pointer"
                    >
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover gallery-img"
                      />
                    </motion.div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-2xl bg-transparent border-none p-0">
                    <div className="relative">
                      <DialogClose className="absolute top-3 right-3 z-10 bg-white bg-opacity-70 p-2 rounded-full">
                        <X className="h-6 w-6" />
                      </DialogClose>
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-auto rounded-lg object-contain max-h-[80vh]"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 rounded-b-lg">
                        <p>{image.alt}</p>
                        <p className="text-sm text-gray-300">{image.category}</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </motion.div>
  );
};

export default Gallery;