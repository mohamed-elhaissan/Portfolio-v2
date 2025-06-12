export const menuVariants = {
  hidden: {
    y: "-200%",
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for smooth entry
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.8,
      ease: [0.04, 0.62, 0.23, 0.98], // Smooth spring-like entrance
      staggerChildren: 0.1, // If you want to stagger child animations
    },
  },
  exit: {
    y: "-100%",
    scale: 0.95,
    transition: {
      duration: 0.4,
      ease: [0.76, 0, 0.24, 1], // Quick but smooth exit
    },
  },
};

// Menu Items Variants
export const menuItemVariants = {
  hidden: {
    y: "-100%",
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for smooth entry
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.7,
      duration: 0.8,
      ease: [0.04, 0.62, 0.23, 0.98], // Smooth spring-like entrance
      staggerChildren: 0.1, // If you want to stagger child animations
    },
  },
  exit: {
    y: "-50%",
    scale: 0.95,
    transition: {
      duration: 0.4,
      ease: [0.76, 0, 0.24, 1], // Quick but smooth exit
    },
  },
};

// Slide From Top Variant
export const slideFromTopVariants = {
  hidden: {
    opacity: 0,
    y: "-100%",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      staggerChildren: 0.08,
    },
  },
};

// Fade Scale Variant (Clean & Modern)
export const fadeScaleVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.15,
    },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier
    },
  },
};

// Mobile Menu (Full Screen) Variants
export const mobileMenuVariants = {
  hidden: {
    clipPath: "circle(0% at 100% 0%)",
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  visible: {
    clipPath: "circle(150% at 100% 0%)",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};
