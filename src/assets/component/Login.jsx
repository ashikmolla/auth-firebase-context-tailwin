// import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';




const Login = () => {

  const {signIN,signINWithGoogle}= useContext(AuthContext)

    const handleLogin= event  => {
        event.preventDefault();
        const email=event.target.email.value;
        const password=event.target.password.value;
        console.log(email, password);
        signIN(email, password)
        .then(result=>{
          const loggedUser=result.user;
          // console.log(loggedUser);
          event.target.reset()
        })
        .catch(error=>{
          // console.log(error)
        })


    }
    const handleWithGoogleSigning=()=>{
      signINWithGoogle()
      .then(result=>{
        const loggedUser=result.user;
        // console.log(loggedUser);
        event.target.reset()
      })
      .catch(error=>{
        // console.log(error)
      })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left lg:flex-row-reverse">
            <h1 className="text-5xl font-bold">pleaseLogin now!</h1>
            {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}

           
          </div>
          <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">

                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span> 
                </label>
                <input type="passwore" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt text-orange-600 link link-hover">Forgot password?</a><Link className='link  text-green-600' to='/register'>Sine Up</Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div>
              <button onClick={handleWithGoogleSigning} className="btn btn-outline btn-accent">Google</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Login;