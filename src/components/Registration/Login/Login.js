import React from 'react';
import './Login.css';
import { FcGoogle } from 'react-icons/fc';


const Login = () => {
    return (
        <section className='form-container'>
            <form className='main-form'>
                <h1 className='text-center'>Login</h1>
                <button className='register-btn'>
                    <FcGoogle className='icon ms-1' />
                    Continue With Google
                </button>
            </form>
        </section>
    );
};

export default Login;