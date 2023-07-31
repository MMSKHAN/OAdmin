import React,{useState} from 'react'
import imged from"../Asserts/b2.jpg"
import { PencilSquare,XCircle } from 'react-bootstrap-icons'


function Services4() {
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
        {/* <h2>Our Services</h2> */}
        <div className="title-left"> 
        <div className="cardservic " >
            <div className="imged">
            <img src={imged} alt="dsfasf" />
            </div>
           </div></div>
        <div className="title-right">
        <p className="aside" >
        {show? <XCircle onClick={clicked} className='text-danger size'  />:<PencilSquare  onClick={clicked} className='text-success size' />}
        </p>
        {show?  <div className="card">
<form>
  <div className="card-header text-center ">
  
    Update</div>
    <input type="file" name="" id="" />

<button>Update</button>


</form>


        </div>:" "}
        </div>
    </div>
  )
}

export default Services4;