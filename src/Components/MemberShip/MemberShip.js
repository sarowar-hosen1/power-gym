import React from 'react';
import Breadcrubm from '../Breadcrumb/Breadcrubm';
import MemberShipStepper from './MemberShipStepper';

const MemberShip = () => {
    return (
        <>
           <Breadcrubm title={"Your Gym MemberShip"}></Breadcrubm>
           <MemberShipStepper></MemberShipStepper>
        </>
    );
};

export default MemberShip;