import React,{Component} from "react";

class Staticimage extends Component{
    render (){
        return(
            <div className="static">
                <section class="showcase mb-5">
                 <img src={this.props.imgs} alt="Picture"/>
                 <div class="overlay">
                 <h2>{this.props.title}</h2>
                 <p>{this.props.prag}</p>
          </div>
        </section>
      
            </div>
        )
    }
}
export default Staticimage;