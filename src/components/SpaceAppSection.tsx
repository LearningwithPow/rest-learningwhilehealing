import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import screen1 from "@/assets/space/space-2.png.asset.json";
import screen2 from "@/assets/space/space-9.png.asset.json";
import screen3 from "@/assets/space/space-8.png.asset.json";
import screen4 from "@/assets/space/space-3.png.asset.json";

const screens = [
  {
    src: screen1.url,
    alt: "SPACE app home screen with today's gentle reset",
    label: "Home",
    hotspot: { top: "38%", left: "50%" },
    callout: {
      icon: "🌿",
      title: "Daily Check-in",
      body: "Start your day with intention and peace.",
    },
  },
  {
    src: screen2.url,
    alt: "SPACE Insights screen showing your journey and streak",
    label: "Insights",
    hotspot: { top: "34%", left: "50%" },
    callout: {
      icon: "📈",
      title: "Peace Insights",
      body: "See your progress and celebrate your Journey of Peace.",
    },
  },
  {
    src: screen3.url,
    alt: "SPACE Scripture reflection with a verse for today",
    label: "Scripture",
    hotspot: { top: "38%", left: "50%" },
    callout: {
      icon: "📖",
      title: "Scripture Reflection",
      body: "Reflect on God's Word with practical coaching prompts.",
    },
  },
  {
    src: screen4.url,
    alt: "SPACE Today's SPACE guided prayer and practice",
    label: "Today",
    hotspot: { top: "55%", left: "50%" },
    callout: {
      icon: "🙏",
      title: "Guided Prayer",
      body: "Pause and reconnect with God in just a few minutes.",
    },
  },
];

const chips = [
  { icon: "🌿", label: "Daily Check-ins" },
  { icon: "🙏", label: "Guided Prayer" },
  { icon: "📖", label: "Scripture Reflections" },
  { icon: "✍️", label: "Guided Journaling" },
  { icon: "✨", label: "Peace Practices" },
  { icon: "📈", label: "Mood & Progress Insights" },
];

const timeline = [
  {
    date: "July 27",
    icon: "📱",
    text: "Receive complimentary SPACE Premium access",
  },
  {
    date: "July 28–30",
    icon: "💜",
    text: "Attend REST Reset live on Zoom. Practice each day's lesson inside SPACE.",
  },
  {
    date: "July 30",
    icon: "🌱",
    text: "Receive an invitation to join the exclusive SPACE Founders Circle",
  },
];

const PhoneMockup = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [showHotspot, setShowHotspot] = useState(false);
  const [showCallout, setShowCallout] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (paused) return;
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % screens.length);
    }, 4000);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [paused]);

  const activate = () => {
    setPaused(true);
    setShowHotspot(true);
  };
  const deactivate = () => {
    setPaused(false);
    setShowHotspot(false);
    setShowCallout(false);
  };

  const current = screens[index];

  return (
    <div
      className="relative flex justify-center items-center py-8"
      onMouseEnter={activate}
      onMouseLeave={deactivate}
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-[340px] h-[340px] rounded-full bg-gradient-to-br from-primary/25 via-accent/30 to-[hsl(160,40%,75%)]/20 blur-3xl" />
      </div>

      <motion.div
        animate={prefersReducedMotion ? {} : { y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        {/* Phone frame */}
        <button
          type="button"
          aria-label="Preview the SPACE app. Tap to explore features."
          onClick={() => {
            if (paused) {
              setShowCallout((v) => !v);
            } else {
              activate();
            }
          }}
          onFocus={activate}
          onBlur={deactivate}
          className="relative block w-[260px] sm:w-[288px] h-[560px] sm:h-[620px] rounded-[3rem] bg-[#1a1424] p-[10px] shadow-[0_30px_80px_-20px_hsl(270,40%,40%,0.35)] focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 focus-visible:ring-offset-4 focus-visible:ring-offset-transparent"
        >
          {/* Screen */}
          <div className="relative w-full h-full rounded-[2.4rem] overflow-hidden bg-card">
            {/* Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#1a1424] rounded-full z-20" />

            <AnimatePresence mode="wait">
              <motion.img
                key={current.src}
                src={current.src}
                alt={current.alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </AnimatePresence>

            {/* Hotspot */}
            {showHotspot && (
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                style={{ top: current.hotspot.top, left: current.hotspot.left }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
                aria-hidden
              >
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/60 opacity-75" />
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-primary shadow-lg shadow-primary/40 ring-4 ring-background/70" />
                </span>
              </motion.span>
            )}

            {/* Callout */}
            <AnimatePresence>
              {showCallout && paused && (
                <motion.div
                  key={current.label + "-callout"}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-4 right-4 bottom-8 z-20 bg-card/95 backdrop-blur-md rounded-2xl p-4 shadow-soft border border-primary/10 text-left"
                  role="status"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl leading-none">{current.callout.icon}</span>
                    <div>
                      <p className="font-serif text-base text-foreground font-semibold leading-tight">
                        {current.callout.title}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1 leading-snug">
                        {current.callout.body}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </button>

        {/* Screen dots */}
        <div className="flex justify-center gap-2 mt-6" aria-hidden>
          {screens.map((s, i) => (
            <span
              key={s.label}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index ? "w-6 bg-primary" : "w-1.5 bg-primary/25"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const SpaceAppSection = () => {
  return (
    <section className="section-calm bg-gradient-to-b from-background via-[hsl(270,25%,96%)] to-background overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Phone (order-first on mobile) */}
          <div className="lg:order-2">
            <ScrollReveal delay={0.1}>
              <PhoneMockup />
            </ScrollReveal>
          </div>

          {/* Copy */}
          <div className="lg:order-1 text-center lg:text-left">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-xs sm:text-sm font-medium text-primary/90 mb-6">
                <span aria-hidden>✨</span>
                Included with every REST Reset registration
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-[1.15] mb-6">
                REST Reset Doesn't End When Zoom Ends
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                <p>
                  Every REST Reset participant receives a complimentary 5-day Premium Experience with{" "}
                  <span className="text-foreground font-medium">SPACE</span>, beginning July 27, one day before our workshop begins.
                </p>
                <p>
                  Throughout REST Reset, SPACE becomes your daily companion where you can practice what you're learning through guided reflection, Scripture, prayer, journaling, and peaceful habits.
                </p>
                <p>
                  By the end of the workshop, you won't just understand the principles. You'll already be living them.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <ul className="flex flex-wrap gap-2 sm:gap-2.5 justify-center lg:justify-start">
                {chips.map((c, i) => (
                  <motion.li
                    key={c.label}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: 0.08 * i, ease: [0.25, 0.4, 0.25, 1] }}
                    className="inline-flex items-center gap-2 rounded-full bg-card border border-primary/10 shadow-soft px-4 py-2 text-sm text-foreground"
                  >
                    <span aria-hidden>{c.icon}</span>
                    <span>{c.label}</span>
                  </motion.li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-20 md:mt-28">
          <ScrollReveal>
            <p className="text-center text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-primary/70 mb-8">
              Your 5-Day Journey
            </p>
          </ScrollReveal>

          <div className="relative">
            {/* Desktop connecting line */}
            <div
              aria-hidden
              className="hidden md:block absolute top-8 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
            />
            {/* Mobile vertical line */}
            <div
              aria-hidden
              className="md:hidden absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent"
            />

            <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
              {timeline.map((step, i) => (
                <motion.li
                  key={step.date}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.15 * i, ease: [0.25, 0.4, 0.25, 1] }}
                  className="relative pl-20 md:pl-0 md:text-center"
                >
                  <div className="absolute left-0 md:relative md:left-auto md:mx-auto w-16 h-16 rounded-full bg-card border border-primary/20 shadow-soft flex items-center justify-center text-2xl md:mb-5">
                    <span aria-hidden>{step.icon}</span>
                  </div>
                  <div className="md:px-4">
                    <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary/70 mb-2">
                      {step.date}
                    </p>
                    <p className="text-base text-foreground/90 leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpaceAppSection;