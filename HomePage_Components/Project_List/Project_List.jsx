// Photos from https://citizenofnowhe.re/lines-of-the-city
import "../style.css";
import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Box, Text, Flex, Button, Image } from "@chakra-ui/react";
// importing pictures

import Amazon from "../public/Amazon.png";
import Apple from "../public/Apple.png";
import Nakhau from "../public/Nakhau.png";

export default function ProjectList() {
  console.log(Apple);
  const projects = [
    {
      id: 1,
      projectName: "Nakau resturant",
      projectTitle: "Best for donburi and udon.",
      projectMainImage: Nakhau,
      websiteLink:"https://sauravecommerce-1xmsyarnc-sauravs-projects-6a71054e.vercel.app/",
      githubLink:"https://github.com/sauravpandey538/E-Commerce",
      projectDescription:
        "Nakau is a popular Japanese fast food restaurant chain with 470 outlets across Japan, located mainly in Tokyo and Osaka ur specialties include donburi (rice bowls) topped with variety of meat and other toppings, and Kyoto-style udon soft noodles delicately flavored with a light dashi broth. Donburi and udon are two examples of everyday meals enjoyed by many Japanese that are available at reasonable prices. Nakau also serves Japanese breakfast set menu options that include grilled salmon, miso soup and eggWe hope you will find and enjoy Nakau conveniently located near your hotels and sites you visit during your stay in Japan",
    },
    {
      id: 2,
      projectName: "Apple",
      projectTitle: "Think different.",
      projectMainImage: Apple,
       websiteLink:"https://sauravecommerce-1xmsyarnc-sauravs-projects-6a71054e.vercel.app/",
      githubLink:"https://github.com/sauravpandey538/E-Commerce",
      projectDescription:
        "Apple Inc., founded in 1976 by Steve Jobs, Steve Wozniak, and Ronald Wayne, is a global leader in technology, known for its innovative products and cohesive ecosystem. Key products like the iPhone, Mac, iPad, Apple Watch, and AirPods have revolutionized their respective markets, while services like the App Store, Apple Music, and Apple Pay enhance user experience and contribute significantly to revenue. Apple's ecosystem ensures seamless integration across devices, fostering a loyal customer base. Consistently strong financial performance, driven by product sales and a growing emphasis on software and services, underscores Apple's influence and ongoing impact on the tech industry.",
    },
    {
      id: 3,
      projectName: "Amazon",
      projectTitle: "Work hard, Have fun, Make history.",
      projectMainImage: Amazon,
       websiteLink:"https://sauravecommerce-1xmsyarnc-sauravs-projects-6a71054e.vercel.app/",
      githubLink:"https://github.com/sauravpandey538/E-Commerce",
      projectDescription:
        "Amazon, founded in 1994 by Jeff Bezos, is a global e-commerce and technology giant, renowned for its vast product selection and customer-centric approach. Initially an online bookstore, Amazon quickly diversified, now offering everything from electronics to groceries through its Prime membership program, which provides fast shipping and streaming services. Beyond retail, Amazon Web Services (AWS) has become the world's leading cloud computing platform, driving significant revenue and innovation in data storage and processing. The company also ventures into hardware with products like the Kindle, Echo smart speakers, and Fire TV. Amazon's continuous expansion into new markets, such as artificial intelligence and logistics, underscores its influence and adaptability in the ever-evolving tech landscape.",
    },
  ];

  return (
    <Box overflow={"hidden"}>
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
            <Text color={"gray.600"}>{project.projectDescription}</Text>
            <Flex gap={3} py={"20px"}>
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
                leftIcon={<FaLinkedin />}
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
