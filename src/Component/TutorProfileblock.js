import React, {Component} from "react";
import personone from "../Images/person.jpg";
import { Link } from "react-router-dom";
class TutorProfileblock extends Component{
render(){
    return(<div className="profile mt-5">
        <div className="container mt-5 mb-5">
    <div className="d-flex justify-content-center row">
        <div className="col-md-10">
            <div className="row p-2 bg-white border rounded">
                <div className ="col-md-3 mt-1"><img className="img-fluid imag img-responsive rounded product-image" src={personone}/></div>
                <div className="col-md-6 mt-1">
                    <h5 className="name" id="name">Saroj Shrestha</h5>
                    <div className="d-flex flex-row">
                        <div className="ratings mr-2"><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div><span>310</span>
                    </div>
                    <h6 className="mt-1 mb-1 spec-1 Qualification" id="Qualification">TU - BBS (Bachelors)</h6>
                    <p className="text-justify text-truncate para mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.<br/><br/></p>
                    {/* subject and Grade */}
                    <div className="row qual">
                    <div className="col-md-2">
                        <h6 className="offer" id="offer">OFFERS:</h6>
                    </div>
                    <div className="col-md-10">
                        <p className="subject" id="subject">BIOLOGY CHEMISTRY PHYSIC</p>
                    </div>
                    <div className="col-md-2">
                        <h6 className="grade" id="grade">Grade:</h6>
                    </div>
                    <div className="col-md-10">
                        <p className="class" id="class">2 to 12</p>
                    </div>
                    </div>
                </div>
                <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                    <div className="d-flex flex-row align-items-center">
                        <h4 className="mr-1 fees" id="fees">Rs. 2,500</h4><span className="strike-text discount" id="discount">Rs. 3,000</span>
                    </div>
                    {/* <h6 className="text-success">Free shipping</h6> */}
                    <div className="d-flex flex-column mt-4">
                    <Link to="#" className="a btn6 text-center viewProfile mt-2" id="viewProfile">Profile</Link>
                    <Link to="#" className="a btn6 text-center  orderTutor mt-2" id="orderTutor">Request Tutor</Link>
                   </div>
                </div>
            </div>
            </div>
    </div>
</div>
                     
    </div>
    )
       }
    }

    export default TutorProfileblock;
