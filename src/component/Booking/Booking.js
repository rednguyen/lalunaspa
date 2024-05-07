import "./Booking.css"
import SpaPackages from "../config/spa-packages"
import { useParams } from "react-router-dom"
import Datetime from 'react-datetime'
import React, { useState } from "react"
import "react-datetime/css/react-datetime.css";


function Booking()  {
    let spaPackageID = useParams();
    let packageID=spaPackageID.packageId;
    let packageDetailID=spaPackageID.packageDetailId;
    let packageDetail = SpaPackages.packages[packageID].packageDetail[packageDetailID];
    let minDate = new Date("11/22/2023 12:00 PM");
    let maxDate = new Date("11/25/2025 5:00 PM");
    let dateValue = new Date("02/05/2021 10:30 AM");
    

    return (
        <div>
            <div className="container-booking">
                <div className="header-booking">
                    <h3>COMPLETE YOUR BOOKING</h3>
                    <div>{packageDetail.title}</div>
                    <div>Time: {packageDetail.time}</div>
                    <div>{packageDetail.price}</div>
                </div>
                <hr></hr>
                <div className="calender-booking">

                    <div className="input-field">
                        <label>First Name:</label>
                        <input></input>
                    </div>

                    <div className="input-field">
                        <label>Last Name:</label>
                        <input></input>
                    </div>

                    <div className="input-field">
                        <label>Email:</label>
                        <input></input>
                    </div>

                    <div className="input-field">
                        <label>Pick a date:</label>
                        <Datetime initialValue={dateValue} timeFormat={false}/>
                    </div>

                    <div className="input-field">
                        <label>Pick a time:</label>
                        <Datetime initialValue={dateValue} dateFormat={false}/>
                    </div>

                    <div className="input-field">
                        <label>Additional Request:</label>
                        <textarea name="postContent"></textarea>
                    </div>

                    <button className="submit">SUBMIT</button>
                    
                    
                    
                </div>
                
            </div>
            
        </div>
    )
}

export default Booking