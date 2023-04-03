import { useEffect, useState } from "react";
import {  FaBloggerB, FaHome, FaLayerGroup, FaMicroblog, FaOptinMonster,  FaPhotoVideo,  FaSign,  FaSignature,  FaSignInAlt, FaSignOutAlt} from "react-icons/fa";

import {Link,NavLink, Navigate,Outlet,useNavigate} from "react-router-dom";
import "../../images/navlogo.png";

import "../../components/Navbar/Navbar.css";

function Navs()
{
    const navigate = useNavigate()
    
    const auth=localStorage.getItem('user');
  
    const logout=()=>{
    localStorage.clear();
    navigate("/")
  }

  return ( 
    <div>
    
  <div>
    {
    auth ?
    <nav className='navbar navbar-dark bg-white' id = "navbar">
      <div className='container navbar-content'>
        <div className={"navbar-collapse"}>
          <Link to = "/" className='nav-link text-uppercase text-black fs-22 fw-6 ls-1'><FaHome/>Home</Link>
          <Link to = "about" className='nav-link text-uppercase text-black fs-22 fw-6 ls-1'><FaMicroblog/>about</Link>
          <Link to = "events" className='nav-link text-uppercase text-black fs-22 fw-6 ls-1'><FaOptinMonster/>Events</Link>
          <Link to = "blogs" className='nav-link text-uppercase text-black fs-22 fw-6 ls-1'><FaBloggerB/>Blogs</Link>
          <Link to = "clubs" className='nav-link text-uppercase text-black fs-22 fw-6 ls-1'><FaLayerGroup/>Clubs</Link>
          <Link to = "Login" className='nav-link text-uppercase text-black fs-22 fw-6 ls-1'><FaSignInAlt/>Login</Link>
          <Link to = "StaffLogin" className='nav-link text-uppercase text-black fs-22 fw-6 ls-1'><FaSignInAlt/>StaffLogin</Link>
       </div>
    </div>
    </nav>
    :
    
    <nav className='navbar navbar-dark bg-white' id = "navbar">
    <div className='container navbar-content'>
    {/* <div>
  <NavLink to="/" ><a href="" className="logo"><img className="brand-logo" src="../../images/23.png"/></a></NavLink>
</div> */}
      <div className={"navbar-collapse"}>
      <Link to = "/" className='nav-link text-uppercase text-black fs-22 fw-6 ls-1'><FaHome/>Home</Link>
          <Link to = "about" className='nav-link text-uppercase text-black fs-22 fw-6 ls-1'><FaMicroblog/>about</Link>
          <Link to = "events" className='nav-link text-uppercase text-black fs-22 fw-6 ls-1'><FaOptinMonster/>Events</Link>
          <Link to = "blogs" className='nav-link text-uppercase text-black fs-22 fw-6 ls-1'><FaBloggerB/>Blogs</Link>
          <Link to = "clubs" className='nav-link text-uppercase text-black fs-22 fw-6 ls-1'><FaLayerGroup/>Clubs</Link>
          <Link className='nav-link text-uppercase text-black fs-22 fw-6 ls-1' onClick={logout} to ="/"><FaSignOutAlt/>Logout</Link>
          </div>
    </div>
    </nav>
}
    </div>
    
</div>
    
    
  )
    
}

export default Navs;