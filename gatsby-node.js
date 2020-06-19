const path = require('path');

exports.createPages = ({boundActionCreators, graphql}) => {
  const {createPage} = boundActionCreators

  const logTemplate = path.resolve('src/templates/log-temp.js')
  const charTemplate = path.resolve('src/templates/char-temp.js')
  const wikiTemplate = path.resolve('src/templates/wiki-temp.js')
  
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
        filter: {fileAbsolutePath: {regex: "/(log)/"}}
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
        filter: {fileAbsolutePath: {regex: "/(wiki)/"}}
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
        component: wikiTemplate
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