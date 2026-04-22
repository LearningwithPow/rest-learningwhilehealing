import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "rest_reset_popup_shown";

const ExitIntentPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    let shown = false;
    const trigger = () => {
      if (shown) return;
      shown = true;
      sessionStorage.setItem(STORAGE_KEY, "1");
      setOpen(true);
    };

    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) trigger();
    };

    const timer = window.setTimeout(trigger, 18000);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 animate-gentle-fade"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-popup-title"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-foreground/30 backdrop-blur-sm"
      />
      <div className="relative w-full max-w-md bg-card rounded-2xl shadow-glow p-8 md:p-10 text-center">
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close popup"
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <p className="text-xs font-medium tracking-widest uppercase text-primary/80 mb-3">
          A gentle nudge
        </p>
        <h3
          id="exit-popup-title"
          className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4 leading-tight"
        >
          Still thinking about it?
        </h3>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
          REST Reset starts next week. Small group only. If your mind has been
          carrying too much, this may be your sign to begin.
        </p>

        <a
          href="https://checkout.xendit.co/od/Rest_Reset_EarlyBird"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
        >
          <Button variant="calm" size="calm">
            Yes, Save My Spot
          </Button>
        </a>
        <p className="text-xs text-muted-foreground/80 mt-4">
          Only limited seats available
        </p>
      </div>
    </div>
  );
};

export default ExitIntentPopup;