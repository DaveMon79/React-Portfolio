import React from 'react';

export default function Contact() {
  return (
    <div>
        <div>
        <h1>Contact Page</h1>
        </div>
     
        <div>
            <h5>Name:</h5>
            <input placeholder='Input name here'></input>
            <h5>Email:</h5>
            <input placeholder='Input email here'></input>
            <h5>Message:</h5>
            <textarea placeholder='Input message here'></textarea>
        </div>

        <div>
            <button>Submit</button>
        </div>
    </div>
  );
}
