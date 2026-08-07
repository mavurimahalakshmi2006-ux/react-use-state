import { useState } from "react";

function Login() {
  // Form data state
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // Fixed username and password
  const [userData] = useState({
    username: "maha",
    password: "maha123",
  });

  const onChangeInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onLogin = (e) => {
    e.preventDefault();

    console.log("formData", formData);

    if (formData.username === "") {
      alert("Username is required");
    } else if (formData.password === "") {
      alert("Password is required");
    } else if (formData.username !== userData.username) {
      alert("Wrong username");
    } else if (formData.password !== userData.password) {
      alert("Wrong password");
    } else {
      alert("Login Successful!");
    }
  };

  return (
    <div>
      <h2>Login Form</h2>

      <form onSubmit={onLogin}>
        <div>
          <label>Username:</label>{" "}
          <span className="required_star">*</span>
          <br />

          <input
            type="text"
            name="username"
            onChange={onChangeInput}
          />
        </div>

        <br />

        <div>
          <label>Password:</label>{" "}
          <span className="required_star">*</span>
          <br />

          <input
            type="password"
            name="password"
            onChange={onChangeInput}
          />
        </div>

        <br />

        <span>
          <i>* fields are mandatory</i>
        </span>

        <br />
        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;