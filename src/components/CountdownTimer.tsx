import { useEffect, useState } from "react";

type Variant = "prominent" | "minimal";

interface CountdownTimerProps {
  targetDate: string; // ISO string with timezone
  label: string;
  endedMessage: string;
  belowText?: string;
  variant?: Variant;
}

const calc = (target: number) => {
  const diff = target - Date.now();
  if (diff <= 0) return null;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
};

const CountdownTimer = ({
  targetDate,
  label,
  endedMessage,
  belowText,
  variant = "prominent",
}: CountdownTimerProps) => {
  const target = new Date(targetDate).getTime();
  const [time, setTime] = useState(() => calc(target));

  useEffect(() => {
    const id = setInterval(() => setTime(calc(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (!time) {
    return (
      <p className="font-serif text-base md:text-lg text-[#7c6b8a] italic text-center">
        {endedMessage}
      </p>
    );
  }

  const units = [
    { value: time.days, label: "DAYS" },
    { value: time.hours, label: "HRS" },
    { value: time.minutes, label: "MINS" },
    { value: time.seconds, label: "SECS" },
  ];

  if (variant === "minimal") {
    return (
      <div className="flex flex-col items-center gap-2">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">
          {label}
        </p>
        <div className="flex items-baseline gap-2 sm:gap-3">
          {units.map((u, i) => (
            <div key={u.label} className="flex items-baseline gap-2 sm:gap-3">
              <div className="flex flex-col items-center">
                <span className="font-serif text-2xl sm:text-3xl font-medium text-[#7c6b8a] tabular-nums leading-none">
                  {String(u.value).padStart(2, "0")}
                </span>
                <span className="text-[10px] tracking-wider uppercase text-muted-foreground mt-1">
                  {u.label}
                </span>
              </div>
              {i < units.length - 1 && (
                <span className="font-serif text-2xl sm:text-3xl text-[#7c6b8a]/40 leading-none">
                  :
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-3 w-full">
      <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#7c6b8a]">
        {label}
      </p>
      <div className="grid grid-cols-4 gap-2 sm:gap-3 w-full max-w-md">
        {units.map((u) => (
          <div
            key={u.label}
            className="bg-[#f3eef8] rounded-xl py-3 sm:py-4 px-1 flex flex-col items-center shadow-soft"
          >
            <span className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#7c6b8a] tabular-nums leading-none">
              {String(u.value).padStart(2, "0")}
            </span>
            <span className="text-[10px] sm:text-[11px] tracking-wider uppercase text-[#7c6b8a]/70 mt-2 font-medium">
              {u.label}
            </span>
          </div>
        ))}
      </div>
      {belowText && (
        <p className="text-sm text-[#7c6b8a] italic text-center mt-1">
          {belowText}
        </p>
      )}
    </div>
  );
};

export default CountdownTimer;