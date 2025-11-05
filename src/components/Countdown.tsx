import { useEffect, useState } from "react";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-12-07T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const CountdownBox = ({ value, label }: { value: number; label: string }) => (
    <div className="bg-primary rounded-2xl p-6 min-w-[100px] md:min-w-[130px] shadow-lg">
      <div className="text-4xl md:text-5xl font-black text-white mb-2">
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-sm md:text-base font-semibold text-white/90">{label}</div>
    </div>
  );

  return (
    <section className="bg-accent py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-2xl md:text-3xl font-black text-primary mb-8">
          <span className="block md:inline">Último lote se </span>
          <span className="block md:inline">encerra em:</span>
        </h3>
        
        <div className="grid grid-cols-2 md:flex md:justify-center gap-4 max-w-md md:max-w-none mx-auto">
          <CountdownBox value={timeLeft.days} label="Dias" />
          <CountdownBox value={timeLeft.hours} label="Horas" />
          <CountdownBox value={timeLeft.minutes} label="Minutos" />
          <CountdownBox value={timeLeft.seconds} label="Segundos" />
        </div>
      </div>
    </section>
  );
};

export default Countdown;
