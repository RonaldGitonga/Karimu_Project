"use client";

import dynamic from "next/dynamic";

const CountUp = dynamic(() => import("react-countup"), { ssr: false });

interface AnimatedCounterProps {
  start?: number;
  end: number;
  duration?: number;
  separator?: string;
}

export default function AnimatedCounter({
  start = 0,
  end,
  duration = 3,
  separator = "",
}: AnimatedCounterProps) {
  return (
    <CountUp
      start={start}
      end={end}
      duration={duration}
      separator={separator}
      enableScrollSpy
      scrollSpyOnce
    />
  );
}
