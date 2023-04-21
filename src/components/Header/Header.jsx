import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <ul className='md:flex bg-black text-white p-5 justify-end items-center'>
                <li className='mr-5'><Link to='/'>Home</Link></li>
                <li className='mr-5'><Link to=''>About</Link></li>
                <li className='mr-5'><Link to=''>Blog</Link></li>
                <li className='mr-5 bg-indigo-800 py-2 px-3 rounded-md'><Link to='/login'>Login</Link></li>
            </ul>
        </nav>
    );
};

export default Header;