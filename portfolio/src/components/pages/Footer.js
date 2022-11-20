import React from 'react';


export default function Footer() {
    return (

        <footer className="bg-light text-center text-white">
            {/* <!-- Grid container --> */}
            <div className="container p-4 pb-0">
                {/* <!-- Section: Social media --> */}
                <section className="mb-4">
                    {/* <!-- Facebook --> */}
                    <a
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: "#3b5998" }}
                        href="https://www.linkedin.com/in/david-monaghan-a1850b238/"
                        role="button"
                    ><i class="fab fa-facebook-f"></i></a>

                    {/* <!-- Linkedin --> */}
                    <a
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: "#0082ca" }}
                        href="https://www.linkedin.com/in/david-monaghan-a1850b238/" 
                        role="button"
                    ><i className="fab fa-linkedin-in"></i></a>
                    {/* <!-- Github --> */}
                    <a
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: "#333333" }}
                        href="https://github.com/DaveMon79"
                        role="button"
                    ><i className="fab fa-github"></i></a>
                </section>
                {/* <!-- Section: Social media --> */}
            </div>
            {/* <!-- Grid container --> */}

            {/* <!-- Copyright --> */}
            <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                © 2022 Copyright:
                <a className="text-white" href="">  Dave Monaghan - Web Developer</a>
            </div>
            {/* <!-- Copyright --> */}
        </footer>


    );
}


