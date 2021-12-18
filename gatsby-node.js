const path = require("path")
const slugify = require("slugify")

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allUsJson {
        nodes {
          Posts {
            title
            description
            imageURL
            article
          }
        }
      }
    }
  `)
  const template = path.resolve(`src/templates/post.js`)

  data.allUsJson.nodes.forEach(edge => {
    edge.Posts.forEach(post => {
      const slug = post.title
      actions.createPage({
        path: slugify(slug, { remove: undefined, lower: true }),
        component: template,
        context: {
          slug: slug,
          title: slug,
          description: post.description,
          imageURL: post.imageURL,
          article: post.article,
        },
      })
    })
  })
}

// const path = slugify(title, { remove: undefined, lower: true })
