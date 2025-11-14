import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroImage from "@/assets/hero-tipper-lorries.jpg";
import fleetTruck1 from "@/assets/fleet-truck-1.jpg";
import fleetTruck2 from "@/assets/fleet-truck-2.jpg";
import gallerySand from "@/assets/gallery-sand-pile.jpg";
import galleryMSand from "@/assets/gallery-Msand-pile.jpeg";
import aboutQuality from "@/assets/about-quality.jpg";

const Gallery = () => {
  const galleryImages = [
    {
      src: heroImage,
      title: "Fleet Overview",
      description: "Our tipper lorries transporting construction materials",
    },
    {
      src: fleetTruck1,
      title: "12-Wheel Tipper",
      description: "Yellow tipper lorry loaded with sand",
    },
    {
      src: fleetTruck2,
      title: "Material Delivery",
      description: "Heavy-duty tipper unloading gravel at site",
    },
    {
      src: galleryMSand,
      title: "Material Stockyard",
      description: "Sand and M-sand storage facility",
    },
    {
      src: aboutQuality,
      title: "Quality Inspection",
      description: "Professional quality check of materials",
    },
    {
      src: fleetTruck1,
      title: "Loading Operations",
      description: "Efficient loading process at stockyard",
    },
    {
      src: fleetTruck2,
      title: "Site Delivery",
      description: "On-time delivery to construction site",
    },
    {
      src: gallerySand,
      title: "Material Varieties",
      description: "Different types of construction materials",
    },
    {
      src: heroImage,
      title: "Fleet in Action",
      description: "Multiple vehicles serving various sites",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-construction-yellow to-construction-orange">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-primary-foreground">Gallery</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Explore our fleet, materials, and delivery operations through these images
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <Card key={index} className="shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                  <p className="text-sm text-muted-foreground">{image.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What We Showcase</h2>
            <p className="text-lg text-muted-foreground">Different aspects of our business operations</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">8+</div>
                <h3 className="font-bold mb-2">Fleet Vehicles</h3>
                <p className="text-sm text-muted-foreground">Modern tipper lorries</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">7+</div>
                <h3 className="font-bold mb-2">Material Types</h3>
                <p className="text-sm text-muted-foreground">Construction materials</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <h3 className="font-bold mb-2">Deliveries</h3>
                <p className="text-sm text-muted-foreground">Successful projects</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <h3 className="font-bold mb-2">Service Areas</h3>
                <p className="text-sm text-muted-foreground">Locations covered</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video/Virtual Tour Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">See Us in Action</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Want to see more of our operations? Contact us to schedule a visit to our stockyard or to see our fleet in person.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+919444239070"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                Schedule a Visit
              </a>
              <a
                href="https://wa.me/919444239070"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-md font-medium hover:bg-[#20BA5A] transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
