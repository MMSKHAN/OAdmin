import React,{useState} from 'react'
import imged from"../Asserts/app.png"
import { PencilSquare,XCircle } from 'react-bootstrap-icons'

function HomePart3() {
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
        <div className="cardservice " >
            <div className="appimged">
            <img src={imged} alt="dsfasf" />
            </div>
            <p>App DEVELOPMENT</p>
            <p>We develop top-notch mobile applications for our clients and users. We make sure to spice up our creativity with latest technology to ensure a great user experience. Almost all of our applications were a hit and each of them have set a new benchmark of revenue and installs. Seems interesting? Contact us for more details</p>
            <button>Delete</button>
            
            </div></div>
        <div className="title-right">
        <p className="aside" >
        {show? <XCircle onClick={clicked} className='text-danger size'  />:<PencilSquare  onClick={clicked} className='text-success size' />}
        </p>
        {show?  <div className="card">
<form>
  <div className="card-header text-center ">
  
    Insert</div>
    <input type="file" name="" id="" />
<input type="text" placeholder='Heading' />
<textarea  cols="30" rows="10" placeholder='Text' ></textarea>
<button>Update</button>


</form>


        </div>:" "}
        </div>
    </div>
  )
}

export default HomePart3