import React from "react";
import Navigation from "../HomePage_Components/Navigation";
import { Box } from "@chakra-ui/react";
import MyDetail from "../HomePage_Components/My_Details/MyDetail";
import AboutMe from "../HomePage_Components/About_Me/About_Me";
import ProjectMainPage from "../HomePage_Components/Project_List/Project_Main_Page";
import Footer from "../HomePage_Components/Footer/Footer";
import ContactMe from "../HomePage_Components/Contact_Me/Contact_Me";
import profile from "../HomePage_Components/public/profilepic.jpeg";
function App() {
  return (
    <Box>
      <Box h={"max-content"} boxShadow={"1px 1px 20px 1px lightgray"}>
        <Navigation />
        <MyDetail profile={profile} />
      </Box>
      <Box boxShadow={"1px 1px 20px 1px lightgray"} mt={3}>
        <AboutMe />
      </Box>
      <Box boxShadow={"1px 1px 20px 1px lightgray"} mt={3}>
        <ProjectMainPage profile={profile} />
      </Box>
      <Box boxShadow={"1px 1px 20px 1px lightgray"} mt={3}>
        <ContactMe />
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
