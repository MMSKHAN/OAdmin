import React from 'react'
import Contact1 from './Contact1'
import Contact2 from './Contact2'
import Contact3 from './Contact3'

function Contact() {
  return (
    <div className="home">
      <Contact1/>
      <div className="Carosel">
  <h1 style={{textAlign:"center",color:"green",marginRight:"5rem" }}  > Background Img  </h1>
      <Contact3/>

</div>


      <Contact2/>
    </div>
  )
}

export default Contact