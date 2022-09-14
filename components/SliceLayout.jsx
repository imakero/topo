import { Box, Container } from "@chakra-ui/react"

const SliceLayout = ({ children }) => {
  return (
    <Box p={8} marginY="auto">
      {children}
    </Box>
  )
}

export default SliceLayout
