import { Tag, Tooltip } from "@chakra-ui/react"
import InternalLink from "./InternalLink"

const ProblemTag = ({ tag }) => {
  return (
    <Tooltip label={tag.description} aria-label="A tooltip">
      <Tag size="md" key={tag} variant="solid" colorScheme="green" ml={1}>
        <InternalLink href={`/tags/${tag.title}`}>{tag.title}</InternalLink>
      </Tag>
    </Tooltip>
  )
}

export default ProblemTag
