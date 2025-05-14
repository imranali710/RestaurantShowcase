import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface MenuItem {
  title: string;
  description: string;
  price: string;
  tags: Array<{ icon: string; text: string }>;
}

interface MenuCategory {
  name: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    name: 'Starters',
    items: [
      {
        title: 'Seared Scallops',
        description: 'Fresh Atlantic scallops with citrus zest, microgreens, and truffle oil',
        price: '₹24',
        tags: [
          { icon: 'fas fa-leaf', text: 'Gluten-Free' },
          { icon: 'fas fa-fire-alt', text: 'Chef\'s Choice' }
        ]
      },
      {
        title: 'Wild Mushroom Risotto',
        description: 'Arborio rice with seasonal wild mushrooms, aged parmesan, and white truffle',
        price: '₹18',
        tags: [
          { icon: 'fas fa-seedling', text: 'Vegetarian' }
        ]
      },
      {
        title: 'Tuna Tartare',
        description: 'Fresh yellowfin tuna with avocado, ginger, sesame, and wonton crisps',
        price: '₹22',
        tags: [
          { icon: 'fas fa-fish', text: 'Seafood' }
        ]
      },
      {
        title: 'Burrata & Heirloom Tomatoes',
        description: 'Creamy burrata cheese with garden tomatoes, basil oil, and aged balsamic',
        price: '₹19',
        tags: [
          { icon: 'fas fa-seedling', text: 'Vegetarian' },
          { icon: 'fas fa-leaf', text: 'Gluten-Free' }
        ]
      }
    ]
  },
  {
    name: 'Main Courses',
    items: [
      {
        title: 'Filet Mignon',
        description: 'Grass-fed beef with truffle mashed potatoes, asparagus, and red wine jus',
        price: '₹42',
        tags: [
          { icon: 'fas fa-leaf', text: 'Gluten-Free' }
        ]
      },
      {
        title: 'Pan-Seared Salmon',
        description: 'Scottish salmon with saffron risotto, seasonal vegetables, and lemon beurre blanc',
        price: '₹34',
        tags: [
          { icon: 'fas fa-fish', text: 'Seafood' }
        ]
      },
      {
        title: 'Herb-Crusted Rack of Lamb',
        description: 'Local lamb with roasted root vegetables and rosemary-infused demi-glace',
        price: '₹38',
        tags: [
          { icon: 'fas fa-fire-alt', text: 'Chef\'s Choice' }
        ]
      },
      {
        title: 'Wild Mushroom Pappardelle',
        description: 'House-made pasta with forest mushrooms, thyme, and truffle cream sauce',
        price: '₹28',
        tags: [
          { icon: 'fas fa-seedling', text: 'Vegetarian' }
        ]
      }
    ]
  },
  {
    name: 'Desserts',
    items: [
      {
        title: 'Chocolate Fondant',
        description: 'Warm chocolate cake with liquid center, served with vanilla bean ice cream',
        price: '₹14',
        tags: [
          { icon: 'fas fa-seedling', text: 'Vegetarian' }
        ]
      },
      {
        title: 'Crème Brûlée',
        description: 'Classic vanilla custard with caramelized sugar crust and seasonal berries',
        price: '₹12',
        tags: [
          { icon: 'fas fa-leaf', text: 'Gluten-Free' },
          { icon: 'fas fa-seedling', text: 'Vegetarian' }
        ]
      },
      {
        title: 'Lemon Tart',
        description: 'Tangy lemon curd in a buttery pastry shell with Italian meringue',
        price: '₹13',
        tags: [
          { icon: 'fas fa-seedling', text: 'Vegetarian' }
        ]
      },
      {
        title: 'Seasonal Fruit Pavlova',
        description: 'Crisp meringue with whipped cream and fresh seasonal fruits',
        price: '₹15',
        tags: [
          { icon: 'fas fa-leaf', text: 'Gluten-Free' },
          { icon: 'fas fa-seedling', text: 'Vegetarian' }
        ]
      }
    ]
  },
  {
    name: 'Wines',
    items: [
      {
        title: 'Château Margaux 2015',
        description: 'Bordeaux, France - Notes of blackcurrant, violets, and cedar',
        price: '₹220',
        tags: [
          { icon: 'fas fa-wine-glass-alt', text: 'Red' }
        ]
      },
      {
        title: 'Puligny-Montrachet 2018',
        description: 'Burgundy, France - Elegant with notes of citrus, apple, and toast',
        price: '₹180',
        tags: [
          { icon: 'fas fa-wine-glass', text: 'White' }
        ]
      },
      {
        title: 'Tignanello 2017',
        description: 'Tuscany, Italy - Bold with cherry, spice, and tobacco notes',
        price: '₹195',
        tags: [
          { icon: 'fas fa-wine-glass-alt', text: 'Red' }
        ]
      },
      {
        title: 'Dom Pérignon 2012',
        description: 'Champagne, France - Complex with brioche and citrus notes',
        price: '₹250',
        tags: [
          { icon: 'fas fa-glass-cheers', text: 'Sparkling' }
        ]
      }
    ]
  }
];

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(menuData[0].name);
  
  const activeItems = menuData.find(category => category.name === activeCategory)?.items || [];

  return (
    <section id="menu" className="py-20 bg-neutral">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl mb-4">Our Menu</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Discover our seasonal offerings, crafted with the finest ingredients and presented with artistic flair.
          </p>
        </motion.div>
        
        <div className="mb-16">
          <div className="flex overflow-x-auto pb-4 hide-scrollbar space-x-4 justify-center">
            {menuData.map((category) => (
              <button 
                key={category.name}
                className={`menu-tab px-6 py-2 font-montserrat transition-colors duration-300 ${
                  activeCategory === category.name 
                    ? 'text-accent border-b-2 border-accent' 
                    : 'text-gray-500 hover:text-accent border-b-2 border-transparent hover:border-accent'
                }`}
                onClick={() => setActiveCategory(category.name)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <motion.div 
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {activeItems.map((item, index) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="menu-item bg-white p-6 rounded-lg shadow-md transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-playfair text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {item.description}
                  </p>
                </div>
                <p className="font-montserrat text-accent">{item.price}</p>
              </div>
              <div className="flex items-center text-xs text-gray-500 space-x-3">
                {item.tags.map((tag, idx) => (
                  <span key={idx}>
                    <i className={`${tag.icon} mr-1`}></i> {tag.text}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <motion.a 
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 border border-primary text-primary font-montserrat text-sm tracking-wider hover:bg-primary hover:text-white transition-all duration-300"
          >
            VIEW FULL MENU
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
