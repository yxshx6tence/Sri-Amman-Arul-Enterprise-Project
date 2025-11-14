import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Truck, Mountain, Box, Droplets, TreePine } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Services = () => {
  const materialServices = [
    {
      icon: Droplets,
      title: "River Sand",
      description: "Premium quality natural river sand ideal for construction, plastering, and concrete work. Properly washed and graded.",
      features: ["High quality", "Washed & cleaned", "Various grain sizes", "Bulk supply available"],
    },
    {
      icon: Mountain,
      title: "M-Sand (Manufactured Sand)",
      description: "Eco-friendly alternative to river sand. Manufactured from crushed granite stone with consistent quality.",
      features: ["Eco-friendly", "Consistent quality", "Better strength", "Cost-effective"],
    },
    {
      icon: Box,
      title: "Gravel & Jelly Stones",
      description: "Various sizes of gravel and decorative jelly stones for construction, drainage, and landscaping projects.",
      features: ["Multiple sizes", "Clean & graded", "Decorative options", "Drainage friendly"],
    },
    {
      icon: Package,
      title: "Quarry Dust",
      description: "Fine aggregate material perfect for construction, concrete work, and as a filling material.",
      features: ["Fine aggregate", "Construction grade", "Filling material", "Cost-effective"],
    },
    {
      icon: TreePine,
      title: "Red Soil",
      description: "High-quality red soil for landscaping, gardening, filling, and foundation work.",
      features: ["Landscaping", "Garden-friendly", "Foundation work", "Bulk quantities"],
    },
    {
      icon: Mountain,
      title: "Crusher Materials",
      description: "Various crusher materials including 20mm, 40mm aggregates for all construction requirements.",
      features: ["Multiple sizes", "Construction grade", "High strength", "Graded properly"],
    },
  ];

  const transportServices = [
    {
      title: "Sand Delivery Services",
      description: "Reliable delivery of all types of sand to your construction site with our modern tipper lorries.",
    },
    {
      title: "Bulk Load Transport",
      description: "Efficient transport of large quantities of construction materials for major projects.",
    },
    {
      title: "Construction Material Hauling",
      description: "Safe and secure transportation of various construction materials with proper loading techniques.",
    },
    {
      title: "Long-term Contract Services",
      description: "Dedicated tipper services for ongoing construction projects with preferential rates.",
    },
    {
      title: "On-call Lorry Support",
      description: "24/7 available tipper lorries for urgent material transport requirements.",
    },
    {
      title: "Site-to-Site Transfer",
      description: "Efficient material transfer between multiple construction sites or storage locations.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-construction-yellow to-construction-orange">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-primary-foreground">Our Services</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Complete range of construction materials and professional transport services for all your project needs
          </p>
        </div>
      </section>

      {/* Material Supply Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Material Supply</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              High-quality construction materials sourced from certified suppliers
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {materialServices.map((service, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-bold text-xl mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/quote">Request Material Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Transport Services Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Transport & Logistics</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional tipper lorry services with 8 well-maintained vehicles
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {transportServices.map((service, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <Truck className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-bold text-xl mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/fleet">View Our Fleet</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Our Services?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Quality Assurance</h3>
                    <p className="text-muted-foreground">All materials tested and certified for construction standards</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Competitive Pricing</h3>
                    <p className="text-muted-foreground">Best rates in the market with transparent pricing</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Timely Delivery</h3>
                    <p className="text-muted-foreground">Guaranteed on-time delivery for all orders</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Professional Team</h3>
                    <p className="text-muted-foreground">Experienced drivers and support staff</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">5</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">24/7 Availability</h3>
                    <p className="text-muted-foreground">Round-the-clock service for urgent requirements</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">6</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Wide Coverage</h3>
                    <p className="text-muted-foreground">Service available across Chennai</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us for competitive quotes and reliable service
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="cta" size="lg" asChild>
              <Link to="/quote">Get Free Quote</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
