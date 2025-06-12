import AppRoutes from "./AppRoutes";
import Hero from "./components/hero/Hero";
import Header from "./components/hero/Header";
import { motion } from "motion/react";

function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex textFont flex-col border text-white items-center justify-start min-h-screen relative"
    >
      <div className="relative z-50 w-full" style={{ zIndex: 100 }}>
        <Header />
      </div>
      <AppRoutes />
    </motion.div>
  );
}

export default App;
