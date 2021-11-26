import React, {Component} from "react";

class Offerpart extends Component{
render(){
    return(
        
                 <div className="col-md-3 mx-auto Offerparts">
           <img className="card-img-top" src={this.props.img} alt={this.props.img}/>
            <div className="card-body">
              <h5 className="card-title title">{this.props.title}</h5>
               <p className="card-text paragraph">{this.props.parag}</p>
   
                </div>
                 </div>
               
           
    )
}
}
export default Offerpart;
