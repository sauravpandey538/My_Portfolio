import React, { useState } from "react";
import { Box, Text, Card } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { IoReorderThree } from "react-icons/io5";

function MobNav() {
  const [click, setClick] = useState(false);

  return (
    <Box zIndex={999}>
      <Box>
        <Text onClick={() => setClick(!click)}>
          <IoReorderThree />
        </Text>
      </Box>
      {click && (
        <motion.div
          style={{
            height: "80%",
            width: "70%",
            position: "fixed",
            top: "50px",
            left: "0",
          }}
          animate={{ x: [-800, 0] }}
          transition={{ duration: 0.5 }}
        >
          <Card h={"100%"} w={"100%"} border={"2px solid black"}></Card>
        </motion.div>
      )}
    </Box>
  );
}

export default MobNav;
