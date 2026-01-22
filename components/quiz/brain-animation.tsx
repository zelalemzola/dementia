"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface BrainAnimationProps {
  isAnalyzing?: boolean;
}

export function BrainAnimation({ isAnalyzing = false }: BrainAnimationProps) {
  const [scanPosition, setScanPosition] = useState(0);
  const [activeRegion, setActiveRegion] = useState(0);

  useEffect(() => {
    if (!isAnalyzing) return;

    const scanInterval = setInterval(() => {
      setScanPosition((prev) => (prev + 1) % 100);
    }, 50);

    const regionInterval = setInterval(() => {
      setActiveRegion((prev) => (prev + 1) % 6);
    }, 800);

    return () => {
      clearInterval(scanInterval);
      clearInterval(regionInterval);
    };
  }, [isAnalyzing]);

  const regions = [
    { name: "Frontal Lobe", cx: 85, cy: 65, r: 18 },
    { name: "Temporal Lobe", cx: 55, cy: 115, r: 16 },
    { name: "Parietal Lobe", cx: 120, cy: 55, r: 17 },
    { name: "Occipital Lobe", cx: 155, cy: 95, r: 14 },
    { name: "Hippocampus", cx: 100, cy: 110, r: 12 },
    { name: "Prefrontal Cortex", cx: 55, cy: 70, r: 14 },
  ];

  return (
    <div className="relative flex items-center justify-center">
      {/* Outer glow ring */}
      <motion.div
        animate={{
          boxShadow: [
            "0 0 40px 10px rgba(0, 200, 200, 0.2)",
            "0 0 60px 20px rgba(0, 200, 200, 0.3)",
            "0 0 40px 10px rgba(0, 200, 200, 0.2)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute h-80 w-80 rounded-full"
      />

      {/* Main brain SVG - Anatomically accurate human brain */}
      <svg
        viewBox="0 0 200 160"
        className="h-72 w-72 md:h-80 md:w-80"
        fill="none"
      >
        {/* Glow filter */}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Brain stem */}
        <motion.path
          d="M95 130 Q90 140 88 150 Q87 155 90 158 L110 158 Q113 155 112 150 Q110 140 105 130"
          stroke="var(--primary)"
          strokeWidth="1.5"
          fill="url(#brainGradient)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />

        {/* Cerebellum (back lower part) */}
        <motion.path
          d="M130 115 Q145 120 155 115 Q165 108 168 95 Q165 105 155 110 Q145 112 138 108 Q148 115 158 108 Q163 100 160 90"
          stroke="var(--primary)"
          strokeWidth="1.5"
          fill="none"
          strokeOpacity="0.7"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />

        {/* Main brain outline - realistic cerebrum shape */}
        <motion.path
          d="M100 25 
             C75 25 55 35 45 50 
             Q35 65 35 85 
             Q35 100 45 115 
             Q55 130 80 135 
             Q95 138 100 135
             Q105 138 120 135 
             Q145 130 155 115 
             Q165 100 165 85 
             Q165 65 155 50 
             C145 35 125 25 100 25"
          stroke="var(--primary)"
          strokeWidth="2"
          fill="url(#brainGradient)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Central fissure (divides frontal and parietal) */}
        <motion.path
          d="M100 30 Q98 50 100 70 Q102 90 100 105"
          stroke="var(--primary)"
          strokeWidth="1.5"
          strokeOpacity="0.8"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        />

        {/* Lateral fissure (Sylvian fissure) */}
        <motion.path
          d="M50 90 Q65 85 85 95 Q100 100 110 95"
          stroke="var(--primary)"
          strokeWidth="1.5"
          strokeOpacity="0.8"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />

        {/* Frontal lobe gyri (folds) */}
        <motion.path
          d="M55 45 Q65 40 75 48 Q85 55 78 65"
          stroke="var(--primary)"
          strokeWidth="1.2"
          strokeOpacity="0.6"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        />
        <motion.path
          d="M50 60 Q60 55 70 62 Q80 70 72 80"
          stroke="var(--primary)"
          strokeWidth="1.2"
          strokeOpacity="0.6"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        />
        <motion.path
          d="M48 75 Q58 70 68 78 Q75 85 68 92"
          stroke="var(--primary)"
          strokeWidth="1.2"
          strokeOpacity="0.6"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        />
        <motion.path
          d="M78 38 Q88 33 95 40"
          stroke="var(--primary)"
          strokeWidth="1.2"
          strokeOpacity="0.6"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.45 }}
        />

        {/* Parietal lobe gyri */}
        <motion.path
          d="M110 38 Q120 32 130 40 Q140 48 132 58"
          stroke="var(--primary)"
          strokeWidth="1.2"
          strokeOpacity="0.6"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        />
        <motion.path
          d="M115 55 Q125 50 135 58 Q145 66 138 75"
          stroke="var(--primary)"
          strokeWidth="1.2"
          strokeOpacity="0.6"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.55 }}
        />
        <motion.path
          d="M125 70 Q135 65 145 72 Q152 80 148 88"
          stroke="var(--primary)"
          strokeWidth="1.2"
          strokeOpacity="0.6"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        />

        {/* Temporal lobe gyri */}
        <motion.path
          d="M52 100 Q62 95 72 102 Q82 110 75 118"
          stroke="var(--primary)"
          strokeWidth="1.2"
          strokeOpacity="0.6"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.65 }}
        />
        <motion.path
          d="M60 115 Q70 110 80 118 Q88 125 82 132"
          stroke="var(--primary)"
          strokeWidth="1.2"
          strokeOpacity="0.6"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.7 }}
        />

        {/* Occipital lobe gyri */}
        <motion.path
          d="M140 90 Q150 85 158 92"
          stroke="var(--primary)"
          strokeWidth="1.2"
          strokeOpacity="0.6"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.7 }}
        />
        <motion.path
          d="M135 105 Q145 100 155 105"
          stroke="var(--primary)"
          strokeWidth="1.2"
          strokeOpacity="0.6"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.75 }}
        />

        {/* Brain regions - highlight circles */}
        {regions.map((region, i) => (
          <g key={region.name}>
            <motion.circle
              cx={region.cx}
              cy={region.cy}
              r={region.r}
              fill={activeRegion === i ? "var(--primary)" : "transparent"}
              fillOpacity={activeRegion === i ? 0.4 : 0}
              stroke={activeRegion === i ? "var(--primary)" : "transparent"}
              strokeWidth={activeRegion === i ? 2 : 0}
              animate={{
                scale: activeRegion === i ? [1, 1.15, 1] : 1,
                fillOpacity: activeRegion === i ? [0.2, 0.5, 0.2] : 0,
              }}
              transition={{ duration: 0.8, repeat: activeRegion === i ? Infinity : 0 }}
            />

            {/* Neural connections radiating from active region */}
            {isAnalyzing && activeRegion === i && (
              <>
                {[...Array(8)].map((_, j) => {
                  const angle = (j / 8) * Math.PI * 2;
                  const endX = region.cx + Math.cos(angle) * 35;
                  const endY = region.cy + Math.sin(angle) * 35;
                  return (
                    <motion.line
                      key={j}
                      x1={region.cx}
                      y1={region.cy}
                      x2={endX}
                      y2={endY}
                      stroke="var(--primary)"
                      strokeWidth="1"
                      strokeOpacity="0.6"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: [0, 1, 0] }}
                      transition={{
                        duration: 0.8,
                        delay: j * 0.08,
                        repeat: Infinity,
                      }}
                    />
                  );
                })}
              </>
            )}
          </g>
        ))}

        {/* Scanning line */}
        {isAnalyzing && (
          <motion.line
            x1="30"
            y1={scanPosition * 1.4 + 20}
            x2="170"
            y2={scanPosition * 1.4 + 20}
            stroke="var(--primary)"
            strokeWidth="2"
            strokeOpacity="0.8"
            filter="url(#glow)"
          />
        )}

        {/* Neural activity pulse dots */}
        {isAnalyzing &&
          [...Array(12)].map((_, i) => {
            const positions = [
              { x: 65, y: 55 }, { x: 85, y: 45 }, { x: 55, y: 75 },
              { x: 75, y: 85 }, { x: 120, y: 50 }, { x: 140, y: 65 },
              { x: 150, y: 90 }, { x: 60, y: 110 }, { x: 80, y: 120 },
              { x: 100, y: 95 }, { x: 130, y: 100 }, { x: 95, y: 60 }
            ];
            return (
              <motion.circle
                key={i}
                cx={positions[i].x}
                cy={positions[i].y}
                r="2.5"
                fill="var(--primary)"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.2, 0],
                }}
                transition={{
                  duration: 1.2,
                  delay: i * 0.15,
                  repeat: Infinity,
                }}
              />
            );
          })}

        {/* Subtle pulsing effect for idle state */}
        {!isAnalyzing && (
          <motion.circle
            cx="100"
            cy="80"
            r="60"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="0.5"
            strokeOpacity="0.3"
            animate={{
              scale: [1, 1.05, 1],
              strokeOpacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
      </svg>

      {/* Active region label */}
      {isAnalyzing && (
        <motion.div
          key={activeRegion}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary border border-primary/30"
        >
          Analyzing: {regions[activeRegion].name}
        </motion.div>
      )}
    </div>
  );
}
