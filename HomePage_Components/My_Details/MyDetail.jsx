import React from "react";
import { Box, Flex, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import Icons from "../../Animate_Helper/Icons";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaHtml5 } from "react-icons/fa6";
import { SiChakraui } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiMongodb } from "react-icons/di";
import { SiPostman } from "react-icons/si";
function MyDetail({ profile }) {
  return (
    <Box p={[["auto", "15px"], ["auto", "50px"], ["auto 200px"]]}>
      <Flex flexWrap={"wrap"}>
        <Box flex={1}>
          <Text
            fontSize={"30px"}
            fontWeight={800}
            color={"gray.700"}
            lineHeight={1.2}
          >
            {" "}
            Front-End React Developer 😀
          </Text>
          <Text my={"20px"} color={"gray.700"} lineHeight={1.7}>
            Hi, I'm Saurav Pandey. A passionate Front-end React <br /> Developer
            based in Kathmandu, Nepal
          </Text>
          <Flex gap={10} pl={"4px"}>
            <Icons
              name={FaLinkedin}
              link="https://www.linkedin.com/in/saurav-pandey-b3648530a"
            />
            <Icons name={FaGithub} link="https://github.com/sauravpandey538" />
          </Flex>
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
                outline: "100px solid white",
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

      {/* icons */}
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
          borderRight={[null, null, null, "2px solid black"]}
        >
          {" "}
          I'm comfortable on{" "}
        </Text>
        <Flex gap={[4, 4, 5, 10]} justifyContent={"center"} w={"100%"}>
          <Icons name={FaHtml5} />
          <Icons name={IoLogoJavascript} />
          <Icons name={SiChakraui} />
          <Icons name={FaReact} />
          <Icons name={FaNodeJs} />
          <Icons name={DiMongodb} />
          <Icons name={SiPostman} />
        </Flex>
      </Flex>
    </Box>
  );
}

export default MyDetail;
