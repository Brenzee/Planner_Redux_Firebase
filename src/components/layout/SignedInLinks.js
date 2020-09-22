import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import { firestoreConnect } from "react-redux-firebase";

function SignedInLinks({ profile }) {
  const dispatch = useDispatch();
  const signOutFunction = () => dispatch(signOut());

  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        <NavLink to="/" onClick={signOutFunction}>
          Log Out
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          {profile.initials}
        </NavLink>
      </li>
    </ul>
  );
}

export default firestoreConnect([{ collection: "users" }])(SignedInLinks);
