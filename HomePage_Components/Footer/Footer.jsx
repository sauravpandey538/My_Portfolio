import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import Icons from "../../Animate_Helper/Icons";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useTheme } from "../../context/WebsiteContext";
function Footer() {
  const thisYear = new Date().getFullYear();
  return (
    <Flex
      h={"20vh"}
      w={"100%"}
      bg={"black"}
      alignItems={"center"}
      px={["50px", null, null, "auto"]}
      overflow={"hidden"}
      justifyContent="space-between"
      display={["grid", "grid", "flex", "flex"]}
    >
      <Text
        fontWeight={600}
        fontSize={"23px"}
        color={"white"}
        width={"auto"}
        textAlign={"left"}
      >
        {" "}
        Copyright @ {thisYear}. All rights reserved
      </Text>
      <Flex gap={10} pl={"4px"} color={"white"} justifyContent={"left"}>
        <Icons
          name={FaLinkedin}
          link="https://www.linkedin.com/in/saurav-pandey-b3648530a"
        />
        <Icons name={FaGithub} link="https://github.com/sauravpandey538" />
      </Flex>
    </Flex>
  );
}

export default Footer;
