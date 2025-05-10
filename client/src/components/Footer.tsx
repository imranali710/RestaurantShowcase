import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-playfair text-xl mb-4">Saveur</h4>
            <p className="text-gray-400 text-sm mb-4">
              A culinary journey of exceptional flavors and memorable experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>123 Culinary Avenue</li>
              <li>New York, NY 10001</li>
              <li>(212) 555-1234</li>
              <li>info@saveur.com</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold mb-4">Hours</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Monday - Thursday: 5:30 PM - 10:00 PM</li>
              <li>Friday - Saturday: 5:00 PM - 11:00 PM</li>
              <li>Sunday: 5:00 PM - 9:00 PM</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#reservations" className="hover:text-accent transition-colors duration-300">Reservation</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300">Private Dining</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300">Gift Cards</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300">Careers</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Saveur Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
