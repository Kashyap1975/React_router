import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'



function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>   
    <Footer/>
    </>
  )
}

export default Layout

// yeh kab use hota h jb aap yeh chahte h ki uper ki aur niche ki components 
// same ho aur bs bich ke components change ho, yaa phir agar aap uper ke 2 components ko change krbana nhi chahte h jo
// aurniche ke componens ko change krbana chahte h toh outlet niche likhiye
    