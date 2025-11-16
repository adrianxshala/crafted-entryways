import { Heart, Leaf, Users, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Qualität zuerst",
      description: "Wir kompromittieren niemals bei Materialien oder Handwerk. Jede Tür ist ein Meisterwerk.",
    },
    {
      icon: Leaf,
      title: "Nachhaltige Materialien",
      description: "Umweltfreundliche Beschaffung und Praktiken, die unseren Planeten für zukünftige Generationen schützen.",
    },
    {
      icon: Users,
      title: "Kundenservice",
      description: "Ihre Zufriedenheit ist unser Erfolg. Wir sind für Sie in jedem Schritt da.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Vereinigung von traditionellem Handwerk mit modernem Design und Technologie.",
    },
  ];

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
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight"
          >
            Träume bauen, eine Tür nach der anderen
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2"
          >
            Seit 2015 ist Portal Doors Albaniens führender Türhersteller und vereint traditionelles
            Handwerk mit moderner Designinnovation.
          </motion.p>
        </div>
      </motion.section>

      {/* Company Story */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-4 sm:space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold"
            >
              Unsere Geschichte
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-muted-foreground leading-relaxed text-sm sm:text-base md:text-lg px-2"
            >
              Portal Doors begann in einer kleinen Werkstatt in Tirana mit einer einfachen Vision: Türen zu schaffen,
              die mehr sind als nur Eingänge – sie sind Aussagen von Stil, Qualität und Persönlichkeit.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground leading-relaxed text-sm sm:text-base md:text-lg px-2"
            >
              Unser Gründer, Arben Krasniqi, brachte über 30 Jahre Holzbau-Expertise und eine Leidenschaft
              für Perfektion mit. Was als Familienbetrieb begann, ist zu Albaniens vertrauenswürdigstem
              Namen für Premium-Innentüren geworden.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-6 sm:pt-8"
            >
              <motion.p
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-accent mb-2"
              >
                5000+
              </motion.p>
              <p className="text-lg sm:text-xl font-semibold">Zufriedene Kunden</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Values */}
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
            Unsere Kernwerte
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8 text-center px-4 sm:px-6">
                    <motion.div
                      className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-accent/20 mb-3 sm:mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
