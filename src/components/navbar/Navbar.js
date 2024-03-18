import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assest/seff_logo_transparent.png"
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.min.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/reducers/userSlice.";
// import 'bootstrap/dist/js/bootstrap.min.js';
// import 'bootstrap/dist/umd/popper.min.js';



const Navbar =()=>{
  const [nav , setNav] = useState(false)
  const handleNav =()=>{
    setNav(!nav)
  }
  const dispatch = useDispatch()
  const users = useSelector(state=>state.users)
  const user = users.filter(user=>user?.online === true)[0]
  console.log(user);
  return(
      <>
            <ul className="navbar-nav bg-dark text-light p-1 flex-wrap  ps-3 pe-3 d-flex justify-content-end position-relative gap-3 flex-row ms-auto" style={{zIndex:'566666666666'}}>
          {
            !user?.online && <li className="nav-item p-0">
            <Link className="nav-link  p-0" to="/login"  >LOGIN</Link>
          </li>
          }
         
          {
            user?.online && user.role=='Admin'&&<li className="nav-item  p-0">
            <Link to='/adminPanel' className="nav-link  p-0">ADMIN PANEL</Link>
          </li>
          
          } 
          {user?.online && user.role=='Student'&&<li className="nav-item  p-0">
            <Link to='/StudentPanel' className="nav-link  p-0">STUDENT PANEL</Link>
          </li>
          } 
          {user?.online && user.role=='instructor'&& <li className="nav-item  p-0">
            <Link to='/instructorPanel' className="nav-link  p-0">INSTRUCTOR PANEL</Link>
          </li>
          } 
          {
            user?.online && user.role=='Student' && <li className="nav-item  p-0">
            <Link className="nav-link  p-0" to="/createCv">CREATE CV</Link>
          </li>
          }
          {
            user?.online && <li className="nav-item  p-0">
            <Link className="nav-link  p-0" to="/profile">PROFILE</Link>
          </li>
          }
           {
            user?.online && <li className="nav-item  p-0">
            <Link className="nav-link  p-0" to="/"onClick={()=>dispatch(logOut(user.userId))} >LOGOUT</Link>
          </li>
          }
          
          
        </ul>
      <div className="container-md navbar-component mb-3 ">
      <nav className="navbar navbar-expand-md ">
  <div className={nav ?" container container-fluid " :"container"}>
  <img src={logo} className="navbar-brand d-block " alt="..."/>
    
    <button className="navbar-toggler" onClick={handleNav} type="button" >
    <FontAwesomeIcon icon={faBars} className="icon-navbar text-warning" />
    </button>
    <div className={nav ? "collapse navbar-collapse show bg-black p-3" :"collapse navbar-collapse"} id="navbarSupportedContent">
      <ul className="navbar-nav lh-base justify-content-center d-flex align-items-center  mb-lg-0 mt-3">
        <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li class="nav-item dropdown">
            <Link class="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              TECH
            </Link>
            <ul class="dropdown-menu">
              <li><Link className="dropdown-item" to="/">Action</Link></li>
              <li><Link className="dropdown-item" to="/">Another action</Link></li>
              
              <li><Link className="dropdown-item" to="/">Something else here</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link ms-2" to="/business">BUSINESS</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link ms-2" to="/security">SECURITY</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link ms-2" to="/sports">SPORTS</Link>
          </li> <li className="nav-item">
            <Link className="nav-link ms-2" to="/medical">MEDICAL</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link ms-2" to="/startups">STARTUPS</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link ms-2" to="/apps">APPS</Link>
          </li>
          {
            user?.online && <li className="nav-item">
            <Link className="nav-link ms-2" to="/jobs">JOBS</Link>
          </li>
          }
          <li className="nav-item rounded btn btn-outline-warning ms-2">
            <Link className="nav-link " to="/contactus">CONTACT US</Link>
          </li>
      </ul>
      
    </div>
  </div>
</nav>
</div>
        </>
    )
}
export default Navbar;