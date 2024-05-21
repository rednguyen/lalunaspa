import "./Booking.css"
import SpaPackages from "../config/spa-packages"
import { useParams } from "react-router-dom"
import Datetime from 'react-datetime'
import React, { useEffect, useState } from "react"
import "react-datetime/css/react-datetime.css";
import emailjs from '@emailjs/browser';


function Booking()  {
    let spaPackageID = useParams();
    let packageID=spaPackageID.packageId;
    let packageDetailID=spaPackageID.packageDetailId;
    let packageDetail = SpaPackages.packages[packageID].packageDetail[packageDetailID];
    let [isSubmitted, setIsSubmitted] = useState(false);
    let [formErrors, setFormErrors] = useState({firstName: "", lastName: "", email: "", datetime: "", request: ""});
    
    const initialValues = {firstName: "", lastName: "", email: "", datetime: "", request: ""} 
    const [formInfo, setFormInfo] = useState(initialValues);
    const [tempFormInfo, setTempFormInfo] = useState(initialValues);
    let [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormInfo({ ...formInfo, [name]: value});
    }

    const handleTimeChange = (e) => {
        const datetime = e._d;
        setFormInfo({ ...formInfo, datetime: datetime.toLocaleString()});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formInfo)) 
    }

    const sendEmailtoClient = () => {
        const serviceID = 'service_v6su3qq';
        const templateID = 'template_za99pzb';
        const publicKey = 'zDKZrYnWzPbV1QAH7';

        const templateParams = {
            packageDetail: packageDetail.title,
            time: packageDetail.time,
            name: formInfo.firstName + ' ' + formInfo.lastName,
            email: formInfo.email,
            datetime: formInfo.datetime,
            request: formInfo.request,
            toEmail: formInfo.email
        }

        if(templateParams.email){
            emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
            })
            .catch((error) => {
                console.error('Error sending email: ', error);
            });
        }
        
    }

    
    const sendEmailtoSpa = () => {
        const serviceID = 'service_v6su3qq';
        const templateID = 'template_za99pzb';
        const publicKey = 'zDKZrYnWzPbV1QAH7';

        const templateParams = {
            packageDetail: packageDetail.title,
            time: packageDetail.time,
            name: formInfo.firstName + ' ' + formInfo.lastName,
            email: formInfo.email,
            datetime: formInfo.datetime,
            request: formInfo.request,
            toEmail: 'support@lalunahoian.com',
            replyEmail: formInfo.email
        }

        if (templateParams.email){
            emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                setTimeout(() => {
                    setIsLoading(false)
                }, 2000);;
            })
            .catch((error) => {
                console.error('Error sending email: ', error);
            });
        }

        
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0){
            if (!formInfo.request){
                setFormInfo({ ...formInfo, request: "N/A"})
            }
            setTempFormInfo(formInfo);
            setIsSubmitted((prev => !prev));
            setIsLoading(true);
            sendEmailtoClient();
            sendEmailtoSpa();
            setFormInfo({firstName: "", lastName: "", email: "", datetime: "", request: ""});
        }
    }
    , [formErrors]);

    const validate = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.firstName) {
            errors.firstName = "First name is required";
        }
        if (!values.lastName) {
            errors.lastName = "Last name is required";
        }
        if (!values.email) {
            errors.email = "Email is required";
        } else if (!regex.test(values.email)){
            errors.email = "This is not a valid email";
        }
        if (!values.datetime) {
            errors.datetime = "Date time is required";
        }
        return errors
    }

    let inputPropsforDate = {
        placeholder: 'mm/dd/yyyy',
        className: "datetime"
    };

    let inputPropsforTime = {
        placeholder: 'hh:mm:ss',
        // className: "datetime"
    };

    return (
        <div>
            {
            !isSubmitted &&
            <div className="container-booking">
                <div className="header-booking">
                    <h3>COMPLETE YOUR BOOKING</h3>
                    <h2>{packageDetail.title}</h2>
                    <div>Time: {packageDetail.time}</div>
                    <div>{packageDetail.price}</div>
                    <div>(No payment required at this time)</div>
                </div>
             
                <div className="calender-booking">
               
                    <form onSubmit={handleSubmit}>
                        <div className="input-field">
                            <label>*First Name: </label>
                            <div className="error">{formErrors.firstName}</div>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formInfo.firstName}
                                onChange={handleChange}
                            ></input>
                           
                        </div>

                        <div className="input-field">
                            <label>*Last Name:</label>
                            <div className="error">{formErrors.lastName}</div>
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formInfo.lastName}
                                onChange={handleChange}
                            ></input>
                            
                        </div>

                        <div className="input-field">
                            <label>*Email:</label>
                            <div className="error">{formErrors.email}</div>
                            <input
                                type="text"
                                name="email"
                                placeholder="abc@gmail.com"
                                value={formInfo.email}
                                onChange={handleChange}
                            ></input>
                            
                        </div>

                        <div className="input-field">
                            <label>*Pick a date:</label>
                            <div className="error">{formErrors.datetime}</div>
                            <Datetime type="text" name="date"  timeFormat={false} inputProps={ inputPropsforDate }
                             value={formInfo.date} onChange={handleTimeChange}
                            />
                            
                        </div>

                        <div className="input-field">
                            <label>*Pick a time:</label>
                            <div className="error">{formErrors.datetime}</div>
                            <Datetime type="text" name="time" dateFormat={false} inputProps={inputPropsforTime}
                             value={formInfo.time}   onChange={handleTimeChange}/>
                             
                        </div>


                        <div className="input-field">
                            <label>Additional Requests:</label>
                            <textarea type="text"
                                name="request"
                                value={formInfo.request}
                                onChange={handleChange}>
                            </textarea>
                        </div>

                        <button className="submit">SUBMIT</button>
                    </form>
                </div>
                
            </div>
            
            }

            {
                isLoading &&
                <div className="container-booking">
                    <div className="header-booking">
                        <h1>Sending Email...</h1>
                    </div>
                </div>
            }

            {
                isSubmitted && !isLoading &&
                <div className="container-booking">
                    <div className="header-booking">
                        <h3>An Email Has Been Sent to You!</h3>
                        <div>Package Name: {packageDetail.title}</div>
                        <div>Length: {packageDetail.time}</div>
                        <div>Name: {tempFormInfo.firstName} {formInfo.lastName}</div>
                        <div>Email: {tempFormInfo.email}</div>
                        <div>Time: {tempFormInfo.datetime} (GMT+7)</div>
                        <div>Addtional Request: {tempFormInfo.request}</div>
                        <a href="/">    
                            <button className="homepage">BACK TO HOMEPAGE</button>
                        </a>
                    </div>
                </div>
            }
            
        </div>
    )
}

export default Booking