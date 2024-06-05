import React from 'react';
import './skills.css';
import education from '../../Assests/education.jpg';
import technical from '../../Assests/technical.jpg';
import certificate from '../../Assests/certificate.jpg';

const Skills = () => {
    return (
        <section id='skills'>
            <span className='skilltitle'>What I do</span>
            <span className='skilldesc'>I am passionated in Front End Web Development</span>
            <div className='SkillsBars'>
                <div className='SkillBar'>
                    <img src={education} alt='Education' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Education</h2>
                        <p>B.Tech in Computer Science and Engineering<br/>
                        Maharaj Vijayaram Gajapathi Raj College of Engineering (Autonomous), Vizianagaram, Andhra Pradesh<br/>
                        Graduation: April, 2025</p>
                    </div>
                </div>
                <div className='SkillBar'>
                    <img src={technical} alt='technical Skills' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Technical Skills</h2>
                        <p>Programming Languages: Python, C++<br/>
                            Web Technologies:HTML, CSS, JavaScript<br/>
                            Databases: MySQL<br/>
                            Tools & IDEs: Visual Studio Code<br/>
                            Operating Systems: Windows</p>
                    </div>
                </div>
                <div className='SkillBar'>
                    <img src={certificate} alt='Certifications' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Certifications</h2>
                        <p>SQL - HackerRank<br/>
                           HTML- Great Learning<br/>
                           Programming Essentials in Python at CISCO on 13 December,2022<br/>
                           Cloud computing- NPTEL<br/>
                           Leadership and Team Effectiveness- NPTEL</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills