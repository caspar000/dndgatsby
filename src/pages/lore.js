import React from 'react'

import SEO from '../components/seo'
import Sidebar from '../components/loreSidebar'
import Layout from '../components/layout'

const lore = () => {
  return (
    <Layout>
      <SEO title="Lore" />
      <Sidebar />
      <main>
        <div className="container shadow p-1">
          <h1>Lore</h1>
          <p>Welcome to the lore tab.</p>
          <p>Click any links from the sidebar to gain more insight about the world so you can do BIG BRAIN roleplaying!</p>
        </div>
      </main>
    </Layout>
  )
}

export default lore
