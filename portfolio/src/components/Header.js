import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Contact from './pages/Contact';
import About from './pages/About';
import Project from './pages/Project';
import CV from './pages/CV';


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
            <div>
                <h1>Dave Monaghan - React Portfolio</h1>
            </div>

            <div>
                {/* We are passing the currentPage from state and the function to update it */}
                <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
                {/* Here we are calling the renderPage method which will return a component  */}
                {renderPage()}
            </div>
        </div>

    );
}