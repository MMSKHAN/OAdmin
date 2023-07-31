import React,{useState} from 'react'
import imged from"../Asserts/admin.jpg"
import { PencilSquare,XCircle } from 'react-bootstrap-icons'


function AdminPic() {
    const[show,setShow]=useState(false)
    function clicked(){
        if(show===false){
            setShow(true)
        }else{
            setShow(false)
        }
    }
  return (
    <div className="home">
    <div className="home1">
        {/* <h2>Our Services</h2> */}
        <div className="title-left"> 
        <div className="cardservice " >
            <div className="imged">
            <img src={imged} alt="dsfasf" />
            </div>
            <p>Junaid Iqbal</p>
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
<input type="text" placeholder='Name' />
<button>Update</button>


</form>


        </div>:" "}
        </div>
    </div></div>
  )
}

export default AdminPic