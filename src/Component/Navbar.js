import React, {Component} from "react";
import { Link } from "react-router-dom";


class Navbar extends Component{
render(){
    return(<div className="navbars">
            {/* Navbar */}
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand">Brand</Link>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav">
                    <Link to="/" className="nav-item nav-link active">Home</Link>
                    <Link to="#" className="nav-item nav-link">Pay Online</Link>
                    <div className="nav-item dropdown">
                        <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">One-to-One Class</Link>
                        <div className="dropdown-menu">
                            <Link to="#" className="dropdown-item">Find Tutor</Link>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">More</Link>
                        <div className="dropdown-menu">
                            <Link to="#" className="dropdown-item">Blog</Link>
                            <Link to="About" className="dropdown-item">About us</Link>
                            <Link to="Privacy" className="dropdown-item">Privacy Policy</Link>
                            <Link to="#" className="dropdown-item">Refund and Cancellation Policy</Link>
                            <Link to="Termcondition" className="dropdown-item">Term & Condition</Link>
                            <Link to="Contact" className="dropdown-item">Contact Us</Link>
                            <Link to="FAQ" className="dropdown-item">FAQ</Link>
                        </div>
                    </div>
                </div>
                <div className="navbar-nav ms-auto">
                    <Link to="#" className="nav-item nav-link">Login</Link>
                </div>
                <div className="nav-item dropdown">
                        <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Register</Link>
                        <div className="dropdown-menu">
                            <Link to="#" className="dropdown-item">As a Student</Link>
                            <Link to="#" className="dropdown-item">As a Tutor</Link>
                        </div>
                    </div>
            </div>
        </div>
    </nav>

    </div>)
}
}

export default Navbar;