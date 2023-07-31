import React,{useState} from 'react'
import { PencilSquare,XCircle } from 'react-bootstrap-icons'
function AboutPart3() {
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
            <p>Who we are</p>
            <p>We are itZoon. We word class services providers. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima veniam temporibus facere, illo doloribus earum quam sint asperiores quae nostrum sunt vel tempore autem libero amet soluta ea reiciendis quaerat. Officiis, in ducimus vero veritatis ipsam qui. Dolores accusamus repellendus quod quibusdam, ipsum laborum delectus voluptate nostrum dicta tenetur, quae quis eius reprehenderit sunt accusantium eos dignissimos, veritatis dolore iusto!</p>
          </div>
          <div className="title-right">
          <p className="aside" >
        {show? <XCircle onClick={clicked} className='text-danger size'  />:<PencilSquare  onClick={clicked} className='text-success size' />}
        </p>
      {show?  <div className="card">
<form>
  <div className="card-header text-center ">
  
    Update</div>
<input type="text" placeholder='text' />
<textarea  cols="30" rows="10" placeholder='Text' ></textarea>
<button>Update</button>


</form>


        </div>:" "}
          </div>
          </div>
   
   
   
   </>
  )
}

export default AboutPart3