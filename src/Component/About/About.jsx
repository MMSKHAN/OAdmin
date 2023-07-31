import React from 'react';
import "./About.css";
import AboutPart1 from './AboutPart1';
import AboutPart2 from './AboutPart2';
import AboutPart3 from './AboutPart3';
import AboutPart4 from './AboutPart4';
import AboutPart5 from './AboutPart5';
function About() {
  return (
   <>
<div className="About">
<AboutPart1/>
<div className="Carosel">
  <h1 style={{textAlign:"center",color:"green",marginRight:"5rem" }}  > Comments   </h1>
<AboutPart2/>
</div>

<div className="Carosel">
  <h1 style={{textAlign:"center",color:"green",marginRight:"5rem" }}  > Who We are   </h1>
<AboutPart3/>
</div>
<div className="Carosel">
  <h1 style={{textAlign:"center",color:"green",marginRight:"5rem" }}  > projects   </h1>
<AboutPart4/>
</div>
<div className="Carosel">
  <h1 style={{textAlign:"center",color:"green",marginRight:"5rem" }}  > LifeStyle   </h1>
<AboutPart5/>
</div>

</div>
   
   
   </>
  )
}

export default About