import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import doorModern from "@/assets/door-modern.jpg";
import doorClassic from "@/assets/door-classic.jpg";
import doorGlass from "@/assets/door-glass.jpg";
import doorRustic from "@/assets/door-rustic.jpg";
import doorFrench from "@/assets/door-french.jpg";
import doorSlider from "@/assets/door-slider.jpg";

const Gallery = () => {
  const [filter, setFilter] = useState("Alle");

  const doors = [
    {
      id: 1,
      name: "Modern Minimalistisch",
      material: "Verbundholz",
      category: "Modern",
      image: doorModern,
      description: "Klare Linien und griffloses Design für zeitgenössische Räume.",
    },
    {
      id: 2,
      name: "Klassische Eiche Doppel",
      material: "Massiveiche",
      category: "Klassisch",
      image: doorClassic,
      description: "Traditionelle Wärme mit Messingbeschlag-Details.",
    },
    {
      id: 3,
      name: "Zeitgenössisches Glas-Panel",
      material: "Verglastes Glas",
      category: "Glas",
      image: doorGlass,
      description: "Mattierte Glaspaneele bringen Licht und moderne Eleganz.",
    },
    {
      id: 4,
      name: "Rustikale Scheunentür",
      material: "Altholz",
      category: "Holz",
      image: doorRustic,
      description: "Industrieller Charme mit authentischer Schiebehardware.",
    },
    {
      id: 5,
      name: "Elegante Französische Türen",
      material: "Premium Hartholz",
      category: "Klassisch",
      image: doorFrench,
      description: "Verzierte Doppeleingänge mit Glaspanel-Einsätzen.",
    },
    {
      id: 6,
      name: "Platzsparende Schiebetür",
      material: "Verbundholz",
      category: "Modern",
      image: doorSlider,
      description: "Elegantes Schiebedesign perfekt für enge Räume.",
    },
    {
      id: 7,
      name: "Zeitgenössisches Weiß-Panel",
      material: "Verbundstoff",
      category: "Modern",
      image: doorModern,
      description: "Minimalistisches Design mit subtilen Panel-Details.",
    },
    {
      id: 8,
      name: "Traditionelle Walnuss",
      material: "Massive Walnuss",
      category: "Holz",
      image: doorClassic,
      description: "Reiche Holzmaserung mit zeitloser Eleganz.",
    },
  ];

  const categories = ["Alle", "Modern", "Klassisch", "Glas", "Holz"];
  const filteredDoors = filter === "Alle" ? doors : doors.filter(door => door.category === filter);

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-secondary/30 py-12 sm:py-16 md:py-20 px-4 sm:px-6"
      >
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
          >
            Unsere Türgalerie
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2"
          >
            Erkunden Sie unsere vollständige Kollektion handgefertigter Türen. Jedes Stück ist eine einzigartige Mischung aus
            Kunstfertigkeit und Funktionalität.
          </motion.p>
        </div>
      </motion.section>

      {/* Filter Buttons */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-8 sm:py-12 px-4 sm:px-6"
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={filter === category ? "default" : "outline"}
                  onClick={() => setFilter(category)}
                  className="min-w-[80px] sm:min-w-[120px] text-xs sm:text-sm"
                  size="sm"
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Gallery Grid */}
      <motion.section
        layout
        className="pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6"
      >
        <div className="container mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          >
            {filteredDoors.map((door, index) => (
              <motion.div
                key={door.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer h-full">
                  <div className="relative overflow-hidden aspect-[3/4]">
                    <motion.img
                      src={door.image}
                      alt={door.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="p-4 sm:p-6 text-primary-foreground"
                      >
                        <p className="text-xs sm:text-sm mb-2">{door.description}</p>
                      </motion.div>
                    </div>
                  </div>
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">{door.name}</h3>
                    <p className="text-xs sm:text-sm text-accent font-medium mb-1">{door.material}</p>
                    <p className="text-xs text-muted-foreground">{door.category}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="py-12 sm:py-16 md:py-20 bg-primary text-primary-foreground px-4 sm:px-6"
      >
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
          >
            Finden Sie nicht, wonach Sie suchen?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto px-2"
          >
            Wir sind spezialisiert auf individuelle Designs. Lassen Sie uns die perfekte Tür für Ihren einzigartigen Raum schaffen.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" variant="secondary" className="w-full sm:w-auto">
              Individuelles Design anfragen
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Gallery;
