import React from "react"
import Author from "../author.jpeg";

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                       <img className="profile-img" src={Author} alt="author"></img>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="aboutme_heading">About me</h1>
                    <p>Hello I am Nidhi Poojari.I am an Electronics and Telecommunication engineering graduate from
                     SIES Graduate School Of Technology. I’m currently interested in learning
                     and developing web applications and am looking for opportunities to
                     upgrade and deliver my skills.</p>
                </div>

            </div>
            
        </div>
    )
}

export default AboutMe
