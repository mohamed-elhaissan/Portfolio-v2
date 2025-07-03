import { motion } from "motion/react";
const WordAnimated = ({ value }) => {
  return (
    <p>
        {value.split(" ").map((word, index) => (
            <motion.span
            key={index}
            className="inline-block mx-1 text-7xl text-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            >
            {word}
            </motion.span>
        ))}
    </p>
  );
};

export default WordAnimated;
