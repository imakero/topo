import { Box, HStack, ListItem } from "@chakra-ui/react"
import Difficulty from "./Difficulty"
import InternalLink from "./InternalLink"
import ProblemTag from "./ProblemTag"

const ProblemLink = ({ problem }) => {
  return (
    <ListItem mt={2}>
      <HStack justify="space-between" width="100%">
        <Box>
          <InternalLink href={`/problems/${problem.slug.current}`}>
            {problem.name}
          </InternalLink>{" "}
          <Difficulty difficulty={problem.difficulty} />
        </Box>
        <Box>
          {problem.tags.map((tag) => (
            <ProblemTag tag={tag} key={tag._id} />
          ))}
        </Box>
      </HStack>
    </ListItem>
  )
}

export default ProblemLink
