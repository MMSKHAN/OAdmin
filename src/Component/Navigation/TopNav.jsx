import React from 'react'
// import { Bell } from 'react-bootstrap-icons'
import pic from "../Asserts/admin.jpg";
function TopNav() {
  return (
    <div className="DashContainer">
    <div className="container">
    <div className="rowTop">
      <div className="row1">
        <div className="searchbox">
          <span>Admin</span>
          <span>-</span>
         <span>ITZoon </span>
        </div>
         </div>
      <div className="row2">
        <div className="adminbox">
        {/* <div className="notification">
          <Bell/>
          <div className="dot"></div>
        </div> */}
         <a href="/AdminPic"> <div className="adminimg">
            <img src={pic} alt="pixz" />
          </div></a>
          </div>
      </div>
    </div>
    </div>
   </div>
  )
}

export default TopNav