import { useEffect, useRef } from 'react';

const SpaceBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      opacity: number;
    }> = [];

    const planets: Array<{
      x: number;
      y: number;
      radius: number;
      color: string;
      angle: number;
      distance: number;
      speed: number;
      orbitX: number;
      orbitY: number;
    }> = [];

    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.5 + 0.5
      });
    }

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    planets.push(
      {
        x: centerX,
        y: centerY,
        radius: 40,
        color: '#FDB813',
        angle: 0,
        distance: 0,
        speed: 0,
        orbitX: centerX,
        orbitY: centerY
      },
      {
        x: 0,
        y: 0,
        radius: 12,
        color: '#3B82F6',
        angle: 0,
        distance: 150,
        speed: 0.002,
        orbitX: centerX,
        orbitY: centerY
      },
      {
        x: 0,
        y: 0,
        radius: 18,
        color: '#8FA952',
        angle: Math.PI / 3,
        distance: 220,
        speed: 0.0015,
        orbitX: centerX,
        orbitY: centerY
      },
      {
        x: 0,
        y: 0,
        radius: 8,
        color: '#6B7F39',
        angle: Math.PI,
        distance: 100,
        speed: 0.003,
        orbitX: centerX,
        orbitY: centerY
      },
      {
        x: 0,
        y: 0,
        radius: 22,
        color: '#1E3A8A',
        angle: Math.PI / 2,
        distance: 300,
        speed: 0.001,
        orbitX: centerX,
        orbitY: centerY
      },
      {
        x: 0,
        y: 0,
        radius: 6,
        color: '#EA384C',
        angle: Math.PI * 1.5,
        distance: 80,
        speed: 0.004,
        orbitX: centerX,
        orbitY: centerY
      }
    );

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 15, 20, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0 || star.x > canvas.width) star.vx *= -1;
        if (star.y < 0 || star.y > canvas.height) star.vy *= -1;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      planets.forEach((planet, index) => {
        if (index === 0) {
          ctx.beginPath();
          ctx.arc(planet.x, planet.y, planet.radius, 0, Math.PI * 2);
          const gradient = ctx.createRadialGradient(
            planet.x, planet.y, 0,
            planet.x, planet.y, planet.radius
          );
          gradient.addColorStop(0, planet.color);
          gradient.addColorStop(0.5, planet.color + 'CC');
          gradient.addColorStop(1, planet.color + '00');
          ctx.fillStyle = gradient;
          ctx.fill();

          ctx.shadowBlur = 40;
          ctx.shadowColor = planet.color;
          ctx.beginPath();
          ctx.arc(planet.x, planet.y, planet.radius, 0, Math.PI * 2);
          ctx.fillStyle = planet.color;
          ctx.fill();
          ctx.shadowBlur = 0;
        } else {
          planet.angle += planet.speed;
          planet.x = planet.orbitX + Math.cos(planet.angle) * planet.distance;
          planet.y = planet.orbitY + Math.sin(planet.angle) * planet.distance;

          ctx.beginPath();
          ctx.arc(planet.orbitX, planet.orbitY, planet.distance, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
          ctx.lineWidth = 1;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(planet.x, planet.y, planet.radius, 0, Math.PI * 2);
          const gradient = ctx.createRadialGradient(
            planet.x - planet.radius / 3,
            planet.y - planet.radius / 3,
            0,
            planet.x,
            planet.y,
            planet.radius
          );
          gradient.addColorStop(0, planet.color + 'FF');
          gradient.addColorStop(1, planet.color + '99');
          ctx.fillStyle = gradient;
          ctx.fill();

          ctx.shadowBlur = 15;
          ctx.shadowColor = planet.color;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const newCenterX = canvas.width / 2;
      const newCenterY = canvas.height / 2;
      
      planets.forEach(planet => {
        planet.orbitX = newCenterX;
        planet.orbitY = newCenterY;
        if (planet.distance === 0) {
          planet.x = newCenterX;
          planet.y = newCenterY;
        }
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ background: 'linear-gradient(to bottom, #0a0f14, #050810)' }}
    />
  );
};

export default SpaceBackground;
