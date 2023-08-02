import { HouseFill,PersonFill,GearFill, Quote, Telephone,BoxArrowLeft } from "react-bootstrap-icons"
const NavArray=[
    {
    name:"Home",
    to:"/",
    icon:<HouseFill/>
},
    {
    name:"About",
    to:"/About",
    icon:<PersonFill/>
},
    {
    name:"Services",
    to:"/Services",
    icon:<GearFill/>
},
    {
    name:"Blogs",
    to:"/Blog",
    icon:<Quote/>
},
    {
    name:"Contact Us",
    to:"/Contact",
    icon:<Telephone/>
},
    {
    name:"Logout",
    to:"/Logout",
    icon:<BoxArrowLeft/>
},
{name:"Login",
    to:"Login"
}
  
]
export default NavArray