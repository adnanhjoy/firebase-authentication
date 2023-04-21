import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../firebase/firebase.init';

const auth = getAuth(app)

const Register = () => {
    const [errorMessage, setErrorMessage] = useState('')
    const [success, setSuccess] = useState(false)

    const signupFormHandler = (event) => {
        event.preventDefault()
        setSuccess(false)
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        if (!/(?=.*[A-Z])/.test(password)) {
            setErrorMessage('Must be used uppercase letter')
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                result.user;
                userUpdateName(name)
                setSuccess(true)
                form.reset()
                emailVerrification()
            })
            .then(error => console.error(error))

    }

    const userUpdateName = name => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
        .then(() => {})
        .catch(error => console.error(error))
    }

    const emailVerrification = () => {
        sendEmailVerification(auth.currentUser)
        .then(() => {
            alert('Please verify your email address')
        })
    }

    return (
        <div className=' bg-indigo-600 p-20'>
            <h1 className='text-white text-center text-5xl mb-10'>Signup your account</h1>
            <form onSubmit={signupFormHandler} className='w-1/2 mx-auto'>
                <div className='my-5 flex flex-col'>
                    <label className='text-white mb-3' htmlFor="">Enter your name</label>
                    <input className=' w-full p-2 rounded-md' type="text" name="name" id="" required />
                </div>
                <div className='my-5 flex flex-col'>
                    <label className='text-white mb-3' htmlFor="">Enter your email</label>
                    <input className=' w-full p-2 rounded-md' type="email" name="email" id="" required />
                </div>
                <div className=' flex flex-col'>
                    <label className='text-white mb-3' htmlFor="">Enter your password</label>
                    <input className=' w-full p-2 rounded-md' type="password" name="password" id="" required />
                </div>
                {success && <p className=' text-green-400'>Signup successfully</p>}
                <p className='text-white'>{errorMessage}</p>
                <button className=' bg-violet-500 py-3 px-5 rounded-md text-white mt-5 hover:bg-black'>Signup</button>
                <p className='text-white'>Already have an account ? Please <Link className='text-black' to='/login'>Login</Link></p>
            </form>
        </div>
    );
};

export default Register;