import React from 'react';


function Navigation({ currentPage, handlePageChange }) {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#About" onClick={() => handlePageChange('About')}>About</a>
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
