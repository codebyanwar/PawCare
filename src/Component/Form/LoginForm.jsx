import React, { use, useState } from "react";
import { Form, Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const LoginForm = () => {

  const {signIn} = use(AuthContext);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();



  const handleSignIN = (e) =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
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
              <input
                required
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              {/* Password */}
              <div className="relative">
                <label className="label">Password</label>
                <input
                  required
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="input"
                  placeholder="Password"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="btn btn-xs absolute top-6.5 right-6.5"
                >
                  Eye
                </button>
              </div>

              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>

              {error && <p className="text-red-600">{error}</p>}

              <button type="submit" className="btn btn-neutral mt-4">Login</button>
            </fieldset>
            <div className="text-center">
              <p className="text-[16px]">
                Don't have any account{" "}
                <Link to="/register" className="text-blue-600 font-semibold">
                  Regisiter Now!
                </Link>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
