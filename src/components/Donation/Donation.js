import React from 'react';
import { useParams } from 'react-router-dom';
import useDonation from '../../hooks/useDonation';

const Donation = () => {
    const { id } = useParams();
    const [donation] = useDonation();

    return (
        <div>
            <h1>Donation: {donation.length}</h1>
        </div>
    );
};

export default Donation;