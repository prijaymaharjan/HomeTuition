import React,{Component} from "react";
import Footer from './Footer';
import { Link } from "react-router-dom";
class Login extends Component{
    render (){
        return(<div className="logins">
            <div class="wrapper fadeInDown">
  <div id="formContent">
    {/* <!-- Tabs Titles -->
        
       {/* <!-- Login Form --> */}
       <h4 className="mt-3">Sign In</h4>
    <form>
      <input type="text" id="login" className="fadeIn second" name="email" placeholder="Email"/>
      <input type="text" id="password" className="fadeIn third" name="login" placeholder="password"/>
      <input type="submit" className="fadeIn fourth" value="Log In"/>
    </form>

    {/* <!-- Remind Passowrd --> */}
    <div id="formFooter">
      <Link className="underlineHover a" href="#">Forgot Password?</Link>
    </div>

  </div>
</div>
<Footer/>
        </div>)
    }
}
export default Login;
