// Libs
import React from 'react';
import { Link } from 'react-router-dom';

// Utils

// Resources
import { ReactComponent as Logo } from '.././../../static/img/logo.svg';


// Components

// Component
const SiteHeader = () => {
    const fullLogo = window.location.pathname === '/';

    return (
        <header className={`site-header grid ${fullLogo ? 'site-header--full' : ''}`}>
            <div className='site-header__logo-wrapper g4'>
                <span className='site-header__logo'><Logo /></span>
                <Link to='/'>Home</Link>
            </div>
        </header>
    );
};

export default SiteHeader;
