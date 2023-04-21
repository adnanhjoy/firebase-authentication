import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className=' bg-indigo-600 p-20'>
            <h1 className='text-white text-center text-5xl mb-10'>Signup your account</h1>
            <form className='w-1/2 mx-auto'>
                <div className='my-5 flex flex-col'>
                    <label className='text-white mb-3' htmlFor="">Enter your name</label>
                    <input className=' w-full p-2 rounded-md' type="text" name="name" id="" />
                </div>
                <div className='my-5 flex flex-col'>
                    <label className='text-white mb-3' htmlFor="">Enter your email</label>
                    <input className=' w-full p-2 rounded-md' type="text" name="email" id="" />
                </div>
                <div className=' flex flex-col'>
                    <label className='text-white mb-3' htmlFor="">Enter your password</label>
                    <input className=' w-full p-2 rounded-md' type="text" name="password" id="" />
                </div>
                <button className=' bg-violet-500 py-3 px-5 rounded-md text-white mt-5'>Signup</button>
                <p className='text-white'>Already have an account ? Please <Link className='text-black' to='/login'>Login</Link></p>
            </form>
        </div>
    );
};

export default Register;