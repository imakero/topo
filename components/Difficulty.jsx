import { Box, Icon, Tooltip } from "@chakra-ui/react"
import { GiChiliPepper } from "react-icons/gi"

const Difficulty = ({ difficulty }) => {
  let label = ""
  let components = null

  switch (difficulty) {
    case "hard":
      label = "This problem is hard"
      components = (
        <>
          <Icon as={GiChiliPepper} />
          <Icon as={GiChiliPepper} />
          <Icon as={GiChiliPepper} />
        </>
      )
      break
    case "medium":
      label = "This problem is doable"
      components = (
        <>
          <Icon as={GiChiliPepper} />
          <Icon as={GiChiliPepper} />
        </>
      )
      break
    case "easy":
      label = "This problem is quite easy"
      components = (
        <>
          <Icon as={GiChiliPepper} />
        </>
      )
      break
    default:
      break
  }
  return (
    <Tooltip label={label}>
      <Box as="span" color="red.700">
        {components}
      </Box>
    </Tooltip>
  )
}

export default Difficulty
