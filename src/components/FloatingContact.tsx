import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const FloatingContact = () => {
  const whatsappNumber = "38349153002"; // +383 49 153 002 without + and spaces
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          size="lg"
          onClick={handleWhatsAppClick}
          className="rounded-full shadow-lg z-40 w-12 h-12 sm:w-14 sm:h-14 p-0"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default FloatingContact;
