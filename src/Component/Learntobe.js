// Main Part /earntobe.js

import React, {Component} from "react";
import img1 from "../Images/HomeTutor.png";
import joinClass from "../Images/join-class.png";
import laptop from '../Images/laptoppng.png';
import note from "../Images/Note.png";
import laptopnote from "../Images/desktop-with-notebook-laptop_23-2148128794.webp";
class Learntobe extends Component{

render(){
    return(
            <div className = "learntobe mb-5">
               <div className="container text-center">    
           <img className="heading-img" src={img1} alt={img1}/>           
           <h2 className="text-center heading-title mb-3">
                           Get An Expert Online Tutor In The Comfort of Your Own Home
                           With These Simple Steps !
                            </h2>

                            <div className="row">
                                            {/* Column */}
                            {/* Left Side */}
                            <div className="col-lg-6 col-md-12 col-10 offset-1 offset-lg-0">

                {/* Grid Start */}

                              <div className="row mb-5">
                              <div className = "col-lg-3 col-md-12 col-10 bg" > 
                              <img className="header-imgs" src={joinClass} alt={joinClass}/>
                             </div>

                             <div className = "col-lg-3 col-md-12 col-10 " >
                             <div className="infos">
                                 <h4>Step 1</h4>
                                 <p>Signup</p>
                             </div>

                             </div>
                              </div>
                    
                              <div className="row mb-5">
                     <div className = "col-lg-3 col-md-12 bg" > 
                     <img className="header-imgs" src={note} alt={laptop}/>
                     </div>
                     <div className = "col-lg-3 col-md-12" >
                     <div className="infos">
                         <h4>Step 2</h4>
                         <p>Provide Your requirements</p>
                     </div>

                     </div>
                              </div>
                              <div className="row">
                     <div className = "col-lg-3 col-md-12 bg" > 
                     <img className="header-imgs" src={laptop} alt={note}/>
                     </div>
                     <div className = "col-lg-3 col-md-12" >
                     <div className="infos">
                         <h4>Step 3</h4>
                         <p>Join Class</p>
                     </div>

                     </div>
                              </div>
                     {/* Grid End */}

                 </div>
                {/* Right Side */}
                 <div className="col-lg-6 col-md-12 col-10 offset-1 offset-lg-0">

                   <div className="elementor-image">
                        <img src={ laptopnote} alt={ laptopnote}/>
                    </div>

                 </div>
            </div>


           </div>
            </div>
    )
}
}
export default Learntobe;
