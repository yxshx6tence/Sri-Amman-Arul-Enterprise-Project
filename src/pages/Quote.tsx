import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Quote = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    materialType: "",
    quantity: "",
    location: "",
    message: "",
  });

  const materials = [
    "River Sand",
    "M-Sand",
    "Gravel",
    "Jelly Stones",
    "Quarry Dust",
    "Red Soil",
    "Crusher Materials (20mm)",
    "Crusher Materials (40mm)",
    "Other",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, materialType: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.materialType) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Quote Request Received!",
      description: "We'll contact you shortly with pricing details.",
    });
  };

  const sendViaWhatsApp = () => {
    if (!formData.name || !formData.phone || !formData.materialType) {
      toast({
        title: "Missing Information",
        description: "Please fill in name, phone, and material type",
        variant: "destructive",
      });
      return;
    }

    const message = `Quote Request:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || "Not provided"}
Material: ${formData.materialType}
Quantity: ${formData.quantity || "Not specified"}
Location: ${formData.location || "Not specified"}
Message: ${formData.message || "None"}`;

    const whatsappUrl = `https://wa.me/91 9444239070?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-construction-yellow to-construction-orange">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-primary-foreground">Get a Quote</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Fill out the form below and we'll get back to you with competitive pricing
          </p>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Form */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Request Quote</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 94442 39070"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email (Optional)</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <Label htmlFor="materialType">Material Type *</Label>
                      <Select onValueChange={handleSelectChange} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select material" />
                        </SelectTrigger>
                        <SelectContent>
                          {materials.map((material) => (
                            <SelectItem key={material} value={material}>
                              {material}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="quantity">Quantity Required</Label>
                      <Input
                        id="quantity"
                        name="quantity"
                        placeholder="e.g., 20 tons, 5 loads"
                        value={formData.quantity}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <Label htmlFor="location">Delivery Location</Label>
                      <Input
                        id="location"
                        name="location"
                        placeholder="City/Area"
                        value={formData.location}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Additional Details</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Any specific requirements or questions"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-3">
                      <Button type="submit" variant="cta" className="w-full">
                        <Mail className="h-4 w-4" />
                        Submit Quote Request
                      </Button>
                      <Button
                        type="button"
                        variant="default"
                        className="w-full bg-[#25D366] hover:bg-[#20BA5A]"
                        onClick={sendViaWhatsApp}
                      >
                        <MessageCircle className="h-4 w-4" />
                        Send via WhatsApp
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info & Quick Contact */}
              <div className="space-y-6">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle>Quick Contact</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Need an immediate quote? Call or WhatsApp us directly!
                    </p>
                    <Button variant="cta" size="lg" className="w-full" asChild>
                      <a href="tel:+9194442 39070">
                        <Phone className="h-5 w-5" />
                        +91 94442 39070
                      </a>
                    </Button>
                    <Button
                      variant="default"
                      size="lg"
                      className="w-full bg-[#25D366] hover:bg-[#20BA5A]"
                      asChild
                    >
                      <a href="https://wa.me/919444239070" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="h-5 w-5" />
                        Chat on WhatsApp
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle>Pricing Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <p>Our pricing depends on:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
                        <span>Material type and quality</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
                        <span>Quantity ordered</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
                        <span>Delivery distance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
                        <span>Current market rates</span>
                      </li>
                    </ul>
                    <p className="pt-3 font-medium text-foreground">
                      We offer competitive pricing and bulk discounts for large orders!
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg bg-primary/5">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-3">Why Choose Us?</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
                        <span>Transparent pricing - No hidden charges</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
                        <span>Quality materials guaranteed</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
                        <span>Timely delivery assured</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
                        <span>Flexible payment options</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5" />
                        <span>24/7 customer support</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Quote;
