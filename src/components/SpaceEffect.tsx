import { useEffect, useState } from "react";

interface Star {
  id: number;
  left: number;
  top: number;
  size: number;
  opacity: number;
  animationDuration: number;
  delay: number;
}

const SpaceEffect = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const starArray: Star[] = [];
    const numberOfStars = 100;

    for (let i = 0; i < numberOfStars; i++) {
      starArray.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2 + 1, // 1-3px
        opacity: Math.random() * 0.5 + 0.3, // 0.3-0.8 opacity
        animationDuration: Math.random() * 3 + 2, // 2-5 seconds
        delay: Math.random() * 5, // 0-5 seconds delay
      });
    }

    setStars(starArray);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-accent animate-pulse"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
            animationDelay: `${star.delay}s`,
            boxShadow: `0 0 ${star.size * 2}px rgba(0, 255, 255, ${star.opacity * 0.5})`,
          }}
        />
      ))}
      
      {/* Shooting stars */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={`shooting-${i}`}
            className="absolute h-0.5 w-12 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 animate-[shooting-star_3s_ease-in-out_infinite]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              animationDelay: `${i * 4}s`,
              transform: 'rotate(-45deg)',
            }}
          />
        ))}
      </div>

      {/* Nebula effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full filter blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full filter blur-[120px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
};

export default SpaceEffect;
