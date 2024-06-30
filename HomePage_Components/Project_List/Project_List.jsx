import React from "react";
import { Box, Text, Flex, Button, Image, Link } from "@chakra-ui/react";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { useTheme } from "../../context/WebsiteContext";
import { useTranslation } from "react-i18next";

// import Amazon from "../public/Amazon.png";
// import Apple from "../public/Apple.png";
import Nakhau from "../public/Nakhau.png";
import Ecommerce from "../public/Ecommerce.png";
import Game from "../public/Game.png";
import SocialMedia from "../public/SocialMedia.png";
export default function ProjectList() {
  const { theme } = useTheme();
  const { t, i18n } = useTranslation();

  const projects = [
    {
      id: 1,
      projectName: "social_media",
      projectMainImage: SocialMedia,
      websiteLink: "https://social-media-frontend-sage.vercel.app",
      githubLink: "https://github.com/sauravpandey538/SocialMediaFrontend",
    },
    {
      id: 2,
      projectName: "e_commerce",
      projectMainImage: Ecommerce,
      websiteLink:
        "https://sauravecommerce-sauravs-projects-6a71054e.vercel.app",
      githubLink: "https://github.com/sauravpandey538/E-Commerce",
    },
    {
      id: 3,
      projectName: "games",
      projectMainImage: Game,
      websiteLink: "https://games-six-sage.vercel.app",
      githubLink: "https://github.com/sauravpandey538/Games",
    },
  ];

  return (
    <Box
      overflow={"hidden"}
      backgroundColor={theme.bg_color}
      color={theme.text_color}
    >
      {projects.map((project, index) => (
        <Flex
          my={"100px"}
          gap={5}
          flexWrap={"wrap"}
          flexDirection={index % 2 === 0 ? "row" : "row-reverse"}
          key={project.id}
        >
          <Box
            flex={1}
            p={["15px", "25px", "50px", "50px"]}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Image
              boxSize="auto"
              src={project.projectMainImage}
              alt={t(`project.projectNames.${project.projectName}`)}
              borderRadius={"10px"}
              backgroundSize="cover"
              backgroundPosition="center"
              my={"auto"}
              minW={"400px"}
            />
          </Box>
          <Box flex={1} borderBottom={"2px solid gray"}>
            <Text fontSize={"35px"} fontWeight={700}>
              {t(`project.projectNames.${project.projectName}`)}
            </Text>
            <Text fontSize="20px" fontWeight={500} py={"10px"}>
              {t(`project.projectTitle.${project.projectName}`)}
            </Text>
            <Text>
              {t(`project.projectDescription.${project.projectName}`)}
            </Text>
            <Flex gap={3} py="20px">
              <Link href={project.githubLink} isExternal>
                <Button
                  leftIcon={<FaGithub />}
                  colorScheme="pink"
                  variant="solid"
                >
                  {t("project.viewCode")}
                </Button>
              </Link>
              <Link href={project.websiteLink} isExternal>
                <Button
                  leftIcon={<FaGlobe />}
                  colorScheme="blue"
                  variant="outline"
                >
                  {t("project.viewWebsite")}
                </Button>
              </Link>
            </Flex>
          </Box>
        </Flex>
      ))}
    </Box>
  );
}
