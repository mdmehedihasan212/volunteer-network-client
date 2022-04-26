import React from 'react';
import './Event.css';
import volunteer from '../../logos/users-alt 1.png';
import addEvent from '../../logos/plus 1.png';

const Event = () => {
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
                <article>
                    <article className='d-flex justify-content-around mt-5'>
                        <div>
                            <label className='d-block mb-2'>Event title</label>
                            <input className='input-field mb-3' type="text" placeholder='Event title...' />
                            <br />
                            <label htmlFor="" className='mb-2'>Description</label>
                            <textarea className='d-block text-field' name="" id="" placeholder='Enter description...'></textarea>
                        </div>
                        <div>
                            <label className='d-block mb-2'>Event Date</label>
                            <input className='input-field mb-3' type="date" name="" id="" />
                            <br />
                            <label className='d-block mb-2'>Banner</label>
                            <input type="url" name="" id="" />
                        </div>
                    </article>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button class="btn btn-primary me-2" type="button">Submit</button>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Event;