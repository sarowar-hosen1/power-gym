import React, { useEffect } from 'react';
import './About.css';
import img from '../../../Images/about.png';
//import aos
import aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    //initialize the aos
    useEffect(() => {
        aos.init();
    },[])

    return (
        <div className='about container'>
            <div className="row">
                <div className="col-md-5 col-sm-12 col-12">
                    <div className="about-img" data-aos='fade'>
                        <img src={img} alt="" className="img-fluid"/>
                    </div>
                </div>
                <div className="col-md-7 col-sm-12 col-12">
                    <div className="about-content" data-aos='fade-up' data-aos-anchor-placement="center-bottom">
                        <h1 className='text-brand text-bold text-muted'>About</h1>
                        <h1 className='text-brand text-bold'><span>We are here to dream!</span> <br/> Our team is here surve to you.</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro fugiat soluta eligendi! Numquam quam obcaecati perferendis ratione similique sint architecto nemo modi eligendi reiciendis exercitationem labore, veniam voluptate, quisquam laudantium.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;