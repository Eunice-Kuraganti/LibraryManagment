import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Marquee from "react-fast-marquee";
import Navbar from '../../components/Navbar/Navbar';
import { FaAccessibleIcon, FaCcDinersClub, FaHandPointDown, FaMailBulk } from 'react-icons/fa';
export default function Clubs() 
{
    return (
      <div><Navbar/>
        <div className="container"><Marquee>
        <h1>Wanna Join the Clubs | Reach out to the respective mails given below<FaHandPointDown/></h1>
      </Marquee>
        <div style={{ display:"contents",padding: 0}}>
            <Carousel>
            <Carousel.Item interval={1500}>
              <img className="d-block w-70"src="https://images.unsplash.com/opengraph/1x1.png?auto=format&fit=crop&w=1200&h=630&q=60&mark-w=64&mark-align=top%2Cleft&mark-pad=50&blend-w=1&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1615791287388-6f1bd87ace4e%3Fcrop%3Dfaces%252Cedges%26cs%3Dtinysrgb%26fit%3Dcrop%26fm%3Djpg%26ixid%3DMnwxMjA3fDB8MXxzZWFyY2h8Mnx8Ym9vayUyMGNsdWJ8ZW58MHx8fHwxNjc5Mzg3NzEy%26ixlib%3Drb-4.0.3%26q%3D60%26w%3D1200%26auto%3Dformat%26h%3D630%26mark-w%3D750%26mark-align%3Dmiddle%252Ccenter%26blend-mode%3Dnormal%26blend-alpha%3D10%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fauto%253Dformat%2526fit%253Dcrop%2526w%253D750%2526h%253D84%2526q%253D60%2526txt-color%253D000000%2526txt-size%253D40%2526txt-align%253Dmiddle%25252Cleft%2526txt-pad%253D80%2526txt-width%253D660%2526txt-clip%253Dellipsis%2526txt%253Dbook%252520club%26blend%3D000000"/>
              <Carousel.Caption>
                <h1>LIBRARY_CLUB</h1>
                <h1><FaMailBulk></FaMailBulk>libraryclub@library.com</h1>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={1500}>
              <img className="d-block w-70"src="https://www.cusef.org.hk/resources/cusef_blog/book-1.jpg"/>
              <Carousel.Caption>
                <h1>CLUB_OF_BLOGS</h1>
                <h1><FaMailBulk/>blogsclub@library.com</h1>
              </Carousel.Caption>
            </Carousel.Item>

            </Carousel>
        </div>
       
        </div>
        </div>
      );
    }