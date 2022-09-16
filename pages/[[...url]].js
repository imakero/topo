import { sanityClient } from "../lib/sanity"
import { groq } from "next-sanity"
import PageTemplate from "../components/PageTemplate"

const Page = (props) => {
  return <PageTemplate {...props} />
}

export default Page

export const getStaticProps = async ({ params: { url } }) => {
  const pageQuery = groq`
  *[(_type == "page" && url == $url) || (_type == "page" && isTemplate && url == $sluglessUrl)][0] {
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
              coverImage
            }
          }
        },
        _type == 'areaBanner' => {...},
        _type == 'cragDescription' => {...},
        _type == 'boulderHero' => {...},
        _type == 'areaContents' => {...},
      )
    }
  }`

  // A hacky solution to the problem of fetching pages that have
  // a slug parameter.

  const activeUrl = url == undefined ? "" : url.join("/")
  const activeSluglessUrl =
    url && url.length >= 2 ? url.slice(0, -1).join("/") : "///"

  let page = await sanityClient.fetch(pageQuery, {
    url: `/${activeUrl}`,
    sluglessUrl: `/${activeSluglessUrl}`,
  })

  if (!page) {
    return {
      notFound: true,
    }
  }

  const props = {
    slices: page.content || [],
  }

  if (page.isTemplate) {
    const documentQuery = groq`
      *[_type == $documentType && slug.current == $slug][0] {
        ...select(
          _type == 'area' => {
            ...,
            'contents': contents[]->{
              ...
            }
          },
          _type == 'boulder' => {
            ...,
            'problems': *[ _type == "problem" && boulder._ref == ^._id ]{
              ...,
              'tags': tags[]->{...}
            }
          }
        )
      }`

    const dynamic = {}
    dynamic["documentType"] = page.documentType
    const doc = await sanityClient.fetch(documentQuery, {
      documentType: page.documentType,
      slug: url[url.length - 1],
    })
    dynamic["document"] = doc
    props["dynamic"] = dynamic
  }

  return {
    props,
    revalidate: 10,
  }
}

export const getStaticPaths = async () => {
  const query = groq`
    *[_type == "page"] {
      url,
      isTemplate,
      documentType,
    }
  `
  const data = await sanityClient.fetch(query)

  const paths = await Promise.all(
    data.map(async (page) => {
      if (page.isTemplate) {
        const subPageQuery = groq`
        *[_type == $documentType] {
          'slug': slug.current
        }
      `
        const subPages = await sanityClient.fetch(subPageQuery, {
          documentType: page.documentType,
        })
        return subPages.map((subPage) => [
          ...page.url.split("/").slice(1),
          subPage.slug,
        ])
      } else {
        return [page.url.split("/").slice(1)]
      }
    })
  )

  return {
    paths: paths.flat(1).map((path) => ({ params: { url: path } })),
    fallback: false,
  }
}
