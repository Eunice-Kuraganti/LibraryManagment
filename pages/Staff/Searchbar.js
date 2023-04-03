import React from "react";
import { useState,useEffect } from "react";

import { Container } from "react-bootstrap";
function Searchbar(props) {
    const [bookData, setBookdata]= useState([]);
  const [filterdata, setFilterdata]= useState([]);
  const [query, setQuery] = useState('');
   
  useEffect( ()=>{
    const getBookdata= async()=>{
      const reqData= await fetch("http://localhost:5002/books");
      const resData= await reqData.json();
      //console.log(resData);
      setBookdata(resData);
      setFilterdata(resData);

    }
getBookdata();
  },[]);

  const handlesearch=(event)=>{
    const getSearch= event.target.value; 
    if(getSearch.length > 0)
    {     
     const searchdata= bookData.filter( (item)=> item.title.toLowerCase().includes(getSearch));
     setBookdata(searchdata);
    } 
    // else if(getSearch.length>0)
    // {
    //     const searchdata= bookData.filter( (item)=> item.author.toLowerCase().includes(getSearch));
    //  setBookdata(searchdata);
    // }
    else {
      setBookdata(filterdata);
    }
    setQuery(getSearch);
  }


  return(

        <React.Fragment>              
         <Container>
        <div className='col-md-12'> 
            {/*<div className='col-md-12 mt-3 mb-3'>
                            
                <div className="col-md-9">            
                <input  type="text" name='name' value={query}   className="form-control" onChange={(e)=>handlesearch(e)} placeholder='Search Books...' />
                </div>          
  </div>*/}
  <nav className="navbar navbar-light bg-light">
  
  <form className="form-inline">
    <input className="col-md-12" type="search" onChange={(e)=>handlesearch(e)} placeholder="Search" aria-label="Search"></input>
    {/* <button className="btn btn-outline-success my-2 my-sm-200" type="submit">Search</button> */}
  </form>
</nav>


            <div className='col-md-12'>
            <table className="table" style={{ color: "black" }}>
              <thead>
                <tr>
                  <th>BOOK_ID </th>
                  <th>ACCESSNUMBER</th>
                  <th>AUTHOR</th>
                  <th>TITLE</th>
                </tr>
              </thead>
              <tbody>
                {
                  bookData.map( (getBook, index)=>(
                  <tr key={index}>
                  <td>{index+1} </td>
                  <td>{getBook.accessnumber}</td>
                  <td>{getBook.author}</td>
                  <td>{getBook.title}</td>
                  </tr>
                   )) }  
                    
              </tbody>
            </table>
            </div>
        </div>
      </Container>

        </React.Fragment>
    );

}

export default Searchbar;