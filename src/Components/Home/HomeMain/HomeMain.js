import React from 'react';
import HomeMainContent from './HomeMainContent';
import './HomeMain.css';
import Navbar from '../../Shared/Navbar/Navbar';

const HomeMain = () => {
    return (
        <div className='home-main-container'>
            <Navbar></Navbar>
            <HomeMainContent />
        </div>
    );
};

export default HomeMain;