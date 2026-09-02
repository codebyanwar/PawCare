import React from 'react';
import { Link } from 'react-router';

const RegisterForm = () => {
    return (
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                {/* Name */}
                <label className="label">Name</label>
                <input type="text" className="input" placeholder="Type your name" />
                {/* Email */}
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Type your email" />
                {/* Photo URL */}
                <label className="label">Photo URL</label>
                <input type="text" className="input" placeholder="Paste your photo url" />
                {/* Password */}
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <button className="btn btn-neutral mt-4">Registar Now</button>
              </fieldset>
              <div className="text-center">
                <p className="text-[16px]">
                  Already have an account{" "}
                  <Link to="/login" className="text-blue-600 font-semibold">
                    Login Now!
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default RegisterForm;