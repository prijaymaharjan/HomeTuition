import React,{Component} from "react";
import { Link } from "react-router-dom";
import esewa from "../Images/Esewa-Remittance-Payment.png"
import khalti from "../Images/khalti.png"
import connectips from "../Images/connectips.png"
class Footer extends Component{
    render (){
        return(
            
            <footer className="footer-area footer--light">
  <div className="footer-big">
    {/* <!-- start .container --> */}
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-12">
          <div className="footer-widget">
            <div className="widget-about">
              <p>Nepal, Bharatpur</p>
              <ul className="contact-details">
                <li>
                  <span className="icon-earphones"></span> Call Us:
                  <Link to="#" className="a">344-755-111</Link>
                </li>
                </ul>
                
            </div>
          </div>
          {/* <!-- Ends: .footer-widget --> */}
        </div>

        {/* We accept */}
        {/* <!-- end /.col-md-4 --> */}
        <div className="col-md-3 col-sm-4">
          <div className="footer-widget">
            <div className="footer-menu footer-menu--1">
              <h4 className="footer-widget-title">We Accept</h4>
              <ul className="paymentoption">
                <li>
                  <Link to="#" className="a">
                    <img className="style" src={esewa} alt="esewa" title="esewa"/>
                  </Link>
                  <Link to="#" className="a">
                    <img className="style" src={khalti} alt="khalti" title="khalti"/>
                  </Link>
                  <Link to="#" className="a">
                    <img className="style" src={connectips} alt="connectips" title="connectips"/>
                  </Link>
                
                </li>
                </ul>
                
            </div>
            {/* <!-- end /.footer-menu --> */}
          </div>
          {/* <!-- Ends: .footer-widget --> */}
        </div>
        {/* <!-- end /.col-md-3 --> */}
            {/* Company Information */}
        <div className="col-md-3 col-sm-4">
          <div className="footer-widget">
            <div className="footer-menu">
              <h4 className="footer-widget-title">Company Information</h4>
              <ul>
              <li>
                <Link to="FindTutor" className="a">Find to Tutor</Link>
                </li>
                {/* <li>
                <Link to="#" className="a">Blog</Link>
                </li> */}
                <li>
                <Link to="About" className="a">About</Link>
                </li>
                <li>
                <Link to="Privacy" className="a">Privacy Policy</Link>
                </li>
                   <li>
                <Link to="Contact" className="a">contact us</Link>
                </li>
                
              </ul>
            </div>
            {/* <!-- end /.footer-menu --> */}
          </div>
          {/* <!-- Ends: .footer-widget --> */}
        </div>
        {/* <!-- end /.col-lg-3 --> */}
            {/* Support And Help */}
        <div className="col-md-3 col-sm-4">
          <div className="footer-widget">
            <div className="footer-menu no-padding">
              <h4 className="footer-widget-title">Support And Help</h4>
              <ul>
                {/* <li>
                  <Link to="#" className="a">Refund and Cancellation Policy </Link>
                </li> */}
                <li>
                <Link to="Termcondition" className="a">Terms and Conditions</Link>
                </li>
                <li>
                <Link to="FAQ" className="a">FAQ</Link>
                </li>
             
              </ul>
            </div>
            {/* <!-- end /.footer-menu --> */}
          </div>
          {/* <!-- Ends: .footer-widget --> */}
        </div>
        {/* <!-- Ends: .col-lg-3 --> */}

      </div>
      {/* <!-- end /.row --> */}
    </div>
    {/* <!-- end /.container --> */}
  </div>
  {/* <!-- end /.footer-big --> */}

          
  <div className="mini-footer">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div class="copyright-text">
            <p>© 2018
              <Link to="#" className="a">Prijay Maharjan</Link>. All rights reserved. Created by
              <Link to="#" className="a">Prijay maharjan</Link>
            </p>
          </div>

          <div className="go_top">
            <span className="icon-arrow-up"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
        )
    }
}
export default Footer;