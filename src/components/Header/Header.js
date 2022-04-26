import React from 'react';
import './Header.css';
import logo from '../../logos/Group 1329.png';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <section className='header'>
            <div className='header-logo'>
                <img src={logo} alt="" />
            </div>
            <nav className='navigation'>
                <CustomLink to={'/'}>Home</CustomLink>
                <CustomLink to={'/about'}>About</CustomLink>
            </nav>
        </section>
    );
};

export default Header;