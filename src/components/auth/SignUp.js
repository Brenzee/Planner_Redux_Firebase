import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/actions/authActions";

function SignUp() {
  const auth = useSelector((state) => state.firebase.auth);
  const authError = useSelector((state) => state.auth.authError);
  const dispatch = useDispatch();
  const signUpFunction = (newUser) => {
    dispatch(signUp(newUser));
  };

  const [input, setInput] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signUpFunction(input);
  };

  if (auth.uid) return <Redirect to="/" />;

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" onChange={handleChange} />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
          <div className="red-text center">
            {authError ? <p>{authError}</p> : null}
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
