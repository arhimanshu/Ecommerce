import React from 'react'
import {Route,Routes} from "react-router-dom"
import Homepage from '../pages/Homepage'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Policy from '../pages/Policy'
import Pagenotfound from '../pages/Pagenotfound'
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
      <Route path="/policy" element={<Policy/>}></Route>
      <Route path="*" element={<Pagenotfound/>}></Route>




      
    </Routes>
    </>
  )
}

export default App