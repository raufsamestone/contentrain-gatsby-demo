import * as React from "react"
import { Link, graphql } from "gatsby"
import ContentrainData from "../../src/contentrain/Posts/US.json"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Slugify from 'slugify'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <>
        {data.allUsJson.nodes.map(node => (
          <div>
            {node.Posts.map(item => (
              <>
                <Link to={Slugify(item.title, { remove: undefined, lower: true })  }>
                  <h2>{item.title}</h2>
                </Link>
                <p>{item.description}</p>
              </>
            ))}
          </div>
        ))}
      </>
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
    allUsJson {
      nodes {
        Posts {
          title
          ID
          description
        }
      }
    }
  }
`
