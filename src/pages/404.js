import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function NotFound() {
  return (
    <Layout>
      <SEO title="404" />
      <h1>Page Not Found</h1>
      <p>Oops, we couldn't find this page!</p>
    </Layout>
  )
}
