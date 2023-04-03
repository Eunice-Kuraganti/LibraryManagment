import React from "react";
import "./Footer.css";
import { FaEnvelope} from "react-icons/fa";
const Footer = () => {
  return (
    
    <div className='holder'>
        <footer className='footer'>
            <div className='footer-content flex flex-c text-center text-white'>
                <h2 className='footer-text'>
                <FaEnvelope/>Feedback: stldigitallibrary@feedback.com.
                </h2><br />
             
            </div>
        </footer>
  </div>
  );
};
export default Footer