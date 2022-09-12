import React from 'react'
import { render } from 'react-dom'
import fabric from 'fabric'

import DesignCanvas from './DesignCanvas.js'
import FreeDraw from './Freedraw.js'


import { useSelector, useDispatch } from 'react-redux'
function Dashboard() {

  
  const { user } = useSelector((state) => state.auth)


  return (

    <>
    {
      !user?(
        <h1>You need to Login First </h1>
      ):(
        <div>
        <h3>Paint Screen</h3>
        <DesignCanvas>  
          <FreeDraw />
        </DesignCanvas>
        <br />
      </div>
      )
    }
    
    </>
  )
}

export default Dashboard