import React, { useState } from "react";
import Rest from "../Utility/restapi";
import {useHistory} from "react-router-dom";

const Login = ({context}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  let history=useHistory();

  const { email, password } = formData;

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(formData);
    context.login(email,password);
    }
  

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="login-formContainer">
      <form className="form" onSubmit={(e) => submitHandler(e)}>
        <h5>Login</h5>

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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
