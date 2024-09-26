"use client";

import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

interface AnimatedCounterProps {
  amount: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ amount }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // クライアントサイドでのみレンダリングするため、初回は何も表示しない
  }

  return (
    <div className="w-full">
      <CountUp decimals={2} decimal="," prefix="$" end={amount} />
    </div>
  );
};

export default AnimatedCounter;
