import React, {Component} from "react";
import Staticimage from './Staticimage'
import faq from "../Images/what-is-a-FAQ-page.png"
import Footer from './Footer';

class FAQ extends Component{
render(){
    return(<div className="faq">
     <Staticimage
                    imgs={faq}
                    title="FAQ"
                    prag="Still doubtful how Home Tuition is the perfect online tutoring partner for"
                />

                <div className = "container">
                    <h5 className="fa">About FAQ</h5>

                    <h6>What is HomeTuition for Tutors</h6>
                    <p className="fd">TutorBin is an online tutoring portal designed from a
                     tutor’s point of view. By connecting skilled tutors to students that seek assistance,
                     we help them to share their technica expertise and earn a small living as well.</p>

                     <h6>What is the payment structure for tutors at HomeTuition</h6>
                    <p  className="fd">We believe in upfront disbursement of payments and generally the compensation is 
                    updated within 30 minutes of the completion of the session. The payment for each session may vary 
                    between INR 100- INR 350
                     based on the difficulty level of the problems and the quality of solutions offered.</p>

                     <h6>How will tutor rating affect me?</h6>
                    <p  className="fd">WTutor rating is an important component to judge the performance of every tutor.
                     Each tutor will be awarded a rating at the end of each session based on the quality of 
                     solutions provided. Each rating will contribute to the tutor’s average rating. The higher the 
                     average rating, the more sessions will the tutor be offered. Additionally, if a tutor deals in more 
                    than one subject, the rating for each subject will be different based on the performance.</p>

                    
                    <h6>Can I cancel the registration or edit information</h6>
                    <p  className="fd">Tutors are allowed to edit certain profile information anytime
                     which includes Name, Whatsapp Number, University,Subjects and Payment mode. </p>
                </div>
        <Footer/>
    </div>
    )
    }
}
export default FAQ;