import React from 'react'
import Header from "./Header.jsx"
import Footer from './Footer.jsx'
function Layout(props) {
  return (
    <>
    <Header></Header>
    <main style={{minHeight:"70vh"}}>{props.children}</main>
    <Footer></Footer>
    </>
  )
}

export default Layout