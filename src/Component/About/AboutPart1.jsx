import React,{useState} from 'react'
import { PencilSquare,XCircle } from 'react-bootstrap-icons'
function AboutPart1() {
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
            <p>We Are One Step Away From The New Era</p>
          </div>
          <div className="title-right">
          <p className="aside" >
        {show? <XCircle onClick={clicked} className='text-danger size'  />:<PencilSquare  onClick={clicked} className='text-success size' />}
        </p>
      {show?  <div className="card">
<form>
  <div className="card-header text-center ">
  
    Update</div>
<textarea  cols="30" rows="10" placeholder='Text' ></textarea>
<button>Update</button>


</form>


        </div>:" "}
          </div>
          </div>
   
   
   
   </>
  )
}

export default AboutPart1