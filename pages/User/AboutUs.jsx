import { useEffect, useState } from "react";
import { Navigate,useNavigate} from "react-router-dom";
import Sidebar from "./Sidebar";
function AboutUs () 
{

  const navigate = useNavigate()
  useEffect(()=>{
    if (!localStorage.getItem('token'))
    {
      navigate("/")
    }
  },[])
  return(
    <form>
      <Sidebar/>
    Home:
    <h1>
    <button onClick={()=>
      localStorage.removeItem('token')}>LOGOUT</button></h1></form>
  )
}  
export default AboutUs