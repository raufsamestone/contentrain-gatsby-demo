import * as React from "react"
import { Link, graphql } from "gatsby"
import ContentrainData from '../../contentrain/Posts/US.JSON'
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />

      {ContentrainData[0].Posts.map((data) => {
        return <div key={`content_item_${data.ID}`}>
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
