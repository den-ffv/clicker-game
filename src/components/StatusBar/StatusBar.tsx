import React from 'react'
import "./StatusBar.scss";
function StatusBar() {
  return (
    <div className='status-bar'>
        <div  className='status-bar__connection'>
            <span></span>
            <p>connection</p>
        </div>
    </div>
  )
}

export default StatusBar