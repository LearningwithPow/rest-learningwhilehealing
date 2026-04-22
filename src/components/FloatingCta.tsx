import { useEffect, useState } from "react";

const FloatingCta = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ease-out ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-6 pointer-events-none"
      }`}
      aria-hidden={!visible}
    >
      <a
        href="https://checkout.xendit.co/od/Rest_Reset_EarlyBird"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow hover:scale-[1.02] transition-all duration-500 ease-out px-6 py-3 text-sm md:text-base font-medium"
      >
        Join REST Reset
      </a>
    </div>
  );
};

export default FloatingCta;