import React, { useState } from "react";
import SauravCv from "./public/SauravCv.pdf";
import { Button, Flex } from "@chakra-ui/react";

function ViewCV() {
  const [showCV, setShowCV] = useState(false);

  const handleViewCV = () => {
    setShowCV(true);
  };

  return (
    <>
      <Button onClick={handleViewCV} border={"1px solid gray"} bg={"white"}>
        View My CV
      </Button>
      {showCV && (
        <Flex
          zIndex={999}
          position="fixed"
          top={0}
          left={0}
          h={"100vh"}
          w={"100vw"}
          direction={"column"}
        >
          {/* Uncomment the below button if you want to add a go-back feature */}
          <Button
            onClick={() => setShowCV(false)}
            position="absolute"
            top={"10px"}
            right={"20%"}
          >
            Go back
          </Button>
          <iframe
            src={SauravCv}
            title="CV"
            width="100%"
            height="100%"
            style={{
              border: "2px solid black",
            }}
          />
        </Flex>
      )}
    </>
  );
}

export default ViewCV;
