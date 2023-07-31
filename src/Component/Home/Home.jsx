import React from 'react'
import "./Home.css"
import HomePart1 from './HomePart1'
import HomePart1Child from './HomePart1Child'
import HomePart2 from './HomePart2'
import HomePart3 from './HomePart3'
import HomePart4 from './HomePart4'
function Home() {
  return (
    <>
    <div className="home">
<div className="Carosel">
  <h1 style={{textAlign:"center",color:"green"  }}  > Carousel   </h1>
<HomePart1/>
<HomePart1Child/>
</div>
<div className="Carosel">
  <h1 style={{textAlign:"center",color:"green"  }}  > Efforts   </h1>
<HomePart2/>
</div>
<div className="Carosel">
  <h1 style={{textAlign:"center",color:"green"  }}  > Services   </h1>
<HomePart3/>
</div>
<div className="Carosel">
  <h1 style={{textAlign:"center",color:"green"  }}  > CEO Address   </h1>
<HomePart4/>
</div>


    </div>
    
    
    </>
  )
}

export default Home