import React from 'react'

import Header from "../components/header"
import Sidebar from "../components/sidebar"

const wiki = () => {
  return (
    <div>
      <Header />
      <div className="grid wiki">
        <Sidebar />
        <div>
          <h1>Wiki</h1>
          <p>Welcome to the wiki.</p>
          <p>Click any links from the sidebar to read more about the Lore</p>
        </div>
      </div>
    </div>
  )
}


export default wiki
