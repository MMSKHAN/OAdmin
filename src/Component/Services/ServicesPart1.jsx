import React,{useState} from 'react'
import { PencilSquare,XCircle } from 'react-bootstrap-icons'
function ServicesPart1() {
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
            <h2>Lets Built new era together</h2>
            <p>We believe the only way to do great work is to love what you do, and we put our heart in whatever job we do.</p>
          </div>
          <div className="title-right">
          <p className="aside" >
        {show? <XCircle onClick={clicked} className='text-danger size'  />:<PencilSquare  onClick={clicked} className='text-success size' />}
        </p>
      {show?  <div className="card">
<form>
  <div className="card-header text-center ">
  
    Update</div>
    <input type="text" placeholder='heading' />
<textarea  cols="30" rows="10" placeholder='Text' ></textarea>
<button>Update</button>


</form>


        </div>:" "}
          </div>
          </div>
   
   
   
   </>
  )
}

export default ServicesPart1