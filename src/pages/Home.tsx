import { useState, memo, useMemo } from "react";
import { Link } from "react-router-dom";
import { Shield, Award, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useDebounce } from "@/hooks/useDebounce";
import { useReducedMotion } from "@/hooks/useReducedMotion";
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
  const debouncedFilter = useDebounce(filter, 150);
  const prefersReducedMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Nachricht erfolgreich gesendet!",
      description: "Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

  const filteredDoors = useMemo(
    () =>
      debouncedFilter === "Alle"
        ? doors
        : doors.filter((door) => door.category === debouncedFilter),
    [debouncedFilter]
  );

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
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/70 to-primary/80"
            animate={{
              opacity: [0.6, 0.7, 0.6],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Floating Particles Effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => {
            const randomX = Math.random() * 100;
            const randomY = Math.random() * 100;
            const randomDelay = Math.random() * 2;
            const randomDuration = Math.random() * 3 + 2;
            return (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary-foreground/20 rounded-full"
                initial={{
                  x: `${randomX}%`,
                  y: `${randomY}%`,
                  opacity: 0,
                }}
                animate={{
                  y: [`${randomY}%`, `${randomY - 20}%`],
                  opacity: [0, 0.5, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: randomDuration,
                  repeat: Infinity,
                  delay: randomDelay,
                  ease: "easeOut",
                }}
              />
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-primary-foreground px-4 sm:px-6 w-full"
        >
          {/* Main Title with Split Animation */}
          <div className="mb-4 sm:mb-6">
            <motion.span
              initial={
                prefersReducedMotion
                  ? { opacity: 0 }
                  : {
                      opacity: 0,
                      transform: "translateY(-80px)",
                      filter: "blur(20px)",
                    }
              }
              whileInView={
                prefersReducedMotion
                  ? { opacity: 1 }
                  : {
                      opacity: 1,
                      transform: "translateY(0)",
                      filter: "blur(0px)",
                    }
              }
              viewport={{ once: true }}
              transition={{
                delay: prefersReducedMotion ? 0 : 0.3,
                duration: prefersReducedMotion ? 0.01 : 1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="inline-block"
            >
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight"
                whileInView={{
                  textShadow: [
                    "0 0 0px rgba(255,255,255,0)",
                    "0 0 20px rgba(255,255,255,0.3)",
                    "0 0 0px rgba(255,255,255,0)",
                  ],
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Gestaltung von Eingängen
              </motion.h1>
            </motion.span>
            <br className="hidden sm:block" />
            <motion.span
              initial={
                prefersReducedMotion
                  ? { opacity: 0 }
                  : {
                      opacity: 0,
                      transform: "translateY(-80px)",
                      filter: "blur(20px)",
                    }
              }
              whileInView={
                prefersReducedMotion
                  ? { opacity: 1 }
                  : {
                      opacity: 1,
                      transform: "translateY(0)",
                      filter: "blur(0px)",
                    }
              }
              viewport={{ once: true }}
              transition={{
                delay: prefersReducedMotion ? 0 : 0.5,
                duration: prefersReducedMotion ? 0.01 : 1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="inline-block"
            >
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight"
                whileInView={{
                  textShadow: [
                    "0 0 0px rgba(255,255,255,0)",
                    "0 0 20px rgba(255,255,255,0.3)",
                    "0 0 0px rgba(255,255,255,0)",
                  ],
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 1.5,
                  ease: "easeInOut",
                }}
              >
                zu Ihrer Geschichte
              </motion.h1>
            </motion.span>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={
              prefersReducedMotion
                ? { opacity: 0 }
                : { opacity: 0, transform: "translateY(20px)" }
            }
            animate={
              prefersReducedMotion
                ? { opacity: 1 }
                : { opacity: 1, transform: "translateY(0)" }
            }
            transition={{
              delay: prefersReducedMotion ? 0 : 0.6,
              duration: prefersReducedMotion ? 0.01 : 0.8,
              ease: "easeOut",
            }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-2xl mx-auto opacity-90 px-2"
          >
            Premium Innentüren, die Ihren Raum aufwerten.
          </motion.p>

          {/* Buttons with Stagger Animation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link to="/gallery">Türen erkunden</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-lg hover:shadow-xl transition-all duration-300"
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
        className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden"
      >
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/80 to-primary/90" />
        </motion.div>

        <div className="container mx-auto text-center relative z-10">
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

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-b from-background via-primary/5 to-background overflow-hidden"
      >
        {/* Dot Grid Background */}
        <div
          className="absolute inset-0 opacity-[0.15] dark:opacity-[0.20]"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1.5px, transparent 1.5px)`,
            backgroundSize: "24px 24px",
            backgroundPosition: "0 0",
          }}
        />
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-8 md:mb-12"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              Kontaktieren Sie uns
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
              Haben Sie Fragen? Wir freuen uns von Ihnen zu hören. Senden Sie
              uns eine Nachricht und wir antworten so schnell wie möglich.
            </p>
          </motion.div>

          <div className="w-full sm:max-w-xl md:max-w-4xl lg:max-w-5xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border border-border/20 shadow-md hover:shadow-lg transition-all duration-300 bg-background/10 backdrop-blur-md rounded-2xl">
                <CardContent className="pt-6 sm:pt-8 md:pt-10 p-5 sm:p-6 md:p-8 lg:p-10">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4 sm:mb-6"></div>
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 sm:space-y-5 md:space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="name"
                          className="text-xs sm:text-sm font-semibold text-foreground/70"
                        >
                          Vollständiger Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Max Mustermann"
                          className="h-10 sm:h-11 text-sm sm:text-base border border-primary/10 rounded-xl bg-background/70 focus:border-primary/30 focus:bg-background transition-all shadow-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-xs sm:text-sm font-semibold text-foreground/70"
                        >
                          E-Mail-Adresse *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="max@beispiel.de"
                          className="h-10 sm:h-11 text-sm sm:text-base border border-primary/10 rounded-xl bg-background/70 focus:border-primary/30 focus:bg-background transition-all shadow-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="phone"
                        className="text-xs sm:text-sm font-semibold text-foreground/70"
                      >
                        Telefonnummer
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+383 49 153 002"
                        className="h-10 sm:h-11 text-sm sm:text-base border border-primary/10 rounded-xl bg-background/70 focus:border-primary/30 focus:bg-background transition-all shadow-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="text-xs sm:text-sm font-semibold text-foreground/70"
                      >
                        Nachricht *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Erzählen Sie uns von Ihrem Projekt..."
                        rows={5}
                        className="text-sm sm:text-base border border-primary/10 rounded-xl bg-background/70 focus:border-primary/30 focus:bg-background transition-all resize-none shadow-sm"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-11 sm:h-12 text-sm sm:text-base font-semibold rounded-xl bg-gradient-to-r from-primary/70 to-primary/80 shadow-sm hover:shadow-md transition-all duration-300"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <span className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span className="text-xs sm:text-sm">
                            Wird gesendet...
                          </span>
                        </span>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                          <span className="text-xs sm:text-sm">
                            Nachricht senden
                          </span>
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
