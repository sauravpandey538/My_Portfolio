import React from "react";
import { motion } from "framer-motion";
import { Text } from "@chakra-ui/react";
function Texts({ text }) {
  return (
    <motion.div
      whileHover={{ scale: 1.2, color: "black" }}
      style={{ width: "auto", height: "auto" }}
    >
      <Text>{text}</Text>
    </motion.div>
  );
}

export default Texts;
