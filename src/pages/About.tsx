import { Heart, Leaf, Users, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Quality First",
      description: "We never compromise on materials or craftsmanship. Every door is a masterpiece.",
    },
    {
      icon: Leaf,
      title: "Sustainable Materials",
      description: "Eco-friendly sourcing and practices that protect our planet for future generations.",
    },
    {
      icon: Users,
      title: "Customer Care",
      description: "Your satisfaction is our success. We're here for you every step of the way.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Blending traditional craftsmanship with modern design and technology.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-secondary/30 py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Building Dreams, One Door at a Time</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Since 2015, Portal Doors has been Albania's premier door manufacturer, combining traditional
            craftsmanship with modern design innovation.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Portal Doors began in a small workshop in Tirana with a simple vision: to create doors
              that are more than just entryways – they're statements of style, quality, and personality.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Our founder, Arben Krasniqi, brought over 30 years of woodworking expertise and a passion
              for perfection. What started as a family business has grown into Albania's most trusted
              name in premium indoor doors.
            </p>
            <div className="pt-8">
              <p className="text-6xl font-bold text-accent mb-2">5000+</p>
              <p className="text-xl font-semibold">Happy Customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary/30 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-4">
                    <value.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
