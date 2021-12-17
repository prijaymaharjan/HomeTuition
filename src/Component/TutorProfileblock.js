// Go to FindTutor.js
import React, {Component} from "react";
import ReTutorProfile from "./ReTutorProfile";
import TutorData from "./TutorData";

class TutorProfileblock extends Component{
render(){
    return(<div className="profile mt-5">
        <div className="container mt-5 mb-5">
        {/* ReTutorProfile.js */}
        {
            
            TutorData.map((val, index)=>{
                return <ReTutorProfile
                    key = {index}
                    imgs = {val.imgs}
                    name = {val.name}
                    qualification = {val.qualification}
                    aboutme = {val.aboutme}
                    offersubject = {val.offersubject}
                    studyclass = {val.studyclass}
                    fees = {val.fees}
                    discountfee = {val.discountfee}
                />
            })
        }
        </div>
                   
    </div>
  
    )
       }
    }

    export default TutorProfileblock;
