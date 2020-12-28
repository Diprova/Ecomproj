import React, { useState } from "react";
import Rest from "../Utility/restapi";
import { useHistory } from "react-router-dom";

const Configuration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  let history = useHistory();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(formData);
    if (password !== password2) {
      alert("Your password does not match");
    } else {
      let value = await Rest.post("/api/users", { name, email, password });

      if (value.status >= 200 && value.status <= 300) {
        history.push("/login");
      } else {
        let resError = value.data.errors;
        let errors = resError.map((e) => {
          return e.msg;
        });
        alert(errors.toString());
      }
    }
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="form-container">
      <form className="form" onSubmit={(e) => submitHandler(e)}>
        <h5>Sign Up</h5>
        <div>
          <p>Name:</p>
          <input
            type="text"
            value={name}
            name="name"
            onChange={(e) => onChange(e)}
          />
        </div>
        <div>
          <p>Email:</p>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div>
          <p>Password:</p>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div>
          <p>Confirm Password:</p>
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={(e) => onChange(e)}
          />
        </div>
        <button type="submit">Submit</button>
        <span>
          Already a user?
          <span className="login-butn" onClick={() => history.push("/login")}>
            Login
          </span>
        </span>
      </form>
    </div>
  );
};

export default Configuration;
