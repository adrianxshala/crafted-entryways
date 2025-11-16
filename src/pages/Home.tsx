import { useState } from "react";
import { Link } from "react-router-dom";
import { Shield, Award, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-door.jpg";
import doorModern from "@/assets/door-modern.jpg";
import doorClassic from "@/assets/door-classic.jpg";
import doorGlass from "@/assets/door-glass.jpg";
import doorRustic from "@/assets/door-rustic.jpg";
import doorFrench from "@/assets/door-french.jpg";
import doorSlider from "@/assets/door-slider.jpg";

const Home = () => {
  const [filter, setFilter] = useState("All");

  const doors = [
    { id: 1, name: "Modern Minimalist", material: "Composite", category: "Modern", image: doorModern },
    { id: 2, name: "Classic Oak", material: "Solid Oak", category: "Classic", image: doorClassic },
    { id: 3, name: "Contemporary Glass", material: "Tempered Glass", category: "Glass", image: doorGlass },
    { id: 4, name: "Rustic Barn", material: "Reclaimed Wood", category: "Wood", image: doorRustic },
    { id: 5, name: "French Doors", material: "Hardwood", category: "Classic", image: doorFrench },
    { id: 6, name: "Pocket Slider", material: "Engineered Wood", category: "Modern", image: doorSlider },
  ];

  const filteredDoors = filter === "All" ? doors : doors.filter(door => door.category === filter);

  const features = [
    {
      icon: Shield,
      title: "Premium Materials",
      description: "Only the finest materials sourced for durability and beauty",
    },
    {
      icon: Award,
      title: "Expert Craftsmanship",
      description: "Master craftsmen with decades of woodworking experience",
    },
    {
      icon: Clock,
      title: "Lifetime Warranty",
      description: "Comprehensive warranty covering all manufacturing defects",
    },
  ];

  const testimonials = [
    {
      name: "Maria K.",
      rating: 5,
      text: "Absolutely stunning doors! The quality exceeded our expectations and transformed our home.",
    },
    {
      name: "John D.",
      rating: 5,
      text: "Professional service from consultation to installation. Highly recommended!",
    },
    {
      name: "Sofia A.",
      rating: 5,
      text: "Beautiful craftsmanship and attention to detail. Worth every penny!",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-primary/80" />
        </div>
        
        <div className="relative z-10 text-center text-primary-foreground px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Crafting Entryways<br />to Your Story
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            Where craftsmanship meets home. Premium indoor doors designed to elevate your space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/gallery">Explore Doors</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Doors Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Our Door Collection</h2>
          <p className="text-center text-muted-foreground mb-8">
            Discover the perfect door for your home
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["All", "Modern", "Classic", "Glass", "Wood"].map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDoors.map((door) => (
              <Card
                key={door.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img
                    src={door.image}
                    alt={door.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{door.name}</h3>
                  <p className="text-muted-foreground text-sm">{door.material}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary/30 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Portal Doors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-4">
                    <feature.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-primary text-primary-foreground px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 opacity-90">
            Book a free consultation with our design experts today
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Book Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
