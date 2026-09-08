import React, { use, useState } from 'react';
import { Form, Link } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';


const RegisterForm = () => {

  const {createUser, setUser} = use(AuthContext)
  const [nameError, setNameError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo_url.value;
    const password = form.password.value;

    // validation
    if(name.length > 12 ){
      setNameError("Name not should be more then 12 charecter");
      return;
    }else{
      setNameError("");
    }

    // user creation
    createUser(email, password)
    .then((result)=> {
      const user = result.user;
      setUser(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    })

    // e.target.reset();
  };

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
          <Form onSubmit={handleRegister} className="card-body">
            <fieldset className="fieldset">

              {/* Name */}
              <label className="label">Name</label>
              <input name='name' type="text" className="input" placeholder="Type your name" />
              {nameError && <p className='text-red-500'>{nameError}</p>}

              {/* Email */}
              <label className="label">Email</label>
              <input name='email' type="email" className="input" placeholder="Type your email" />

              {/* Photo URL */}
              <label className="label">Photo URL</label>
              <input name='photo_url' type="text" className="input" placeholder="Paste your photo url" />

              {/* Password */}
              <label className="label">Password</label>
              <input
                name='password'
                type="password"
                className="input"
                placeholder="Password"
              />
              <button type='submit' className="btn btn-neutral mt-4">Registar Now</button>
            </fieldset>
            <div className="text-center">
              <p className="text-[16px]">
                Already have an account{" "}
                <Link to="/login" className="text-blue-600 font-semibold">
                  Login Now!
                </Link>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;