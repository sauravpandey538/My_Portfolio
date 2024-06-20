import React, { useState } from "react";
import { Box, Text, Flex, Image, Spacer } from "@chakra-ui/react";
import { format } from "date-fns";
import ProjectList from "./Project_List";
import { motion } from "framer-motion";
import { useTheme } from "../../context/WebsiteContext";
function ProjectMainPage({ profile }) {
  const [dateTime, setDateTime] = useState(new Date());
  const dayOfWeek = format(dateTime, "EEEE").toUpperCase();
  const month = format(dateTime, "MMMM").toUpperCase();
  const day = format(dateTime, "d").toUpperCase();
  const { theme } = useTheme();
  return (
    <Box
      h={"auto"}
      w={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      px={["15px", "30px", "50px", "100px"]}
      id="projects"
      backgroundColor={theme.bg_color}
      color={theme.text_color}
    >
      <Box w={"100%"} float={"left"}>
        <Flex
          alignItems={"end"}
          w={"100%"}
          justifyContent={"space-between"}
          py={"20px"}
          borderBottom={"2px solid gray"}
          my={"40px"}
        >
          <Box>
            <Flex
              fontWeight={600}
              //  color={"gray.600"}
            >
              {" "}
              {dayOfWeek}, {month} {day}TH
            </Flex>
            <Text fontSize={"30px"} fontWeight={800}>
              Projects
            </Text>
          </Box>
          <Spacer />
          <Image
            borderRadius="full"
            boxSize="50px"
            src={profile}
            alt="Saurav Pandey"
          />
        </Flex>

        <ProjectList />
        <motion.div
          whileInView={{
            width: ["0%", "100%"],
            y: 0,
            opacity: [0, 1],
          }}
          transition={{ duration: 1.5 }}
          style={{ overflow: "hidden" }}
        >
          <Text
            w={"100%"}
            textAlign={"center"}
            bg={theme.text_color}
            color={theme.bg_color}
            py={"10px"}
            fontWeight={700}
            mb={"10px"}
            h={"40px"}
          >
            SocialMedia website is in process...
          </Text>
        </motion.div>
      </Box>
    </Box>
  );
}

export default ProjectMainPage;
