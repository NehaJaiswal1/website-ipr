

import React from 'react'
import NameBanner from './NameBanner'
import Ticket from './Ticket'
import VideoBanner from './VideoBanner'
import Schedule from './Schedule'
import User from './User'


function DashboardContent() {
  return (
    <div>
      <NameBanner/>
      <div style={{display:'flex'}}>
        <div>
          <Ticket/>
          <User/>
        </div>
       
       <div>
       <VideoBanner/>
       <Schedule/>
       </div>
        

      </div>
     
    </div>
  )
}

export default DashboardContent