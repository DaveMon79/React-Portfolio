import React from 'react';
import { useState } from "react";
import ValidateEmail from "../../utils/helpers";
import "./contact.css"


const Contact = () => {

    const [contactState, setContactState] = useState({ name: '', email: '', message: '' });
    const [err, setErrMessage] = useState('');

    const { name, email, message } = contactState;
    
    const handleContactChange = (e) => {


        if (e.target.type === "email") {
            const valid = ValidateEmail(e.target.value)

            if (!valid) {
                setErrMessage(`${valid} is not a email. Please enter a vaild email. `)
            }
            else if (valid) {
                setErrMessage("")
            }

        }

        if (!e.target.value.length) {
            setErrMessage(`${e.target.value} is not valid. Please enter a valid ${e.target.name}. `)
        }
        else if (e.target.value.length) {

        }setContactState()

    } 

        


        return (
            <div className='container'>
                <div>
                    <h1>Contact Page</h1>
                </div>

                <form>
                    <h5>Name:</h5>
                    <input datatype={name} type='name' placeholder='name'></input>
                    <h5>Email:</h5>
                    <input datatype={email} type='email' placeholder='email'></input>
                    <h5>Message:</h5>
                    <textarea datatype={message} type='message' placeholder='message'></textarea>
                </form>

                <div>
                    <h4>{err}</h4>
                </div>

                <div className='submitBtn'>
                    <a href='/'><button>Submit</button></a>
                </div>
            </div>
        );


    }

export default Contact


