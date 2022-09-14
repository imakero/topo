import { Box, Heading, SimpleGrid, VStack } from "@chakra-ui/react"
import SliceLayout from "../SliceLayout"
import Card from "./Card"

const FeatureList = ({ items, heading }) => {
  return (
    <SliceLayout>
      <VStack>
        <Heading as="h2" size="xl" mb={8}>
          {heading}
        </Heading>
        <SimpleGrid columns={3} spacing={8}>
          {items.map((item) => {
            switch (item._type) {
              case "card":
                return <Card {...item} key={item._key} />
              default:
                return null
            }
          })}
        </SimpleGrid>
      </VStack>
    </SliceLayout>
  )
}

export default FeatureList
