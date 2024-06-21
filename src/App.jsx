import React from "react";
import Navigation from "../HomePage_Components/Navigation";
import { Box } from "@chakra-ui/react";
import MyDetail from "../HomePage_Components/My_Details/MyDetail";
import AboutMe from "../HomePage_Components/About_Me/About_Me";
import ProjectMainPage from "../HomePage_Components/Project_List/Project_Main_Page";
import Footer from "../HomePage_Components/Footer/Footer";
import ContactMe from "../HomePage_Components/Contact_Me/Contact_Me";
import profile from "../HomePage_Components/public/profilepic.jpeg";
import ThemeBtn from "../FixedIcon/ThemeBtn";
import { useTheme } from "../context/WebsiteContext";
import TranslateBtn from "../FixedIcon/TranslateBtn";
import ShadowBox from "../utils/ShadowBox";

function App() {
  const { theme } = useTheme();

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

      <ShadowBox children={<MyDetail profile={profile} />} />
      <ShadowBox children={<AboutMe />} />
      <ShadowBox children={<ProjectMainPage profile={profile} />} />
      <ShadowBox
        children={
          <>
            {" "}
            <ContactMe />
            <Footer />{" "}
          </>
        }
      />
      <TranslateBtn />
      <ThemeBtn />
    </Box>
  );
}

export default App;
