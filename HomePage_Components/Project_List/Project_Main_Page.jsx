import React, { useState, useTransition } from "react";
import { Box, Text, Flex, Image, Spacer } from "@chakra-ui/react";
import { format } from "date-fns";
import ProjectList from "./Project_List";
import { motion } from "framer-motion";
import { useTheme } from "../../context/WebsiteContext";
import { useTranslation } from "react-i18next";
import { SiReactquery } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { RiNextjsLine } from "react-icons/ri";

function ProjectMainPage({ profile }) {
  const [dateTime, setDateTime] = useState(new Date());
  const dayOfWeek = format(dateTime, "EEEE").toUpperCase();
  const month = format(dateTime, "MMMM").toUpperCase();
  const day = format(dateTime, "d").toUpperCase();

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    era: "long",
  };
  const japaneseDate = dateTime.toLocaleDateString("ja-JP", options);

  const { theme } = useTheme();
  const { t } = useTranslation();
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
              {t("project.project") !== "Projects" && (
                <Text>{japaneseDate}</Text>
              )}
              {t("project.project") === "Projects" && (
                <Text>
                  {" "}
                  {dayOfWeek}, {month} {day}TH
                </Text>
              )}
            </Flex>
            <Text fontSize={"30px"} fontWeight={800}>
              {t("project.project")}
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
          transition={{ duration: 1, delay: 0.4 }}
          style={{ overflow: "hidden" }}
        >
          <Box
            w={"100%"}
            textAlign={"center"}
            bg={theme.text_color}
            color={theme.bg_color}
            py={"10px"}
            fontWeight={700}
            mb={"10px"}
            h={"40px"}
            borderRadius={"20px"}
          >
            <motion.div
              style={{ display: "flex", justifyContent: "center" }}
              whileInView={{
                opacity: [0, 1],
                y: [10, 0],
              }}
              transition={{ delay: 1.4, duration: 0.2 }}
            >
              <p>{t("project.pendingStatus")}</p>
              {/* <Box
                display={"inline-flex"}
                gap={2}
                marginLeft={"10px"}
                alignItems={"baseline"}
              >
                <span>
                  <SiReactquery />
                </span>
                <span>,</span>
                <span>
                  <TbBrandTypescript />
                </span>
                <span> and </span>

                <span>
                  <RiNextjsLine />
                </span>
              </Box> */}
            </motion.div>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}

export default ProjectMainPage;
