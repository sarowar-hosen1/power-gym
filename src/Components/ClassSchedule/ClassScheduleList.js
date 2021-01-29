import React from 'react';
import './ClassScheduleList.css';

const ClassScheduleList = ({schedule}) => {
    return (
        <div className="col-md-6 col-sm-6 col-12 m-0">
            <div className="list">
                <h5>{schedule.day}</h5>
                <p>{schedule.time}</p>
            </div>
        </div>
    );
};

export default ClassScheduleList;