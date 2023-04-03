import React from 'react'
import axios from 'axios';

import "../Cart/IssueModal.css";

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Draggable from 'react-draggable';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

function IssueModal({ setOpenModal }) {
    const navigate=useNavigate();
    const [cart, setCart] = useState({
       
        userEmail: "",
        bookId: "",
        bookTitle:"",
        
      }); // userId: "",

      const {  userEmail, bookId, bookTitle ,date,status} = cart;

      const onInputChange = (e) => {
        setCart({ ...cart, [e.target.name]: e.target.value });
      };
      const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:7000/postStatus", cart);
       
     toast.info('BOOK ISSUED SUCCESSFULLY' )
      toast.warn('!!!CLOSE THE ISSUE')
        
      };
  return (

    <Draggable>
       
    <div className="Apps">
    <div className="form">
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            
          </button>
        </div>
        {/* <div className="title">
          <h1>Issue the Book</h1>
        </div> */}
        <div className="con">
          <div>
          <form onSubmit={(e) => onSubmit(e)}>
           
          <label className="label"><h3>BOOK ISSUING FORM</h3><p></p></label>
    {/* <div class="col">
      <input type="text" className="form-control" name="userId" value={userId} onChange={(e) => onInputChange(e)} placeholder="USER_ID"></input>
    </div> */}
    <div className="col">
      <input type="email" className="form-control" name="userEmail" value={userEmail} onChange={(e) => onInputChange(e)} placeholder="EMAIL"></input>
    </div>
    {/* <div className="col">
      <input type="text" className="form-control" name="bookId" value={bookId} onChange={(e) => onInputChange(e)} placeholder="BOOK_ID"></input>
    </div> */}
    <div className="col">
      <input type="text" className="form-control" name="bookTitle" value={bookTitle} onChange={(e) => onInputChange(e)} placeholder="TITLE OF BOOK"></input>
    </div>
    <div className="col">
      <input type="date" className="form-control" name="date" value={date} onChange={(e) => onInputChange(e)} placeholder="dd-mm-yyyy"></input>
    </div>
    <div className="col">
      <input type="text" className="form-control" name="status" value={status} onChange={(e) => onInputChange(e)} placeholder="Status"></input>
    </div>
    <button 
    className="btn btn-primary" type="submit">Issue Request</button> 
   
    </form>
  </div>
  
          </div>
          
        </div>
      </div>
      </div>
      </div>
     
      </Draggable>
     
    
  )
}

export default IssueModal