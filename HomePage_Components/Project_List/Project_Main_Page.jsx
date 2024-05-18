import React, { useState } from "react";
import { Box, Text, Flex, Image, Spacer } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import ProjectList from "./Project_List";

function ProjectMainPage({ profile }) {
  const [dateTime, setDateTime] = useState(new Date());
  const dayOfWeek = format(dateTime, "EEEE").toUpperCase();
  const month = format(dateTime, "MMMM").toUpperCase();
  const day = format(dateTime, "d").toUpperCase();
  console.log(dateTime);
  return (
    <Box
      h={"auto"}
      w={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      px={["15px", "30px", "50px", "100px"]}
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
            <Flex fontWeight={600} color={"gray.600"}>
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
      </Box>
    </Box>
  );
}

export default ProjectMainPage;
