import React from 'react';
import './Volunteer.css';

const Volunteer = ({ volunteer }) => {
    const { name, picture } = volunteer;
    console.log(volunteer);
    return (
        <section className='card'>
            <img src={picture} alt="" />
        </section>
    );
};

export default Volunteer;