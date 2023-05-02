import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Header = () => {
    const {user, logOut}=useContext(AuthContext)
    const handleLogOut=()=>{
        logOut()
        .then(()=>{ })
        .catch(error=>console.log(error))
    }



    return (
        <nav>


            <div className="navbar bg-base-300 justify-between"> 
            <div>
                <a className="btn btn-ghost normal-case text-xl">Auth Devolaper</a>
            </div>
            <div className='me-10'>
            <Link to='/' className='btn  ml-2'>Home</Link>
                <Link to='/' className='btn  ml-2'>About </Link>
                <Link to='/' className='btn  ml-2'>Contact</Link>
            {user && <Link to='orders' className='btn  ml-2'>Orders</Link>}
            { user && <Link to='userprofile' className='btn  ml-2'>Profile</Link>}
           
                <Link to='/register' className='btn  ml-2'>Register</Link>
                <Link to='/login' className='btn  ml-2'>Login</Link>
            </div>
            <div className='me-10'>
                {
                    user?<spn>{user.email} <button onClick={handleLogOut} className='btn '>Sign Out</button></spn>

                    :<Link to='/login' className='btn  ml-2'>Login</Link>
                }
            </div>

                
            </div>
        </nav>
    );
};

export default Header;