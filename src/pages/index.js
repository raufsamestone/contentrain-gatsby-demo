import * as React from "react"
import { Link, graphql } from "gatsby"
import ContentrainData from '../data/contentrain/Data/US.json'
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />

      {ContentrainData.map((data, index) => {
        return <div key={`content_item_${index}`}>
          <h2>{data.title}</h2>
          <div>{data.description}</div>
        </div>
      })}

    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
