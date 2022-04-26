import React from 'react';
import useVolunteer from '../../hooks/useVolunteer';

const Home = () => {
    const [volunteers, setVolunteers] = useVolunteer();
    return (
        <div>
            <h1>Home: {volunteers.length}</h1>
        </div>
    );
};

export default Home;