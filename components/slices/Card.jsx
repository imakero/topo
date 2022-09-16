import { Heading, VStack, Text, Image, Link } from "@chakra-ui/react"
import { urlFor } from "../../lib/sanity"
import InternalLink from "../InternalLink"

const Card = ({ title, text, content: { coverImage, slug, _type } }) => {
  const linkUrl = `${_type === "area" ? "/areas" : "/boulders"}/${slug.current}`

  return (
    <VStack textAlign="center">
      <InternalLink href={linkUrl}>
        <Image
          src={urlFor(coverImage).width(400).height(300).url()}
          alt={coverImage.alt}
        />
        <Heading>{title}</Heading>
        <Text>{text}</Text>
      </InternalLink>
    </VStack>
  )
}

export default Card
