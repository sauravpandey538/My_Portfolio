// Photos from https://citizenofnowhe.re/lines-of-the-city
import "../style.css";
import React, { useState, useEffect } from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { Box, Text, Flex, Button, Image, Link } from "@chakra-ui/react";
// importing pictures

import Amazon from "../public/Amazon.png";
import Apple from "../public/Apple.png";
import Nakhau from "../public/Nakhau.png";
import Ecommerce from "../public/Ecommerce.png";
import Game from "../public/Game.png";
import { useTheme } from "../../context/WebsiteContext";
export default function ProjectList() {
  const { theme } = useTheme();
  const projects = [
    {
      id: 1,
      projectName: "E-commerce",
      projectTitle:
        "Trying e-commerce website with react js and third party api",
      projectMainImage: Ecommerce,
      websiteLink:
        "https://sauravecommerce-sauravs-projects-6a71054e.vercel.app",
      githubLink: "https://github.com/sauravpandey538/E-Commerce",
      projectDescription:
        "Welcome to our one-stop shopping destination, where you can indulge in unlimited shopping. We cater to all your fashion and accessory needs with three distinct categories: men, women, and jewelry. For men, we offer a wide range of stylish and comfortable clothing and accessories, from casual wear to formal attire. Women will love our extensive collection of fashion-forward pieces, including dresses, tops, pants, and accessories to suit any style.  Our jewelry category features exquisite pieces that add a touch of glamour to any look, including necklaces, bracelets, earrings, and rings. Enjoy unlimited shopping with us and elevate your style effortlessly!",
    },
    {
      id: 2,
      projectName: "Games",
      projectTitle: "Collaboration with Open AI",
      projectMainImage: Game,
      websiteLink: "https://games-six-sage.vercel.app",
      githubLink: "https://github.com/sauravpandey538/Games",
      projectDescription:
        "This website showcases my cherished games, all of which I have personally created. It features simple games such as TicTacToe, Snake, and other 2D games. The TicTacToe game offers a unique twist: the cell value gets deleted after the 6th turn, ensuring no game ends in a draw. While the Snake game may seem slow initially, once you get the hang of it, you'll be speeding through like a pro. ",
    },
    // {
    //   id: 3,
    //   projectName: "Amazon",
    //   projectTitle: "Work hard, Have fun, Make history.",
    //   projectMainImage: Amazon,
    //   websiteLink:
    //     "https://sauravecommerce-sauravs-projects-6a71054e.vercel.app",
    //   githubLink: "https://github.com/sauravpandey538/E-Commerce",
    //   projectDescription:
    //     "Amazon, founded in 1994 by Jeff Bezos, is a global e-commerce and technology giant, renowned for its vast product selection and customer-centric approach. Initially an online bookstore, Amazon quickly diversified, now offering everything from electronics to groceries through its Prime membership program, which provides fast shipping and streaming services. Beyond retail, Amazon Web Services (AWS) has become the world's leading cloud computing platform, driving significant revenue and innovation in data storage and processing. The company also ventures into hardware with products like the Kindle, Echo smart speakers, and Fire TV. Amazon's continuous expansion into new markets, such as artificial intelligence and logistics, underscores its influence and adaptability in the ever-evolving tech landscape.",
    // },
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
          key={index}
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
              alt={project.projectName}
              borderRadius={"10px"}
              backgroundSize="cover"
              backgroundPosition="center"
              my={"auto"}
              minW={"400px"}
            />
          </Box>
          <Box key={project.id} flex={1} borderBottom={"2px solid gray"}>
            <Text fontSize={"35px"} fontWeight={700}>
              {project.projectName}
            </Text>
            <Text fontSize="20px" fontWeight={500} py={"10px"}>
              {project.projectTitle}
            </Text>
            <Text
            //  color={"gray.600"}
            >
              {project.projectDescription}
            </Text>
            <Flex gap={3} py="20px">
              <Link href={project.githubLink} isExternal>
                <Button
                  leftIcon={<FaGithub />}
                  colorScheme="pink"
                  variant="solid"
                >
                  View Code
                </Button>
              </Link>

              <Link href={project.websiteLink} isExternal>
                <Button
                  leftIcon={<FaGlobe />}
                  colorScheme="blue"
                  variant="outline"
                >
                  View Website
                </Button>
              </Link>
            </Flex>
          </Box>
        </Flex>
      ))}
    </Box>
  );
}
