import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Volunteer.css';

const Volunteer = ({ volunteer }) => {
    const { _id, name, picture } = volunteer;

    const navigate = useNavigate();

    const selectedItem = id => {
        navigate(`/event/${id}`)
    }

    return (
        <section className='card'>
            <img src={picture} alt="" />
            <button onClick={() => selectedItem(_id)} className='add-btn btn btn-primary'>{name}</button>
        </section>
    );
};

export default Volunteer;