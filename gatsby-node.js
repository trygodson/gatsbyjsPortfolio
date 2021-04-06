const path = require(`path`)
exports.createPages = async ({graphql, actions})=>{
  const {data} = await graphql(`
    query projectsDetails {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `) 
  data.allMarkdownRemark.nodes.forEach((node)=> {
    actions.createPage({
      path: '/projects/' + node.frontmatter.slug,
      component: path.resolve('./src/templates/projectDetails.js'),
      context: {slug : node.frontmatter.slug}
    })
  })
}