import { useEffect, useState } from "react";
import { FaAd, FaAdversal, FaAtom, FaBomb, FaDoorClosed, FaFonticonsFi, FaLongArrowAltUp, FaSignOutAlt, FaWindowClose } from "react-icons/fa";
import {useNavigate,NavLink} from "react-router-dom";
import Sidebar from "./Sidebar";
import SearchForm from "../../components/SearchForm/SearchForm";
import './UserHome.css';
import axios from "axios";
import { Modal, Button, Card } from "react-bootstrap";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import Navs from "../../components/Navbar/Navs";
import BookList from "../../components/BookList/BookList";
function UserHome()
{
    const navigate = useNavigate()
  useEffect(()=>{
    if (!localStorage.getItem('token'))
    {
      navigate("/")
    }
  },[])
  const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [cart, setCart] = useState({
      userId: "",
      userEmail: "",
      bookId: "",
      bookTitle:"",
      Request:"",
      
    });

    const { userId, userEmail, accessnumber, bookTitle ,request} = cart;

    const onInputChange = (e) => {
      setCart({ ...cart, [e.target.name]: e.target.value });
    };
    const onSubmit = async (e) => {
      e.preventDefault();
      await axios.post("http://localhost:7000/addIssue", cart);
      toast.info("REQUEST FOR BOOK ISSUAL HAS BEEN SENT ");
      navigate("/UserStatus");
    };
  return(
    
    <div>
      <Navs/>
     
    <div className="user">
   {/* <div className="form"> <form>
    H
    <h2>
    <button onClick={()=>
      localStorage.removeItem('token')}><FaSignOutAlt/>LOGOUT</button></h2></form>
    </div> */}
    <Sidebar/>
    
    <div className="search">
    <SearchForm/></div>
    <div>
  <NavLink to="/UserBooks" ><a href="" className="logo"><img className="logo" src="https://cdn.dribbble.com/users/846370/screenshots/6761160/logo_1501.jpg"/></a></NavLink>
</div>
<div>
  <NavLink to="/UserStatus" ><a href="" className="logo"><img className="logocart" src="https://images.cdn4.stockunlimited.net/preview1300/books-in-cart-icon_1950558.jpg"/></a></NavLink>
  <Button  className="si" variant="" size="lg"
  aria-labelledby="contained-modal-title-vcenter"
  centered onClick={handleShow}> 
          
          <img className="logocarts" src="https://thumbs.dreamstime.com/b/fill-form-icon-vector-filled-flat-sign-solid-pictogram-isolated-white-edit-symbol-logo-illustration-pixel-perfect-88294214.jpg"/>
      </Button>
      <Modal  className="mod" show={show} onHide={handleClose}   size="lg"
  aria-labelledby="contained-modal-title-vcenter"
  centered
>
      
      <Modal.Header closeButton>
          <Modal.Title></Modal.Title></Modal.Header>
          
        <Modal.Body >
          
     
          <form onSubmit={(e) => onSubmit(e)}>
                    
                    <div className="card">
                    <label className="label"><h3>BOOK ISSUING FORM</h3><p></p></label> 
                    {/* <label className="label"><h3>BOOK ISSUING FORM</h3><p></p></label>
                      <div class="col">
                        <input type="text" className="form-control" name="userId" value={userId} onChange={(e) => onInputChange(e)} placeholder="USER_ID"></input>
                      </div> */}
                      <div className="col">
                        <input type="text" className="form-controll" name="userEmail" value={userEmail} onChange={(e) => onInputChange(e)} placeholder="EMAIL"></input>
                      </div>
                      {/* <div className="col">
                        <input type="text" className="form-control" name="accessnumber" value={accessnumber} onChange={(e) => onInputChange(e)} placeholder="ACCESSNUMBER"></input>
                      </div> */}
                      <div className="col">
                        <input type="text" className="form-controll" name="bookTitle" value={bookTitle} onChange={(e) => onInputChange(e)} placeholder="TITLE OF BOOK"></input>
                      </div>
                      <div className="col">
                        <input type="text" className="form-controll" name="request" value={request} onChange={(e) => onInputChange(e)} placeholder="TYPE OF REQUEST"></input>
                      </div>
                      <button className="btn btn-info" type="submit"><h4> ISSUE REQUEST</h4> </button> 
                    </div>
                  </form>
                  
                    </Modal.Body>
       
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
</div>
    {/* <div className="h">
 <h2>EXAM PREPARATION MODULES</h2>
    </div> */}
    <BookList/>

    
   
    </div>
    </div>
         
  )
}

export default UserHome