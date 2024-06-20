import React from "react";
import Navigation from "../HomePage_Components/Navigation";
import { Box, Button } from "@chakra-ui/react";
import MyDetail from "../HomePage_Components/My_Details/MyDetail";
import AboutMe from "../HomePage_Components/About_Me/About_Me";
import ProjectMainPage from "../HomePage_Components/Project_List/Project_Main_Page";
import Footer from "../HomePage_Components/Footer/Footer";
import ContactMe from "../HomePage_Components/Contact_Me/Contact_Me";
import profile from "../HomePage_Components/public/profilepic.jpeg";
import { useTheme } from "../context/WebsiteContext";
import { CiDark } from "react-icons/ci";
import { IoIosSunny } from "react-icons/io";

function App() {
  const { theme, handleChangeTheme } = useTheme();
  return (
    <Box>
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
      <Box id="home">
        <Box
          boxShadow={
            theme.bg_color === "white"
              ? "1px 1px 20px 1px lightgray"
              : "1px 1px 20px 1px #2E2E2E"
          }
        >
          <MyDetail profile={profile} />
        </Box>
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
