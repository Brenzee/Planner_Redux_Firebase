import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createProject } from "../../store/actions/projectAction";
import { Redirect } from "react-router-dom";

function CreateProject(props) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.firebase.auth);

  const [input, setInput] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProject(input));
    props.history.push("/");
  };

  if (!auth.uid) return <Redirect to="/signin" />;

  return (
    <div className="container">
      <form onSubmit={(e) => handleSubmit(e)} className="white">
        <h5 className="grey-text text-darken-3">Create Project</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="content">Project Content</label>
          <textarea
            id="content"
            className="materialize-textarea"
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Create</button>
        </div>
      </form>
    </div>
  );
}

export default CreateProject;
