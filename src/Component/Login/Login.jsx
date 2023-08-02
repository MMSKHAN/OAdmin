import React from 'react'
import "./Login.css"
function Login() {
  return (
<>
{/* <div className="home"> */}
    {/* <div className="home1"> */}
    <div className="login">
    <form>
        <h2>Login</h2>
  <div class="form-group">
    <label className='name' for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div class="form-group">
    <label className='name' for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
 <a className='alink' href="/ForgotPass"> <small>Forgot Password</small></a>
</form>

</div>


    {/* </div> */}
{/* // </div> */}



</>
  )
}

export default Login