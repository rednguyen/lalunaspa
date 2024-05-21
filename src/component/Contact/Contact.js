import "./Contact.css"
import React, { useEffect, useState } from "react"
import "react-datetime/css/react-datetime.css";
import Logo from '../asset/Laluna-Logo.png';
import emailjs from '@emailjs/browser';


function Contact()  {
   
    let [isSubmitted, setIsSubmitted] = useState(false);
    let [formErrors, setFormErrors] = useState({firstName: "", lastName: "", email: "", subject: "", request: ""});
    
    const initialValues = {firstName: "", lastName: "", email: "", subject: "", request: ""} 
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

    const sendEmailtoSpa = () => {
        const serviceID = 'service_v6su3qq';
        const templateID = 'template_v83je9k';
        const publicKey = 'zDKZrYnWzPbV1QAH7';

        const templateParams = {
            name: formInfo.firstName + ' ' + formInfo.lastName,
            email: formInfo.email,
            subject: formInfo.subject,
            request: formInfo.request,
            toEmail: 'support@lalunahoian.com',
            replyEmail: formInfo.email
        }

        if(templateParams.email){
            emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                setTimeout(() => {
                    setIsLoading(false)
                }, 2000);
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
            setIsSubmitted((prev => !prev));
            setIsLoading(true);
            sendEmailtoSpa();
            setFormInfo({firstName: "", lastName: "", email: "", subject: "", request: ""});
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
        if (!values.subject) {
            errors.subject = "Subject is required";
        }
        if (!values.request) {
            errors.request = "Message time is required";
        }
        return errors
    }

    return (
        <div>
            {
            !isSubmitted &&
            <div className="container-booking-contact">
                
                <div className="contact-address">
                    <a href="/" className='logo'><img className='logo' src={Logo}/></a>
                    <h1 className="contact-title">Contact Us</h1>
                    <h3 className="contact-title">Hotline: + 84 2353 666 678</h3>
                    <h3 className="contact-title">info@lalunahoian.com</h3>
                    <h3 className="contact-title">12 Nguyen Du, Minh An, Hoi An, Vietnam</h3>
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
                            <label>*Subject:</label>
                            <div className="error">{formErrors.subject}</div>
                            <input type="text"
                                name="subject"
                                value={formInfo.subject}
                                onChange={handleChange}>
                            </input>
                        </div>

                        <div className="input-field">
                            <label>*Message:</label>
                            <div className="error">{formErrors.request}</div>
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
                        <h3>An Email Has Been Sent to Our Team!</h3>
                        <div>Name: {tempFormInfo.firstName} {tempFormInfo.lastName}</div>
                        <div>Email: {tempFormInfo.email}</div>
                        <div>Subject: {tempFormInfo.subject}</div>
                        <div>Message: {tempFormInfo.request}</div>
                        <a href="/">    
                            <button className="homepage">BACK TO HOMEPAGE</button>
                        </a>
                    </div>
                </div>
            }
            
        </div>
    )
}

export default Contact