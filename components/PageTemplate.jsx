import { Box } from "@chakra-ui/react"
import Hero from "./slices/hero"

const PageTemplate = ({ slices }) => {
  return (
    <Box>
      {slices.map((slice) => {
        switch (slice._type) {
          case "hero":
            return <Hero {...slice} key={slice._key} />
          default:
            return <div>Could not find suitable slice to render</div>
        }
      })}
    </Box>
  )
}

export default PageTemplate
