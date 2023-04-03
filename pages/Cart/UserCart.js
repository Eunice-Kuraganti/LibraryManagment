import React, { Component } from 'react';
import "../Cart/UserCart.css";
import axios from 'axios';
import { useState,useEffect } from "react";
import {useNavigate,Link} from "react-router-dom";
import Navs from '../../components/Navbar/Navs';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
function UserCart()
{
let navigate = useNavigate();
    const [cart, setCart] = useState({
        userId: "",
        userEmail: "",
        bookId: "",
        bookTitle:"",
        
      });

      const { userId, userEmail, bookId, bookTitle } = cart;

      const onInputChange = (e) => {
        setCart({ ...cart, [e.target.name]: e.target.value });
      };
      const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:7000/addIssue", cart);
        toast.success("Added Book Successfully ");
        navigate("/UserStatus");
      };
        return (
            <div><Navs/>
            <div className="post-container">
            
                 <form onSubmit={(e) => onSubmit(e)}>
                    
  <div className="card"> 
  <label className="label"><h3>BOOK ISSUING FORM</h3><p></p></label>
    <div class="col">
      <input type="text" className="form-control" name="userId" value={userId} onChange={(e) => onInputChange(e)} placeholder="USER_ID"></input>
    </div>
    <div className="col">
      <input type="text" className="form-control" name="userEmail" value={userEmail} onChange={(e) => onInputChange(e)} placeholder="EMAIL"></input>
    </div>
    <div className="col">
      <input type="text" className="form-control" name="bookId" value={bookId} onChange={(e) => onInputChange(e)} placeholder="BOOK_ID"></input>
    </div>
    <div className="col">
      <input type="text" className="form-control" name="bookTitle" value={bookTitle} onChange={(e) => onInputChange(e)} placeholder="TITLE OF BOOK"></input>
    </div>
    <button className="btn btn-info" type="submit"><h5> Issue Request</h5> </button> 
  </div>
</form>
            </div>
            {/* <div  className="container"><div className="status"><Status/> */}
            </div>
            //  </div></div>
        );
        }

export default UserCart;