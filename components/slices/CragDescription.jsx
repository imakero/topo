import { Container, Heading, Link, Text } from "@chakra-ui/react"
import { PortableText } from "@portabletext/react"
import SliceLayout from "../SliceLayout"

const components = {
  marks: {
    link: ({ value, children }) => (
      <Link
        href={value.href}
        target={value.blank ? "blank" : undefined}
        color="brand.700"
      >
        {children}
      </Link>
    ),
  },
  block: {
    normal: ({ children }) => (
      <Text color="gray.900" mb={4}>
        {children}
      </Text>
    ),
    h2: ({ children }) => (
      <Heading color="gray.900" mb={4} pt={4}>
        {children}
      </Heading>
    ),
  },
}

const CragDescription = ({ document: { description } }) => {
  return (
    <SliceLayout>
      <Container>
        <PortableText value={description} components={components} />
      </Container>
    </SliceLayout>
  )
}

export default CragDescription
