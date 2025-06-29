import { useEffect, useState } from "react";
import AppRoutes from "./AppRoutes";
import Header from "./components/hero/Header";
import { motion } from "motion/react";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setISLoading] = useState(true);

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

  useEffect(() => {
    if (document.readyState === "complete") {
      setISLoading(false);
    }
  }, []);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex textFont flex-col  text-white items-center justify-start min-h-screen relative"
    >
      <div className="relative z-50 w-full" style={{ zIndex: 100 }}>
        <Header />
      </div>
      <AppRoutes />
    </motion.div>
  );
}

export default App;
