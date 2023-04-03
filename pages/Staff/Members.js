import React, { Component, } from "react";
import '../Books/Books.css';
import { Card, Table, ButtonGroup, Button, InputGroup, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navs from "../../components/Navbar/Navs";
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

export default class Members extends Component 
{
 
  constructor(props) {
    super(props);
    this.state = {
      members: [],
    
    };
   
  }
  componentDidMount() {
   axios.get("http://localhost:5005/members")
     .then(response => {  
      const members = response.data;  
      this.setState({ members }); 
     
    })  
  }
  deleteRow(id, e)
    {  
      axios.delete("http://localhost:5005/member/"+id)  
        .then(res => {  
          console.log(res);  
          console.log(res.data);  
      
          const members = this.state.members.filter((member) => member.id !== id);  
          this.setState({ members });  
        })  
    }
     
  render() 
  {
    return (
      
      <div>
        <Navs/>
        
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
            <Table striped bordered hover variant="light">
              <thead>
                <tr >
                <th>USER_ID</th>
                  <th>FIRST NAME</th>
                  <th>LAST NAME</th>
                  <th>EMAIL</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {this.state.members.length === 0 ? (
                  <tr align="center">
                    <td colSpan="5">{this.state.members.length}</td>
                  </tr>
                ) : (
                  this.state.members.map((member,id) => (
                    <tr key={id} >
                      <td>{id+1}</td>
                      <td>{member.firstname} </td>
                      <td>{member.lastname} </td>
                      <td>{member.email} </td>
                      <td>
                          
                      <button className="btn btn-danger" onClick={(e) => this.deleteRow(member.id, e)}>Delete<FaTrash/></button>
                           
                      </td>
                    </tr>
                  ))
                )}
                  </tbody>
            </Table>
          </Card.Body>
          
        </Card>
        </h3>
        
      </div>
    );
  }
  }
