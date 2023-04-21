import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className=' bg-indigo-600 p-20'>
            <h1 className='text-white text-center text-5xl'>Please Login</h1>
            <form className='w-1/2 mx-auto'>
                <div className='my-5 flex flex-col'>
                    <label className='text-white mb-3' htmlFor="">Enter your email</label>
                    <input className=' w-full p-2 rounded-md' type="text" name="" id="" />
                </div>
                <div className=' flex flex-col'>
                    <label className='text-white mb-3' htmlFor="">Enter your password</label>
                    <input className=' w-full p-2 rounded-md' type="text" name="" id="" />
                </div>
                <button className=' bg-violet-500 py-3 px-5 rounded-md text-white mt-5'>Login</button>

                <p className='text-white'>Don't have an account ? Please <Link className='text-black' to='/register'>Signup</Link></p>

                <div className='mt-5 flex justify-center flex-col items-center'>
                    <h1 className='bg-white w-1/3 rounded-md p-2'>Sign in with google</h1>
                    <h1 className='bg-white w-1/3 rounded-md p-2 my-2'>Sign in with faceook</h1>
                    <h1 className='bg-white w-1/3 rounded-md p-2'>Sign in with github</h1>
                </div>
            </form>
        </div>
    );
};

export default Login;