import {  useState } from "react";
import axios from "axios";
import '../Staff/Staffreg.css';
import { Link } from 'react-router-dom';
function StaffRegister() {
  
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
 
 
    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:5001/api/v1/auth/register", {
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
          });
          alert("Member Registation Successfully");
 
        } catch (err) {
          alert(err);
        }
      }
  
    return (
    <div className="App">
    <div class="container mt-" >
      
    <div className="cards">
            {/* <h1>Staff Registation</h1> */}
            <div className="staffreg">
    <img src="https://icon-library.com/images/admin-login-icon/admin-login-icon-18.jpg"/>
    </div>
    <form className="regstaff">
        <div className="">
          <label>First name</label>
          <input type="text"  class="form-control" id="firstname" placeholder="Enter Name"
          
          value={firstname}
          onChange={(event) => {
            setFirstname(event.target.value);
          }}
          />
 
        </div>
        <div class="">
          <label>Last name</label>
          <input type="text"  class="form-control" id="lastname" placeholder="Enter Name"
          
          value={lastname}
          onChange={(event) => {
            setLastname(event.target.value);
          }}
          />
 
        </div>
        <div class="">
          <label>email</label>
          <input type="email"  class="form-control" id="email" placeholder="Enter Email"
          
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          
          />
        </div>
 
        <div class="">
            <label>password</label>
            <input type="password"  class="form-control" id="password" placeholder="Enter password"
            
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            
            />
          </div>
 
        <button type="submit" class="btn btn-primary mt-4" onClick={save} >Save</button>
      
      </form>
      <Link to = "Login" className='nav-link text-uppercase text-black fs-22 fw-6 ls-1'>Login</Link>
    </div>
    </div>
    </div>
     
    );
  }
  
export default StaffRegister;