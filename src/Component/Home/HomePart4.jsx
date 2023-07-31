import React,{useState } from 'react'
import img1 from "../Asserts/b1.jpg"
import { PencilSquare,XCircle } from 'react-bootstrap-icons'
function HomePart4() {
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
  <div className="title-left"> <div> <p className="aside" >
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




    <div className="title-right">
    <div style={{float:"right"}} >  
    {show2? <XCircle onClick={clicked2} className='text-danger size'  />:<PencilSquare  onClick={clicked2} className='text-success size' />}
   
   
         </div>
    <div>
    {show2?  <div className="card  ">
<form>
<textarea  cols="30" rows="10" placeholder='Text' ></textarea>
<button>Send</button>
</form>


        </div>:" "}
        <div className="card  mt-5 " >
          <p>Smart Growth is our vision and that is only possible when you are out of your comfort zones. We already are, so come forth out of your comfort zones and join the excitement to make this world a better digitized experience.</p>
        </div>
          </div>
   </div>
 
   </div>
   
   </>
  )
}

export default HomePart4