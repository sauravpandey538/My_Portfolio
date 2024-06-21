import React from "react";
import { Text, Heading, Box, Flex } from "@chakra-ui/react";
import Icons from "../../Animate_Helper/Icons";
import { TbMapSearch } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { useTheme } from "../../context/WebsiteContext";
import { useTranslation } from "react-i18next";

function ContactMe() {
  const { theme } = useTheme();
  const { t } = useTranslation();
  return (
    <Box
      display={"flex"}
      justifyContent={"left"}
      alignItems={"center"}
      backgroundColor={theme.bg_color}
      color={theme.text_color}
      h={"55vh"}
      p={[
        ["15px", "auto"],
        ["150px", "auto"],
        ["100px", "auto"],
        ["200px auto"],
      ]}
      id="contacts"
    >
      <Box>
        <Box>
          <Text my={"10px"} fontSize={"30px"} fontWeight={800}>
            {t("contactMe.title")}
          </Text>
        </Box>
        <Flex my={"30px"} flexWrap={"wrap"} gap={2}>
          <Flex gap={6} w={"auto"} px={"20px"}>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"50%"}
              boxShadow={"1px 1px 20px 1px lightgray"}
              my={"auto"}
            >
              <Icons name={TbMapSearch} />
            </Box>
            <Box my={"auto"}>
              <Text fontWeight={700}> {t("contactMe.location")}</Text>
              <Text
                w={"auto"}
                // color={"gray.600"}
              >
                {t("contactMe.locationName")}
              </Text>
            </Box>
          </Flex>

          <Flex gap={6} w={"auto"} px={"20px"}>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"50%"}
              boxShadow={"1px 1px 20px 1px lightgray"}
              my={"auto"}
            >
              <Icons name={MdOutlineMailOutline} />
            </Box>
            <Box my={"auto"}>
              <Text fontWeight={700}> {t("contactMe.email")}</Text>
              <Text
                w={"auto"}
                // color={"gray.600"}
              >
                {t("contactMe.emailName")}
              </Text>
            </Box>
          </Flex>

          <Flex gap={6} w={"auto"} px={"20px"}>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"50%"}
              boxShadow={"1px 1px 20px 1px lightgray"}
              my={"auto"}
            >
              <Icons name={FiPhoneCall} />
            </Box>
            <Box my={"auto"}>
              <Text fontWeight={700}> {t("contactMe.phone")}</Text>
              <Text
                w={"auto"}
                //  color={"gray.600"}
              >
                +977-9869751266
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default ContactMe;
