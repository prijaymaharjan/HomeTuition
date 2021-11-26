import React,{Component} from "react";
import Staticimage from "./Staticimage";
import contact from "../Images/contact.jpg";
import Footer from "./Footer";
class Contact extends Component{
    render (){
        return(
            <div className="contact">
                <Staticimage
                    imgs={contact}
                    title="Contact Us"
                    prag="Ready To Solve Problem"
                />
          
                {/* <!-- Contact Us Section --> */}
    <section className="Material-contact-section section-padding section-dark sec">
      <div className="container">
          <div className="row">
              {/* <!-- Section Titile --> */}
              <div className="col-md-12 wow animated fadeInLeft" data-wow-delay=".2s">
                  <h1 className="section-title">Love to Hear From You</h1>
              </div>
          </div>
          <div className="row">
              {/* <!-- Section Titile --> */}
              <div className="col-md-6 mt-3 contact-widget-section2 wow animated fadeInLeft" data-wow-delay=".2s">
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content.</p>

                <div className="find-widget">
                 Company:  <a href="https://hostriver.ro">HostRiver</a>
                </div>
                <div className="find-widget">
                 Address: <a href="#">4435 Berkshire Circle Knoxville</a>
                </div>
                <div className="find-widget">
                  Phone:  <a href="#">+ 879-890-9767</a>
                </div>
                
                <div className="find-widget">
                  Website:  <a href="https://uny.ro">www.uny.ro</a>
                </div>
                <div className="find-widget">
                   Program: <a href="#">Mon to Sat: 09:30 AM - 10.30 PM</a>
                </div>
              </div>
              {/* <!-- contact form --> */}
              <div className="col-md-6 wow animated fadeInRight" data-wow-delay=".2s">
                  <form className="shake" role="form" method="post" id="contactForm" name="contact-form" data-toggle="validator">
                      {/* <!-- Name --> */}
                      <div className="form-group label-floating">
                        <label className="control-label" for="name">Name</label>
                        <input className="form-control" id="name" type="text" name="name" required data-error="Please enter your name"/>
                        <div className="help-block with-errors"></div>
                      </div>
                      {/* <!-- email --> */}
                      <div className="form-group label-floating">
                        <label className="control-label" for="email">Email</label>
                        <input className="form-control" id="email" type="email" name="email" required data-error="Please enter your Email"/>
                        <div className="help-block with-errors"></div>
                      </div>
                      {/* <!-- Subject --> */}
                      <div className="form-group label-floating">
                        <label className="control-label">Subject</label>
                        <input className="form-control" id="msg_subject" type="text" name="subject" required data-error="Please enter your message subject"/>
                        <div className="help-block with-errors"></div>
                      </div>
                      {/* <!-- Message --> */}
                      <div className="form-group label-floating">
                          <label for="message" className="control-label">Message</label>
                          <textarea className="form-control" rows="3" id="message" name="message" required data-error="Write your message"></textarea>
                          <div className="help-block with-errors"></div>
                      </div>
                      {/* <!-- Form Submit --> */}
                      <div className="form-submit mt-5">
                          <button className="btn btn-common" type="submit" id="form-submit"><i className="material-icons mdi mdi-message-outline"></i> Send Message</button>
                          <div id="msgSubmit" class="h3 text-center hidden"></div>
                          <div className="clearfix"></div>
                      </div>
                  </form>
              </div>
          </div>
      </div>
    </section>
    <Footer/>
            </div>
        )
    }
}
export default Contact;
