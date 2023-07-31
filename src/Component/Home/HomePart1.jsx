import React,{useState} from 'react'
import { PencilSquare,XCircle } from 'react-bootstrap-icons'

function HomePart1() {
    const[show,setShow]=useState(false)
    function clicked(){
        if(show===false){
            setShow(true)
        }else{
            setShow(false)
        }
    }
  return (
    
   <div className="home1">
          <div className="title-left">
        <h3>ITZoon COPORATION</h3>
        <p>Since its inception in 2019, ITZoon Technology has reached a 500M+ combined download volume of 250+ apps and games on Google Play Store with an ever increasing upward trend. And there 300+ websites running on web server buit by iTZoon Technology</p>         </div>
      <div className="title-right">
      <p className="aside" >
        {show? <XCircle onClick={clicked} className='text-danger size'  />:<PencilSquare  onClick={clicked} className='text-success size' />}
        </p>
      {show?  <div className="card">
<form>
  <div className="card-header text-center ">
  
    Update</div>
<input type="text" placeholder='Heading' />
<textarea  cols="30" rows="10" placeholder='Text' ></textarea>
<button>Update</button>


</form>


        </div>:" "}
      </div>
   </div>
  )
}

export default HomePart1