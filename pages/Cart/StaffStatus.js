import React from "react";
import { useState,useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {Table, ButtonGroup, Button, InputGroup, FormControl } from "react-bootstrap";
import Navs from "../../components/Navbar/Navs";
import IssueModal from "./IssueModal";
import "../Cart/StaffStatus.css";
import axios from "axios";
import Stats from "./Stats";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import "../../images/items-requested.png";
function StaffStatus(props) {
  
    const navigate=useNavigate();
   
    const [cartData, setCartdata]= useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    useEffect( ()=>{
      
  getBookdata();
    },[]);
    const getBookdata= async()=>{
        const reqData= await fetch("http://localhost:7000/getIssues");
        const resData= await reqData.json();
        //console.log(resData);
        setCartdata(resData);    
        console.log(resData);
      }
      const deleteRow=async(id)=>{
        await axios.delete(`http://localhost:7000/issue/` +id)
        .then(console.log("Deleted"))
        navigate("/StaffHome")
        toast.success("REQUEST CLOSED")
                    setCartdata();
      
      
     
     }
  
    return(
      <>
     
      <div> <Navs/></div>
      <div className="upp"><h2>STATUS BOARD</h2></div>
      <div className="status">
     
      
  
          <React.Fragment>              
           <Container >
          {/* <div className="container">
           <nav aria-label="...">
  <ul class="pagination pagination-lg">
    <li class="page-item disabled">
      <a className="page-link" href="#" tabindex="-1">1</a>
    </li>
    <li className="page-item"><a class="page-link" >2</a></li>
    <li className="page-item"><a class="page-link" >3</a></li>
  </ul>
</nav></div> */}
              
  
           <div className='container'>
            <div className="Sidebar">
            <Stats/></div>
           <Table className="tab" striped bordered hover variant="light">
              <thead className="text-muted">
                <tr>
                 
                <th scope='col'>CART ID</th>
                {/* <th scope="col">USER ID</th> */}
                <th scope="col">USER EMAIL</th>
                {/* <th scope="col">BOOK ID</th> */}
                <th scope="col">BOOK TITLE</th>
                <th scope="col">REQUEST</th>
                <th scope='col'>ACTION</th>
                </tr>
              </thead>
              
              <tbody>
                {
                  cartData.map( (getCart, index)=>(
                  <tr key={getCart.cartId}>
                  {/* <td>{index+1} </td> */}
                  <td>{getCart.cartId}</td>
                  {/* <td>{getCart.userId}</td> */}
                  <td>{getCart.userEmail}</td>
                  {/* <td>{getCart.bookId}</td> */}
                  <td>{getCart.bookTitle}</td>
                  <td>{getCart.request}</td>
             

                  <button className="btn btn-info" onClick={()=>{setModalOpen(true)}} >ISSUE/RENEWAL</button>
                  <button className="btn btn-info" onClick={()=>{deleteRow(getCart.cartId)}} >CLOSE REQUEST</button>
                  {/* <div> <button   className="btn btn-danger"  onClick={() =>deletePost(getCart.cartId)} >RETURN</button></div> 
                  */}
                 </tr>
                  
                   )) }  
                  
                  {modalOpen&&  <IssueModal setOpenModal={setModalOpen}/>}
              </tbody>
            </Table>
            
            </div>
            
            
        
      </Container>

        </React.Fragment>
        </div>
        </>
    );

}
export default StaffStatus