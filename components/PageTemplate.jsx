import { Box } from "@chakra-ui/react"
import AreaBanner from "./slices/AreaBanner"
import AreaContents from "./slices/AreaContents"
import BoulderHero from "./slices/BoulderHero"
import CragDescription from "./slices/CragDescription"
import FeatureList from "./slices/FeatureList"
import Hero from "./slices/hero"

const PageTemplate = (props) => {
  console.log(props)
  const { slices, dynamic } = props
  return (
    <Box>
      {slices.map((slice, i) => {
        switch (slice._type) {
          case "hero":
            return <Hero {...slice} key={slice._key} />
          case "featureList":
            return <FeatureList {...slice} key={slice._key} />
          case "areaBanner":
            return <AreaBanner {...slice} {...dynamic} key={slice._key} />
          case "cragDescription":
            return <CragDescription {...slice} {...dynamic} key={slice._key} />
          case "boulderHero":
            return <BoulderHero {...slice} {...dynamic} key={slice._key} />
          case "areaContents":
            return <AreaContents {...slice} {...dynamic} key={slice._key} />
          default:
            return <div key={i}>Could not find suitable slice to render</div>
        }
      })}
    </Box>
  )
}

export default PageTemplate
