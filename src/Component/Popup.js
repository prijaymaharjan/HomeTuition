//Use Profiletutor.js and TutorProfileblock.js
import React, {Component} from "react";
import Alertform from "./Alertform";
class Popup extends Component {
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
          <button onClick={this.props.closePopup} className="btn-close float-right"   aria-label="Close"></button>
           <Alertform/>      
          
          </div>
        </div>
      );
    }
  }

  export default Popup;