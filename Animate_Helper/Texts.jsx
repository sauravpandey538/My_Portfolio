import React from "react";
import { motion } from "framer-motion";
import { Text } from "@chakra-ui/react";
import { Link } from "react-scroll";
import { useTheme } from "../context/WebsiteContext";

function Texts({ text, to }) {
  const { theme } = useTheme();
  return (
    <motion.div
      whileHover={{
        scale: 1.2,
        cursor: "pointer",
      }}
      style={{ width: "auto", height: "auto" }}
    >
      <Link to={to} smooth={true} duration={500}>
        <Text>{text}</Text>
      </Link>
    </motion.div>
  );
}

export default Texts;
