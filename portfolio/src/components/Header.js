import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Contact from './pages/contact/Contact';
import About from './pages/About/About';
import Project from './pages/portfolio/ProjectList';
import CV from './pages/cv/CV';
import "../components/styles/header.css"


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

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <header className='header'>

                <div>
                    <h1>Dave Monaghan - React Portfolio</h1>
                </div>
                <div className='nav'>
                    <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
                </div>
            </header>

            <main>
                {renderPage()}
            </main>
           
        </div>

    );
}