import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "./MemberForm.css";

const MemberForm = ({ handleNext, handleBack, activeStep, steps }) => {
    //Context
    const [memberInfo, setMemberInfo] = useState({})
    const [startDate, setStartDate] = useState(new Date());

    //React Hook Form
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        setMemberInfo(data)
        handleNext()
    };
    console.log(memberInfo);
    console.log(startDate);
    return (
        <div className='member-form-container container'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label htmlFor="">First Name</label>
                            <input name="first_name" className='form-control' ref={register({ required: true })} />
                            {errors.first_name && <span>First Name is required</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input name="email" type="email" className='form-control' ref={register({ required: true })} />
                            {errors.email && <span>Email is required</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Date of Birth</label><br></br>
                            <DatePicker className="form-control" selected={startDate} onChange={(date) => setStartDate(date)} />
                            {errors.birth && <span>Date of birth is required</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Address line1</label>
                            <input name="address" className='form-control' ref={register({ required: true })} />
                            {errors.address && <span>Address is required</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="">City</label>
                            <input name="city" className='form-control' ref={register({ required: true })} />
                            {errors.city && <span>City is required</span>}
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label htmlFor="">Last Name</label>
                            <input name="last_name" className='form-control' ref={register({ required: true })} />
                            {errors.last_name && <span>Last name is required</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Mobile Number</label>
                            <input name="phone" type="number" className='form-control' ref={register({ required: true })} />
                            {errors.phone && <span>Phone number is required</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Gender</label>
                            <select style={{ padding: '10px 10px' }} name="gander" className="w-100" id="" ref={register}>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Country/Region</label>
                            <input name="region" className='form-control' ref={register({ required: true })} />
                            {errors.region && <span>Country is required</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Post Code</label>
                            <input name="post" className='form-control' ref={register({ required: true })} />
                            {errors.post && <span>Post code is required</span>}
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <button onClick={handleBack} disabled={activeStep === 0} className='btn'>Back</button>
                    <input className="btn-brand px-5" type="submit" value={activeStep === steps.length - 1 ? 'Submit' : 'Next'} />
                    
                </div>
            </form>
        </div>
    );
};

export default MemberForm;