import React from "react"
import html from "../html5.png"
import css from "../css.png"
import bootstrap from "../bootstrap.png"
import js from "../js.png"
import react from "../r.png"
import php from "../php.png"
import sql from "../sql.png"
import git from "../git.png";



function Skills() {
    return (
        <div id="skills" className="skills">
           <h1 className="py-5 skill-header">My Skills</h1>

            <div className="container-fluid skill">
               <div class="mb-5">
                  <div class="d-flex justify-content-around flex-wrap">  
                      <img className="icon" src={html} alt="html"/>
                      <img className="icon" src={css} alt="css"/> 
                      <img className="icon" src={bootstrap} alt="bootstrap"/>           
                      <img className="icon" src={js} alt="js"/>      
                      <img className="icon" src={react} alt="react"/>      
                      <img className="icon" src={php} alt="php"/>
                      <img className="icon" src={sql} alt="sql"/>            
                      <img className="icon" src={git} alt="git"/>            
                 </div>
              </div>   
            </div>
        </div>
    )
}

export default Skills
