
import { Clock, Phone, MapPin, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Restaurant Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold">Bella Vista</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Experience fine dining at its best. Our chefs craft each dish with passion and the finest ingredients.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-orange-400" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-orange-400" />
                <span className="text-gray-300">123 Fine Dining St, City</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-orange-400" />
                <span className="text-gray-300">Mon-Sun: 5:00 PM - 11:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-orange-400 transition-colors">About Us</a>
              <a href="#" className="block text-gray-300 hover:text-orange-400 transition-colors">Reservations</a>
              <a href="#" className="block text-gray-300 hover:text-orange-400 transition-colors">Private Events</a>
              <a href="#" className="block text-gray-300 hover:text-orange-400 transition-colors">Gift Cards</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Bella Vista Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
