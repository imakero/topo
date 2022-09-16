import { Heading, SimpleGrid, VStack } from "@chakra-ui/react"
import SliceLayout from "../SliceLayout"
import Card from "./Card"

const AreaContents = ({ heading, document: { contents } }) => {
  return (
    <SliceLayout>
      <VStack>
        <Heading as="h2" size="xl" mb={8}>
          {heading}
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {contents.map((item) => (
            <Card title={item.name} content={item} key={item._id} />
          ))}
        </SimpleGrid>
      </VStack>
    </SliceLayout>
  )
}

export default AreaContents
