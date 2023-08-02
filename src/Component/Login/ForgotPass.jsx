import React from 'react'
import "./Login.css"
function ForgotPass() {
  return (
<>
{/* <div className="home"> */}
    {/* <div className="home1"> */}
    <div className="login">
    <form>
        <h2>ForgotPassword</h2>
  <div class="form-group">
    <label className='name' for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  <a href="/Login" className='text-danger'> <small>Login</small> </a>
</form>

</div>


    {/* </div> */}
{/* // </div> */}



</>
  )
}

export default ForgotPass;