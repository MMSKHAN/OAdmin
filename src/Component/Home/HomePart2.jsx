import React,{useState } from 'react'
import img1 from "../Asserts/b2.jpg"
import { PencilSquare,XCircle } from 'react-bootstrap-icons'
function HomePart2() {
    const[show,setShow]=useState(false)
    const[show2,setShow2]=useState(false)
    function clicked(){
        if(show===false){
            setShow(true)
        }else{
            setShow(false)
        }
    }
    function clicked2(){
        if(show2===false){
            setShow2(true)
        }else{
            setShow2(false)
        }
    }
  return (
   <>
   <div className="home1">
   <div className="title-left">
    <div style={{float:"right"}} >  
    {show2? <XCircle onClick={clicked2} className='text-danger size'  />:<PencilSquare  onClick={clicked2} className='text-success size' />}
   
   
         </div>
    <div>
    {show2?  <div className="card  ">
<form>
  <div className="card-header text-center ">
  
    Update</div>
<input type="text" placeholder='Heading' />
<textarea  cols="30" rows="10" placeholder='Text' ></textarea>

<input type="text" placeholder='Digital Market Research and PinPoint Analytic’s' />
<input type="text" placeholder='App Search Optimization' />
<input type="text" placeholder='Apps Marketing' />
<input type="text" placeholder=' Search Engine Optimization' />
<input type="text" placeholder='Social Media Marketing' />
<input type="text" placeholder='Ad optimization on display networks like Google, Facebook and Bing.' />
<button>Update</button>
</form>


        </div>:" "}
        <div className="card  mt-5 " >
            <h2> ONE STEP AHEAD IN TECHNOLOGY!</h2>
            <p>High Tech but with simplicity garnished on top, our strength is in our teamwork with a solid belief in “We Can” rather than “I Can”. Moving ahead as a team Funsol is providing premier development services in mobile applications & games, web services with E-Commerce, python prowess, 3D Modelling and iOS Development. These skills are spiced up with the latest digital marketing trends. And Funsol has surprisingly exceeded its annual sales targets for all its services using the latest digital marketing trends like a wizard in –</p>
            <p> Digital Market Research and PinPoint Analytic’s</p>
            <p> App Search Optimization </p>
            <p> Apps Marketing </p>
            <p> Search Engine Optimization </p>
            <p> Social Media Marketing </p>
            <p>Ad optimization on display networks like Google, Facebook and Bing.</p>
        </div>
          </div>
   </div>
 
 
 
 
 
 
 
 
   <div className="title-right"> <div> <p className="aside" >
   {show? <XCircle onClick={clicked} className='text-danger size'  />:<PencilSquare  onClick={clicked} className='text-success size' />}
   
   
   </p>
   </div>
 <div>
   {show? <form>
  <div className="card-header text-center ">
  
    update</div>
<input type="file"/>
<button>Send</button>


</form>:" "}
<div className="imgaside"><img src={img1} alt="safhuids" /></div>
</div>
  
   
   
   
    
    </div>
   </div>
   
   </>
  )
}

export default HomePart2