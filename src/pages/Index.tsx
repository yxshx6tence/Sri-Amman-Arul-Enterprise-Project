import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageCircle, FileText, Truck, Shield, Clock, MapPin, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroImage from "@/assets/hero-tipper-lorries.jpg";

const Index = () => {
  const stats = [
    { icon: Truck, label: "Tipper Lorries", value: "8+" },
    { icon: Clock, label: "Years Experience", value: "20+" },
    { icon: CheckCircle, label: "Projects Completed", value: "100+" },
    { icon: MapPin, label: "Service Areas", value: "10+" },
  ];

  const services = [
    { title: "River Sand", description: "Premium quality natural river sand for all construction needs" },
    { title: "M-Sand", description: "Manufactured sand - eco-friendly alternative to river sand" },
    { title: "Gravel & Jelly Stones", description: "Various sizes of gravel and decorative stones" },
    { title: "Quarry Dust", description: "Fine aggregate for construction and concrete work" },
    { title: "Red Soil", description: "Quality red soil for landscaping and filling" },
    { title: "Transport Services", description: "Reliable tipper lorry services for bulk material transport" },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Building Contractor",
      text: "Excellent service! Timely delivery and quality materials. Been working with them for 3 years.",
    },
    {
      name: "Sundar Construction",
      role: "Construction Company",
      text: "Very reliable transport service. Their tipper lorries are well-maintained and drivers are professional.",
    },
    {
      name: "Priya Builders",
      role: "Real Estate Developer",
      text: "Best sand supplier in the area. Competitive pricing and consistent quality.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Reliable Sand & M-Sand <span className="text-primary">Supply & Transport</span> Services
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              20+ years of trusted service. Quality construction materials delivered on time, every time.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="tel:+919444239070">
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </Button>
              <Button variant="hero" size="lg" className="bg-[#25D366] hover:bg-[#20BA5A]" asChild>
                <a href="https://wa.me/919444239070" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-foreground" asChild>
                <Link to="/quote">
                  <FileText className="h-5 w-5" />
                  Get Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-12 w-12 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">About Sri Amman Arul Enterprise</h2>
              <p className="text-lg text-muted-foreground mb-4">
                With over 20 years of experience in the construction materials industry, we have established ourselves as a trusted partner for builders, contractors, and construction companies across Chennai.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our fleet of 8 well-maintained tipper lorries ensures timely delivery of quality materials including sand, M-sand, gravel, and other construction essentials.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-primary" />
                  <span className="font-medium">Licensed & Insured Fleet</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span className="font-medium">Quality Materials Guaranteed</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-primary" />
                  <span className="font-medium">24/7 Service Available</span>
                </div>
              </div>
              <Button variant="cta" size="lg" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <Truck className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-bold text-xl mb-2">Modern Fleet</h3>
                  <p className="text-sm text-muted-foreground">8+ well-maintained tipper lorries</p>
                </CardContent>
              </Card>
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-bold text-xl mb-2">Trusted Service</h3>
                  <p className="text-sm text-muted-foreground">20+ years experience</p>
                </CardContent>
              </Card>
              <Card className="shadow-lg col-span-2">
                <CardContent className="p-6">
                  <MapPin className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-bold text-xl mb-2">Wide Coverage</h3>
                  <p className="text-sm text-muted-foreground">Serving 20+ locations across Chennai</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete range of construction materials and transport services for all your project needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="cta" size="lg" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">Trusted by builders and contractors across the region</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-construction-yellow to-construction-orange">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-primary-foreground">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Contact us today for competitive pricing and reliable service for all your construction material needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg" asChild>
              <a href="tel:+919876543210">
                <Phone className="h-5 w-5" />
                +91 94442 39070
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/quote">
                <FileText className="h-5 w-5" />
                Request Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
