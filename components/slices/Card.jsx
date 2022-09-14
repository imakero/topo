import { Heading, VStack, Text, Image, Link } from "@chakra-ui/react"
import { urlFor } from "../../lib/sanity"
import NextLink from "next/link"

const Card = ({ title, text, content: { coverImage, slug, _type } }) => {
  const linkUrl = `${_type === "area" ? "/areas" : "/boulders"}/${slug}`

  return (
    <VStack textAlign="center">
      <NextLink href={linkUrl} passHref>
        <Link>
          <Image
            src={urlFor(coverImage).width(400).height(300).url()}
            alt={coverImage.alt}
          />
          <Heading>{title}</Heading>
          <Text>{text}</Text>
        </Link>
      </NextLink>
    </VStack>
  )
}

export default Card
