import React, {useState} from 'react';
import { Link ,useNavigate,NavLink} from 'react-router-dom';
import "./Navbar.css";
import { Modal, Button, Card } from "react-bootstrap";

import axios from "axios";
import logo from "../../images/logo.jpg";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import {  FaBloggerB, FaHome, FaLayerGroup, FaMicroblog, FaOptinMonster,  FaPhotoVideo,  FaSign,  FaSignature,  FaSignInAlt, FaSignOutAlt} from "react-icons/fa";

function Navbar()
{
  
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  console.log({ email, password })

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleApi = () => {
    console.log({ email, password })
    axios.post('http://localhost:5000/api/v1/auth/authenticate', {
      email: email,
      password: password
    }).then(result => {
      
      localStorage.setItem('token',result.data.token)
      toast.success("Login Successful")
      navigate("/UserHome")
    })
      .catch(error => {
        toast.error('Server Error')
        console.log(error)
      })
  }
  const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return ( 
    
    <nav className='navbar navbar-dark bg-white' id = "navbar">
      <div className='container navbar-content'>
        <div className={"navbar-collapse"}>
        
          <Link to = "/" className='nav-link text-uppercase text-black fs-22 fw-6 ls-1'><FaHome/>Home</Link>
          <Link to = "about" className='nav-link text-uppercase text-black fs-22 fw-6 ls-1'><FaMicroblog/>about</Link>
          <Link to = "events" className='nav-link text-uppercase text-black fs-22 fw-6 ls-1'><FaOptinMonster/>Events</Link>
          <Link to = "blogs" className='nav-link text-uppercase text-black fs-22 fw-6 ls-1'><FaBloggerB/>Blogs</Link>
          <Link to = "clubs" className='nav-link text-uppercase text-black fs-22 fw-6 ls-1'><FaLayerGroup/>Clubs</Link>
          <Button  className="si" variant="" onClick={handleShow}> 
      <FaSignInAlt></FaSignInAlt> LOGIN
      </Button>
      <Modal show={show} onHide={handleClose}   size="lg"
  aria-labelledby="contained-modal-title-vcenter"
  centered
>
      
      <Modal.Header closeButton>
          <Modal.Title></Modal.Title></Modal.Header>
          
        <Modal.Body >
        <div className="Log">
      <div className="">
       <label className="mem"><h2>MEMBER LOGIN</h2></label>
       <div className='im'><img src="https://static.vecteezy.com/system/resources/previews/007/033/146/original/profile-icon-login-head-icon-vector.jpg"/></div>
       <div className="">
        
      <h2>
        EMAIL : <input value={email} onChange={handleEmail} type="email" /> <br />
       PASSWORD : <input value={password} onChange={handlePassword} type="password" /> <br />
        <button className="btn btn-info" size="lg" onClick={handleApi} >LOGIN</button>
        </h2>
        </div>
        <Link to = "register" className='nav-link text-black fs-22 fw-6 ls-1' variant="" size="lg"
  aria-labelledby="contained-modal-title-vcenter"
  centered><p>Not registered yet? Signup</p><h4></h4></Link>
      </div>
      </div>
                    </Modal.Body>
       
        <Modal.Footer>
          <Button variant="secondary" size="lg" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
        </Modal>
        <div></div>
      
      
 <Link to = "StaffLogin" className='nav-link text-uppercase text-black fs-22 fw-6 ls-1'><FaSignInAlt/>StaffLogin</Link>
        </div>
      </div>
    </nav>
   
  )
}
export default Navbar