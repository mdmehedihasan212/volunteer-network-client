import React from 'react';
import { Link } from 'react-router-dom';
import './Volunteer.css';

const Volunteer = ({ volunteer }) => {
    const { name, picture } = volunteer;

    return (
        <section className='card'>
            <img src={picture} alt="" />
            <Link className='add-btn btn btn-primary' to={'/event'}>Add Volunteer</Link>
        </section>
    );
};

export default Volunteer;