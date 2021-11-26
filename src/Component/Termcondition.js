import React,{Component} from "react";
import Staticimage from "./Staticimage";
import Term from '../Images/terms.jpg'
import Footer from "./Footer";
class Termcondition extends Component{
    render (){
        return(
            <div className="termcondition">
                <Staticimage 
                    imgs={Term}
                    title="Term & Conditions"
                    prag = "This Privacy Policy describes Our policies and procedures"
                />
            <div className="policy">
                    <div className="container">
                        <p>Terms and Conditions</p>
                        <p>Last updated:February 06, 2021</p>
                        <p>Please read these terms and conditions carefully before using Our Service.</p>
                        <p>Interpretation and Definitions</p>

                        <h4>Interpretation</h4>
                        <p>The words of which the initial letter is capitalized have meanings defined under the following conditions.</p>
                        <p>The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                       
                        <h4>Definitions</h4>
                        <p>For the purposes of these Terms and Conditions:</p>

                        <ul>
                            <li className="ul-font"><p className="par-font"><strong className="header-font">Affiliate Means </strong> an entity that controls, is controlled by or is under common control 
                            with a party, where “control” means ownership of 50% or more of the shares, 
                            equity interest or other securities entitled to vote for the election of directors or other managing authority.</p></li>
                           
                            <li className="ul-font"><p className="par-font"><strong className="header-font">Third-party Social Media Service</strong> means any services or content (including data, information, products or services)
                             provided by a third-party that may be displayed, included or made available by the Service.</p></li>

                             <li className="ul-font"><p className="par-font"><strong className="header-font">Website</strong> refers to Growing Stars, accessible from https://www.growingstars.com.</p></li>

                             <li className="ul-font"><p className="par-font"><strong className="header-font">You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p></li>
                        </ul>
                        
                        <h4>Acknowledgment</h4>
                        <p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.

                            Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.

                            By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.

                            Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your personal information when You use the
                             Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.
                             </p>

                             <h4>Content copyright policy </h4>
                             <p>1 Tutopiya Pte Ltd respects the intellectual property rights of others and expects  users of the Services to do the same.
                              We will respond to notices of alleged copyright  infringement that comply with applicable law and are properly provided to us. 
                              If you believe that your Content has been copied in a way that constitutes copyright  infringement, please provide us with the following information: 

                              <ul>
                                  <li>A physical or electronic signature of the copyright owner or a person authorized to  act on their behalf</li>
                                  <li> identification of the copyrighted work claimed to have been infringed</li>
                                  <li>identification of the material that is claimed to be infringing or to be the subject of  infringing activity and that is to be removed or access to
                                   which is to be disabled, and  information reasonably sufficient to permit us to locate the material </li>
                                  <li>your contact information, including your address, telephone number, and an email  address</li>
                                  <li>a statement by you that you have a good faith belief that use of the material in the  manner complained of is not authorized by the copyright owner, its agent, or the law</li>
                                  <li>a statement that the information in the notification is accurate, and that you are  authorized to act on behalf of the copyright owner </li>
                                  
                                  <p> We reserve the right to remove Content alleged to be infringing without prior 
                                   notice, at our sole discretion, and without liability to you. In appropriate circumstances, 
                                    we will also terminate a user’s account if the user is determined to be a repeat infringer. 
                                   Our address for notice of alleged copyright infringement appearing on the Services  is info@.com.</p>
                              </ul>
                              </p>

                              <h4>Links to Other Websites</h4>
                              <p>
                              Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.
                              The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge 
                              and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content,
                               goods or services available on or through any such web sites or services.
                               We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.
                              </p>
                              <h4>Services</h4>
                              <p>The Site offers one on one tutoring services. You and the Tutor are responsible for materials, scheduling,
                               frequency, duration and all other aspects of the transactions. You are responsible for choosing the best Tutor to fit your needs.
                                You should investigate and review each user. If You are younger than 18-years old, the session should be supervised by an adult.
                                 The Website may vary depending
                               on your location. We will attempt to deliver correspondence; however, We cannot guarantee delivery of messages.</p>
                              </div>
                
                </div>
                <Footer/>
            </div>
        )}}

        export default Termcondition;