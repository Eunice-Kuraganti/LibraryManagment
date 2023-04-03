import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import "../Events/Events.css";
class Events extends Component {
  render() {
//     const myStyle={
//         backgroundImage: 
//  "url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
//         height:'80vh',
//         marginTop:'-70px',
//         fontSize:'50px',
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//     };
    return (
      <div><Navbar/>
      {/* <div style={myStyle}>
        <h1> geeksforgeeks </h1>
      </div> */}
      <div className='poster'>
        <img src="https://edit.org/photos/editor/json/2022/08/31/d/9/d955164272355e1802e5b597632fccf7_edit.org.jpg-376.jpg"/>
      </div>
      <div className='poster1'>
        <img src="https://www.journalism.co.uk/listen/?cmd=ShowAsset&assetID=85907"/>
      </div>
      </div>
    );
  }
}
export default Events