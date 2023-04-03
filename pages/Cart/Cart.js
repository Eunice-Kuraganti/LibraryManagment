// import React from 'react'
// import { useState } from 'react';
// import Navs from '../../components/Navbar/Navs';
// function Cart() 
// {

//   const [bookData, setBookdata]= useState([]);

//   return (
//     <>
//     <Navs/>
//     <div className="container">
   
//     <React.Fragment>              
//          <></>
    
//             <div className="container">

//             <div className='col-md-12'>
//             <table className="table w-auto small" style={{ color: "black" }}>
//               <thead className="text-muted">
//                 <tr>
//                   {/* <th>BOOK_ID </th>
//                   <th>ACCESSNUMBER</th>
//                   <th>AUTHOR</th>
//                   <th>TITLE</th> */}
//                   <th scope='col'>Book Id</th>
//       <th scope="col">Access number</th>
//       <th scope="col">Book Title</th>
//       <th scope="col">Author</th>
//       <th scope="col">Category</th>
//       <th scope='col'>Action</th>
//                 </tr>
                
//               </thead>
//               <tbody>
//                 {
                  
//                   bookData.map( (getBook, index)=>(
//                   <tr key={getBook.id}>
//                   {/* <td>{index+1} </td> */}
//                   <td>{getBook.id}</td>
//                   <td>{getBook.accessNumber}</td>
//                   <td>{getBook.title}</td>
//                   <td>{getBook.author}</td>
//                   <td>{getBook.category}</td>
                
//                   </tr>
//                    )) }  
                  
                    
//               </tbody>
//             </table>
//             </div>
            
//         </div>
      

//         </React.Fragment>
//     </div>
//     </>
//   )
// }

// export default Cart