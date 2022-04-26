import React from 'react';
import './Header.css';
import logo from '../../logos/Group 1329.png';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <header className='header'>
            <div className='header-logo'>
                <img src={logo} alt="" />
            </div>
            <nav className='navigation'>
                <CustomLink to={'/'}>Home</CustomLink>
                <CustomLink to={'/donation'}>Donation</CustomLink>
                <CustomLink to={'/event'}>Event</CustomLink>
                <CustomLink to={'/blog'}>Blog</CustomLink>
                <CustomLink to={'/about'}>About</CustomLink>
                <CustomLink className='btn btn-primary text-white rounded-2 px-4' to={'/login'}>Register</CustomLink>
                <CustomLink className='btn btn-dark text-white rounded-2 px-4' to={'/admin'}>Admin</CustomLink>
            </nav>
        </header>
    );
};

export default Header;