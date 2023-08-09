import { useState } from "react";
import backgroundImage from "../assets/bg-image.jpg";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="flex justify-center items-center pt-64">
        <div className="py-2xlarge px-10 bg-white shadow-lg">
          <div className="flex justify-between mb-10">
            <div className="mt-5">
              <h5 className="font-bold">Login</h5>
              <p className="font-medium text-base mt-2">
                Login to your account
              </p>
            </div>
            <div className="ml-12">
              <div className="flex items-center justify-center w-18 h-18 border border-yellow-60 border-solid rounded-circle text-xl">
                K
              </div>
            </div>
          </div>
          <form>
            <div className="flex flex-col mb-11 md:w-96 w-96">
              <div className="form-group flex flex-col">
                <label className="form-label mb-4 text-sm font-medium">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  style={{height: "45px", backgroundColor: "transparent", border: "2px solid rgb(148 163 184)"}}
                />
              </div>
              <div className="form-group flex flex-col mt-4">
                <label className="form-label mb-4 text-sm font-medium">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  style={{height: "45px", backgroundColor: "transparent", border: "2px solid rgb(148 163 184)"}}
                />
              </div>
            </div>
            <NavLink to="/workspace" className="flex justify-center">
              <button className="text-white text-sm font-medium py-3 px-4 w-80">
                LOGIN
              </button>
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
