import React,{useState} from 'react'
import { PencilSquare,XCircle } from 'react-bootstrap-icons'
function Contact1() {
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
          <h2>Say Hi, to our Experts!</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, fuga quae quas similique nihil, repellat totam molestias illum excepturi consequatur praesentium, dolores pariatur quia a numquam ut voluptatem possimus cupiditate!</p>
          </div>
          <div className="title-right">
          <p className="aside" >
        {show? <XCircle onClick={clicked} className='text-danger size'  />:<PencilSquare  onClick={clicked} className='text-success size' />}
        </p>
      {show?  <div className="card">
<form>
  <div className="card-header text-center ">
  
    Update</div>
<input type="text" name="" id="" placeholder='header' />
<textarea cols="30" rows="10"></textarea>
<button>Update</button>


</form>


        </div>:" "}
          </div>
          </div>
   
   
   
   </>
  )
}

export default Contact1