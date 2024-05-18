// navigation part1 is completed

import Texts from "../Animate_Helper/Texts";
import React from "react";
import MobNav from "../Animate_Helper/Mob_Nav";
import {
  Flex,
  Text,
  Spacer,
  Button,
  Box,
  useBreakpointValue,
  Heading,
} from "@chakra-ui/react";
function Navigation() {
  const deviceWidth = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    g: "lg",
  });
  console.log(deviceWidth);
  return (
    <>
      {(deviceWidth === "md" || deviceWidth === "lg") && (
        <Flex
          backgroundColor={"white"}
          h={"80px"}
          // border={"2px solid black"}
          alignItems={"center"}
          justifyContent={"space-between"}
          px={"50px"}
          boxShadow={"1px 1px 10px 1px lightgray"}
        >
          <Text fontWeight={900} fontSize={"25px"}>
            {" "}
            Saurav.dev
          </Text>
          <Spacer />
          <Flex gap={5}>
            <Texts text="Home">
              <Button bg={"none"} color={"black"} fontWeight={900} />
            </Texts>
            <Texts text="About">
              <Button bg={"none"} />
            </Texts>
            <Texts text="Projects">
              <Button bg={"none"} />
            </Texts>
            <Texts text="Contacts">
              <Button bg={"none"} />
            </Texts>
          </Flex>
        </Flex>
      )}

      {(deviceWidth === "base" || deviceWidth === "sm") && (
        <Flex
          w={"100%"}
          h={"50px"}
          px={"20px"}
          alignItems={"center"}
          boxShadow={"1px 1px 10px 1px lightgray"}
        >
          <MobNav />
          <Text textAlign={"center"} w={"100%"} fontWeight={900}>
            Saurav.dev
          </Text>
        </Flex>
      )}
    </>
  );
}

export default Navigation;
