import { useEffect, useState } from "react";
import Header from "./components/hero/Header";
import { motion } from "motion/react";
import Loader from "./components/Loader.jsx";
import Hero from "./components/hero/Hero.jsx";
import Work from "./components/work/Work.jsx";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
function App() {
  const [isLoading, setIsLoading] = useState(true);

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
    const handleLoader = () => {
      setIsLoading(false);
    };
    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", handleLoader);
    }
    return () => {
      window.removeEventListener("load", handleLoader);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <motion.div
          className="flex  textFont flex-col selection:bg-[#FF8200] selection:text-black  text-white items-center justify-start min-h-screen relative"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
        

          <div className="flex flex-col min-h-screen">
            <Header />
            <Hero />
          </div>
          <About />
          <Work />
          <Contact />
        </motion.div>
      )}
    </>
  );
}

export default App;
