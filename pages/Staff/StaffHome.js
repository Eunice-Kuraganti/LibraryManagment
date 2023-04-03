import { useEffect, useState } from "react";
import {  FaBloggerB, FaHome, FaLayerGroup, FaMicroblog, FaOptinMonster,  FaPhotoVideo,  FaSign,  FaSignature,  FaSignInAlt, FaSignOutAlt} from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Card } from "react-bootstrap";
import {Link, Navigate,Outlet,useNavigate} from "react-router-dom";
import "../Staff/StaffHome.css";
import Books from "../Books/Books";

import axios from "axios";
import SearchForm from "../../components/SearchForm/SearchForm";
import Searchbar from "./Searchbar";
import { MDBModalContent } from "mdb-react-ui-kit";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
function StaffHome()
{
    const navigate = useNavigate()
    const auth=localStorage.getItem('user');
   useEffect(()=>{
     if (!localStorage.getItem('token'))
     {
       navigate("/")
     }
   },[])
  const logout=()=>{
    localStorage.clear();
    navigate("/")
  }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const[author,setAuthor]=useState('')
  const[id,setId]=useState('')
  const[accessnumber,setAccessnumber]=useState('')
  const[category,setCategory]=useState('')
  const[title,setTitle]=useState('')

  const handlebutton=()=>{
    //     alert("Book added successfully");
        
    //   }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ id:id,accessnumber,author,title,category})
    const data = { id:id,accessnumber,author,title,category}
    axios.post('http://localhost:5002/addbook', data)
        .then(res => {
           toast.success("Book added successfully");
            console.log(res)
            navigate("/Books")
        })
      }
  return(
    
    <div >
   { /*<div className="body">*/}
   {/* <div className="form"> <form>

    H
    <h2>
    <button onClick={()=>
      localStorage.removeItem('token')}><FaSignOutAlt/>LOGOUT</button></h2></form>
    </div> */}

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
      <div className={"navbar-collapse"}>
      <Link to = "/" className='nav-link text-uppercase text-black fs-22 fw-6 ls-1'><FaHome/>Home</Link>
          <Link to = "about" className='nav-link text-uppercase text-black fs-22 fw-6 ls-1'><FaMicroblog/>about</Link>
          <Link to = "events" className='nav-link text-uppercase text-black fs-22 fw-6 ls-1'><FaOptinMonster/>Events</Link>
          <Link to = "blogs" className='nav-link text-uppercase text-black fs-22 fw-6 ls-1'><FaBloggerB/>Blogs</Link>
          <Link to = "clubs" className='nav-link text-uppercase text-black fs-22 fw-6 ls-1'><FaLayerGroup/>Clubs</Link>
          <Link className='nav-link text-uppercase text-black fs-22 fw-6 ls-1' onClick={logout} to ="/"><FaSignOutAlt/>Logout </Link>
          </div>
    </div>
    </nav>
}
<div className="body">
    <div className="search">
    <SearchForm/>
   {/*</div>*/}
    </div>
    
    <nav className='navbar navbar-dark bg-white' id = "navbar">
      <div className='container navbar-content'>
        <div className={"navbar-collapse"}>
       
          <Link to = "/StaffBooks" className='nav-link text-uppercase text-black fs-22 fw-6 ls-1'>BOOKS</Link>
          <Button  className="si" variant="" size="lg"
  aria-labelledby="contained-modal-title-vcenter"
  centered onClick={handleShow}> 
          
        ADD_BOOKS
      </Button>
      <Modal show={show} onHide={handleClose}   size="lg"
  aria-labelledby="contained-modal-title-vcenter"
  centered
>
      
      <Modal.Header closeButton>
          <Modal.Title></Modal.Title></Modal.Header>
          
        <Modal.Body >
          <div className="add">
        <form onSubmit={handleSubmit} >
                BOOK_ID :     <input
                    className="inputs"
                    type="text"
                    onChange={(e)=>setId(e.target.value)}
                    value={id} />
                <br />

                ACCESSNUMBER :  <input className="inputs"
                    type="text"
                    onChange={(e)=>setAccessnumber(e.target.value)}
                    value={accessnumber} />

                AUTHOR :    <input
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="inputs"
                    type="text" /> <br />
                

                TITLE :    <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="inputs" type="text" /> <br />

                CATEGORY :    <input className="inputs"
                    type="text"
                    onChange={(e) =>setCategory(e.target.value)}
                    value={category}/> <br />
                   
                 <button className="btn btn-info"  type="submit" > ADD BOOK  
                 </button> 
                 </form>
                 </div>
                   
                    </Modal.Body>
       
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
      
      {/* <Link to = "/AddBooks" className='nav-link text-uppercase text-black fs-22 fw-6 ls-1'>ADD BOOKS</Link> */}
          <Link to = "/AddUsers" className='nav-link text-uppercase text-black fs-22 fw-6 ls-1'>ADD_MEMBERS</Link>
          <Link to = "/Users" className='nav-link text-uppercase text-black fs-22 fw-6 ls-1'>MEMBERS</Link>
          <Link to = "/StaffStatus" className='nav-link text-uppercase text-black fs-22 fw-6 ls-1'>ISSUANCES/RENEWALS</Link>
         
         
          <div className="Navbar" bg="primary" variant="dark">
       {/* <Link to={""} className="navbar-brand">
          {" "}
          <img
            src="https://static.vecteezy.com/system/resources/previews/009/330/731/original/avatar-icon-profile-icon-member-login-isolated-login-icons-profile-icons-free-vector.jpg"
            width="0"
            height="23"
            alt="brand"
          />
    </Link>*/}
    
        
        </div>
           </div>    
          </div> 
          </nav>
          {/* <div className="se"><h3><Searchbar/></h3></div> */}
          <div><Books/></div>
          </div>
          </div>
          
         
  )
}

export default StaffHome;