import React from "react";
import { Box, Flex, Text, useBreakpointValue, Image } from "@chakra-ui/react";
import { useTheme } from "../../context/WebsiteContext";
import { useTranslation } from "react-i18next";

function AboutMe() {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <Flex
      display={["grid", "grid", "grid", "flex"]}
      p={[
        ["15px", "auto"],
        ["50px", "auto"],
        ["100px", "auto"],
        ["200px auto"],
      ]}
      id="about"
      backgroundColor={theme.bg_color}
      color={theme.text_color}
      gap={5}
    >
      <Flex flex={1} display={"flex"} position={"relative"}>
        <Image
          boxSize="auto"
          src="https://www.stefantopalovic.com/static/media/about-img.62b47e7f183d4b4e9feb.webp"
          alt="Dan Abramov"
          borderRadius={"10px"}
          backgroundSize="cover"
          backgroundPosition="center"
          my={"auto"}
        />
        <Box
          boxSize={["150px", "250px"]}
          borderRadius={"50%"}
          bg={"white"}
          position={"absolute"}
          bottom={"-40px"}
          right={["-10px", "-30px"]}
          backgroundImage="url('https://img.freepik.com/premium-photo/boy-learning-use-his-laptop_1033529-131.jpg')"
          backgroundSize="cover"
          backgroundPosition="center"
          border={`10px solid ${theme.bg_color}`}
        ></Box>
      </Flex>
      <Box flex={1} p={["40px auto", "40px auto", "40px auto", "40px 80px"]}>
        <Text my={"20px"} fontSize={"30px"} fontWeight={800} maxW={"400px"}>
          {" "}
          {t("aboutMe.title")}
        </Text>
        <Text>{t("aboutMe.name")}</Text>
        <Text
          my={"20px"}
          // color={"gray.700"}
        >
          {t("aboutMe.stack")}
        </Text>
      </Box>
    </Flex>
  );
}

export default AboutMe;
