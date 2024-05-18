import React from "react";
import { motion } from "framer-motion";
import { Link } from "@chakra-ui/react";
function Icons({ name: IconComponent, link }) {
  return (
    <Link href={link}>
      <motion.div
        whileHover={{ scale: 1.2 }}
        style={{ width: "auto", height: "auto", fontSize: "25px" }}
      >
        <IconComponent style={{ color: "fossil" }} />
      </motion.div>
    </Link>
  );
}

export default Icons;
