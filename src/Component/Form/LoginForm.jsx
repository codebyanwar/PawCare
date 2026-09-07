import React, { use } from "react";
import { Form, Link, useLocation } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const LoginForm = () => {

  const {signIn} = use(AuthContext);

  const location = useLocation();



  const handleSignIN = (e) =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <Form onSubmit={handleSignIN} className="card-body">
            <fieldset className="fieldset">
              {/* Email */}
              <label className="label">Email</label>
              <input name="email" type="email" className="input" placeholder="Email" />
              {/* Password */}
              <label className="label">Password</label>
              <input name="password" type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
            <div className="text-center">
                <p className="text-[16px]">Don't have any account <Link to='/register' className="text-blue-600 font-semibold">Registar Now!</Link></p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
