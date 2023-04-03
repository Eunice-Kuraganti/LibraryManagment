import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context.';
import './index.css';
import Home from './pages/Home/Home';
import Books from './pages/Books/Books';
import StaffBooks from './pages/Staff/StaffBooks';
import Blogs from './pages/Blogs/Posts';
import About from "./pages/About/About";
import Events from './pages/Events/Events';
import Users from './pages/User/Users';
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
import Clubs from "./pages/Clubs/Clubs";
import Navbar from './components/Navbar/Navbar';
import AboutUs from "./pages/User/AboutUs";
import Services from "./pages/User/Services";
import Contact from "./pages/User/Contact";
import Support from "./pages/User/Support";
import UserLogin from './pages/User/UserLogin';
import StaffLogin from './pages/Staff/StaffLogin';
import StaffRegister from './pages/Staff/StaffRegister';
import UserRegister from './pages/User/UserRegister';
import StaffHome from './pages/Staff/StaffHome';
import UserHome from './pages/User/UserHome';
import AddBooks from './pages/Books/AddBooks';
import UserBooks from './pages/User/UserBooks'; 
import Cart from './pages/Cart/Cart';
import AddUsers from './pages/User/AddUsers';
import Members from './pages/Staff/Members';
import Usernav from './pages/User/Usernav';
import UserCart from './pages/Cart/UserCart';
import UserStatus from './pages/Cart/UserStatus';
import StaffStatus from './pages/Cart/StaffStatus';
import {ToastContainer} from 'react-toastify';
import Stats from './pages/Cart/Stats';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <AppProvider>
    <ToastContainer theme='colored' size='large' width='100%' position='top-center' ></ToastContainer>
    <BrowserRouter>
    {/*<Navbar></Navbar>*/}
      <Routes>
        <Route path = "/" exact element = {<Home/>}/>
          <Route path = "about" exact element = {<About />} />
         
          <Route path = "Events" exact element = {<Events />} />
          <Route path ="/about/events/blogs" exact element = {<Blogs />} />
          <Route path ="/about/events/blogs/clubs" exact element = {<Clubs />} />
          <Route path = "about/events" exact element = {<Events />} />
          <Route path = "blogs"exact element = {<Blogs />} />
          <Route path = "book"exact element = {<BookList />} />
          <Route path = "/book/:id"exact element = {<BookDetails />} />  
          <Route path = "clubs"exact element = {<Clubs/>} />
          <Route path = "/Users"exact element = {<Users/>} />
          <Route path = "/AddUsers"exact element = {<AddUsers/>} />
          <Route path = "login"exact element = {<UserLogin/>} />
          <Route path = "/register/UserLogin"exact element = {<UserHome/>} />
          <Route path = "register" exact element = {<UserRegister/>} />
          <Route path = "/signup" exact element = {<UserRegister/>} />
         < Route path = "StaffBooks"exact element = {<StaffBooks/>}/>
          <Route path ="/about/events/blogs/clubs/Login" exact element = {<UserLogin />} />
          <Route path = "Login/register/Login"exact element = {<UserLogin/>} />
          <Route path = "register" exact element = {<UserRegister/>} />
          <Route path ="/about/events/blogs/clubs/Login/register" exact element = {<UserRegister />} />
          <Route path ="/about/events/blogs/clubs/Login/register/Login" exact element = {<UserLogin />} />
          <Route path = "/Login/register"exact element = {<UserRegister/>} />
          <Route path = "StaffLogin"exact element = {<StaffLogin/>} />
          <Route path = "StaffRegister"exact element = {<StaffRegister/>} />
          <Route path="StaffRegister/Login" exact element = {<Home></Home>} />
          <Route path = "StaffLogin/register"exact element = {<StaffRegister/>} />
          <Route path = "StaffLogin/register/Login"exact element = {<StaffLogin/>} />
          
      </Routes>
    

<StrictMode>
  <Routes>
          <Route path='/about-us' exact element={<AboutUs/>} />
         <Route path='/services' exact element={<Services/>} />
          <Route path='/contact'exact element={<Contact/>} />
          <Route path='/support'exact element={<Support/>} />
          <Route path = "StaffHome"exact element = {<StaffHome/>}/>
          <Route path = "UserHome"exact element = {<UserHome/>}/>
           <Route path = "Books"exact element = {<Books/>} />
           <Route path = "AddBooks"exact element = {<AddBooks/>} />
           <Route path = "Members"exact element = {<Members/>} />
           <Route path = "Cart"exact element = {<Cart/>} />
           <Route path = "UserCart"exact element = {<UserCart/>} />
           <Route path = "Stats"exact element = {<Stats/>} />
            <Route path = "UserBooks"exact element = {<UserBooks/>} />
            <Route path = "Usernav"exact element = {<Usernav/>} />
            <Route path = "UserStatus"exact element = {<UserStatus/>} />
            <Route path = "StaffStatus"exact element = {<StaffStatus/>} />
            
            
           </Routes>
          </StrictMode>
          </BrowserRouter>
          </AppProvider>  
);