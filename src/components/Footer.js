import React from "react"
import {
    LineShareButton,
 LinkedinIcon
 
} from "react-share";

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>3A/702, Dheeraj Dreams CHS-LTD</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:9970158110">+919970158110</a>
                        </div>
                        <div className="d-flex">
                            <p >nidhipoojari702@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">Home</a>
                                <br/>
                                <a className="footer-nav">About Me</a>
                                <br/>
                                <a className="footer-nav">Skills</a>
                                <br/>
                            </div>
                            <div className="col">
                                <a className="footer-nav">Experience</a>
                                <br/>
                                <a className="footer-nav">Education</a>
                                <br/>
                                <a className="footer-nav">Contact Me</a>
                                <br/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <LineShareButton
                            url="https://www.linkedin.com/in/nidhi-poojari-939a171b1">
                                <LinkedinIcon className="mx-3" size={36} />
                            </LineShareButton>
                         </div>
                         <p className="pt-3 text-center">
                             Copyright&copy;
                         </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
