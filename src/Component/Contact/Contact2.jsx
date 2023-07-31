import React,{useState} from 'react'
import { PencilSquare,XCircle } from 'react-bootstrap-icons'


function Contact2() {
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
            <div className="mapwrapper "  >
<iframe title='my location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d861.9830667637724!2d71.51441376378396!3d30.21048057565426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b342f94c2bf5b%3A0xb2567d9a29235313!2sChowk%20Kumharanwala%20Level-1%20Flyover%2C%20Qaiserabad%2C%20Multan%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1689832359472!5m2!1sen!2s" width="300" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

</div>
            </div>
            <h2>Visit Our Office</h2>
          <p>msaudkhan18@gmail.com</p>
          <p>+923218304691</p>
          <p>Plo # 26 Chowk Kumharawala Multan</p>
          <h2>working Time</h2>
          <p>Mon. - Fri. 9 am to 6 pm</p>
          <p> Saturday</p>
          <p> Sunday</p>
            </div></div>
        <div className="title-right">
        <p className="aside" >
        {show? <XCircle onClick={clicked} className='text-danger size'  />:<PencilSquare  onClick={clicked} className='text-success size' />}
        </p>
        {show?  <div className="card">
<form>
  <div className="card-header text-center ">
  
    Update</div>
<textarea  cols="30" rows="10" placeholder='Google Location' ></textarea>
<p>Visit Our Office</p>
<input type="email" placeholder='Email' />
<input type="number\" placeholder='Contact Number' />
<input type="text" placeholder='Address' />
<p>Working Time</p>
<input type="text" placeholder='Days' />
<input type="text" placeholder='Holiday1' />
<input type="text" placeholder='Holiday2'/>
<button>Update</button>


</form>


        </div>:" "}
        </div>
    </div>
  )
}

export default Contact2