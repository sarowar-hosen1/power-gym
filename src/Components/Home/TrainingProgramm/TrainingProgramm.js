import React, { useEffect } from 'react';
import {FaArrowRight} from 'react-icons/fa'
import './TrainingProgramm.css';

//import aos
import aos from 'aos';
import 'aos/dist/aos.css';

const trainings = [
    {
        img: 'https://i.ibb.co/TcbhHVQ/training1.png',
        name: 'YOGA TRAINING SESSION'
    },
    {
        img: 'https://i.ibb.co/7zP2mVy/training3.jpg',
        name: 'CARDIO TRAINING'
    }
]

const TrainingProgramm = () => {
    //initialize aos
    useEffect(() => {
        aos.init();
    }, [])

    return (
        <div className='training-programm container mb-5'>
            <h1 className='text-brand text-center mb-5'><span>Training</span> Programm</h1>
            <div className="row">
                {
                    trainings.map((training) =>
                        <div className='col-md-6 col-sm-6 col-12'>
                            <div className="card">
                                <img src={training.img} alt="" />
                                <button className='btn-brand'>{training.name} <FaArrowRight/></button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};
export default TrainingProgramm;