import { Box, Flex, Heading, Image } from "@chakra-ui/react"
import { urlFor } from "../../lib/sanity"

const AreaBanner = ({ document: { coverImage, name } }) => {
  return (
    <Box position="relative" w="100%">
      <Image
        src={urlFor(coverImage).width(1600).height(400).url()}
        alt={coverImage.alt}
      />
      <Flex
        position="absolute"
        top="0"
        left="0"
        bottom="0"
        right="0"
        w="100%"
        p={8}
        color="brand.100"
        backgroundColor="blackAlpha.400"
        justify="center"
        alignItems="center"
      >
        <Heading as="h2" size="4xl">
          {name}
        </Heading>
      </Flex>
    </Box>
  )
}

export default AreaBanner
