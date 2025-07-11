import React, { useEffect } from 'react'
import Header from "./Header"
import { Outlet, useLocation } from "react-router-dom"
import Footer from "./Footer"

function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout