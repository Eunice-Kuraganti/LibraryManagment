import React, { Component, } from "react";
import '../Books/Books.css';
import { Card, Table, ButtonGroup, Button, InputGroup, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navs from "../../components/Navbar/Navs";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

import {
  faCoffee,
  faEdit,
  faTrash,
  faList,
  faAdd,
  faSearch,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import Searchbar from "../Staff/Searchbar";


export default class Users extends Component 
{
 
  constructor(props) {
    super(props);
    this.state = {
      users: [],
     //search: " "
    };
   
  }
 
  
  componentDidMount() {
   // fetch("http://localhost:5002/books")
   axios.get("http://localhost:7000/getusers")
     //.then((response) => response.json())
     // .then((data) => this.setState({ books:data}));
     .then(response => {  
      const users = response.data;  
      this.setState({ users }); 
     
    })  
  }
  
 /*} deleteBook = (bookId,e) => {
    axios.delete("http://localhost:5002/books" + bookId).then((response) => {
      if (response.data != null) {
        this.setState({ show: true });
        setTimeout(() => this.setState({ show: false }), 3000);
        this.setState({
          books: this.state.books.filter((book) => book.id !== bookId),
        });
      } else {
        this.setState({ show: false });
      }
    });*/
    deleteRow(id, e)
    {  
      axios.delete("http://localhost:7000/user/"+id)  
        .then(res => {  
          console.log(res);  
          console.log(res.data);  
      
          const users = this.state.books.filter((user) => user.id !== id); 

          this.setState({users });
          toast.success("BOOK DELETED SUCCESSFULLY")  
        })  
    }
    // addRow(id, e)
    // {  
    //   axios.add("http://localhost:5002/addbook")  
    //     .then(res => {  
    //       console.log(res);  
    //       console.log(res.data);  
      
    //       const books = this.state.books.filter((book) => book.id !== 'new');  
    //       this.setState({ books });  
    //     })  
    // }
  render() 
  {
    return (
    
      <div>
        <Navs></Navs>
        <div style={{ display: this.state.show ? "block" : "none" }}>   
        </div>
        <h3> 
          
       <Card className="border">
       <form action="/" method="get">
        <label htmlFor="navbar-search">
            <span className="visually-hidden"></span>
        </label>
       
        </form>
       
          <Card.Header>
            {" "}
            <div>
            <FontAwesomeIcon icon={faList} /> {"  "}
            Users List</div>
           
          </Card.Header>
          <Card.Body>
          <div className='col-lg-12'>
            <Table striped bordered hover variant="light">
              <thead>
                <tr >
                <th>USER_ID</th>
                  <th>FIRSTNAME</th>
                  <th>LASTNAME</th>
                  <th>EMAIL</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.length === 0 ? (
                  <tr align="center">
                    <td colSpan="5">{this.state.users.length}</td>
                  </tr>
                ) : (
                  this.state.users.map((user,id) => (
                    <tr key={id} >
                      <td>{id+1}</td>
                      <td>{user.firstname} </td>
                      <td>{user.lastname} </td>
                      <td>{user.email} </td>
                      
                      <td>
                        <ButtonGroup>
                          </ButtonGroup>
                           {/*}<Button
                            size="lg"
                            variant="danger"
                           onClick={this.deleteBook.bind(this, book.id)}>*/}
                           <button className="btn btn-danger" onClick={(e) => this.deleteRow(user.id, e)}>Delete<FaTrash/></button>
                           
                       
                      </td>
                    </tr>
                  ))
                )}
                  </tbody>
            </Table>
            </div>
          </Card.Body>
          
        </Card>
        </h3>
        
      </div>
    );
  }
  }
