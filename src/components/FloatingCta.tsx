import { useEffect, useState } from "react";
import { Flame } from "lucide-react";

const FloatingCta = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-all duration-500 ease-out ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-6 pointer-events-none"
      }`}
      aria-hidden={!visible}
    >
      <div className="bg-card/95 backdrop-blur-md border-t border-primary/10 px-4 py-4 md:py-5">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
              <Flame className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold text-primary tracking-wide uppercase">Early Bird Until July 11</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Join for ₱999 (Save ₱500) • Starts July 14
            </p>
          </div>
          
          <a
            href="https://checkout.xendit.co/od/RESTJuly2026"
            className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow hover:scale-[1.02] transition-all duration-500 ease-out px-8 py-4 text-base font-medium whitespace-nowrap"
          >
            Yes, I Need This
          </a>
        </div>
      </div>
    </div>
  );
};

export default FloatingCta;
