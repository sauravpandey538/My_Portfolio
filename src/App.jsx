import React, { useState } from "react";
import Navigation from "../HomePage_Components/Navigation";
import { Box } from "@chakra-ui/react";
import MyDetail from "../HomePage_Components/My_Details/MyDetail";
import AboutMe from "../HomePage_Components/About_Me/About_Me";
import ProjectMainPage from "../HomePage_Components/Project_List/Project_Main_Page";
import Footer from "../HomePage_Components/Footer/Footer";
import ContactMe from "../HomePage_Components/Contact_Me/Contact_Me";
import profile from "../HomePage_Components/public/profilepic.jpeg";
import { useTheme } from "../context/WebsiteContext";
import { CiDark } from "react-icons/ci";
import { IoIosSunny } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { SiMicrosofttranslator } from "react-icons/si";

function App() {
  const { theme, handleChangeTheme } = useTheme();
  const { i18n } = useTranslation();
  const lngs = {
    en: { nativeName: "English" },
    jp: { nativeName: "Japanese" },
  };

  const [currentLangIndex, setCurrentLangIndex] = useState(0); // State to track current language index

  const handleToggleLanguage = () => {
    const newIndex = currentLangIndex === 0 ? 1 : 0; // Toggle between 0 and 1 (English and Japanese)
    setCurrentLangIndex(newIndex);
    const newLang = Object.keys(lngs)[newIndex];
    i18n.changeLanguage(newLang); // Change the language using i18next
  };

  return (
    <Box>
      {/* Navigation Component */}
      <Box
        h={"max-content"}
        boxShadow={
          theme.bg_color === "white"
            ? "1px 1px 20px 1px lightgray"
            : "1px 1px 20px 1px #2E2E2E"
        }
        position={"sticky"}
        top={0}
        right={0}
        zIndex={999}
      >
        <Navigation />
      </Box>

      {/* Main Content Sections */}
      <Box id="home">
        {/* MyDetail Component */}
        <Box
          boxShadow={
            theme.bg_color === "white"
              ? "1px 1px 20px 1px lightgray"
              : "1px 1px 20px 1px #2E2E2E"
          }
        >
          <MyDetail profile={profile} />
        </Box>

        {/* AboutMe Component */}
        <Box
          boxShadow={
            theme.bg_color === "white"
              ? "1px 1px 20px 1px lightgray"
              : "1px 1px 20px 1px #2E2E2E"
          }
          mt={3}
        >
          <AboutMe />
        </Box>

        {/* ProjectMainPage Component */}
        <Box
          boxShadow={
            theme.bg_color === "white"
              ? "1px 1px 20px 1px lightgray"
              : "1px 1px 20px 1px #2E2E2E"
          }
          mt={3}
        >
          <ProjectMainPage profile={profile} />
        </Box>

        {/* ContactMe and Footer Components */}
        <Box
          boxShadow={
            theme.bg_color === "white"
              ? "1px 1px 20px 1px lightgray"
              : "1px 1px 20px 1px #2E2E2E"
          }
          mt={3}
        >
          <ContactMe />
          <Footer />
        </Box>
      </Box>

      {/* Infinite Language Toggle Button */}
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

      {/* Theme Switch Button */}
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
    </Box>
  );
}

export default App;
