const path = require('path');

exports.createPages = ({boundActionCreators, graphql}) => {
  const {createPage} = boundActionCreators

  const logTemplate = path.resolve('src/templates/log-temp.js')
  const charTemplate = path.resolve('src/templates/char-temp.js')
  const loreTemplate = path.resolve('src/templates/lore-temp.js')
  
  return graphql(`
    {
      char: allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/(chars)/"}}
      ) {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
              date
            }
          }
        }
      }
      log: allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/(logs)/"}}
      ) {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
              date
            }
          }
        }
      }
      wiki: allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/(lore)/"}}
      ) {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `).then(res => {
    if(res.errors) {
      return Promise.reject(res.errors)
    }

    res.data.log.edges.forEach(({node}) => {
      createPage({
        path: node.frontmatter.path,
        component: logTemplate
      })
    }) 
    res.data.wiki.edges.forEach(({node}) => {
      createPage({
        path: node.frontmatter.path,
        component: loreTemplate
      })
    }) 
    res.data.char.edges.forEach(({node}) => {
      createPage({
        path: node.frontmatter.path,
        component: charTemplate 
      })
    }) 
  })
}