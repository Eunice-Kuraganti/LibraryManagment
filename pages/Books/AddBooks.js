import axios from "axios"
import "../Staff/StaffHome.css";
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Navs from "../../components/Navbar/Navs";
import "../Books/AddBook.css";
import { Card, Table, ButtonGroup, Button, InputGroup, FormControl } from "react-bootstrap";

function AddBooks() {
    const navigate = useNavigate()
    const[author,setAuthor]=useState('')
  const[id,setId]=useState('')
  const[accessnumber,setAccessnumber]=useState('')
  const[category,setCategory]=useState('')
  const[title,setTitle]=useState('')
  
  const handlebutton=()=>{
    //     alert("Book added successfully");
        
    //   }
  }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({ id:id,accessnumber,author,title,category})

        const data = { id:id,accessnumber,author,title,category}
        axios.post('http://localhost:5002/addbook', data)
            .then(res => {
              alert("Book added successfully");
                console.log(res)
                
                navigate("/Books")
            })
            //     if (res.data == 'saved') {
            //         navigate("/Books")
            //     }
            // })
            // .catch(err => {
            //     console.log(err)
            // })
            
    }

    return (
      <div>
     <Navs/>
      <div className="post-container">
        <div >
            <form onSubmit={handleSubmit}>
                BOOK_ID :     <input
                    className="inputs"
                    type="text"
                    onChange={(e)=>setId(e.target.value)}
                    value={id} />
                <br />

                ACCESSNUMBER :  <input className="inputs"
                    type="text"
                    onChange={(e)=>setAccessnumber(e.target.value)}
                    value={accessnumber} />

                AUTHOR :    <input
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="inputs"
                    type="text" /> <br />
                

                TITLE :    <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="inputs" type="text" /> <br />

                CATEGORY :    <input className="inputs"
                    type="text"
                    onChange={(e) =>setCategory(e.target.value)}
                    value={category}/> <br />
               


                 <button className="btn btn-info" type="submit"> ADD BOOK </button> 
            </form>
        </div>
        </div>
        </div>
    )
}



export default AddBooks