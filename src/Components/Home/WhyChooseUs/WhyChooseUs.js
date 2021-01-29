import React, { useEffect } from 'react';
//import animation on scroll
import aos from 'aos';
import 'aos/dist/aos.css';
import './WhyChooseUs.css';

const chooses = [
    {
        img: 'https://i.ibb.co/5846FTk/choose1.png',
        name: 'Free fitness training',
        description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document"
    },
    {
        img: 'https://i.ibb.co/BcFtKw7/choose2.png',
        name: 'Tons of cardion & strength',
        description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document"
    },
    {
        img: 'https://i.ibb.co/3TS8ZS0/choose3.png',
        name: 'No comment membership',
        description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document"
    }
]
const WhyChooseUs = () => {
    //initialize aos
    useEffect(() => {
        aos.init();
    },[])

    return (
        <div className='choose-us container'>
            <h1 className="text-brand text-center my-5"><span>Why</span> Choose Us</h1>
            <div className="row">
                {
                    chooses.map(choose =>
                        <div className="col-md-4 col-sm-6 col-12">
                            <div className="card text-center" data-aos="fade-up">
                                <img src={choose.img} alt="" className="card-img img-fluid" />
                                <h3 className='text-brand my-4'>{choose.name}</h3>
                                <p>{choose.description}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default WhyChooseUs;