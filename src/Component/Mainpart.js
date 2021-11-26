// Main Part

import React, {Component} from "react";
import Offerpart from './Offerpart';
import Data  from "./Data";
class Mainpart extends Component{
    
render(){
    return(
            <div className = "main my-5 mb-5">
            <h2 className="text-center mb-2">What We Offer</h2>
            <div className="container mt-3">
            <div className="row mainspart">
            {
                        Data.map((val, ind) => {
                            return <Offerpart
                                key={ind}
                                img = {val.img}
                                title = {val.title}
                                parag = {val.parag}
                            />
                        })
                    }
            </div>
            </div>
            </div>
    )
}
}
export default Mainpart;
