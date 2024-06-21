import { useState } from "react";
import { motion } from "framer-motion";
import { Box, Flex, Text } from "@chakra-ui/react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import Texts from "./Texts";
import { useTheme } from "../context/WebsiteContext";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const menuItems = [
    { text: "home", to: "home" },
    { text: "about", to: "about" },
    { text: "projects", to: "projects" },
    { text: "contacts", to: "contacts" },
  ];
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
          height: "40vh",
          position: "fixed",
          top: "55px",
          left: 0,
          backgroundColor: theme.bg_color,
          color: theme.text_color,
          width: "50vw",
          boxShadow:
            theme.bg_color !== "white"
              ? "1px 1px 20px 2px lightgray"
              : "1px 1px 20px 2px #2E2E2E",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        {menuItems.map((item, index) => (
          <motion.li
            key={index}
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
              {/* <Texts text={item.text} to={item.to} /> */}
              <Texts text={t(`navigation.${item.text}`)} to={item.to} />
            </button>
          </motion.li>
        ))}
        {/* <Texts text={t("navigation.home")} to="home" />
        <Texts text={t("navigation.about")} to="about" />
        <Texts text={t("navigation.nav_project")} to="projects" />
        <Texts text={t("navigation.contacts")} to="contacts" /> */}
      </motion.ul>
    </motion.nav>
  );
}
