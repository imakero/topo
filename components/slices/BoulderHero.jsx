import {
  Heading,
  HStack,
  Image,
  ListItem,
  OrderedList,
  SimpleGrid,
  Tag,
  VStack,
} from "@chakra-ui/react"
import { urlFor } from "../../lib/sanity"
import Difficulty from "../Difficulty"
import InternalLink from "../InternalLink"
import ProblemLink from "../ProblemLink"
import ProblemTag from "../ProblemTag"
import SliceLayout from "../SliceLayout"

const BoulderHero = ({ document: { name, coverImage, problems } }) => {
  return (
    <SliceLayout>
      <Heading as="h1" mb={4}>
        {name}
      </Heading>
      <SimpleGrid columns={2} spacing={8}>
        <Image
          src={urlFor(coverImage).width(800).height(800).url()}
          alt={coverImage.alt}
        />
        <VStack alignItems="start">
          <Heading as="h2" size="md" mb={4}>
            Problems on this boulder:
          </Heading>
          <OrderedList w="100%">
            {problems.length &&
              problems.map((problem) => (
                <ProblemLink problem={problem} key={problem._id} />
              ))}
          </OrderedList>
        </VStack>
      </SimpleGrid>
    </SliceLayout>
  )
}

export default BoulderHero
