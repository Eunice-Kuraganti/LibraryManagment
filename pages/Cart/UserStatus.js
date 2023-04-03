import React from "react";
import { useState,useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {Table, ButtonGroup, Button, InputGroup, FormControl } from "react-bootstrap";
import Navs from "../../components/Navbar/Navs";
import "../Cart/StaffStatus.css";
import { Modal,  Card } from "react-bootstrap";

import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import axios from "axios";
import StaffStatus from "./StaffStatus";
import "../Cart/UserStatus.css";
function UserStatus(props) {
  
    const navigate=useNavigate();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [cartData, setCartdata]= useState([]);

    const [cart, setCart] = useState({
        userId: "",
        userEmail: "",
        bookId: "",
        bookTitle:"",
        Request:"",
        
      });
    
    useEffect( ()=>{
     
 
    
      getBookdata();
    },[]);
    const getBookdata= async()=>{
        const reqData= await fetch("http://localhost:7000/getStatus");
        const resData= await reqData.json();
        //console.log(resData);
        setCartdata(resData);    
        console.log(resData);
      }

    const deletePost = async(id)=>{
        await axios.delete(`http://localhost:7000/cart/ `+id)
        .then(console.log("Deleted"))
       
        toast.success("Book Returned Successfully")
        setCartdata(getBookdata);
       navigate("/UserHome")
                   
      
      
     
     }
     const closePost = async(id)=>{
        await axios.delete(`http://localhost:7000/cart/ `+id)
        .then(console.log("Deleted"))
       
        toast.success("REQUEST CLOSED")
        setCartdata(getBookdata);
       navigate("/UserHome")
                   
      
      
     
     }
    // const deletePost = (id) => {
    //     axios.delete("http://localhost:7000/cart"+id);
    //     setCartdata(
    //         cartData.filter((getCart) => {
    //          console.log( );

    //        })
    //     );
    //  };
  
    const { userId, userEmail, accessnumber, bookTitle ,request} = cart;

    const onInputChange = (e) => {
      setCart({ ...cart, [e.target.name]: e.target.value });
    };
    const onSubmit = async (e) => {
      e.preventDefault();
      await axios.post("http://localhost:7000/addIssue", cart);
      toast.info("REQUEST HAS BEEN SENT ");
    //   toast.warn("DONT FORGET TO CLOSE THE REQUEST")
      navigate("/UserStatus");
    };
    return(
      <>
     
      <div> <Navs/></div>
      
      <div className="upp">CART PAGE</div>
      <div className="status">
     
      
  
          <React.Fragment>              
           <Container >
          
          
              
  
              <div className='container'>
              <div className="containers">
           <nav aria-label="...">
  <ul class="pagination pagination-lg">
    <li class="page-item disabled">
      <a className="page-link" href="#" tabindex="-1">1</a>
    </li>
    <li ><a class="page-link" >2</a></li>
    <li ><a class="page-link" >3</a></li>
  </ul>
</nav></div>
              <Table className="tabs" striped bordered hover variant="light">
                <thead className="text-muted">
                  <tr>
                  <th scope='col'>CART ID</th>
                  {/* <th scope="col">User Id</th>
                    
                    <th scope="col">User Email</th> */}
                    {/* <th scope='col'>ACCESSNUMBER</th> */}
        
        
        <th scope="col">BOOK TITLE</th>
        <th scope='col'>DATE</th>
        <th scope='col'>STATUS</th>
        
                  </tr>
                </thead>
                <tbody>
                  {
                    cartData.map( (getCart, index)=>(
                    <tr key={getCart.cartId}>
                    {/* <td>{index+1} </td> */}
                    <td>{getCart.cartId}</td>
                    {/* <td>{getCart.userId}</td>
                    <td>{getCart.userEmail}</td> */}
                    {/* <td>{getCart.bookaccessnumber}</td> */}
                    <td>{getCart.bookTitle}</td>
                    <td>{getCart.date}</td>
                    <td>{getCart.status}</td>
                    
                    
                     <Button  className="btn btn-info" size="lg" onClick={handleShow}> 
RENEWAL
      </Button>
      <Modal show={show} onHide={handleClose}   size="lg"
  aria-labelledby="contained-modal-title-vcenter"
  centered
>
      
      <Modal.Header closeButton>
          <Modal.Title></Modal.Title></Modal.Header>
          
        <Modal.Body >
          
          <form onSubmit={(e) => onSubmit(e)}>
                    
                    <div className="card"> 
                    {/* <label className="label"><h3>BOOK ISSUING FORM</h3><p></p></label>
                      <div class="col">
                        <input type="text" className="form-control" name="userId" value={userId} onChange={(e) => onInputChange(e)} placeholder="USER_ID"></input>
                      </div> */}
                      <div className="col">
                        <input type="text" className="form-control" name="userEmail" value={userEmail} onChange={(e) => onInputChange(e)} placeholder="EMAIL"></input>
                      </div>
                      {/* <div className="col">
                        <input type="text" className="form-control" name="accessnumber" value={accessnumber} onChange={(e) => onInputChange(e)} placeholder="ACCESSNUMBER"></input>
                      </div> */}
                      <div className="col">
                        <input type="text" className="form-control" name="bookTitle" value={bookTitle} onChange={(e) => onInputChange(e)} placeholder="TITLE OF BOOK"></input>
                      </div>
                      <div className="col">
                        <input type="text" className="form-control" name="request" value={request} onChange={(e) => onInputChange(e)} placeholder="TYPE OF REQUEST"></input>
                      </div>
                      <button className="btn btn-info" type="submit"><h5> Issue Request</h5> </button> 
                    </div>
                  </form>
                    </Modal.Body>
       
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
      <Button className="btn btn-secondary" size="lg" onClick={() =>closePost(getCart.cartId)}>Close</Button>
      
      <Button className="btn btn-danger" size="lg" onClick={() =>deletePost(getCart.cartId)}>RETURN </Button>
                    {/* <Link to="/cart"  className="btn btn-success " style={{color:"black"}} >Issue</Link> */}
                    </tr>
                     )) }  
                    
                      
                </tbody>
              </Table>
             
              {/* <div className="sideimg">
                        <img src="https://thumbs.dreamstime.com/b/glasses-lying-pile-books-white-background-vertical-ph-photo-74957483.jpg"/>
                    </div> */}
              </div>
              
          
        </Container>
  
          </React.Fragment>
          </div>
          </>
      );
  
                }
  export default UserStatus
