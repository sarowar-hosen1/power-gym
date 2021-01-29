import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import './Breadcrumb.css';

const Breadcrubm = ({title}) => {
    return (
        <div className='banner'>
            <Navbar></Navbar>
            <div className="d-flex justify-content-center">
                <h1 style={{marginTop:'100px'}} className='text-brand text-white text-center'>{title}</h1>
            </div>
        </div>
    );
};

export default Breadcrubm;