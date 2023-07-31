
import HomeArray from './HomeArray'
import React,{useState} from 'react'
import { PencilSquare,XCircle } from 'react-bootstrap-icons'
function HomePart1Child() {
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
<div className="home1">

   <div className="title-left"> <div className="card">
    <div className="carosule_wrapper"> {HomeArray.map((items)=>{
        return(
          <>
          <div className="caro_img">
                      <img src={items.img} alt="" key={items.img} />
            <button> {items.delete}  </button>
            </div>
          
          </>
        )
    })}    </div>
    
    
    
    
    
    </div>  </div>
  
  
  
  
  
  
  
  
   <div className="title-right">
      <p className="aside" >{show? <XCircle onClick={clicked} className='text-danger size'  />:<PencilSquare  onClick={clicked} className='text-success size' />}</p>
      {show?  <div className="card">
<form>
  <div className="card-header text-center ">
  
    Insert</div>
<input type="file"/>
<button>Send</button>


</form>


        </div>:" "}
      </div>
      </div>
   </>
  )
}

export default HomePart1Child