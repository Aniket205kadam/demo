import React from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello world</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis,
            delectus? Quas cupiditate sapiente harum similique laborum assumenda
            odio perspiciatis. Sed et aliquid hic earum provident possimus fugit
            consequatur sunt. Illum?
          </p>
          <span>Don't you have an account?</span>
          <button onClick={() => navigate("/register")}>
            <span>Register</span>
          </button>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>
              <span>Login</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
