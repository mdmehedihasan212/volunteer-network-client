import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import useVolunteer from '../../hooks/useVolunteer';
import Volunteer from '../Volunteer/Volunteer';
import './Home.css';

const Home = () => {
    const [volunteers, setVolunteers] = useVolunteer();

    return (
        <section>
            <h1 className='text-center mt-5 text-uppercase'>I grow by helping people in need</h1>
            <InputGroup className="input mb-3 mx-auto">
                <FormControl
                    placeholder="Search..."
                />
                <InputGroup.Text className='btn btn-primary'>Search</InputGroup.Text>
            </InputGroup>
            <div className='card-body'>
                {
                    volunteers.map(volunteer => <Volunteer
                        key={volunteer._id}
                        volunteer={volunteer}
                    ></Volunteer>)
                }
            </div>

        </section>
    );
};

export default Home;