import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Displayitem from '../../components/displayitems/Displayitems'


export default function Landingpage() {
  return (
    <div className='Landingpage_section flex'>
          <Topbar/>
          <Displayitem/>
    </div>
  )
}
