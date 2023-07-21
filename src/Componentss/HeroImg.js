import React from 'react'
import { Link } from 'react-router-dom'
import "./Herostyle.css"
import BackgroundImage from "/Users/lap_070/Desktop/projects/officeProjects/React/my-app/src/assets/backgroound.jpg"

function HeroImg() {
    return (
        <div className="Hero">
            <div className="Mask">
<img className="intro-img" src={BackgroundImage}alt="image"/>
            </div>
            <div className="content">
<p>
    I am a Freelancer
</p>
<h1>React Developer.</h1>

<div className=""> 
<Link to="/project" className="btn">Projects
</Link>
<Link to="/contact" className="btn btn-light">Contact
</Link> 
</div>
            </div>
        </div>
    )
}

export default HeroImg
