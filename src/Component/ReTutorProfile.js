// Go to TutorProfileblock.js
import React, {Component} from "react";
import Popup from './Popup';
import { Link } from "react-router-dom";
class ReTutorProfile extends Component{
    constructor() {
		super();
		this.state = {
		  showPopup: false
		};
	  }
	  togglePopup() {
		this.setState({
		  showPopup: !this.state.showPopup
		});
	  }
render(){
    return(
      <div className="d-flex justify-content-center row mt-3">
      {/* Start Card */}
      <div className="col-md-10">
          <div className="row p-2 bg-white border rounded">
              <div className ="col-md-3 mt-1"><img className="img-fluid imag img-responsive rounded product-image" src={this.props.imgs}/></div>
              <div className="col-md-6 mt-1">
                  <h5 className="name" id="name">{this.props.name}</h5>
                  <div className="d-flex flex-row">
                      <div className="ratings mr-2"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div><span className="thrs">310</span>
                  </div>
                  <h6 className="mt-1 mb-1 spec-1 Qualification" id="Qualification">{this.props.qualification}</h6>
                  <p className="text-justify text-truncate para mb-0 aboutme" id="aboutme">{this.props.aboutme}<br/><br/></p>
                  {/* subject and Grade */}
                  <div className="row qual">
                  <div className="col-md-2">
                      <h6 className="offer" id="offer">OFFERS:</h6>
                  </div>
                  <div className="col-md-10">
                      <p className="offersubject" id="offersubject">{this.props.offersubject}</p>
                  </div>
                  <div className="col-md-2">
                      <h6 className="grade" id="grade">Grade:</h6>
                  </div>
                  <div className="col-md-10">
                      <p className="class" id="class">{this.props.studyclass}</p>
                  </div>
                  </div>
              </div>
              <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                  <div className="d-flex flex-row align-items-center">
                      <h4 className="mr-1 fees" id="fees">{this.props.fees}</h4><span className="strike-text discountfee" id="discountfee">{this.props.discountfee}</span>
                  </div>
                  {/* <h6 className="text-success">Free shipping</h6> */}
                  <div className="d-flex flex-column mt-4">
                  <Link to="Profiletutor" className="a btn6 text-center viewProfile mt-2" id="viewProfile">Profile</Link>
                  <Link to="#" className="a btn6 text-center  orderTutor mt-2" id="orderTutor" onClick={this.togglePopup.bind(this)}>Request Tutor</Link>
                 </div>
              </div>
          </div>
          </div>{
          this.state.showPopup ? 
          <Popup
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
          
  </div>
    )
       }
    }

    export default ReTutorProfile;
