import React, { useState } from 'react';
import './Event.css';
import volunteer from '../../logos/users-alt 1.png';
import addEvent from '../../logos/plus 1.png';
import { useParams } from 'react-router-dom';
import useEvent from '../../hooks/useEvent';
import axios from 'axios';

const Event = () => {
    const { id } = useParams();
    const [event] = useEvent(id);

    const handleSubmit = e => {
        e.preventDefault();
        const addEvent = {
            name: event.name,
            description: e.target.description?.value,
            img: e.target.img?.value,
            date: e.target.date?.value,
        }
        console.log(addEvent);

        axios.post('http://localhost:5000/event', addEvent)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });


    }

    return (
        <section className='px-5'>
            <div className="event-section">
                <article className='event-text'>
                    <p>
                        <img src={volunteer} alt="img" />
                        Volunteer register list</p>
                    <p className='add-event'>
                        <img src={addEvent} alt="img" />
                        Add event</p>
                </article>
                <form onSubmit={handleSubmit}>
                    <article className='d-flex justify-content-around mt-5'>
                        <div>
                            <label className='d-block mb-2'>Event title</label>
                            <input value={event?.name} className='input-field mb-3' type="text" placeholder='Event title...' readOnly />
                            <br />
                            <label htmlFor="" className='mb-2'>Description</label>
                            <textarea className='d-block text-field' name="description" id="" placeholder='Enter description...'></textarea>
                        </div>
                        <div>
                            <label className='d-block mb-2'>Event Date</label>
                            <input className='input-field mb-3' type="date" name="date" id="" />
                            <br />
                            <label className='d-block mb-2'>Banner</label>
                            <input type="url" name="img" id="" />
                        </div>
                    </article>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button className="btn btn-primary me-2" type="button">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Event;