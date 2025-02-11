import React from "react";
import "./Register.scss";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Hello world</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis,
            delectus? Quas cupiditate sapiente harum similique laborum assumenda
            odio perspiciatis. Sed et aliquid hic earum provident possimus fugit
            consequatur sunt. Illum?
          </p>
          <span>Do you have an account?</span>
          <button onClick={() => navigate("/login")}>Login</button>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Name" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
