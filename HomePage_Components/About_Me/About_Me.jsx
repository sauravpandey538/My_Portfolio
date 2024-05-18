import React from "react";
import { Box, Flex, Text, useBreakpointValue, Image } from "@chakra-ui/react";

function AboutMe() {
  return (
    <Flex
      display={["grid", "grid", "grid", "flex"]}
      p={[
        ["15px", "auto"],
        ["50px", "auto"],
        ["100px", "auto"],
        ["200px auto"],
      ]}
      //   boxShadow={"1px 1px 20px 1px lightgray"}
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
          border={"10px solid white"}
        ></Box>
      </Flex>
      <Box flex={1} p={["40px auto", "40px auto", "40px auto", "40px 80px"]}>
        <Text color={"blue"} fontWeight={700} pt={"70px"} fontSize={"25px"}>
          ABOUT ME
        </Text>
        <Text my={"20px"} fontSize={"30px"} fontWeight={800}>
          {" "}
          Front-end Developer <br /> based in Kathmandu, Nepal
        </Text>
        <Text color={"gray.700"}>
          Hey, My name is Saurav, and I'm a Frontend Developer. My passion is to
          create and develop a clean UI/UX for my users
        </Text>
        <Text my={"20px"} color={"gray.700"}>
          My main stack currently is React/Next.js in combination with Chakra UI
          and Typescript{" "}
        </Text>
      </Box>
    </Flex>
  );
}

export default AboutMe;
