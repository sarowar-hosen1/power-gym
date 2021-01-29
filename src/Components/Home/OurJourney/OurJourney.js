import React, { useEffect, useState } from 'react';
//Loading animtaion
import FadeLoader from 'react-spinners/FadeLoader'
import './OurJourney.css';

const OurJourney = () => {
    const [journeys, setJourney] = useState([]);

    useEffect(() => {
        fetch('https://dry-beyond-44729.herokuapp.com/journey')
        .then(res => res.json())
        .then(result => setJourney(result))
    },[])
    return (
        <div className='container journey'>
            <div className="row">
                {
                    journeys.length ?
                    journeys.map((journey) => 
                    <div className='col-md-4 col-sm-6 col-12'>
                        <div style={{backgroundImage:`url(${journey.bg})`}} className='journeyCard'>
                            <img src={journey.icon} alt=""/>
                            <h2 className='text-brand my-3'>{journey.name}</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum qui harum eos eligendi facilis veniam natus molestiae alias porro nihil magni necessitatibus possimus.</p>
                        </div>
                    </div>
                    )
                    :
                    <div className="d-flex justify-content-center w-100">
                        <FadeLoader color={'#FCD841'} />
                    </div>
                }
            </div>
        </div>
    );
};

export default OurJourney;