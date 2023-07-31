import React,{useState} from 'react'
import { PencilSquare,XCircle } from 'react-bootstrap-icons'
function AboutPart5() {
    const[show,setShow]=useState(false)
    function clicked(){
        if(show===false){
            setShow(true)
        }else{
            setShow(false)
        }
    }
  return (
   <>
    <div className="About1">
          <div className="title-left">
        <h2>Life at IT Zoon</h2>
        <p>Life at IT Zoon is all about Curiosity, Creativity, Care, and Collaborations to seek new windows of opportunity.</p>
        <p>Find the Journey</p>
          </div>
          <div className="title-right">
          <p className="aside" >
        {show? <XCircle onClick={clicked} className='text-danger size'  />:<PencilSquare  onClick={clicked} className='text-success size' />}
        </p>
      {show?  <div className="card">
<form>
  <div className="card-header text-center ">
  
    Update</div>
    <input type="text" />
<textarea  cols="30" rows="10" placeholder='Text' ></textarea>
<input type="text" />
<button>Update</button>


</form>


        </div>:" "}
          </div>
          </div>
   
   
   
   </>
  )
}

export default AboutPart5