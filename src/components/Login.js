import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName === "VISHALROYAL" && password === "RAJESH936") {
      setUser(true);
      setPassword("");
      setUserName("");
    } else {
      alert("please check username or password");
    }
  };

  return (
    <div className="login">
      <div className="login__container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            className="login__username"
            type="text"
            placeholder="Enter UserName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <input
            className="login__password"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login__button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
