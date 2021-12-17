//Go to Popup.js
import React, {Component} from "react";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { colourOptions } from './Array/SelectData.ts';
const animatedComponents = makeAnimated();
class Alertform extends Component {

    render() {
      const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
      
      return (
        <div className='alertform'>
        
         <div className="container">
         <h5 className="mt-3 pt-4 chs">Choose the Your Class</h5>

         {/* Choose the your class */}
         <div className="form-group">    
         <select className="form-control" id="exampleFormControlSelect1">
         <option selected>Choose the select</option>
           <option>1</option>
           <option>2</option>
           <option>3</option>
           <option>4</option>
           <option>5</option>
           <option>6</option>
           <option>7</option>
         </select>
       </div>
  {/* end */}
  {/* Subject(s) you want to learn ? */}
        <h5 className="mt-3 chs">Subject(s) you want to learn ?</h5>
         <Select className="mt-4"
      closeMenuOnSelect={false}
      components={animatedComponents}
      // defaultValue={[colourOptions[4], colourOptions[5]]}
      isMulti
      options={colourOptions}
    />
    {/* end */}
    {/* Where you want to learn ? */}
           <h5 className="mt-3 chs">Where you want to learn ?</h5>
           <div className="form-group pb-3">            
          <select className="form-control" id="exampleFormControlSelect1">

             <option selected>Choose the select</option>
            <option>Online Class (Via Zoom)</option>
            <option>Home Tuition at My Home</option>
            <option>Willing to travel to Teacher's Home</option>
             </select>
        </div>
    {/* end */}
                 </div>
                 </div>
      );
    }
  }

  export default Alertform;