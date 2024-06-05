import React from 'react';
import './works.css';
import work1 from '../../Assests/w1.png';
import work2 from '../../Assests/w2.png';
import work3 from '../../Assests/w3.png';
import work4 from '../../Assests/w4.png';
import work5 from '../../Assests/w5.png';
import work6 from '../../Assests/w6.png';

const Works = () => {
    return (
        <section id='works'>
            <h2 className='worksTitle'>My Portfolio</h2>
            <span className='worksdesc'>Welcome to my portfolio! Here, you'll find a selection of my latest projects, 
            showcasing my skills in web development, design, and programming.</span>
            <div className='worksImgs'>
                <img src={work1} alt='' className='WorksImg'/>
                <img src={work2} alt='' className='WorksImg'/>
                <img src={work3} alt='' className='WorksImg'/>
                <img src={work4} alt='' className='WorksImg'/>
                <img src={work5} alt='' className='WorksImg'/>
                <img src={work6} alt='' className='WorksImg'/>
            </div>
            <button className='worksBtn'>See More</button>
        </section>
    );
}

export default Works