import React, {Component} from "react";
import { Link } from "react-router-dom";


class Navbar extends Component{
render(){
    return(<div className="navbars">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="#">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#">Pay Online</Link>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        One-to-One Class
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
           {/* <Link to="#" className="dropdown-item">Blog</Link> */}
                      <Link to="FindTutor" className="dropdown-item">Find Tutor</Link>         
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        More
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
           {/* <Link to="#" className="dropdown-item">Blog</Link> */}
           <Link to="About" className="dropdown-item">About us</Link>
                            <Link to="Privacy" className="dropdown-item">Privacy Policy</Link>
                            {/* <Link to="#" className="dropdown-item">Refund and Cancellation Policy</Link> */}
                            <Link to="Termcondition" className="dropdown-item">Term & Condition</Link>
                            <Link to="Contact" className="dropdown-item">Contact Us</Link>
                            <Link to="FAQ" className="dropdown-item">FAQ</Link>
                        
        </div>
      </li>
     
      <li className="nav-item">
        <Link className="nav-link" to="Login">Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="Register">Register</Link>
      </li>
     
    </ul>
  </div>
</nav>
      
    </div>)
}
}

export default Navbar;