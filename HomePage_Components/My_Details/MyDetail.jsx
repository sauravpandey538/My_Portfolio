import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Icons from "../../Animate_Helper/Icons";
import { RiTailwindCssFill } from "react-icons/ri";

import {
  FaGithub,
  FaLinkedin,
  FaHtml5,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiChakraui, SiPostman } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { DiMongodb } from "react-icons/di";
import { motion } from "framer-motion";
import ViewCV from "../ViewCV";
import { useTheme } from "../../context/WebsiteContext";
import { useTranslation } from "react-i18next";

function MyDetail({ profile }) {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <Box
      p={[["auto", "15px"], ["auto", "50px"], ["auto 200px"]]}
      backgroundColor={theme.bg_color}
      color={theme.text_color}
      id="home"
    >
      <Flex flexWrap={"wrap"}>
        <Box flex={1}>
          <Text fontSize={"30px"} fontWeight={800} lineHeight={1.2}>
            {t("myDetail.title")}
          </Text>
          <Text my={"20px"} lineHeight={1.7} maxW={"400px"}>
            {t("myDetail.description")}
          </Text>
          <Flex gap={10} pl={"4px"}>
            <Icons
              name={FaLinkedin}
              link="https://www.linkedin.com/in/saurav-pandey-b3648530a"
            />
            <Icons name={FaGithub} link="https://github.com/sauravpandey538" />
          </Flex>
          <Box my={"20px"}>
            <ViewCV />
          </Box>
        </Box>
        <Box
          flex={1}
          h={["40%", " 40%", "40%", "40vh"]}
          paddingLeft="10px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginTop={["100px", 0, 0]}
        >
          <div
            style={{
              width: "fit-content",
              height: "fit-content",
              overflow: "hidden",
              backgroundImage: `url(${profile})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <motion.div
              style={{
                marginTop: "40px",
                width: "300px",
                height: "300px",
                outline: `100px solid ${theme.bg_color}`,
              }}
              animate={{
                borderRadius: [
                  "20%",
                  "30%",
                  "20%",
                  "30%",
                  "20%",
                  "30%",
                  "20%",
                  "30%",
                  "20%",
                ],
                rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360],
              }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
            ></motion.div>
          </div>
        </Box>
      </Flex>

      <Flex
        alignItems={"center"}
        h={"100px"}
        w={"100%"}
        border={"2px solid gray"}
        display={["grid", "grid", "grid", "flex"]}
        marginTop={["30px", "100px", "100px", "100px"]}
        borderRadius={"10px"}
      >
        <Text
          w={["100%", "100%", "100%", "500px"]}
          textAlign={"center"}
          fontSize={["20px", "25px"]}
          borderRight={[
            null,
            null,
            null,
            theme.bg_color === "white" ? "2px solid black" : "2px solid white",
          ]}
        >
          {t("myDetail.comfortableOn")}
        </Text>
        <Flex gap={[4, 4, 5, 10]} justifyContent={"center"} w={"100%"}>
          <Icons name={FaReact} />
          <Icons name={IoLogoJavascript} />
          <Icons name={RiTailwindCssFill} />
          <Icons name={SiChakraui} />
          <Icons name={FaNodeJs} />
          <Icons name={DiMongodb} />
          <Icons name={SiPostman} />
        </Flex>
      </Flex>
    </Box>
  );
}

export default MyDetail;
