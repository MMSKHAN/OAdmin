import React,{useState} from 'react'
import imged from"../Asserts/b2.jpg"
import { PencilSquare,XCircle } from 'react-bootstrap-icons'
import './Blog.css'

function Blog() {
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
            <h2>How Do Software Houses Bring Your Business to the 21st Century
</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, numquam corrupti harum architecto cum eos officia, labore vel necessitatibus et nobis maxime iusto facilis non, assumenda omnis pariatur beatae amet</p>
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
<button>send</button>


</form>


        </div>:" "}
        </div>
    </div>
    </div>
  )
}

export default Blog