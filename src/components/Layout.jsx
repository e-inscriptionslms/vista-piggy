import React from 'react'
import Header from './header'
import Footer from './footer'
import { Outlet } from 'react-router-dom'
// import Topbar from './topbar'

const Layout = () => {
    return (
        <>
            {/* <Topbar/> */}
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout