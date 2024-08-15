import React from 'react'
import Header from "./Header.jsx"
import Footer from './Footer.jsx'
import { Helmet } from 'react-helmet'

function Layout({children,title="Ecomm-Shoppy",keywords,description='No-Desc',author="unkwown"}) {
  return (
    <>
   
  <Helmet>              
  <meta charSet="utf-8" />
  <title>{title}</title>       
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  <meta name="author" content={author} />
  </Helmet>
   
    <Header></Header>
    <main style={{minHeight:"70vh"}}>{children}</main>
    <Footer></Footer>
    </>
  )
}

export default Layout