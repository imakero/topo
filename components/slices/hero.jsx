import { Box, Heading, Image } from "@chakra-ui/react"
import { urlFor } from "../../lib/sanity"

const Hero = ({ coverImage, heading, subheading }) => {
  return (
    <Box position="relative" w="100%">
      <Image
        src={urlFor(coverImage).width(1600).height(600).url()}
        alt={coverImage.alt}
      />
      <Box
        position="absolute"
        top="0"
        left="0"
        bottom="0"
        right="0"
        w="100%"
        p={8}
        color="brand.100"
        backgroundColor="blackAlpha.400"
      >
        <Heading as="h2" size="4xl">
          {heading}
        </Heading>
        {subheading && (
          <Heading as="h3" size="xl" mt={4}>
            {subheading}
          </Heading>
        )}
      </Box>
    </Box>
  )
}

export default Hero
