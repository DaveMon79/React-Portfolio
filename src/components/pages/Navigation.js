import React from 'react';

// Navigation tabs which render page of choice when option is clicked
function Navigation({ currentPage, handlePageChange }) {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div  id="navbarNavAltMarkup">
        <div className='navbar-nav' style={{ display: 'flex', flexDirection: 'row', columnGap: '1rem' }}>
            <a className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} href="#About" 
            onClick={() => handlePageChange('About')}>About</a>
            
            <a className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'} href="#Project" 
            onClick={() => handlePageChange('Project')}>Projects</a>
            
            <a className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} href="#Contact" 
            onClick={() => handlePageChange('Contact')}>Contact</a>

            <a className={currentPage === 'CV' ? 'nav-link active' : 'nav-link'} href="#CV" 
            onClick={() => handlePageChange('CV')}>CV</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
