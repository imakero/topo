import { Container, Heading, Link, Text, VStack } from "@chakra-ui/react"
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
      <Heading as="h2" size="md" color="gray.900" mb={4} pt={4}>
        {children}
      </Heading>
    ),
  },
}

const CragDescription = ({ document: { description } }) => {
  return (
    <SliceLayout>
      <VStack>
        <Heading as="h2" mb={4}>
          Area description
        </Heading>
        <Container>
          <PortableText value={description} components={components} />
        </Container>
      </VStack>
    </SliceLayout>
  )
}

export default CragDescription
