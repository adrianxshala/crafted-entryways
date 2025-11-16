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

  const milestones = [
    { year: "2015", event: "Portal Doors founded in Tirana" },
    { year: "2017", event: "Expanded to 3 showrooms across Albania" },
    { year: "2019", event: "Introduced custom design service" },
    { year: "2021", event: "Launched sustainable materials line" },
    { year: "2023", event: "Reached 5,000+ happy customers" },
    { year: "2024", event: "Opening new manufacturing facility" },
  ];

  const team = [
    { name: "Arben Krasniqi", role: "Founder & Master Craftsman", bio: "30+ years of woodworking excellence" },
    { name: "Elena Marku", role: "Design Director", bio: "Award-winning interior designer" },
    { name: "Viktor Dervishi", role: "Operations Manager", bio: "Ensuring quality at every step" },
    { name: "Sara Hoxha", role: "Customer Relations", bio: "Your guide to the perfect door" },
  ];

  const process = [
    { step: "1", title: "Consultation", description: "We discuss your vision and requirements" },
    { step: "2", title: "Design & Selection", description: "Choose from our collection or create custom" },
    { step: "3", title: "Custom Crafting", description: "Master craftsmen build your door" },
    { step: "4", title: "Professional Installation", description: "Expert fitting for perfect results" },
    { step: "5", title: "After-Service Support", description: "We're here whenever you need us" },
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
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                Portal Doors began in a small workshop in Tirana with a simple vision: to create doors
                that are more than just entryways – they're statements of style, quality, and personality.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our founder, Arben Krasniqi, brought over 30 years of woodworking expertise and a passion
                for perfection. What started as a family business has grown into Albania's most trusted
                name in premium indoor doors.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we're proud to have brought beauty and craftsmanship into thousands of homes,
                while staying true to our core values of quality, sustainability, and customer care.
              </p>
            </div>
            <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-6xl font-bold text-accent mb-4">5000+</p>
                <p className="text-xl font-semibold">Happy Customers</p>
              </div>
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

      {/* Timeline */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-8 mb-8 group">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1 pt-5">
                  <p className="text-lg">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-secondary/30 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-32 h-32 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-16 h-16 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-accent font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {process.map((item, index) => (
                <div key={index} className="flex gap-6 mb-8 group">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center font-bold text-2xl group-hover:scale-110 transition-transform">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1 pt-3">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                  {index < process.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-12 bg-border" style={{ marginTop: `${index * 96}px` }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
