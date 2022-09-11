import { Box, Container } from "@chakra-ui/react"
import { groq } from "next-sanity"
import { useEffect } from "react"
import { sanityClient } from "../lib/sanity"

export default function Home() {
  useEffect(() => {
    async function getData() {
      const query = groq`
      *[_type == "post"][0] {
        ...
      }
      `
      const data = await sanityClient.fetch(query)
      console.log(data)
    }
    getData()
  }, [])

  return (
    <Box>
      <Container maxW="container.xl">Testing</Container>
    </Box>
  )
}
