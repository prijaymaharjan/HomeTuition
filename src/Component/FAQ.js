import React, {Component} from "react";
import Staticimage from './Staticimage'
import faq from "../Images/what-is-a-FAQ-page.png"



class FAQ extends Component{
render(){
    return(<div className="faq">
     <Staticimage
                    imgs={faq}
                    title="Contact Us"
                    prag="Ready To Solve Problem"
                />
    </div>
    )
    }
}
export default FAQ;