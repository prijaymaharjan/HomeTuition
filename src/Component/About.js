import React,{Component} from "react";
import Staticimage from "./Staticimage";
import Footer from "./Footer";
import homebhopal from "../Images/home-tutor-in-bhopal.jpg";
import Aboutexplain from "./Aboutexplain";
import ArrayData from "./Array/ArrayData";
class About extends Component{
    render (){
        return(
            <div className="about">
                <Staticimage
                    imgs = {homebhopal} 
                    title="About"
                    prag="MATCHING STUDENTS WITH THE BEST TUTORS"

                />
                {/* Explain */}
                <div className="expl mb-5">
                <div className="container text-center mb-5">
                    <h4 className="text-capitalize">Learning that works</h4>
                   <p> One-to-one learning works. We've believed that from day one. But we also
                    knew it would better if it were accessible, affordable, and more convenient 
                    for everyone. So that's what we've built - an easier way to connect people who 
                    need to know with the experts that can teach them. And we've changed the way people think about education in the process.</p>
                </div>

                {/* Start About */}
                <div className="container text-center">
                <h4 className="text-capitalize mb-3">The Wyzant Difference</h4>
                <div className="row">
                  
                        {
                            ArrayData.map((val, ind) => {
                                return   <Aboutexplain
                                key={ind}
                                icon = {val.icon}
                                ex = {val.ex}
                              />
                            })
                        }
                  
                </div>               
                </div>    
                {/* End About            */}
                </div>
                 {/* Footer */}
                 <Footer/>
            </div>
        )
    }
}
export default About;