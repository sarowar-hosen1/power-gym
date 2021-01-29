import React, { useEffect, useState } from 'react';
import Breadcrubm from '../Breadcrumb/Breadcrubm';
import check from '../../Images/correct.png'
import './Price.css';
import { useHistory } from 'react-router-dom';
//import aos
import aos from 'aos';
import 'aos/dist/aos.css';
//Loading animation
import FadeLoader from 'react-spinners/FadeLoader';

const Price = () => {
    const [planLists, setPlanLists] = useState([]);
    const history = useHistory();

    //initialize aos
    useEffect(() => {
        aos.init();
    }, [])

    useEffect(() => {
        fetch('https://dry-beyond-44729.herokuapp.com/price-plan')
        .then(res => res.json())
        .then(result => setPlanLists(result))
    },[])

    return (
        <>
            <Breadcrubm title={"Pricing Plan"}></Breadcrubm>
            <div style={{ padding: '100px 0px' }} className="container">
                <div style={{ marginBottom: '50px' }}>
                    <h1 className='text-brand text-center'><span>Choose The Offer</span> That Suits You </h1>
                    <p className='text-center text-muted w-75 d-block mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eaque, ratione enim corrupti ipsum aperiam laudantium maiores vero quos nulla alias sunt.</p>
                </div>
                <div className="row">
                    {
                        planLists.length ?
                        planLists.map((plan) =>
                            <div className='col-md-4 col-sm-6 col-12'>
                                <div
                                    style={{ backgroundImage: `url(${plan.bg})` }}
                                    className="price-card"
                                    data-aos='flip-left'
                                    data-aos-easing='ease-out-cubic'
                                    data-aos-duration='2000'
                                >
                                    <h5 className='text-brand yellow'>Billed Monthly</h5>
                                    <h1>{plan.plan}</h1>
                                    <h1 className="display-2 text-brand yellow my-4">{plan.price}</h1>
                                    <ul className="list-unstyled">
                                        <li><img src={check} alt="" />Mobile Optimize</li>
                                        <li><img src={check} alt="" />Best Hosting</li>
                                        <li><img src={check} alt="" />Free Custom</li>
                                        <li><img src={check} alt="" />Outstanding</li>
                                        <li><img src={check} alt="" />Happy Customer</li>
                                    </ul>
                                    <button onClick={() => history.push('/member-ship')} className="btn-brand">purchase</button>
                                </div>
                            </div>
                        )

                        :

                        <div className="d-flex justify-content-center w-100">
                            <FadeLoader color="#FCD841" />
                        </div>
                    }
                </div>
            </div>
        </>
    );
};

export default Price;