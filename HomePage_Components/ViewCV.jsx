import React, { useState } from "react";
import { Button, Flex } from "@chakra-ui/react";
import { FaFilePdf } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function ViewCV() {
  const [showCV, setShowCV] = useState(false);
  const { t } = useTranslation();
  const handleViewCV = () => {
    setShowCV(true);
  };

  return (
    <>
      <Button
        onClick={handleViewCV}
        border={"1px solid gray"}
        bg={"white"}
        leftIcon={<FaFilePdf />}
      >
        {/* View My CV */}
        {t("myDetail.cv")}
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
            {t("myDetail.cv_goBack")}
          </Button>
          <iframe
            src={SauravCv}
            title="CV"
            width="100%"
            height="100%"
            style={{
              //   border: "2px solid black",
              objectPosition: "center",
              objectFit: "cover",
            }}
          />
        </Flex>
      )}
    </>
  );
}

export default ViewCV;
