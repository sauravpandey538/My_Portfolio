import React from "react";
import { Box } from "@chakra-ui/react";
import { useTheme } from "../context/WebsiteContext";
import { CiDark } from "react-icons/ci";
import { IoIosSunny } from "react-icons/io";
function ThemeBtn() {
  const { handleChangeTheme, theme } = useTheme();
  return (
    <Box
      onClick={handleChangeTheme}
      position={"fixed"}
      bottom={"5%"}
      right={"2%"}
      borderRadius={"50%"}
      width={"fit-content"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      backgroundColor={theme.text_color}
      color={theme.bg_color}
      boxShadow={
        theme.bg_color === "white"
          ? "1px 1px 20px 1px #2E2E2E"
          : "1px 1px 20px 1px lightgray"
      }
      zIndex={999}
      cursor="pointer"
    >
      {theme.bg_color === "white" ? (
        <CiDark fontSize={"35px"} />
      ) : (
        <IoIosSunny fontSize={"35px"} />
      )}
    </Box>
  );
}

export default ThemeBtn;
