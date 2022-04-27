import React from 'react';
import { useParams } from 'react-router-dom';
import useVolunteer from '../../hooks/useVolunteer';

const Donation = () => {
    const { id } = useParams();
    const [volunteers] = useVolunteer();
    return (
        <div>
            <h1>Donation: {id}</h1>
            <p></p>
        </div>
    );
};

export default Donation;