import { Link } from "react-router-dom";
import { Truck, Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="rounded-md bg-primary p-2">
                <Truck className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Sri Amman Arul Enterprise</h3>
                <p className="text-xs text-muted-foreground">Sand & Materials</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Leading provider of construction materials and transport services with 20+ years of reliable experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-sm hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/fleet" className="text-sm hover:text-primary transition-colors">Our Fleet</Link></li>
              <li><Link to="/gallery" className="text-sm hover:text-primary transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>River Sand Supply</li>
              <li>M-Sand Supply</li>
              <li>Gravel & Jelly Stones</li>
              <li>Quarry Dust</li>
              <li>Red Soil</li>
              <li>Tipper Transport</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <Phone className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <div>
                  <a href="tel:+919876543210" className="hover:text-primary">+91 94442 39070</a>
                </div>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Mail className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <a href="mailto:vanithaharibabu123@gmail.com" className="hover:text-primary">vanithaharibabu123@gmail.com</a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Chennai, Tamil Nadu</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Clock className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">24/7 Available</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/20 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Sri Amman Arul Enterprise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
