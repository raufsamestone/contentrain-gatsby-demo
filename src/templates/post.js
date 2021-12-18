import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const JsonBlogPostTemplate = ({ pageContext, location}) => {
  const post = pageContext

  const siteTitle = `👈 back to home`
  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.title}
        description={post.description}
      />
      <h1 itemProp="headline">{post.title}</h1>
      {/* {post.image ? <img src={post.image} alt={post.title} /> : null} */}
      <p>{post.description}</p>
      {/*
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
      </article> */}
    </Layout>
  )
}

export default JsonBlogPostTemplate

export const pageQuery = graphql`
  query JsonBlogPostBySlug {
    site {
      siteMetadata {
        title
      }
    }
    usJson {
      Posts {
        ID
        title
        description
      }
    }
  }
`
