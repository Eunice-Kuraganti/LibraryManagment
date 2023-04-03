import axios from "axios"
import "../Staff/StaffHome.css";
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"
import Navs from "../../components/Navbar/Navs";
import "../Books/AddBook.css";
import { Card, Table, ButtonGroup, Button, InputGroup, FormControl } from "react-bootstrap";

function AddUsers() {
    const navigate = useNavigate()
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
  const handlebutton=()=>{
    //     alert("Book added successfully");
        
    //   }
  }
  const handleFirstname = (e) => {
    setFirstname(e.target.value);
    setSubmitted(false);
  };
  const handleLastname = (e) => {
    setLastname(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({ firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,})

        const data = {firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,}
        axios.post('http://localhost:7000/addUser', data)
            .then(res => {
            //   toast("User added successfully");
                console.log(res)
                
                
            })
            if (firstname === '' || email === '' || password === '') {
                setError(true);
              } else {
                setSubmitted(true);
                setError(false);
              }
            //     if (res.data == 'saved') {
            //         navigate("/Books")
            //     }
            // })
            // .catch(err => {
            //     console.log(err)
            // })
            
    }
    const successMessage = () => {
        return (
          <div
            className="success"
            style={{
              display: submitted ? '' : 'none',
              
            }
            }>
            <h1>User {firstname} successfully registered!!</h1>
            
          </div>
          
        );
      };
      const errorMessage = () => {
        return (
          <div
            className="error"
            style={{
              display: error ? '' : 'none',
             
            }}>
            <h1>!!! Please enter all the fields</h1>
           
          </div>
        );
      };
     

    return (
      <div>
     <Navs/>
     <div className="b">
    <div className="Apps">
    <div className="form">
    <div>
      <h1>USER REGISTRATION FORM</h1>
    </div>
    <div className="messages">
      {errorMessage()}
      {successMessage()}
      
    </div>
      <div className="post-container">
        <div >
            <form onSubmit={handleSubmit}>
            
      {/* Labels and inputs for form data */}
      <label className="label">FIRSTNAME</label>
      <input onChange={handleFirstname} className="input"
        value={firstname} type="text" />

        <label className="label">LASTNAME</label>
      <input onChange={handleLastname} className="input"
        value={lastname} type="text" />

      <label className="label">EMAIL</label>
      <input onChange={handleEmail} className="input"
        value={email} type="email" />

      <label className="label">PASSWORD</label>
      <input onChange={handlePassword} className="input"
        value={password} type="password" />

      <button  className="btn btn-info" type="submit">
        Submit
      </button>
        
     
    </form> 
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}



export default AddUsers