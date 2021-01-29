import React, { useEffect, useState } from 'react';
import './ClassList.css';
import { FaArrowRight } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
//import animation on scroll
import aos from 'aos';
import 'aos/dist/aos.css';

//Loading animation
import FadeLoader from 'react-spinners/FadeLoader';

const ClassList = () => {
    const [classLists, setClassList] = useState([]);
    const history = useHistory();
    //initialize aos
    useEffect(() => {
        aos.init({
            duration: '2000'
        });
    }, [])

    useEffect(() => {
        fetch('https://dry-beyond-44729.herokuapp.com/class-list')
            .then(res => res.json())
            .then(classes => setClassList(classes))
    }, [])

    return (
        <div className='container class-list-container'>
            <div className="container">
                <div className="row">
                    {
                        classLists.length ?
                            classLists.map(list =>
                                <div className='col-md-4 col-sm-6 col-12'>
                                    <div className="class-list" data-aos="zoom-in">
                                        <img src={list.img} alt="" />
                                        <button onClick={() => history.push('/class-schedule')} className='btn-brand'>{list.name} <FaArrowRight /></button>
                                    </div>
                                </div>)
                            :
                            <div className="d-flex justify-content-center w-100">
                                <FadeLoader color="#FCD841" />
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default ClassList;