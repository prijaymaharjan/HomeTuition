// Go to main Profiletutor.js
import React, {Component} from "react";
import { Link } from "react-router-dom";
class Review extends Component{
   
    render(){
        return(
            <div className="reviewrating">
               <div className="container cn">
<div className="col-md-12">
    <div className="offer-dedicated-body-left">
        <div className="tab-content" id="pills-tabContent">
          
            <div className="tab-pane fade active show" id="pills-reviews" role="tabpanel" aria-labelledby="pills-reviews-tab">
                {/* bg-white */}
                <div className="bg-white rounded shadow-sm p-4 mb-4 clearfix graph-star-rating">
                    <h5 className="mb-0 mb-4">Ratings and Reviews</h5>
                    <div className="graph-star-rating-header">
                        <div className="star-rating">
                           {/* Rating and Review */}
                           <div className="d-flex justify-content-center mb-3">
                                <div className="content text-center">
                                    <div className="ratings"> <span className="product-rating">4.6</span><span>/5</span>
                                        <div className="stars"> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> </div>
                                        <div className="rating-text"> <span>46 ratings & 15 reviews</span> </div>
                                    </div>
                                </div>
                            </div>
                           {/* End */}
                            
                        </div>
                        
                    </div>
                    <div className="graph-star-rating-body">
                        <div className="rating-list">
                            <div className="rating-list-left text-black">
                                5 Star
                            </div>
                            <div className="rating-list-center ml">
                                <div className="progress wd">
                                    <div aria-valuemax="5" aria-valuemin="0" aria-valuenow="5" role="progressbar" className="ab progress-bar bg-primary">
                                        <span className="sr-only">80% Complete (danger)</span>
                                    </div>
                                </div>
                            </div>
                            <div className="ab rating-list-right text-black">56%</div>
                        </div>
                        <div className="rating-list">
                            <div className="rating-list-left text-black">
                                4 Star
                            </div>
                            <div className="rating-list-center">
                                <div className="progress">
                                    <div aria-valuemax="5" aria-valuemin="0" aria-valuenow="5" role="progressbar" className="cd progress-bar bg-primary">
                                        <span className="sr-only">80% Complete (danger)</span>
                                    </div>
                                </div>
                            </div>
                            <div className="rating-list-right text-black">23%</div>
                        </div>
                        <div className="rating-list">
                            <div className="rating-list-left text-black">
                                3 Star
                            </div>
                            <div className="rating-list-center">
                                <div className="progress">
                                    <div  aria-valuemax="5" aria-valuemin="0" aria-valuenow="5" role="progressbar" className="de progress-bar bg-primary">
                                        <span className="sr-only">80% Complete (danger)</span>
                                    </div>
                                </div>
                            </div>
                            <div className="rating-list-right text-black">11%</div>
                        </div>
                        <div className="rating-list">
                            <div className="rating-list-left text-black">
                                2 Star
                            </div>
                            <div className="rating-list-center">
                                <div className="progress">
                                    <div  aria-valuemax="5" aria-valuemin="0" aria-valuenow="5" role="progressbar" className="ef progress-bar bg-primary">
                                        <span className="sr-only">80% Complete (danger)</span>
                                    </div>
                                </div>
                            </div>
                            <div className="rating-list-right text-black">02%</div>
                        </div>
                    </div>
                   
                </div>
                {/* end */}
                      {/* bg-white */}
                      {/* Student Comment  */}
                
                <div className="bg-white rounded shadow-sm p-4 mb-4 restaurant-detailed-ratings-and-reviews">
                    <Link to="#" className="btn btn-outline-primary btn-sm float-right">Top Rated</Link>
                    <h5 className="mb-1">All Ratings and Reviews</h5>
                    <div className="reviews-members pt-4 pb-4">
                        <div className="media">
                           <img alt="Generic placeholder image" src="http://bootdey.com/img/Content/avatar/avatar1.png" className="mr-3 rounded-pill"/>
                            <div className="media-body">
                                <div className="reviews-members-header">
                                   <h6 className="mb-1"><p className="text-black names" id="names"> Singh Osahan</p></h6>
                                    <p className="text-gray dt">Tue, 20 Mar 2020</p>
                                </div>
                                <div className="reviews-members-body">
                                    <p className="text-justify">Contrary to popular belief, Lorem Ipsum is not simply random text.
                                     It has roots in a piece of classNameical Latin literature from 45 BC, making 
                                     it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney 
                                     College in Virginia, looked up one of the more obscure Latin words, consectetur, 
                                     from a Lorem Ipsum passage, and going through the cites of the word in 
                                     classNameical literature, discovered the undoubtable source. Lorem Ipsum comes
                                      from sections </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <a className="text-center w-100 d-block mt-4 font-weight-bold sar" href="#">See All Reviews</a>
                </div>
                {/* end */}
            </div>
        </div>
    </div>
</div>
</div>
            </div>
        )
    }
 
}
export default Review;