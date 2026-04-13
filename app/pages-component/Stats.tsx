"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 1, suffix: "k+", label: "Volunteers Participated" },
  { value: 80, suffix: "k+", label: "Veteran Home Completed" },
  { value: 20, suffix: "+", label: "Years in Business" },
  { value: 10, suffix: "M+", label: "Customer Worldwide" },
];

function CountUp({
  end,
  suffix,
  start,
  duration = 1600,
}: {
  end: number;
  suffix: string;
  start: boolean;
  duration?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let frameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = Math.floor(progress * end);

      setCount(current);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [start, end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#F4FBE9] py-10 lg:py-12 px-4 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 gap-x-2 gap-y-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat, i) => (
            <div data-aos="fade-up" data-aos-delay={i * 100} key={i} className=" text-center cursor-pointer transition-all duration-300 bg-white rounded-lg p-3 md:p-6 border border-[#7cc242] ">
              <div className="text-[22px] font-semibold leading-none text-[#7cc242] lg:text-[40px]">
                <CountUp
                  end={stat.value}
                  suffix={stat.suffix}
                  start={startCount}
                />
              </div>

              <div className="mt-3 text-[13px] font-medium leading-5 text-black sm:text-[14px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}