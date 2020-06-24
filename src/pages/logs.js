import React from 'react'

import LogSidebar from '../components/logSidebar'
import SidebarLayout from '../components/sidebarLayout'

const logs = () => {
  return (
    <SidebarLayout>
      <LogSidebar />
      <main>
        <div className="container shadow p-1">
          <h1>Logs</h1>
          <p>Check out the Sidebar for the latest session logs.</p>
          <p>If you wish to contribute to the logs, you can write them in markdown format or edit them on <a href="https://github.com/caspar000/dndgatsby/tree/master/src/content/logss" target="_blank" rel="noopener noreferrer">Github</a></p>
          
        </div>
      </main>
    </SidebarLayout>
  )
}

export default logs
