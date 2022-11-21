import React from 'react';
import { useState } from "react";
import ValidateEmail from "../utils/helpers";
import "../../Assets/styles/contact.css"


const Contact = () => {
    // State function to handle new contact details 
    const [contactState, setContactState] = useState({ name: '', email: '', message: '' });
    const [err, setErrMessage] = useState('');

    const { name, email, message } = contactState;

    // This function check if the email address is a valid email
    const handleContactChange = (e) => {

        if (e.target.type === "email") {
            const valid = ValidateEmail(e.target.value)

            if (!valid) {
                setErrMessage(`Is not a valid email. Please enter a vaild email. `)
            }
            else if (valid) {
                setErrMessage(`Email is valid`)

            };
        }

    }

    // Function which sends an error message if no value has been input in name or message fields
    const handleNoInput = (e) => {
        if (e.target.value === '') {
            setErrMessage(`Please input a valid ${e.target.id}`)
        }
    }

// HTML for the contact page 
return (
    <div className='container'>
        <div>
            <h1>Contact Page</h1>
        </div>

        <form>
            <h5>Name:</h5>
            <input datatype={name} id="name" type='name' onBlur={handleNoInput} ></input>
            <h5>Email:</h5>
            <input datatype={email} id="email" type='email' onBlur={handleContactChange}></input>
            <h5>Message:</h5>
            <textarea datatype={message} id="message" type='message' onBlur={handleNoInput}></textarea>7
        </form>

        <div className='err'>
            <p style={{ color: "red" }}>{err}</p>
        </div>

        <div className='submitBtn'>
            <a href='/'><button>Submit</button></a>
        </div>
    </div>
);

}


export default Contact


