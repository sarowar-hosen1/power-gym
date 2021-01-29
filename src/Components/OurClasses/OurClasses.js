import React from 'react';
import Breadcrubm from '../Breadcrumb/Breadcrubm';
import ClassList from './ClassList';

const OurClasses = () => {
    return (
        <div>
            <Breadcrubm title={"Our Classes"}></Breadcrubm>
            <ClassList />
        </div>
    );
};

export default OurClasses;