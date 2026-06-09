import { useEffect, useState } from "react";
import { X, Leaf, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "rest_reset_popup_shown_v2";

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

    const timer = window.setTimeout(trigger, 15000);
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
      <div className="relative w-full max-w-md bg-card rounded-2xl shadow-glow p-8 md:p-10 text-center border border-primary/10">
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close popup"
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 mb-4">
          <Leaf className="w-4 h-4 text-primary" />
          <span className="text-xs font-medium text-foreground/80 tracking-wide">A Gentle Update</span>
        </div>

        <h3
          id="exit-popup-title"
          className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3 leading-tight"
        >
          REST Reset Registration Is Now Closed
        </h3>
        
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6"
        >
          Our June 2026 group has already begun. Follow Learning While Healing on Facebook to be the first to know when the next REST Reset group opens.
        </p>

        <a
          href="https://www.facebook.com/LearningWhileHealing/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
        >
          <Button variant="calm" size="calm" className="w-full">
            <Facebook className="w-5 h-5" />
            Follow Us on Facebook
          </Button>
        </a>

        <p className="text-xs text-muted-foreground/80 mt-4">
          Stay connected for future groups, workshops, and resources.
        </p>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
