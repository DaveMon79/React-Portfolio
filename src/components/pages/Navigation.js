import React from 'react';

// Navigation tabs which render page of choice when option is clicked
function Navigation({ currentPage, handlePageChange }) {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div  id="navbarNavAltMarkup">
        <div className='navbar-nav' style={{ display: 'flex', flexDirection: 'row', columnGap: '1rem' }}>
            <a className="nav-link active" aria-current="page" href="About" onClick={() => handlePageChange('About')}>About</a>
            <a className="nav-link" href="#Project" onClick={() => handlePageChange('Project')}>Projects</a>
            <a className="nav-link" href="#Contact" onClick={() => handlePageChange('Contact')}>Contact</a>
            <a className="nav-link" href="#CV" onClick={() => handlePageChange('CV')}>CV</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
