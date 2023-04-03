import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';
import Marquee from "react-fast-marquee";
import * as AiIcons from "react-icons/ai";
import Navbar from '../../components/Navbar/Navbar';
const Home = () => {
  return (
    <main>
      <Navbar/>
      <div>
<div className="bg-secondary p-2 text-white bg-opacity-10"><Marquee>
        <h3><AiIcons.AiFillAlert />Part-time jobs available in central library | Students who want to join can directly meet the librarian || Reach out to <AiIcons.AiFillMail /> stldigitallibrary@careerspage.com</h3>
      </Marquee></div>
      </div>

        <Header/>
        <Outlet />
        
        <Footer/>
    </main>
  )
}

export default Home