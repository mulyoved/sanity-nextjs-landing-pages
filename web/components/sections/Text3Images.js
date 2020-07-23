import React from "react";
import PropTypes from "prop-types";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../client";
import { Box, Flex, Text, Image } from "@chakra-ui/core";
import SimpleBlockContent from "../SimpleBlockContent";

const builder = imageUrlBuilder(client);

function Text3Images(props) {
  const { heading, label, text, images, cta } = props;

  return (
    <Flex
      justifyContent="space-around"
      mx="auto"
      maxWidth="5xl"
      flexWrap="wrap"
      alignContent="flex-start"
    >
      <Box
        as="section"
        width="sm"
        d="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        textAlign="center"
      >
        <Text fontSize="5xl" fontWeight="bold">
          {heading}
        </Text>
        {text && <SimpleBlockContent blocks={text} />}
      </Box>
      <Flex maxW="528px" m={10} flexWrap="wrap" alignContent="flex-start">
        {images.map((image, i) => (
          <Image
            key={i}
            p={3}
            flexGrow={1}
            flexShrink={1}
            maxWidth={i < 2 ? "50%" : "100%"}
            src={builder
              .image(image)
              .auto("format")
              .height(200)
              .width(i < 2 ? 252 : 504)
              .url()}
            alt={image.alt}
          />
        ))}
      </Flex>
    </Flex>
  );
}

Text3Images.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.array,
  images: PropTypes.array,
  backgroundImage: PropTypes.string,
  tagline: PropTypes.string,
  cta: PropTypes.object,
};

export default Text3Images;
