import React from 'react'
import './About.css'
import aboutImg from './rachel-cox-art-about.jpg';

function About() {
    return (
        <div className='about'>
            <img src={aboutImg} alt="" />
            <p className='aboutText'>
                Rachel Cox is passionate about drawing anything that is fun and beautiful!<br />
                Starting with colored pencils, she began her journey into Realism over 20 years ago. <br />
                All images below are available in 8.5x11 Prints in a white mat frame.
            </p>

        </div>
    )
}

export default About