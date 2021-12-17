import React, {Component} from "react";
import Staticimage from './Staticimage'
import Footer from './Footer';
import TutorProfileblock from "./TutorProfileblock";

class FindTutor extends Component{
render(){
    return(<div className="findtutor mt-5">
            {/* Form  */}
         <div className="container">
         <form>

            <div className="form-row">
              <div className="form-group col-md-4">
               <input type="text" className="form-control" id="inputCity" placeholder="Enter Your City"/>
              </div>
            
              <div className="form-group col-md-4">
            
                <select id="inputGrade" className="form-control">
                  <option selected>Select Grade</option>
                  <option>...</option>
                </select>
              </div>
              <div className="form-group col-md-4">
              <select id="inputSubject" className="form-control">
                  <option selected>Select Subject</option>
                  <option>...</option>
                </select>
              </div>
            </div>
            </form>
            {/* TutorProfileblock.js */}
            <TutorProfileblock/>
                     </div>
                     {/* End Form */}
  <Footer/>
                     
    </div>
    )
       }
    }

    export default FindTutor;
