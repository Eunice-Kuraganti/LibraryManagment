import {  useState } from "react";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import "../User/UserRegister.css";
import { Link, useNavigate } from 'react-router-dom';
import { Card } from "react-bootstrap";

function UserRegister() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
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


  async function save(event) {
      event.preventDefault();
      try {
        await axios.post("http://localhost:5000/api/v1/auth/register", {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        });
        if (firstname === '' || email === '' || password === '') {
          setError(true);
        } else {
          setSubmitted(true);
          setError(false);
        }
        

      } catch (err) {
       
      }
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
    <div className="b">
    <div className="Apps">
    <div className="form">
    <div>
      <h1>USER REGISTRATION FORM</h1>
    </div>

    {/* Calling to the methods */}
    <div className="messages">
      {errorMessage()}
      {successMessage()}
      
    </div>

    <form>
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

      <button onClick={save} className="btn btn-info" type="submit">
        Submit
      </button>
      
        <Link to = "UserLogin" className='nav-link text-black fs-22 fw-6 ls-1'>login</Link>
     
    </form>
  </div>
  </div>
  </div>
);
}
  
  //   const [firstname, setFirstname] = useState("");
  //   const [lastname, setLastname] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
 
 
  //   async function save(event) {
  //       event.preventDefault();
  //       try {
  //         await axios.post("http://localhost:5000/api/v1/auth/register", {
  //         firstname: firstname,
  //         lastname: lastname,
  //         email: email,
  //         password: password,
  //         });
  //         toast.success("Member Registation Successfully");
 
  //       } catch (err) {
         
  //       }
  //     }
  
  //   return (
  //   <div>
  //   <div class="container mt-4" >
  //   <div class="card">
  //           <h1>Member Registation</h1>
    
  //   <form>
  //       <div class="form-group">
  //         <label>First name</label>
  //         <input type="text"  class="form-control" id="firstname" placeholder="Enter Name"
          
  //         value={firstname}
  //         onChange={(event) => {
  //           setFirstname(event.target.value);
  //         }}
  //         />
 
  //       </div>
  //       <div class="form-group">
  //         <label>Last name</label>
  //         <input type="text"  class="form-control" id="lastname" placeholder="Enter Name"
          
  //         value={lastname}
  //         onChange={(event) => {
  //           setLastname(event.target.value);
  //         }}
  //         />
 
  //       </div>
  //       <div class="form-group">
  //         <label>email</label>
  //         <input type="email"  class="form-control" id="email" placeholder="Enter Email"
          
  //         value={email}
  //         onChange={(event) => {
  //           setEmail(event.target.value);
  //         }}
          
  //         />
  //       </div>
 
  //       <div class="form-group">
  //           <label>password</label>
  //           <input type="password"  class="form-control" id="password" placeholder="Enter password"
            
  //           value={password}
  //           onChange={(event) => {
  //             setPassword(event.target.value);
  //           }}
            
  //           />
  //         </div>
 
  //       <button type="submit" class="btn btn-primary mt-4" onClick={save} >Save</button>
      
  //     </form>
  //     <Link to = "Login" className='nav-link text-uppercase text-black fs-22 fw-6 ls-1'>Login</Link>
  //   </div>
  //   </div>
  //    </div>
  //   );
  // }
  
export default UserRegister;