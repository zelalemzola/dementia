"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Brain } from "lucide-react";

interface BrainLogoAnimationProps {
  isAnalyzing?: boolean;
  size?: "sm" | "md" | "lg";
}

export function BrainLogoAnimation({ isAnalyzing = false, size = "lg" }: BrainLogoAnimationProps) {
  const [activeRegion, setActiveRegion] = useState(0);
  const [pulsePoints, setPulsePoints] = useState<{ x: number; y: number; id: number }[]>([]);

  const sizeClasses = {
    sm: "h-32 w-32",
    md: "h-48 w-48",
    lg: "h-64 w-64 md:h-80 md:w-80",
  };

  const iconSizes = {
    sm: "h-16 w-16",
    md: "h-24 w-24",
    lg: "h-32 w-32 md:h-40 md:w-40",
  };

  const regions = [
    { name: "Frontal Lobe", angle: -60, distance: 45 },
    { name: "Temporal Lobe", angle: -120, distance: 42 },
    { name: "Parietal Lobe", angle: 0, distance: 48 },
    { name: "Occipital Lobe", angle: 60, distance: 45 },
    { name: "Hippocampus", angle: 120, distance: 40 },
    { name: "Prefrontal Cortex", angle: 180, distance: 42 },
  ];

  useEffect(() => {
    if (!isAnalyzing) return;

    const regionInterval = setInterval(() => {
      setActiveRegion((prev) => (prev + 1) % regions.length);
    }, 1200);

    return () => clearInterval(regionInterval);
  }, [isAnalyzing, regions.length]);

  useEffect(() => {
    if (!isAnalyzing) return;

    const pulseInterval = setInterval(() => {
      const angle = Math.random() * Math.PI * 2;
      const distance = 20 + Math.random() * 25;
      const newPoint = {
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        id: Date.now(),
      };
      setPulsePoints((prev) => [...prev.slice(-12), newPoint]);
    }, 200);

    return () => clearInterval(pulseInterval);
  }, [isAnalyzing]);

  return (
    <div className="relative flex items-center justify-center">
      {/* Outer glow rings */}
      <motion.div
        animate={isAnalyzing ? {
          boxShadow: [
            "0 0 40px 10px rgba(0, 200, 200, 0.15)",
            "0 0 80px 30px rgba(0, 200, 200, 0.25)",
            "0 0 40px 10px rgba(0, 200, 200, 0.15)",
          ],
        } : {
          boxShadow: "0 0 40px 10px rgba(0, 200, 200, 0.1)",
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className={`absolute ${sizeClasses[size]} rounded-full`}
      />

      {/* Rotating scan ring */}
      {isAnalyzing && (
        <motion.div
          className={`absolute ${sizeClasses[size]} rounded-full border-2 border-transparent`}
          style={{
            borderTopColor: "var(--primary)",
            borderRightColor: "var(--primary)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      )}

      {/* Secondary rotating ring */}
      {isAnalyzing && (
        <motion.div
          className={`absolute rounded-full border border-primary/30`}
          style={{
            width: size === "lg" ? "90%" : "85%",
            height: size === "lg" ? "90%" : "85%",
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
      )}

      {/* Region highlight circles */}
      {isAnalyzing && regions.map((region, i) => {
        const x = Math.cos((region.angle * Math.PI) / 180) * region.distance;
        const y = Math.sin((region.angle * Math.PI) / 180) * region.distance;
        const isActive = i === activeRegion;

        return (
          <motion.div
            key={region.name}
            className="absolute"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <motion.div
              className={`rounded-full ${isActive ? "bg-primary" : "bg-primary/30"}`}
              animate={isActive ? {
                scale: [1, 1.5, 1],
                opacity: [0.8, 1, 0.8],
              } : {
                scale: 1,
                opacity: 0.3,
              }}
              transition={{ duration: 0.8, repeat: isActive ? Infinity : 0 }}
              style={{
                width: isActive ? 12 : 6,
                height: isActive ? 12 : 6,
              }}
            />

            {/* Connection lines from active region to center */}
            {isActive && (
              <motion.div
                className="absolute left-1/2 top-1/2 h-px bg-gradient-to-r from-primary to-transparent"
                style={{
                  width: region.distance,
                  transform: `rotate(${region.angle + 180}deg)`,
                  transformOrigin: "left center",
                }}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            )}
          </motion.div>
        );
      })}

      {/* Neural pulse points */}
      {isAnalyzing && pulsePoints.map((point) => (
        <motion.div
          key={point.id}
          className="absolute rounded-full bg-primary"
          style={{
            left: `calc(50% + ${point.x}px)`,
            top: `calc(50% + ${point.y}px)`,
            width: 4,
            height: 4,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 1 }}
        />
      ))}

      {/* Central Brain Icon */}
      <motion.div
        className={`relative z-10 rounded-full bg-card border-2 border-primary/50 flex items-center justify-center ${sizeClasses[size]}`}
        animate={isAnalyzing ? {
          borderColor: ["rgba(0, 200, 200, 0.5)", "rgba(0, 200, 200, 1)", "rgba(0, 200, 200, 0.5)"],
        } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {/* Inner glow */}
        <div className="absolute inset-4 rounded-full bg-primary/10" />
        
        {/* Brain icon */}
        <motion.div
          animate={isAnalyzing ? {
            scale: [1, 1.05, 1],
          } : {
            scale: [1, 1.02, 1],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Brain className={`${iconSizes[size]} text-primary drop-shadow-lg`} style={{ filter: "drop-shadow(0 0 20px rgba(0, 200, 200, 0.5))" }} />
        </motion.div>

        {/* Scanning line overlay */}
        {isAnalyzing && (
          <motion.div
            className="absolute inset-0 overflow-hidden rounded-full"
          >
            <motion.div
              className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
              animate={{ top: ["-10%", "110%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        )}
      </motion.div>

      {/* Active region label */}
      {isAnalyzing && (
        <motion.div
          key={activeRegion}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary border border-primary/30"
        >
          Scanning: {regions[activeRegion].name}
        </motion.div>
      )}
    </div>
  );
}
