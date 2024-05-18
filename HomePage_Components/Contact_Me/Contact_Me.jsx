import React from "react";
import { Text, Heading, Box, Flex } from "@chakra-ui/react";
import Icons from "../../Animate_Helper/Icons";
import { TbMapSearch } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";

function ContactMe() {
  return (
    <Box
      display={"flex"}
      justifyContent={"left"}
      alignItems={"center"}
      bgColor={"gray.120"}
      h={"55vh"}
      p={[
        ["15px", "auto"],
        ["150px", "auto"],
        ["100px", "auto"],
        ["200px auto"],
      ]}
    >
      <Box>
        <Box>
          <Text color={"blue"} fontWeight={700} pt={"70px"} fontSize={"22px"}>
            CONTACT
          </Text>
          <Text my={"10px"} fontSize={"30px"} fontWeight={800}>
            Hit me up ! 👇
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
              color={"blue"}
            >
              <Icons name={TbMapSearch} />
            </Box>
            <Box my={"auto"}>
              <Text fontWeight={700}>Location</Text>
              <Text w={"auto"} color={"gray.600"}>
                Samakhusi, Kathmandu
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
              color={"blue"}
            >
              <Icons name={MdOutlineMailOutline} />
            </Box>
            <Box my={"auto"}>
              <Text fontWeight={700}>E-mail</Text>
              <Text w={"auto"} color={"gray.600"}>
                sauravpandey0325@gmail.com
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
              color={"blue"}
            >
              <Icons name={FiPhoneCall} />
            </Box>
            <Box my={"auto"}>
              <Text fontWeight={700}>Phone</Text>
              <Text w={"auto"} color={"gray.600"}>
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
