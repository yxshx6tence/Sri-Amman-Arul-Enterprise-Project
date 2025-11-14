import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "919444239070"; // Replace with actual number
  const message = "Hello! I'm interested in your sand and transport services.";
  const whatsappUrl = `https://wa.me/${9444239070}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        size="lg"
        className="rounded-full h-14 w-14 bg-[#25D366] hover:bg-[#20BA5A] shadow-lg hover:shadow-xl transition-all hover:scale-110"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </Button>
    </a>
  );
};

export default WhatsAppButton;
