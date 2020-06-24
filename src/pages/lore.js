import React from 'react'

import Sidebar from '../components/loreSidebar'
import SidebarLayout from '../components/sidebarLayout'

const lore = () => {
  return (
    <SidebarLayout>
      <Sidebar />
      <main>
        <div className="container shadow p-1">
          <h1>Lore</h1>
          <p>Welcome to the lore tab.</p>
          <p>Click any links from the sidebar to gain more insight about the world so you can do BIG BRAIN roleplaying!</p>
        </div>
      </main>
    </SidebarLayout>
  )
}

export default lore
