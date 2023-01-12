import React from "react";

const Login = () => {
  return (
    <>
      <div className="login">
        <div className="login-h2">
          <h2 className="title-login">Se connecter</h2>
        </div>
        <form className="form-login">
          <div>
            <label htmlFor="numero" className="label-control">
              Numero
            </label>
            <input
              className="form-control"
              type="numero"
              id="numero"
              placeholder="Numero :"
            />
          </div>
          <div>
            <label htmlFor="password" className="label-control">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <div>
            <button className="btn btn-login"><i className="fa-solid fa-right-to-bracket"></i>Login</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
