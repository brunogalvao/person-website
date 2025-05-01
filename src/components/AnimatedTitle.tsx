import { motion } from "framer-motion";

const AnimatedTitle = ({ texto }: { texto: string }) => {
  return (
    <motion.h1
      className=""
      initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {texto}
    </motion.h1>
  );
};

export default AnimatedTitle;
