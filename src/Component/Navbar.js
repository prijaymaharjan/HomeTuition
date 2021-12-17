import React, {Component} from "react";
import { Link } from "react-router-dom";


class Navbar extends Component{
render(){
    return(<div className="navbars">

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="#">Pay Online</Link>
        </li>
       
        <li className="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            One-to-One Class
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li> <Link to="FindTutor" className="dropdown-item">Find Tutor</Link></li>
          
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           More
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li>  {/* <Link to="#" className="dropdown-item">Blog</Link> */}
           <Link to="About" className="dropdown-item">About us</Link>
                         </li>
          
                         <li>  <Link to="Privacy" className="dropdown-item">Privacy Policy</Link></li>
                         
            
          
            {/* <li> <Link to="#" className="dropdown-item">Refund and Cancellation Policy</Link></li> */}
          
            <li>    <Link to="Termcondition" className="dropdown-item">Term & Condition</Link></li>
            <li>     <Link to="Contact" className="dropdown-item">Contact Us</Link>
                            </li>
            <li>     <Link to="FAQ" className="dropdown-item">FAQ</Link></li>
          
          
          </ul>
         
          
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Register">Register</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      
    </div>)
}
}

export default Navbar;