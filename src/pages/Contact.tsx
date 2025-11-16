import { useState } from "react";
import { Phone, Mail, MapPin, CheckCircle, Clock, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
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

    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      content: "+355 XX XXX XXXX",
      link: "tel:+355XXXXXXXX",
    },
    {
      icon: Mail,
      title: "E-Mail",
      content: "info@portaldoors.al",
      link: "mailto:info@portaldoors.al",
    },
    {
      icon: MapPin,
      title: "Standort",
      content: "Tirana, Albanien",
      link: "https://maps.google.com",
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-background via-secondary/20 to-background">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 mb-6"
          >
            <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
          >
            Kontaktieren Sie uns
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2 leading-relaxed"
          >
            Haben Sie Fragen? Wir freuen uns von Ihnen zu hören. Senden Sie uns eine Nachricht und wir antworten so schnell wie möglich.
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Form and Info */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <Card className="border-2 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-card to-card/95">
                <CardContent className="pt-8 sm:pt-10 p-6 sm:p-8 md:p-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-3 mb-6"
                  >
                    <motion.div
                      className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Send className="w-5 h-5 text-primary" />
                    </motion.div>
                    <h2 className="text-2xl sm:text-3xl font-bold">Senden Sie uns eine Nachricht</h2>
                  </motion.div>
                  <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                    <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                      <div className="space-y-2.5">
                        <Label htmlFor="name" className="text-sm font-semibold text-foreground">
                          Vollständiger Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Max Mustermann"
                          className="h-11 border-2 focus:border-primary transition-colors"
                        />
                      </div>
                      <div className="space-y-2.5">
                        <Label htmlFor="email" className="text-sm font-semibold text-foreground">
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
                          className="h-11 border-2 focus:border-primary transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                      <div className="space-y-2.5">
                        <Label htmlFor="phone" className="text-sm font-semibold text-foreground">
                          Telefonnummer
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+355 XX XXX XXXX"
                          className="h-11 border-2 focus:border-primary transition-colors"
                        />
                      </div>
                      <div className="space-y-2.5">
                        <Label htmlFor="service" className="text-sm font-semibold text-foreground">
                          Service-Interesse *
                        </Label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) => setFormData({ ...formData, service: value })}
                          required
                        >
                          <SelectTrigger className="h-11 border-2 focus:border-primary">
                            <SelectValue placeholder="Wählen Sie einen Service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new">Neue Installation</SelectItem>
                            <SelectItem value="replacement">Austausch</SelectItem>
                            <SelectItem value="consultation">Beratung</SelectItem>
                            <SelectItem value="custom">Individuelles Design</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      <Label htmlFor="message" className="text-sm font-semibold text-foreground">
                        Nachricht *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Erzählen Sie uns von Ihrem Projekt..."
                        rows={6}
                        className="border-2 focus:border-primary transition-colors resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full h-12 text-base font-semibold bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Wird gesendet...
                        </span>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Nachricht senden
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-5 sm:space-y-6 mt-8 lg:mt-0"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 group cursor-pointer bg-gradient-to-br from-card to-card/95">
                    <CardContent className="pt-6 sm:pt-8 p-5 sm:p-6">
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4"
                      >
                        <div className="flex-shrink-0">
                          <motion.div
                            className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary group-hover:to-accent transition-all duration-300 shadow-md group-hover:shadow-lg"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <info.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary group-hover:text-white transition-colors duration-300" />
                          </motion.div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold mb-1.5 text-base sm:text-lg text-foreground group-hover:text-primary transition-colors">
                            {info.title}
                          </h3>
                          <p className="text-muted-foreground text-sm sm:text-base group-hover:text-foreground transition-colors">
                            {info.content}
                          </p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: contactInfo.length * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-lg">
                  <CardContent className="pt-6 sm:pt-8 p-5 sm:p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Clock className="w-5 h-5 text-primary" />
                      </motion.div>
                      <h3 className="font-bold text-base sm:text-lg text-foreground">Öffnungszeiten</h3>
                    </div>
                    <div className="space-y-2.5 text-sm sm:text-base">
                      {[
                        { day: "Montag - Freitag", time: "8:00 - 18:00 Uhr" },
                        { day: "Samstag", time: "9:00 - 14:00 Uhr" },
                        { day: "Sonntag", time: "Geschlossen" },
                      ].map((schedule, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center justify-between p-2 rounded-lg hover:bg-primary/5 transition-colors"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span className="font-medium text-foreground">{schedule.day}</span>
                          <span className="text-muted-foreground">{schedule.time}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6"
      >
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.01 }}
          >
            <Card className="border-2 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative bg-gradient-to-br from-muted via-muted/50 to-muted h-64 sm:h-80 md:h-96 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="text-center px-4 relative z-10"
                  >
                    <motion.div
                      className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 mb-4"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                    </motion.div>
                    <p className="text-foreground font-semibold text-base sm:text-lg mb-2">Kartenplatzhalter</p>
                    <p className="text-muted-foreground text-sm sm:text-base">Tirana, Albanien</p>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
