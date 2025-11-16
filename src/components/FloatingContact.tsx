import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FloatingContact = () => {
  return (
    <Link to="/contact">
      <Button
        size="lg"
        className="fixed bottom-6 right-6 rounded-full shadow-lg hover:scale-110 transition-transform z-40 w-14 h-14 p-0"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </Link>
  );
};

export default FloatingContact;
