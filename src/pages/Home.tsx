import { useState } from "react";
import { Link } from "react-router-dom";
import { Shield, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import DoorSlider from "@/components/DoorSlider";
import heroImage from "@/assets/hero-door.jpg";
import doorModern from "@/assets/door-modern.jpg";
import doorClassic from "@/assets/door-classic.jpg";
import doorGlass from "@/assets/door-glass.jpg";
import doorRustic from "@/assets/door-rustic.jpg";
import doorFrench from "@/assets/door-french.jpg";
import doorSlider from "@/assets/door-slider.jpg";

const Home = () => {
  const [filter, setFilter] = useState("Alle");

  const doors = [
    {
      id: 1,
      name: "Modern Minimalistisch",
      material: "Verbundstoff",
      category: "Modern",
      image: doorModern,
    },
    {
      id: 2,
      name: "Klassische Eiche",
      material: "Massiveiche",
      category: "Klassisch",
      image: doorClassic,
    },
    {
      id: 3,
      name: "Zeitgenössisches Glas",
      material: "Verglastes Glas",
      category: "Glas",
      image: doorGlass,
    },
    {
      id: 4,
      name: "Rustikale Scheune",
      material: "Altholz",
      category: "Holz",
      image: doorRustic,
    },
    {
      id: 5,
      name: "Französische Türen",
      material: "Hartholz",
      category: "Klassisch",
      image: doorFrench,
    },
    {
      id: 6,
      name: "Schiebetür",
      material: "Verbundholz",
      category: "Modern",
      image: doorSlider,
    },
  ];

  const filteredDoors =
    filter === "Alle"
      ? doors
      : doors.filter((door) => door.category === filter);

  const features = [
    {
      icon: Shield,
      title: "Premium-Materialien",
      description:
        "Nur die feinsten Materialien für Langlebigkeit und Schönheit",
    },
    {
      icon: Award,
      title: "Experten-Handwerk",
      description: "Meisterhandwerker mit jahrzehntelanger Holzbauerfahrung",
    },
    {
      icon: Clock,
      title: "Lebenslange Garantie",
      description: "Umfassende Garantie für alle Herstellungsfehler",
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center text-primary-foreground px-4 sm:px-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
          >
            Gestaltung von Eingängen
            <br className="hidden sm:block" />
            zu Ihrer Geschichte
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-2xl mx-auto opacity-90 px-2"
          >
            Wo Handwerk auf Zuhause trifft. Premium Innentüren, die Ihren Raum
            aufwerten.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto"
                asChild
              >
                <Link to="/gallery">Türen erkunden</Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link to="/contact">Kostenlose Beratung</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Unsere Meisterwerke Slider Section */}
      <DoorSlider />

      {/* Featured Doors Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6"
      >
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4"
          >
            Unsere Türkollektion
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base"
          >
            Entdecken Sie die perfekte Tür für Ihr Zuhause
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12"
          >
            {["Alle", "Modern", "Klassisch", "Glas", "Holz"].map(
              (category, index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant={filter === category ? "default" : "outline"}
                    onClick={() => setFilter(category)}
                    className="text-xs sm:text-sm"
                    size="sm"
                  >
                    {category}
                  </Button>
                </motion.div>
              )
            )}
          </motion.div>

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
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                  <div className="relative overflow-hidden aspect-[3/4]">
                    <motion.img
                      src={door.image}
                      alt={door.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">
                      {door.name}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      {door.material}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="py-12 sm:py-16 md:py-20 bg-secondary/30 px-4 sm:px-6"
      >
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12"
          >
            Warum Portal Doors wählen
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow h-full">
                  <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8 px-4 sm:px-6">
                    <motion.div
                      className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-accent/20 mb-3 sm:mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Banner */}
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
            Bereit, Ihren Raum zu verwandeln?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto"
          >
            Buchen Sie noch heute eine kostenlose Beratung mit unseren
            Designexperten
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto"
              asChild
            >
              <Link to="/contact">Beratung buchen</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
