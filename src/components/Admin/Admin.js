import React from 'react';
import volunteer from '../../logos/users-alt 1.png';
import addEvent from '../../logos/plus 1.png';
import { Table } from 'react-bootstrap';
import trash from '../../logos/delete.ico';

const Admin = () => {
    return (
        <section className='px-5'>
            <div className="event-section">
                <article className='event-text'>
                    <p className='add-event'>
                        <img src={volunteer} alt="img" />
                        Volunteer register list</p>
                    <p>
                        <img src={addEvent} alt="img" />
                        Add event</p>
                </article>
                <article className='mt-5 w-100 mx-auto'>
                    <Table borderless>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email id</th>
                                <th>Registering date</th>
                                <th>Volunteer list</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Md Mehedi Hasan</td>
                                <td>mdmehedihasan384@gmail.com</td>
                                <td>27/4/2022</td>
                                <td>Organize books at the library.</td>
                                <td>
                                    <img src={trash} alt="" />
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </article>
            </div>
        </section>
    );
};

export default Admin;