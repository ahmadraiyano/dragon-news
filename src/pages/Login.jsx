import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [error, setError] = useState('')
  const { createLogin } = use(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    createLogin(email, password)
      .then((result) => {
        const _user = result.user;
        // console.log(user);
        navigate(location.state? location.state: '/')
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-6">
        <h2 className="font-semibold text-2xl text-center">
          Login Your Account
        </h2>
        <div className="card-body">
          <form onSubmit={handleLogin} className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
              {error && <p>{error}</p>}
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </form>
          <p className="text-center font-semibold pt-4">
            Don't Have An Account?{" "}
            <Link className="text-secondary" to="/auth/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
