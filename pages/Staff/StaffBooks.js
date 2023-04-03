import React from "react";
import { useState,useEffect } from "react";
import {useNavigate,NavLink} from "react-router-dom";
import axios from "axios";
import { Card,Modal, Table, ButtonGroup, Button, InputGroup, FormControl } from "react-bootstrap";
import '../Books/Books.css';
import '../User/UserBook.css';

import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import { Container } from "react-bootstrap";
function StaffBooks(props) {
  const navigate = useNavigate()
  
    const [bookData, setBookdata]= useState([]);
  const [filterdata, setFilterdata]= useState([]);
  const [query, setQuery] = useState('');
   
  useEffect( ()=>{
    const getBookdata= async()=>{
      const reqData= await fetch("http://localhost:5002/books");
      const resData= await reqData.json();
      //console.log(resData);
      setBookdata(resData);
      setFilterdata(resData);

    }
getBookdata();
  },[]);
  
  
const handleAddProduct=(id)=>
{
    console.log(id)
  axios.get("http://localhost:5002/book/"+id)
   .then(res=>{
    console.log(res.data)
    navigate("/Cart")
    
   })
}
  
const BarStyle = { height:"200%",width:"90rem",background:"#F0F0F0",border:"", padding:"2rem"};
  const handlesearch=(event)=>{
    const getSearch= event.target.value; 
    if(getSearch.length > 0)
    {     
     const searchdata= bookData.filter( (item)=> item.title.toLowerCase().includes(getSearch) ||  item.author.toLowerCase().includes(getSearch) ||  item.category.toLowerCase().includes(getSearch) ||  item.accessnumber.toLowerCase().includes(getSearch));
     setBookdata(searchdata);
    } 
    // else if(getSearch.length > 0 &&  bookData.filter( (item)=> item.title.toLowerCase().includes(getSearch)))
    // {     
    // //  const searchdata= bookData.filter( (item)=> item.title.toLowerCase().includes(getSearch));
    //  setBookdata(searchdata);
    // } 
    else {
      setBookdata(filterdata);
    }
    setQuery(getSearch);
  }

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
  const { userId, userEmail, bookId, bookTitle ,request} = cart;

  const onInputChange = (e) => {
    setCart({ ...cart, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:7000/addIssue", cart);
    toast.info("REQUEST FOR BOOK ISSUAL HAS BEEN SENT ");
    navigate("/UserBooks");
  };
  return(

        <React.Fragment>   
                   <div className="boook">
                  <img src="https://www.frontlist.in/storage/uploads/2021/06/GettyImages-577674005.jpg"/>
                  </div>  
                    <Card className="border">
       <form action="/" method="get">
        <label htmlFor="navbar-search">
            <span className="visually-hidden"></span>
        </label>
       
        </form>
        <div className='row-lg-5'> 
        <h2>
        
            <div className='col-lg-12 mt-3 mb-3'>
           
                <div className="searching">            
                <input  type="text" style={BarStyle} name='name' value={query} size="lg"  className="form-control" onChange={(e)=>handlesearch(e)} placeholder='SEARCH BOOKS BASED ON ACCESSNUMBER,AUTHOR,TITLE AND CATEGORY ...' />
                
     
                </div>          
          
            </div>

            <div className='col-lg-12'>
            <Table striped bordered hover variant="light">
              <thead>
                <tr>
                  <th>BOOK_ID </th>
                  <th>ACCESSNUMBER</th>
                  <th>AUTHOR</th>
                  <th>TITLE</th>
                  <th>CATEGORY</th>
                </tr>
              </thead>
              <tbody>
                {
                  bookData.map( (getBook, index)=>(
                  <tr key={index}>
                  <td>{index+1} </td>
                  <td>{getBook.accessnumber}</td>
                  <td>{getBook.author}</td>
                  <td>{getBook.title}</td>
                  <td>{getBook.category}</td>
                   </tr>
                   )) }  
                  
                    
              </tbody>
            </Table>
            </div>
            </h2>
        </div>
        </Card>

        </React.Fragment>
    );

}

export default StaffBooks;