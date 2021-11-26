import React,{Component} from "react";
import Staticimage from "./Staticimage";
import privacy from "../Images/privacy-policy.jpg";
import Footer from "./Footer";

class Privacy extends Component{
    render (){
        return(
            <div className="privacy">
                <Staticimage 
                    imgs={privacy}
                    title="Privacy Policy"
                    prag = "This Privacy Policy describes Our policies and procedures"
                />
                <div className="policy">
                    <div className="container">
                        <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information
                         when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
                         <p>We use Your Personal data to provide and improve the Service. By using the Service, 
                         You agree to the collection and use of information in accordance with this Privacy Policy.</p>

                         <h4>Personal information that we collect through our services</h4>
                         <p>Once you register with Tutor Hunt your email address along with your username is stored on our databases. In addition, we require the following data at
                          a minimum to complete registration with our service: </p>
                          
                          <ul>
                              <li>Email Address</li>
                              <li>First name and last name</li>
                              <li>Address, State, Province, ZIP/Postal Code, City</li>
                              <li>Usage Data</li>
                              <li>Contact</li>
                          </ul>

                          <h4>Server Log Data</h4>
                          <p> Our server store standard log files which enable us to view an individual's IP addresses, 
                          from this we will be able to lookup which ISP is supplying that IP address. From our logs we are able to see the date and time at which you viewed each page on Tutor Hunt, 
                          other standard information in these log files include a "user agent" which shows which internet browser and operating system you were using. We mainly use this log data to 
                          see which pages are popular and other general user behaviour across Tutor Hunt.

                            From this data alone we are not able to collect any personally identifiable information. 
                            However if a user signs up to our service we are then able to track a particular user 
                            (via their IP address). This data is only used by Tutor Hunt, but we may pass this data on to legal authorities or other
                             3rd parties if we receive abuse from a particular user. </p>
                            
                            <h4>Right to Delete</h4>
                            <p>You have the right to request that we delete 
                            the personal information we have collected from you
                             (and direct our service providers to do the same). 
                             Note that deletion requests are subject to certain limitations; 
                             For example, we may keep information to facilitate User requests,
                            and protect and fix our program.</p>


                            <h4>Information Security</h4>
                            <p>We secure information you provide on computer servers in a controlled, secure environment, 
                            protected from unauthorized access, use, or disclosure. We maintain reasonable administrative, 
                            technical, and physical safeguards in an effort to protect against unauthorized access, use, modification, and 
                            disclosure of Personal Information in its control and custody. However, no data transmission over the 
                            Internet or wireless network can be guaranteed. Therefore, while we strive to protect your Personal Information, 
                            you acknowledge that </p>

                            <ul>
                              <li>There are security and privacy limitations of the Internet ehich are beyond our control.</li>
                              <li>The Security, Intefrity, and Privacy of any and all information and data exchanged between you and the Website andServices cannot be guaranteed.</li>
                              <li>Any such information and data may be viewed or tampered with in transit by a third party,despite best efforts.</li>                              
                          </ul>

                          
                          <h4>Acceptance of this policy</h4>
                            <p>You acknowledge that you have read this Policy and agree 
                            to all its terms and conditions. By accessing and using the Website
                             and Services you agree to be bound by this Policy. 
                            If you do not agree to abide by the terms of this Policy, you are not
                             authorized to access or use the Website and Services. </p>

                    </div>
                </div>
                {/* EndPrivacy policy */}
                <Footer/>
            </div>
        )}}

        export default Privacy