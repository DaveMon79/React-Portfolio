import React from 'react';
import { useState, useEffect } from "react";
import ValidateEmail from "../utils/helpers";
import "../../Assets/styles/contact.css"


const Contact = ({ currentPage, handlePageChange }) => {

    // State function to handle new contact details 
    const [contactState, setContactState] = useState({ name: '', email: '', message: '' });
    const [err, setErrMessage] = useState('');
    // const [sent, setEmailMessage] = useState('');

    const { name, email, message } = contactState;

    // This function check if the email address is a valid email
    const handleContactChange = (e) => {

        if (e.target.type === "email") {
            const valid = ValidateEmail(e.target.value)

            if (!valid) {
                setErrMessage(`${e.target.value} is not a valid email. Please enter a vaild email.`)
            }
            else if (valid) {
                setErrMessage(``)

            };
        }

    }

    // Function which sends an error message if no value has been input in name or message fields
    const handleNoInput = (e) => {
        if (e.target.value === '') {
            setErrMessage(`Please input a valid ${e.target.id}`)
        }
    }


     
    const alertEmail = () => {

        alert("Email sent to Dave!")

        handlePageChange("About")
        


    }

 

// HTML for the contact page 
return (
    <div className='container'>
        <div>
            <h1>Contact Page</h1>
        </div>

        <form
        action='https://formsubmit.co/el/hezipa/davemonaghan@gmx.com'
                method="POST">
            <h6>Name:</h6>
            <input datatype={name} id="name" name="name" type='name' onBlur={handleNoInput} ></input>
            <h6>Email:</h6>
            <input datatype={email} id="email" name="email" type="email" onBlur={handleContactChange}></input>
            <h6>Message:</h6>
            <textarea datatype={message} id="message" name="message" type='message' onBlur={handleNoInput}></textarea>
        </form>

        <div className='err'>
            <p style={{ color: "red" }}>{err}</p>
            {/* <p style={{ color: "green" }}>{sent}</p> */}
        </div>

        <div className='submitBtn'>
            <a onClick={() => alertEmail()}><button>Submit</button></a>
        </div>
    </div>
);



}


export default Contact


