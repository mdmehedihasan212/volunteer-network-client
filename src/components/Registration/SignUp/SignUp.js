import React from 'react';
import './SignUp.css';

const SignUp = () => {
    return (
        <section className='register-form '>
            <form className='register-text w-75 mx-auto'>
                <h1>Register as a Volunteer</h1>
                <h4>Full Name</h4>
                <p className='border-bottom w-100 mb-5'></p>
                <h4>Username or Email</h4>
                <p className='border-bottom w-100 mb-5'></p>
                <h4>Date</h4>
                <p className='border-bottom w-100 mb-5'></p>
                <h4>Description</h4>
                <p className='border-bottom w-100 mb-5'></p>
                <h4 className='mt-4 mb-5'>Organize books at the library.</h4>
                <button className='submit-btn mx-auto btn btn-primary'>Registration</button>
            </form>
        </section>
    );
};

export default SignUp;