import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Truck, Shield, Gauge, Weight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import fleetTruck1 from "@/assets/fleet-truck-1.jpg";
import fleetTruck2 from "@/assets/fleet-truck-2.jpg";

const Fleet = () => {
  const vehicles = [
    {
      name: "12-Wheel Tipper - Unit 1",
      capacity: "25 Tons",
      image: fleetTruck1,
      features: ["GPS Tracked", "Well Maintained", "Licensed", "Experienced Driver"],
      specs: { wheels: "12", engine: "High Performance", year: "2020" },
    },
    {
      name: "12-Wheel Tipper - Unit 2",
      capacity: "25 Tons",
      image: fleetTruck1,
      features: ["GPS Tracked", "Well Maintained", "Licensed", "Experienced Driver"],
      specs: { wheels: "12", engine: "High Performance", year: "2020" },
    },
    {
      name: "8-Wheel Tipper - Unit 3",
      capacity: "20 Tons",
      image: fleetTruck2,
      features: ["GPS Tracked", "Well Maintained", "Licensed", "Experienced Driver"],
      specs: { wheels: "10", engine: "High Performance", year: "2019" },
    },
    {
      name: "12-Wheel Tipper - Unit 4",
      capacity: "25 Tons",
      image: fleetTruck1,
      features: ["GPS Tracked", "Heavy Duty", "Licensed", "Experienced Driver"],
      specs: { wheels: "12", engine: "Heavy Duty", year: "2021" },
    },
    {
      name: "8-Wheel Tipper - Unit 5",
      capacity: "20 Tons",
      image: fleetTruck2,
      features: ["GPS Tracked", "Well Maintained", "Licensed", "Experienced Driver"],
      specs: { wheels: "10", engine: "High Performance", year: "2019" },
    },
    {
      name: "8-Wheel Tipper - Unit 6",
      capacity: "20 Tons",
      image: fleetTruck2,
      features: ["GPS Tracked", "Well Maintained", "Licensed", "Experienced Driver"],
      specs: { wheels: "10", engine: "High Performance", year: "2020" },
    },
    {
      name: "12-Wheel Tipper - Unit 7",
      capacity: "25 Tons",
      image: fleetTruck1,
      features: ["GPS Tracked", "Heavy Duty", "Licensed", "Experienced Driver"],
      specs: { wheels: "12", engine: "Heavy Duty", year: "2021" },
    },
    {
      name: "8-Wheel Tipper - Unit 8",
      capacity: "20 Tons",
      image: fleetTruck2,
      features: ["GPS Tracked", "Well Maintained", "Licensed", "Experienced Driver"],
      specs: { wheels: "10", engine: "High Performance", year: "2020" },
    },
  ];

  const fleetFeatures = [
    {
      icon: Shield,
      title: "Safety Certified",
      description: "All vehicles meet safety standards and are regularly inspected",
    },
    {
      icon: Truck,
      title: "Modern Equipment",
      description: "Latest model tipper lorries with advanced features",
    },
    {
      icon: Gauge,
      title: "GPS Tracking",
      description: "Real-time tracking of all vehicles for better service",
    },
    {
      icon: Weight,
      title: "High Capacity",
      description: "20-25 ton capacity for efficient bulk transport",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-construction-yellow to-construction-orange">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-primary-foreground">Our Fleet</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            8 well-maintained tipper lorries ready to serve your construction material transport needs
          </p>
        </div>
      </section>

      {/* Fleet Stats */}
      <section className="py-12 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">8</div>
              <div className="text-sm text-muted-foreground">Total Vehicles</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">165+</div>
              <div className="text-sm text-muted-foreground">Combined Capacity (Tons)</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">GPS Tracked</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Fleet Features</h2>
            <p className="text-lg text-muted-foreground">Modern vehicles with advanced capabilities</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {fleetFeatures.map((feature, index) => (
              <Card key={index} className="shadow-lg text-center">
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Showcase */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Vehicles</h2>
            <p className="text-lg text-muted-foreground">Meet our fleet of reliable tipper lorries</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {vehicles.map((vehicle, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-lg">{vehicle.name}</h3>
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">
                      {vehicle.capacity}
                    </Badge>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Configuration:</span>
                      <span className="font-medium">{vehicle.specs.wheels} Wheels</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Engine:</span>
                      <span className="font-medium">{vehicle.specs.engine}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Year:</span>
                      <span className="font-medium">{vehicle.specs.year}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {vehicle.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance & Safety */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Maintenance & Safety</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-bold text-xl mb-4">Regular Maintenance</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Weekly vehicle inspections</li>
                    <li>• Scheduled preventive maintenance</li>
                    <li>• Immediate repairs when needed</li>
                    <li>• Clean and well-maintained condition</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <Truck className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-bold text-xl mb-4">Safety Standards</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• All safety certifications up to date</li>
                    <li>• Experienced and trained drivers</li>
                    <li>• GPS tracking for all vehicles</li>
                    <li>• Comprehensive insurance coverage</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-construction-yellow to-construction-orange">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary-foreground">Book Our Fleet Today</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Get reliable transport services for your construction materials with our modern fleet
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/quote">Request Quote</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Fleet;
