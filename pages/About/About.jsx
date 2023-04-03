import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";
import Navbar from '../../components/Navbar/Navbar';
const About = () => {
  return (
    <div><Navbar/>
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
         
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>ABOUT</h2>
            <p className='fs-18'>"Elibrary" redirects here. For the former online library eLibrary, see HighBeam Research.
A digital library, also called an online library, an internet library, a digital repository, or a digital collection is an online database of digital objects that can include text, still images, audio, video, digital documents, or other digital media formats or a library accessible through the internet. Objects can consist of digitized content like print or photographs, as well as originally produced digital content like word processor files or social media posts. In addition to storing content, digital libraries provide means for organizing, searching, and retrieving the content contained in the collection. Digital libraries can vary immensely in size and scope, and can be maintained by individuals or organizations.[1] The digital content may be stored locally, or accessed remotely via computer networks. These information retrieval systems are able to exchange information with each other through interoperability and sustainability.</p>
            </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default About