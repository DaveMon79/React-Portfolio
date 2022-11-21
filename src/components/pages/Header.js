import React, { useState } from 'react';
import Navigation from './Navigation';
import Contact from './Contact';
import About from './About';
import Project from './ProjectList';
import CV from './CV';



export default function Header() {
    const [currentPage, setCurrentPage] = useState('About');

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Project') {
            return <Project />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'CV') {
            return <CV />;
        }

    };

    // Handle page function which calls the curretPage state fuction to render page 
    const handlePageChange = (page) => setCurrentPage(page);

    // HTML which sends the navigation bar and header to App.js
    return (
        <div>

            <div>
                <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            </div>

            <header>

                <div
                    className="p-5 text-center bg-image"
                    style={{
                        backgroundImage: `url("https://cdn.pixabay.com/photo/2017/11/03/17/04/computer-2914933_960_720.jpg")`,
                        height: "290px",
                      }}>
                    <div className="mask" style={{backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <div className="text-white">
                                <h1 className="mb-3">Dave Monaghan</h1>
                                <h4 className="mb-3">React Portfolio</h4>
                                <h4>Tel: 07540321620</h4>
                                <a className="btn btn-outline-light btn-lg text-lowercase mt-2" href="mailto:davemonaghan@gmx.com" role="button"
                                >davemonaghan@gmx.com</a>
                            </div>
                        </div>
                    </div>
                </div>
  
            </header>

            <main>
                {renderPage()}
            </main>

        </div>

    );
}

