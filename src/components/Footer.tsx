import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="bg-primary text-primary-foreground"
    >
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap gap-4 sm:gap-6 lg:gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1 min-w-[150px] sm:min-w-[200px]"
          >
            <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">Türbau.ch</h3>
            <p className="text-xs sm:text-sm opacity-90 mb-3 sm:mb-4 leading-relaxed">
              Premium Innentüren mit außergewöhnlicher Qualität und zeitlosem Design.
            </p>
            <div className="flex gap-2 sm:gap-3">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="hover:text-accent transition-colors"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="hover:text-accent transition-colors"
              >
                <Instagram size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-1 min-w-[120px] sm:min-w-[150px]"
          >
            <h4 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3">Schnelllinks</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {[
                { name: "Startseite", path: "/" },
                { name: "Über uns", path: "/about" },
                { name: "Galerie", path: "/gallery" },
                { name: "Kontakt", path: "/contact" },
              ].map((link, index) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className="text-xs sm:text-sm hover:text-accent transition-colors block"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 min-w-[150px] sm:min-w-[180px]"
          >
            <h4 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3">Kontakt</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {[
                { icon: Phone, text: "+383 49 153 002" },
                { icon: Mail, text: "info@turbau.ch" },
                { icon: MapPin, text: "Schweiz" },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  className="flex items-start gap-2 text-xs sm:text-sm"
                  whileHover={{ x: 5 }}
                >
                  <item.icon size={14} className="mt-0.5 flex-shrink-0 sm:w-4 sm:h-4" />
                  <span className="break-words">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex-1 min-w-full sm:min-w-[200px] lg:min-w-[250px]"
          >
            <h4 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3">Newsletter</h4>
            <p className="text-xs sm:text-sm opacity-90 mb-3 sm:mb-4 leading-relaxed">
              Updates zu neuen Designs und Sonderangeboten.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Ihre E-Mail"
                className="bg-primary-foreground/10 border-primary-foreground/20 w-full text-xs sm:text-sm h-9 sm:h-10"
              />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="secondary" size="sm" className="w-full sm:w-auto text-xs sm:text-sm h-9 sm:h-10">
                  Abonnieren
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-primary-foreground/20 mt-4 sm:mt-6 pt-4 sm:pt-6 text-center text-xs sm:text-sm opacity-75"
        >
          <p>&copy; 2024 Türbau.ch. Alle Rechte vorbehalten.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
