import React from "react";
import { Box } from "@chakra-ui/react";
import { useTheme } from "../context/WebsiteContext";
function ShadowBox({ children }) {
  const { theme } = useTheme();
  return (
    <Box
      h={"max-content"}
      boxShadow={
        theme.bg_color === "white"
          ? "1px 1px 20px 1px lightgray"
          : "1px 1px 20px 1px #2E2E2E"
      }
    >
      {children}
    </Box>
  );
}

export default ShadowBox;
