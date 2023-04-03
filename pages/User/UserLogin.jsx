import {  useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import '../User/UserLogin.css';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

function UserLogin() 
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
      axios.post('http://localhost:5000/api/v1/auth/authenticate', {
        email: email,
        password: password
      }).then(result => {
        
        localStorage.setItem('token',result.data.token)
        toast.success("Login Successful")
        navigate("/UserHome")
      })
        .catch(error => {
          toast.error('Wrong Credentials')
          console.log(error)
        })
    }
  
    return (
      <div className="login">
      <div className="App">
       
       <label className="label"><h2>Member Login</h2></label>
       <div className="login-form">
      <h2>
        Email : <input value={email} onChange={handleEmail} type="text" /> <br />
       Password : <input value={password} onChange={handlePassword} type="text"  /> <br />
        <button className="btn btn-info" onClick={handleApi} >Login</button>
        </h2>
        </div>
        <Link to = "register" className='nav-link text-black fs-22 fw-6 ls-1'>SignUp</Link>
      </div>
      </div>
    );
  }
  
export default UserLogin
