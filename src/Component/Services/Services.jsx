import React from 'react';
import ServicesPart1 from './ServicesPart1';
import "./Services.css";
import ServicesPart2 from './ServicesPart2';
import ServicesPart3 from './ServicesPart3';
import Services4 from './Services4';
function Services() {
  return (
    <>
    <div className="About">
<ServicesPart1/>
    <div className="Carosel">
  <h1 style={{textAlign:"center",color:"green",marginRight:"5rem" }}  > OUR SERVICES  </h1>
<ServicesPart2/>
</div>
    <div className="Carosel">

  <h1 style={{textAlign:"center",color:"green",marginRight:"5rem" }}  > Latest Services  </h1>

<ServicesPart3/>
</div>
    <div className="Carosel">

  <h1 style={{textAlign:"center",color:"green",marginRight:"5rem" }}  > WORKFLOW  </h1>


<Services4/>
</div>

    </div>
    
    
    </>
  )
}

export default Services