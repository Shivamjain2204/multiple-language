import React from 'react'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Dropdown from './components/Dropdown/Dropdown'
import i18next from 'i18next'

function Layout() {
  const handleClick=(e)=>{
    i18next.changeLanguage(e.target.value)
  }


  return (
    <>
    <Header/>
    <Dropdown onChange={(e)=> handleClick(e)} />
    <Outlet/>
    </>
   
    )
}

export default Layout
