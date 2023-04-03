import React from 'react';
import Navbar from '../Navbar/Navbar';
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";
   
const Header = () => {
      
  <Navbar/>
  return (
    <div>
     
    <div className='holder'>
     
        <header className='header'>
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>Dear user this is the guest version of digital library(e library) so you might not be abe to access all resources| Login to use the digital library services to the fullest between you can search books of your choice from below</p>
                <SearchForm />
            </div>
        </header>
    </div>
    </div>
  )
}

export default Header