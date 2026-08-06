import { useState } from "react";

function Maha() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const submit = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const popup =()=> {
    // Success
    alert("Login Successful!");
  };

  return (
    <form onSubmit={popup}>
      <div>
        <label>Username:</label>
        <br />
        <input
          type="text"
          name="username"
          onChange={submit}
        />
      </div>

      <br />

      <div>
        <label>Password:</label>
        <br />
        <input
          type="password"
          name="password"
          onChange={submit}
        />
      </div>

      <br />

      <div>
        <label>Confirm Password:</label>
        <br />
        <input
          type="password"
          name="confirmPassword"
          onChange={submit}
        />
      </div>

      <br />

      <button type="submit">Login</button>
    </form>
  );
}

export default Maha;