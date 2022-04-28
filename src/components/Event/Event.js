import React from 'react';
import './Event.css';
import volunteer from '../../logos/users-alt 1.png';
import addEvent from '../../logos/plus 1.png';
import { useParams } from 'react-router-dom';
import useEvent from '../../hooks/useEvent';
import axios from 'axios';
import { toast } from 'react-toastify';

const Event = () => {
    const { id } = useParams();
    const [event] = useEvent(id);

    const handleSubmit = e => {
        e.preventDefault();
        const addEvent = {
            name: event?.name,
            description: e.target.description?.value,
            img: event?.value,
            date: e.target.date?.value,
        }
        console.log(addEvent.name);

        axios.post('http://localhost:5000/event', addEvent)
            .then(response => {
                console.log(response);
            })

    }

    return (
        <section className="px-5 event-section">
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
                        <label className='d-block mb-2'>Banner Url</label>
                        <input value={event?.picture} type="url" name="img" id="" />
                    </div>
                </article>
                <button className="btn btn-primary me-2" type="submit">Submit</button>
            </form>
        </section>
    );
};

export default Event;