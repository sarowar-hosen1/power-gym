import React, { useEffect } from 'react';
import './HomeMainContent.css';

//Import aos 
import aos from 'aos';
import 'aos/dist/aos.css';
import { useHistory } from 'react-router-dom';

const HomeMainContent = () => {
    const history = useHistory();

    //initialize aos
    useEffect(() => {
        aos.init({
            duration:2000
        });
    },[])

    return (
        <div className="container home-main-content">
            <div className="row d-flex align-items-center">
                <div className="col-md-6 col-sm-12 col-12">
                    <div className="content" data-aos='zoom-in-down'>
                        <h1 className="text-brand text-white">THE BEST FITNESS <br /> STUDIO IN TOWN</h1>
                        <p className='text-white mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error reprehenderit, officiis et vitae recusandae, numquam maxime earum soluta aspernatur impedit, ipsum nulla suscipit cumque voluptatem odio.</p>
                        <button onClick={() => history.push('/pricing-plan')} className="btn-brand">JOIN US</button>
                    </div>
                </div>
                <div className="offset-md-6">

                </div>
            </div>
        </div>
    );
};

export default HomeMainContent;