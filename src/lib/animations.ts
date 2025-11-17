import { Variants } from "framer-motion";

/**
 * Animation variants that respect prefers-reduced-motion
 * Uses transform and opacity only for better performance
 */
export const createAnimationVariants = (
  prefersReducedMotion: boolean
): {
  fadeInUp: Variants;
  fadeIn: Variants;
  fadeInDown: Variants;
  scaleIn: Variants;
} => {
  if (prefersReducedMotion) {
    return {
      fadeInUp: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      },
      fadeIn: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      },
      fadeInDown: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      },
      scaleIn: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      },
    };
  }

  return {
    fadeInUp: {
      initial: { opacity: 0, transform: "translateY(20px)" },
      animate: { opacity: 1, transform: "translateY(0)" },
      exit: { opacity: 0, transform: "translateY(-20px)" },
    },
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    fadeInDown: {
      initial: { opacity: 0, transform: "translateY(-20px)" },
      animate: { opacity: 1, transform: "translateY(0)" },
      exit: { opacity: 0, transform: "translateY(20px)" },
    },
    scaleIn: {
      initial: { opacity: 0, transform: "scale(0.95)" },
      animate: { opacity: 1, transform: "scale(1)" },
      exit: { opacity: 0, transform: "scale(0.95)" },
    },
  };
};

