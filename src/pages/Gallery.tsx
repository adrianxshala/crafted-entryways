import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import doorModern from "@/assets/door-modern.jpg";
import doorClassic from "@/assets/door-classic.jpg";
import doorGlass from "@/assets/door-glass.jpg";
import doorRustic from "@/assets/door-rustic.jpg";
import doorFrench from "@/assets/door-french.jpg";
import doorSlider from "@/assets/door-slider.jpg";

const Gallery = () => {
  const [filter, setFilter] = useState("All");

  const doors = [
    {
      id: 1,
      name: "Modern Minimalist",
      material: "Composite Wood",
      category: "Modern",
      image: doorModern,
      description: "Clean lines and handleless design for contemporary spaces.",
    },
    {
      id: 2,
      name: "Classic Oak Double",
      material: "Solid Oak",
      category: "Classic",
      image: doorClassic,
      description: "Traditional warmth with brass hardware detailing.",
    },
    {
      id: 3,
      name: "Contemporary Glass Panel",
      material: "Tempered Glass",
      category: "Glass",
      image: doorGlass,
      description: "Frosted glass panels bring light and modern elegance.",
    },
    {
      id: 4,
      name: "Rustic Barn Door",
      material: "Reclaimed Wood",
      category: "Wood",
      image: doorRustic,
      description: "Industrial charm with authentic sliding hardware.",
    },
    {
      id: 5,
      name: "Elegant French Doors",
      material: "Premium Hardwood",
      category: "Classic",
      image: doorFrench,
      description: "Ornate double entry with glass panel inserts.",
    },
    {
      id: 6,
      name: "Space-Saving Pocket Slider",
      material: "Engineered Wood",
      category: "Modern",
      image: doorSlider,
      description: "Sleek sliding design perfect for tight spaces.",
    },
    {
      id: 7,
      name: "Contemporary White Panel",
      material: "Composite",
      category: "Modern",
      image: doorModern,
      description: "Minimalist design with subtle panel details.",
    },
    {
      id: 8,
      name: "Traditional Walnut",
      material: "Solid Walnut",
      category: "Wood",
      image: doorClassic,
      description: "Rich wood grain with timeless elegance.",
    },
  ];

  const categories = ["All", "Modern", "Classic", "Glass", "Wood"];
  const filteredDoors = filter === "All" ? doors : doors.filter(door => door.category === filter);

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-secondary/30 py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Our Door Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our complete collection of handcrafted doors. Each piece is a unique blend of
            artistry and functionality.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className="min-w-[120px]"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDoors.map((door) => (
              <Card
                key={door.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer animate-fade-in"
              >
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img
                    src={door.image}
                    alt={door.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-primary-foreground">
                      <p className="text-sm mb-2">{door.description}</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{door.name}</h3>
                  <p className="text-sm text-accent font-medium mb-1">{door.material}</p>
                  <p className="text-xs text-muted-foreground">{door.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Can't Find What You're Looking For?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            We specialize in custom designs. Let's create the perfect door for your unique space.
          </p>
          <Button size="lg" variant="secondary">
            Request Custom Design
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
