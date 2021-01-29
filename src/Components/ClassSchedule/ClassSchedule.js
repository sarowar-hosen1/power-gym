import React from 'react';
import Breadcrubm from '../Breadcrumb/Breadcrubm';
import checkMark from '../../Images/Icons/checkmark-square-2.png';
import ClassScheduleList from './ClassScheduleList';
import { useHistory } from 'react-router-dom';

const schedules = [
    {
        day: 'Sunday',
        time: '08:00AM - 09:00AM'
    },
    {
        day: 'Monday',
        time: '09:00AM - 10:00AM'
    },
    {
        day: 'Tuesday',
        time: '11:00AM - 12:00PM'
    },
    {
        day: 'Wednesday',
        time: '06:00PM - 07:00AM'
    },
    {
        day: 'Trusday',
        time: '08:00PM - 09:00PM'
    },
    {
        day: 'Friday',
        time: '10:00PM - 11:00PM'
    },
]
const ClassSchedule = () => {
    const history = useHistory();

    return (
        <div>
            <Breadcrubm title={"class schedule"}></Breadcrubm>
            <div style={{ padding: "100px 0px" }} className='container'>
                <div className="row">
                    <div className="col-md-7 col-sm-12 col-12">
                        <div>
                            <img style={{ height: '75%' }} src="https://i.ibb.co/Xy8hpn5/class3.png" alt="" />
                            <p className='my-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur illum asperiores illo porro rem similique. Nulla molestiae, nesciunt doloribus nihil deleniti beatae? Quia suscipit necessitatibus ullam, quis praesentium dolore earum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eius aspernatur fugit error. Est nobis eaque repudiandae id aut quisquam totam labore enim vitae magni! Officiis expedita vel nam labore.</p>
                            <ul className="list-unstyled font-weight-bold">
                                <li><img style={{ width: '20px', marginRight:'10' }} src={checkMark} alt="" /> Having slimmer shapely Thighty</li>
                                <li><img style={{ width: '20px', marginRight:'10' }} src={checkMark} alt="" /> Greeting stronger body</li>
                                <li><img style={{ width: '20px', marginRight:'10' }} src={checkMark} alt="" /> increase Metabolism</li>
                                <li><img style={{ width: '20px', marginRight:'10' }} src={checkMark} alt="" /> Increase Mascular Endurance</li>
                                <li><img style={{ width: '20px', marginRight:'10' }} src={checkMark} alt="" /> Maxmum Result in less Time</li>
                                <li><img style={{ width: '20px', marginRight:'10' }} src={checkMark} alt="" /> Firm Hips & Tummy</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-12 col-12 pl-5">
                        <h2 className='text-brand mb-5'><span>Class</span> Schedule</h2>
                        <div className="row">
                            {
                                schedules.map((schedule) => <ClassScheduleList schedule={schedule}></ClassScheduleList>)
                            }
                        </div>
                        <button onClick={() => history.push('/pricing-plan')} className="btn-brand float-right">JOIN US</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassSchedule;