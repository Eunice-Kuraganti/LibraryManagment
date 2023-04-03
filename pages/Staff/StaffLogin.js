import {  useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "../Staff/StaffLogin";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import { Modal, Button, Card } from "react-bootstrap";

function StaffLogin() 
{
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    console.log({ email, password })

    const handleEmail = (e) => {
      setEmail(e.target.value)
    }
  
    const handlePassword = (e) => {
      setPassword(e.target.value)
    }
  
    const handleApi = () => {
      console.log({ email, password })
      axios.post('http://localhost:5001/api/v1/auth/authenticate', {
        email: email,
        password: password
      }).then(result => {
        
        localStorage.setItem('token',result.data.token)
        toast.success("Login successfull")
        navigate("/StaffHome")
        
      })
        .catch(error => {
          toast.error('service error')
          console.log(error)
        })
    }
  
    return (
      <div >
        <div className="App">
        <div className=""> 
        
        <Card>
        <img src="../../images/staff.png"/>
        
       <h2>
         Email : <input value={email} onChange={handleEmail} type="text" /> <br />
        Password : <input value={password} onChange={handlePassword} type="text" /> <br />
         <button className="btn btn-info" onClick={handleApi} >Login</button>
         </h2>
        
         <Link to = "register" className='nav-link text-black fs-22 fw-6 ls-1' variant="" size="lg"
  aria-labelledby="contained-modal-title-vcenter"
  centered><p>Not registered yet? Signup</p><h4></h4></Link>
          </Card>
         </div>
         </div>
         </div>
         
        
    );
  }
  
export default StaffLogin