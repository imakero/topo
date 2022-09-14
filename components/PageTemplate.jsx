import { Box } from "@chakra-ui/react"
import FeatureList from "./slices/FeatureList"
import Hero from "./slices/hero"

const PageTemplate = ({ slices }) => {
  return (
    <Box>
      {slices.map((slice, i) => {
        switch (slice._type) {
          case "hero":
            return <Hero {...slice} key={slice._key} />
          case "featureList":
            return <FeatureList {...slice} key={slice._key} />
          default:
            return <div key={i}>Could not find suitable slice to render</div>
        }
      })}
    </Box>
  )
}

export default PageTemplate
