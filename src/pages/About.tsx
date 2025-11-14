import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Award, Users, Truck, Target } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import aboutImage from "@/assets/about-quality.jpg";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "We ensure all materials meet the highest quality standards for construction projects.",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Punctual service with guaranteed delivery schedules to keep your projects on track.",
    },
    {
      icon: Award,
      title: "20+ Years Experience",
      description: "Over a decade of expertise in construction materials supply and transport.",
    },
    {
      icon: Users,
      title: "Customer Focused",
      description: "Dedicated support team and personalized service for every client.",
    },
    {
      icon: Truck,
      title: "Modern Fleet",
      description: "8 well-maintained tipper lorries equipped with latest safety features.",
    },
    {
      icon: Target,
      title: "Reliable Service",
      description: "Consistent performance with 24/7 availability for urgent requirements.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-construction-yellow to-construction-orange">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-primary-foreground">About Sri Amman Arul Enterprise</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Your trusted partner for construction materials and transport services since 2003
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Sri Amman Arul Enterprise was founded in 2003 with a vision to provide reliable, high-quality construction materials and transport services to builders and contractors across Tamil Nadu.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                What started with just 2 tipper lorries has grown into a fleet of 8 modern vehicles, serving hundreds of satisfied clients. Our commitment to quality, punctuality, and customer satisfaction has been the foundation of our growth.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Today, we are proud to be one of the most trusted names in construction material supply, known for our professionalism, competitive pricing, and unwavering dedication to our clients' success.
              </p>
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
            <div>
              <img
                src={aboutImage}
                alt="Quality inspection"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <value.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-bold text-xl mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Operating Areas</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We proudly serve construction sites across Chennai with our reliable transport services. Our strategic location and efficient logistics network enable us to deliver materials promptly to all major cities and surrounding areas.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div className="p-4 bg-muted rounded-lg">
                <p className="font-medium">Ponneri</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="font-medium">Jaganathapuram</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="font-medium">Karanodai</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="font-medium">Minjur</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="font-medium">Red Hills</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="font-medium">And More...</p>
              </div>
            </div>
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">Contact Us for Your Area</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Safety & Compliance */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Safety & Compliance</h2>
              <p className="text-lg text-muted-foreground">
                We maintain the highest standards of safety and regulatory compliance
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-bold text-xl mb-3">Licensed Operations</h3>
                  <p className="text-muted-foreground">
                    All our vehicles are properly licensed and insured for commercial transport operations.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <Award className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-bold text-xl mb-3">Trained Drivers</h3>
                  <p className="text-muted-foreground">
                    Our drivers are professionally trained and experienced in safe material transport.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <Truck className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-bold text-xl mb-3">Regular Maintenance</h3>
                  <p className="text-muted-foreground">
                    Our fleet undergoes regular maintenance and safety inspections to ensure reliability.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <Target className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-bold text-xl mb-3">Quality Materials</h3>
                  <p className="text-muted-foreground">
                    We source materials from certified suppliers ensuring consistent quality.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
