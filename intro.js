import React from 'react';
import './intro.css';
import bg from '../../Assests/bg.png';
import {Link} from 'react-scroll';
import btnImg from '../../Assests/hireme.jpg';

const Intro = () => {
    return (
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm <span className='introname'> Triveni,</span>
                <br/>Front End Developer</span>
                <p className='introPara'>
                Aspiring Front End Developer equipped with a robust understanding <br/>of computer science
            fundamentals and practical experience gained <br/>through academic projects and internships.</p>
            <Link><button className='btn'><img src={btnImg} alt='Hire Me' className='btnImg'/>Hire Me</button></Link>
            </div>
            <img src={bg} alt='profile' className='bg'/>
        </section>
    )
}

export default Intro;