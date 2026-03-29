import React from 'react';
import { Link, NavLink } from 'react-router';
import user from "../assets/user.png"

const Navbar = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-between items-center'>
            <div className='lg:w-1/4'></div>
            <div className='flex gap-4 w-2/4 justify-center'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className='flex gap-4 my-4 lg:w-1/4 lg:justify-end'>
                <img src={user} alt="User" />
                <Link to='/auth/login' className='btn btn-primary px-8'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;