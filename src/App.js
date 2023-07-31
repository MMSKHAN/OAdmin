import React from 'react'
import Nav from './Component/Navigation/Nav';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Component/Home/Home';
import TopNav from "./Component/Navigation/TopNav"
import "./App.css"
import About from './Component/About/About';
import Blog from './Component/Blog/Blog';
import Services from './Component/Services/Services';
import Contact from './Component/Contact/Contact';
import AdminPic from './Component/Adminpic/AdminPic';
function App() {
  return (
    <BrowserRouter>
   <div className="classes">
     < Nav />
    <TopNav/></div>
    <Routes>
     <Route exect path="/"element={< Home />}/>
     <Route exect path="/About"element={< About />}/>
     <Route exect path="/Services"element={< Services />}/>
     <Route exect path="/Blog"element={< Blog />}/>
     <Route exect path="/Contact"element={< Contact/>}/>
     <Route exect path="/AdminPic"element={< AdminPic/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App