import React from "react"

function Experience() {
    return (
        <div className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1 className="experience-header">Experience</h1>
            </div>
            <div className="container experience-wrapper">
               <div className="timeline-block timeline-block-right">
                   <div className="marker">
                   </div>
                   <div className="timeline-content">
                       <h3>2021</h3>
                       <h6>Full Stack Development Internship</h6>
                       <p>My main job included developing RESTful API webservices in PHP.
                          Worked on creating a web app for delivery management.
                          using Laravel framework and app maintenance. Technology Stack-React.js, PHP, MySql</p>
                   </div>
               </div>
               <div className="timeline-block timeline-block-left">
                   <div className="marker">
                   </div>
                   <div className="timeline-content">
                       <h3>2020</h3>
                       <h6>Business Analyst Internship</h6>
                       <p>Successfully completed internship on Market Study and Business Plan
                           for Scheduling Apps.
                           My day-to-day job included analysing different scheduling apps and
                           performing market research.
                       </p>
                   </div>
               </div>
               <div className="timeline-block timeline-block-right">
                   <div className="marker">

                   </div>
                   <div className="timeline-content">
                       <h3>2019</h3>
                       <h6>Trainee Internship</h6>
                       <p>Worked on projects under the JioCloud team.
                        This internship introduced me to software and automation testing.</p>
                   </div>
               </div>
            </div>
            
        </div>
    )
}

export default Experience
