import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>


            <div className="navbar bg-base-300 justify-between"> 
            <div>
                <a className="btn btn-ghost normal-case text-xl">Auth Devolaper</a>
            </div>
            <div className='me-10'>
            <Link to='/' className='btn  ml-2'>Home</Link>
                <Link to='/' className='btn  ml-2'>About </Link>
                <Link to='/' className='btn  ml-2'>Contact</Link>
                <Link to='/login' className='btn  ml-2'>Login</Link>
                <Link to='/register' className='btn  ml-2'>Register</Link>
            </div>

                
            </div>
        </div>
    );
};

export default Header;