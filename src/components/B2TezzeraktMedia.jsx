import React from "react";
import { motion } from "framer-motion";
import "./B2TM.css"; // ✅ Make sure this CSS file exists

const BackToTezzeraktBubble = () => {
  return (
    <motion.div
      className="back-to-tezzerakt-bubble"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.1 }} // ✅ Enlarges slightly on hover
      whileTap={{ scale: 0.9 }} // ✅ Shrinks slightly when clicked
      style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      onClick={() => (window.location.href = "https://tezzeraktmedia.space")}
    >
      <motion.span
        animate={{
          y: [0, -5, 0], // Floating effect
          scale: [1, 1.05, 1], // Pulsing effect
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        Back to TezzeraktMedia
      </motion.span>
    </motion.div>
  );
};

export default BackToTezzeraktBubble;
