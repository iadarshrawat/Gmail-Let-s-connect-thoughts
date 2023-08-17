import {React, useState} from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'

function Main() {
    const [sideOpen, setSideOpen] = useState(true)
    const toggleDrawer = ()=>{
        setSideOpen(prev => !prev)
    }
  return (
    <div>
        <Header toggleDrawer={toggleDrawer}/>
        <SideBar sideOpen={sideOpen}/>
        <div>Actual mail</div>
    </div>
  )
}

export default Main