import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { SiMicrosofttranslator } from "react-icons/si";
import { useTheme } from "../context/WebsiteContext";

function TranslateBtn() {
  const { i18n } = useTranslation();
  const { theme } = useTheme();
  const lngs = {
    en: { nativeName: "English" },
    jp: { nativeName: "Japanese" },
  };
  const [currentLangIndex, setCurrentLangIndex] = useState(0);

  const handleToggleLanguage = () => {
    const newIndex = currentLangIndex === 0 ? 1 : 0;
    setCurrentLangIndex(newIndex);
    const newLang = Object.keys(lngs)[newIndex];
    i18n.changeLanguage(newLang);
  };
  return (
    <Box
      onClick={handleToggleLanguage}
      position={"fixed"}
      bottom={"12%"}
      right={"2%"}
      overflow={"hidden"}
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
      <SiMicrosofttranslator fontSize={"35px"} />
    </Box>
  );
}

export default TranslateBtn;
