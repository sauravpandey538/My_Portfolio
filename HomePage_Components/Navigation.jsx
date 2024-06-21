import React from "react";
import { Flex, Text, Spacer, useBreakpointValue } from "@chakra-ui/react";
import { useTheme } from "../context/WebsiteContext";
import { useTranslation } from "react-i18next";
import Texts from "../Animate_Helper/Texts";
import MobNav from "../Animate_Helper/Mob_Nav";

function Navigation() {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const deviceWidth = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
  });

  return (
    <>
      {(deviceWidth === "md" || deviceWidth === "lg") && (
        <Flex
          backgroundColor={theme.bg_color}
          color={theme.text_color}
          h={"80px"}
          alignItems={"center"}
          justifyContent={"space-between"}
          px={"50px"}
          boxShadow={"1px 1px 10px 1px lightgray"}
        >
          <Text fontWeight={900} fontSize={"25px"}>
            Saurav.dev
          </Text>
          <Spacer />
          <Flex gap={7}>
            <Texts text={t("navigation.home")} to="home" />
            <Texts text={t("navigation.about")} to="about" />
            <Texts text={t("navigation.projects")} to="projects" />
            <Texts text={t("navigation.contacts")} to="contacts" />
          </Flex>
        </Flex>
      )}
      {(deviceWidth === "base" || deviceWidth === "sm") && <MobNav />}
    </>
  );
}

export default Navigation;
