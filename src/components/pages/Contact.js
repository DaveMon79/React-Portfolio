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
    <div className='container contact-form'>
        <div>
            <h1 className='mb-5'>Contact Form</h1>
        </div>

        <form className='form col-lg-6 col-sm-10 form-outline'
        action='https://formsubmit.co/el/hezipa/davemonaghan@gmx.com'
                method="POST">
            <h6 className='form-text'>Name:</h6>
            <input datatype={name} id="name" name="name" type='name' onBlur={handleNoInput} ></input>
            <h6 className='form-text'>Email:</h6>
            <input datatype={email} id="email" name="email" type="email" onBlur={handleContactChange}></input>
            <h6 className='form-text'>Message:</h6>
            <textarea datatype={message} id="message" name="message" type='message' onBlur={handleNoInput}></textarea>
        </form>

        <div className='err'>
            <p style={{ color: "red" }}>{err}</p>

        </div>

        <div className='submitBtn'>
            <a onClick={() => alertEmail()}><button className='btn btn-primary'>Submit</button></a>
        </div>
    </div>
);



}


export default Contact


