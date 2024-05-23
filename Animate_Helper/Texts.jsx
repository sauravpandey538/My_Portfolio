import React from "react";
import { motion } from "framer-motion";
import { Text } from "@chakra-ui/react";
import { Link } from "react-scroll";

function Texts({ text, to }) {
  return (
    <motion.div
      whileHover={{ scale: 1.2, color: "black" }}
      style={{ width: "auto", height: "auto" }}
    >
      <Link to={to} smooth={true} duration={500}>
        <Text>{text}</Text>
      </Link>
    </motion.div>
  );
}

export default Texts;
