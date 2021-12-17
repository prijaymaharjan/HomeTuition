//TutorProfileblock.js Path tutor profile (Profiletutor.js)
import React, {Component} from "react";
import Review from './Review';
import Footer from './Footer';
import Popup from "./Popup";
import { Link } from "react-router-dom";
class Profiletutor extends Component{
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
			
            <div className="profiletutor">
			
   <div className="container">

		<div className="main-body">
			<div className="row">
            {/* Left Side  */}
				<div className="col-lg-4 mt-5">
					<div className="card">
						<div className="card-body">
							<div className="d-flex flex-column align-items-center text-center">
								<img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Admin" className="rounded-circle p-1" width="124"/>
								<div className="mt-3">
									<h4>John Doe</h4>

                                    {/* Rating */}
                                  
                                 <div className="ratings d-flex flex-row">
                                 
                                     <div className="stars">
                                      <i className="fas fa-star"></i> 
                                      <i className="fas fa-star"></i> 
                                      <i className="fas fa-star"></i> 
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                       </div>
                                      <div className="product-ratings"> <span className="product-rating">4.6</span><span>/5</span></div>
                                 </div>
                           
                             {/* End Rating */}
                             {/*Start Qualification  */}
									<p className="text-secondary mb-1 detail">Bachelor of Business Study (BBS) </p>
									<p className="text-muted font-size-sm detail">Tribuvan University</p>
                                    
									<Link to="#"><button className="btn btn-primary mr-2 btn6">Save Profile</button></Link>
									<Link to="#"><button onClick={this.togglePopup.bind(this)} className="btn btn-outline-primary btn6">Request Tutor</button></Link>
                                    {/* End Qualification */}
								</div>
							</div>
						</div>
					</div>
				</div>
                {/* Right Side */}
				{/* Popup */}
			
			{
					this.state.showPopup ? 
          <Popup
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
			
				<div className="col-lg-8 mt-5">

                {/* About me */}
					<div className="card aboutcard">
						<div className="card-body">
							<h4 className="aboutme d-flex align-items-center mb-3">About Me</h4>

                            <div class="show-hide-text wrapper">
                            <a  id="show-more" className="show-less" href="#show-less">Show less</a>
                            <a  id="show-less" className="show-more" href="#show-more">Show more</a>
                            <p className="text-justify linehei" id="aboutme">Hi! I am Emily and I am a Second-year student at the University of St Andrews. I previously studied my GCSEs and A-levels at Princess Helena College 
                            in Hertfordshire and achieved nine GCSEs ranging from A*-B, and gained an A* in Philosophy; Ethics and Theology, an A* in Geography, and an A in English literature at A-level.
                        I was also awarded an A* in my Extended Project Qualification that I completed in my final year of Secondary school. This enabled me to understand how to write longer essays, learn
                         the value of independent learning, how to formulate a good question and gain an appreciation of reading secondary sources and texts.
                        I am a mentor to two students at University and have experience helping younger years with their GCSE and A-level work at secondary school.
                         I am dyslexic and have developed many strategies in order to help me revise and write interesting, well-structured essays in exams and for coursework.
                          I have since learned that my disability can be seen as a positive, and I am more than willing to help those who may have learning difficulties reach their highest potential.
                         I can also help students with the content of their subjects and can create more suitable summaries of information that they may find more useful.</p>
                        
                         </div>
                                            
						</div>
					</div>

                    {/* About my Session */}
                    <div className="card aboutcard">
						<div className="card-body">
							<h4 className="aboutme d-flex align-items-center mb-3">About my sessions</h4>

                            <div class="show-hide-text wrapper">
                            <a  id="show-mores" className="show-less" href="#show-lesss">Show less</a>
                            <a  id="show-lesss" className="show-more" href="#show-mores">Show more</a>
                            <p className="text-justify linehei" id="aboutsession">Hi! I am Emily and I am a Second-year student at the University of St Andrews. I previously studied my GCSEs and A-levels at Princess Helena College 
                            in Hertfordshire and achieved nine GCSEs ranging from A*-B, and gained an A* in Philosophy; Ethics and Theology, an A* in Geography, and an A in English literature at A-level.
                        I was also awarded an A* in my Extended Project Qualification that I completed in my final year of Secondary school. This enabled me to understand how to write longer essays, learn
                         the value of independent learning, how to formulate a good question and gain an appreciation of reading secondary sources and texts.
                        I am a mentor to two students at University and have experience helping younger years with their GCSE and A-level work at secondary school.
                         I am dyslexic and have developed many strategies in order to help me revise and write interesting, well-structured essays in exams and for coursework.
                          I have since learned that my disability can be seen as a positive, and I am more than willing to help those who may have learning difficulties reach their highest potential.
                         I can also help students with the content of their subjects and can create more suitable summaries of information that they may find more useful.</p>
                        
                         </div>
                                            
						</div>
					</div>
					{/* Review and Rating */}
					<Review/>
					{/* End */}
					{/* Start  */}
					{/* Time Take */}
					<div className="row">
										<div className="col-sm-12">
											<div className="card">
												<div className="card-body">
													<h6 className="float-left text-capitalize generalavalibility" id="generalavailabiliy">general availability</h6>
														{/* Table */}
														<table className="table">
														  <thead class="thead-dark">
														    <tr>
														      <th scope="col">Time</th>
														      <th scope="col">Sun</th>
														      <th scope="col">Mon</th>
														      <th scope="col">Tues</th>
															  <th scope="col">wed</th>
															  <th scope="col">Thur</th>
															  <th scope="col">fri</th>
															  <th scope="col">sat</th>
														    </tr>
														  </thead>
														  <tbody>
														    <tr>
														      <th scope="row"><span>Pre 12pm</span></th>
														      <td><i className="fas fa-check"></i></td>
														      <td><i className="fas fa-check"></i></td>
														      <td><i className="fas fa-check"></i></td>
															  <td><i className="fas fa-check"></i></td>
														      <td><i className="fas fa-check"></i></td>
														      <td><i className="fas fa-check"></i></td>
															  <td><i className="fas fa-check"></i></td>
														    </tr>
														    <tr>
														      <th scope="row"><span>12pm - 5pm</span></th>
															  <td><i className="fas fa-check"></i></td>
														      <td><i className="fas fa-check"></i></td>
														      <td><i className="fas fa-check"></i></td>
															  <td><i className="fas fa-check"></i></td>
														      <td><i className="fas fa-check"></i></td>
														      <td><i className="fas fa-check"></i></td>
															  <td><i className="fas fa-check"></i></td>
														    </tr>
														    <tr>
														      <th scope="row">After 5pm</th>
															  <td><i className="fas fa-check"></i></td>
														      <td><i className="fas fa-check"></i></td>
														      <td><i className="fas fa-check"></i></td>
															  <td><i className="fas fa-check"></i></td>
														      <td><i className="fas fa-check"></i></td>
														      <td><i className="fas fa-check"></i></td>
															  <td><i className="fas fa-check"></i></td>
														    </tr>
														  </tbody>
														</table>


														{/* end */}
												</div>
											</div>
										</div>
									</div>
									{/* End */}

										{/* Start  */}
					{/* Which Class and Subject Teaches */}
					<div className="row">
										<div className="col-sm-12">
											<div className="card">
												<div className="card-body">
													<h6 className="float-left text-capitalize generalavalibility" id="generalavailabiliy">general availability</h6>
														{/* Table */}
														<table className="table">
														  <thead class="thead-dark">
														    <tr>
														      <th scope="col">Subject</th>
														      <th scope="col">Grade</th>
														      <th scope="col">Fees</th>
														     
														    </tr>
														  </thead>
														  <tbody>
														    <tr>
														      <th scope="row"><span>All Subject</span></th>
														      <td className="gra">1 to 10</td>
														      <td className="fe">Rs 5,000</td>
														   
														    </tr>
														    <tr>
															<th scope="row"><span>Account</span></th>
														      <td className="gra">11 to 12</td>
														      <td className="fe">Rs 5,000</td>
														    </tr>
														    <tr>
															<th scope="row"><span>English</span></th>
														      <td className="gra">11 to 12</td>
														      <td className="fe">Rs 5,000</td>
														    </tr>
														  </tbody>
														</table>


														{/* end */}
												</div>
											</div>
										</div>
									</div>
									{/* End */}

								</div>
							</div>
						</div>
					</div>

					{/* Footer */}
					<Footer/>
            </div>
        )
           }
        }
        
          
        export default Profiletutor;
    