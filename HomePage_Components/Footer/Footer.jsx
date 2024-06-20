import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import Icons from "../../Animate_Helper/Icons";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useTheme } from "../../context/WebsiteContext";
function Footer() {
  const { theme } = useTheme();
  return (
    <Flex
      h={"20vh"}
      w={"100%"}
      // backgroundColor={theme.bg_color}
      // color={theme.text_color}
      bg={"black"}
      justifyContent={"center"}
      alignItems={"center"}
      px={["50px", null, null, "300px"]}
      overflow={"hidden"}
    >
      <Flex
        justifyContent={"space-between"}
        display={["grid", "grid", "flex", "flex"]}
        w={"100%"}
        gap={3}
      >
        <Text fontWeight={600} fontSize={"23px"} color={"white"}>
          {" "}
          Copyright @ 2024. All rights reserved
        </Text>
        <Flex gap={10} pl={"4px"} color={"white"} justifyContent={"center"}>
          <Icons
            name={FaLinkedin}
            link="https://www.linkedin.com/in/saurav-pandey-b3648530a"
          />
          <Icons name={FaGithub} link="https://github.com/sauravpandey538" />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Footer;
