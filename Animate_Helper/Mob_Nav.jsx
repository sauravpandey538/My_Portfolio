import { useState } from "react";
import { motion } from "framer-motion";
import { Box, Flex, Text } from "@chakra-ui/react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import Texts from "./Texts";
import { useTheme } from "../context/WebsiteContext";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function MobNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="menu"
      style={{
        height: "50px",
        position: "relative",
        boxShadow: "1px 1px 10px 1px lightgray",
        backgroundColor: theme.bg_color,
        color: theme.text_color,
      }}
    >
      <Flex
        w={"100%"}
        justifyContent="center"
        alignItems="center"
        position="relative"
        py={"12px"}
      >
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsOpen(!isOpen)}
          style={{ position: "absolute", left: "10px" }}
        >
          <motion.div
            variants={{
              open: { rotate: 0 },
              closed: { rotate: 0 },
            }}
            transition={{ duration: 0.2 }}
            style={{
              originY: 0.55,
              fontSize: "25px",
            }}
          >
            <IoReorderThreeOutline />
          </motion.div>
        </motion.button>
        <Box>
          <Text>Saurav.dev</Text>
        </Box>
      </Flex>
      <motion.ul
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{
          pointerEvents: isOpen ? "auto" : "none",
          height: "60vh",
          position: "fixed",
          top: "55px",
          left: 0,
          backgroundColor: theme.bg_color,
          color: theme.text_color,
          width: "50vw",
          boxShadow: "rgba(0,0,0,0.2) 0px 4px 80px ", // this is not working why?
          // border: "2px solid black",
        }}
      >
        <motion.li
          variants={itemVariants}
          style={{
            height: "50px",
            width: "100%",
            textAlign: "right",
            fontWeight: 500,
            padding: "10px 20px",
            pointerEvents: "visibleFill",
          }}
          onClick={() => setIsOpen(false)}
        >
          <button style={{ fontSize: "27px" }}>
            {" "}
            <MdCancel />
          </button>
        </motion.li>
        <motion.li
          variants={itemVariants}
          style={{
            height: "50px",
            width: "100%",
            textAlign: "center",
            fontWeight: 500,
          }}
          onClick={() => setIsOpen(false)}
        >
          <button>
            <Texts text="Home" to="home" />
          </button>
        </motion.li>
        <motion.li
          variants={itemVariants}
          style={{
            height: "50px",
            width: "100%",
            textAlign: "center",
            fontWeight: 500,
          }}
          onClick={() => setIsOpen(false)}
        >
          <Texts text="About" to="about" />
        </motion.li>
        <motion.li
          variants={itemVariants}
          style={{
            height: "50px",
            width: "100%",
            textAlign: "center",
            fontWeight: 500,
          }}
          onClick={() => setIsOpen(false)}
        >
          <Texts text="Projects" to="projects" />
        </motion.li>
        <motion.li
          variants={itemVariants}
          style={{
            height: "50px",
            width: "100%",
            textAlign: "center",
            fontWeight: 500,
          }}
          onClick={() => setIsOpen(false)}
        >
          <Texts text="Contacts" to="contacts" />
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
}
