import { sanityClient } from "../lib/sanity"
import { groq } from "next-sanity"
import PageTemplate from "../components/PageTemplate"

const Page = ({ slices }) => {
  return <PageTemplate slices={slices} />
}

export default Page

export const getStaticProps = async ({ params: { url = "" } }) => {
  const pageQuery = groq`
  *[_type == "page" && url == "/"][0] {
    ...,
    content[] {
      ...select(
        _type == 'hero' => {...},
        _type == 'featureList' => {
          ...,
          items[] {
            ...,
            content->{
              ...,
              'slug': slug.current,
              coverImage
            }
          }
        }
      )
    }
  }`

  const activeUrl =
    url == undefined ? null : typeof url == "string" ? url : url.join("/")

  const page = await sanityClient.fetch(pageQuery, {
    url: `/${activeUrl}`,
  })

  if (!page) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      slices: page.content || [],
    },
    revalidate: 10,
  }
}

export const getStaticPaths = async () => {
  const query = groq`
    *[_type == "page"] {
      url
    }
  `
  const data = await sanityClient.fetch(query)

  return {
    paths: data.map((page) => ({
      params: { url: page.url.split("/").slice(1) },
    })),
    fallback: false,
  }
}
