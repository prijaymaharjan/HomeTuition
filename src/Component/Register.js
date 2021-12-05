import React, {Component} from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";


class Register extends Component{
render(){
    return(<div className="register logins">
 <div class="wrapper fadeInDown">
  <div id="formContent">
    {/* <!-- Tabs Titles -->
        
       {/* <!-- Login Form --> */}
       <h4 className="mt-3">Sign Up</h4>
    <form>
    <input type="text" id="fullname" className="fadeIn second" name="fullname" placeholder="Full Name"/>
      <input type="text" id="login" className="fadeIn second" name="email" placeholder="Email"/>
      <input type="text" id="password" className="fadeIn third" name="login" placeholder="password"/>
      <input type="text" id="confirmpassword" className="fadeIn third" name="login" placeholder="Confirm password"/><br/>
        
      <div class="d-flex flex-nowrap mt-4">
     {/* Radio Button */}
    <div className="form-check order-3 p-2">
  <input className=" form-check-input form-check-inline" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="form-check-label" for="flexRadioDefault1">
    Student
  </label>
</div>
     {/* Radio Button */}
<div className="form-check order-3 p-2">
  <input className=" form-check-input form-check-inline" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <label className="form-check-label" for="flexRadioDefault2">
    Tutor
  </label>
</div>
</div>
       
     <br/>
      <input type="submit" className="fadeIn fourth" value="Register"/>
    </form>

    {/* <!-- Remind Passowrd --> */}
    <div id="formFooter">
     <p>Have Already an Account?  <Link className="underlineHover a" to="Login">Login</Link></p>
    </div>

  </div>
  </div>
  <Footer/>
    </div>
   
    )
    }
}
export default Register;