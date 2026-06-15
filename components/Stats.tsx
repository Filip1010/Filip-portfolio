"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { number: 30, suffix: "+", label: "Projects Delivered" },
  { number: 15, suffix: "+", label: "Happy Clients" },
  { number: 3, suffix: "+", label: "Years of Experience" },
  { number: 10, suffix: "+", label: "Technologies Mastered" },
];

const useCountUp = (target: number, duration = 1500, start = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
};

const StatCard = ({
  number,
  suffix,
  label,
  animate,
}: {
  number: number;
  suffix: string;
  label: string;
  animate: boolean;
}) => {
  const count = useCountUp(number, 1400, animate);

  return (
    <div
      className="flex flex-col items-center justify-center p-6 lg:p-8 rounded-2xl border border-white/[0.1] hover:border-white/[0.25] transition-all duration-300"
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(135deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <span className="text-4xl lg:text-5xl font-extrabold text-purple">
        {animate ? count : 0}
        {suffix}
      </span>
      <span
        className="text-sm lg:text-base text-center mt-2 font-light"
        style={{ color: "#BEC1DD" }}
      >
        {label}
      </span>
    </div>
  );
};

const Stats = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-12">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} animate={visible} />
        ))}
      </div>
    </section>
  );
};

export default Stats;
