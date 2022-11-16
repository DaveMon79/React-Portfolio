import React from 'react';

function Contact() {

    // // const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    // // const [errorMessage, setErrorMessage] = useState('');
    // const { name, email, message } = formState;
  
    return (
        <div>
            <div>
                <h1>Contact Page</h1>
            </div>

            {/* <div>
                <h5>Name:</h5>
                <input defaultValue={name} type='name' placeholder='name'></input>
                <h5>Email:</h5>
                <input defaultValue={email} type='email' placeholder='email'></input>
                <h5>Message:</h5>
                <textarea defaultValue={message} placeholder='message'></textarea>
            </div>

            <div>
                <h4>{errorMessage}</h4>
            </div> */}

            <div>
                <button>Submit</button>
            </div>
        </div>
    );
}

export default Contact