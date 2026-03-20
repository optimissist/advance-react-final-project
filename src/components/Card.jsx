import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {

  return (
    <div>
      <VStack>
        <Image src={imageSrc} />
      <HStack>
        <VStack>
        <Heading>{title}</Heading>
        <Text>{description}</Text>
        </VStack>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
      </VStack>

    </div>
  )
};

export default Card;