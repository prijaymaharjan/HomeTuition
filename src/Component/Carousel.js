import React, {Component} from "react";
import img1 from "../Images/book-0e6495fad3c268b80b0e76fd0798a46456c2282442bd592860fa7dbc2e0b677e.svg";
class Carousel extends Component {
    render(){
        return(<div className="carousel mb-5">
        {/* Carousel */}
            <div className="banner">
                <div className="container">
                    <div className="row">

                    {/* Left side information  */}
                        <div className="col-md-6 ban">
                            <h2 className="header">Hire Skilled Tutors, the best of them</h2>
                            <p className="parag"> Find the suitable tutor on required field despite the Location either be online or Home Tuition.</p>

                        {/* Search Bar */}
                             <div class="input-group mt-4 search-bar">
                                 <input type="text" className="form-control" placeholder="Enter your Address"/>
                                    <div className="input-group-append search-button">
                                      <button className="btn btn-secondary" type="button">
                                      <i className='fas fa-search'></i>
                                  </button>
                                 </div>
                                </div>
                                
                        </div>

                        {/* Right side Image */}
                        <div className="col-md-6">
                        <img className="imgs" src={img1}     alt="First slide"/>
                        </div>
                    </div>
                </div>
            </div>


           

                   
        </div>)
    }
}
export default Carousel;