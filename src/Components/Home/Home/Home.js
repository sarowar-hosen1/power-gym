import React from 'react';
import About from '../About/About';
import HomeMain from '../HomeMain/HomeMain';
import OurJourney from '../OurJourney/OurJourney';
import TrainingProgramm from '../TrainingProgramm/TrainingProgramm';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <>
            <HomeMain />
            <OurJourney />
            <About />
            <TrainingProgramm />
            <WhyChooseUs />
        </>
    );
};

export default Home;