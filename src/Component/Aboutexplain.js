// Go to About.js
import React,{Component} from "react";
import About from "./About";

class Aboutexplain extends Component{
    render (){
        return(
            <div className="col-4 col-md-4 col-sm-12">
                           <div className="row">
                           <div className="col-3"><i class={this.props.icon}></i></div>
                            <div className="col-9">
                                <p className="spc">{this.props.ex} </p>
                            </div>
                           </div>
                    </div>
        )}}

        export default Aboutexplain;