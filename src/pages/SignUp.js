
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// auth context
import { UserAuth } from "../contexts/AuthContext";
import SocialMedia from "../components/SocialMedia";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = UserAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/home");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  return (
    <>
      <div>
        <div className="w-full h-screen  bg-slate-600 in">
          <div className="fixed w-full px-4 py-14 z-50 ">
            <div className="max-w-[450px] h-[600px] mx-auto bg-black/100 text-white rounded-md shadow-xl">
              <div className="max-w-[320px] mx-auto py-16 px-2 md:px-0">
                <div className="logo-login text-center ">
                  <img
                    src="https://thumbs.dreamstime.com/b/book-logo-vector-drawing-represents-design-53875554.jpg"
                    alt="logo"
                    className="w-[90px] h-[50px] mx-auto rounded-xl"
                  />
                </div>
                <h1 className="text-3xl font-bold">Sign Up</h1>
                {error ? <small className="text-orange-500">{error}</small> : null}
                <form
                  onSubmit={handleSubmit}
                  className="w-full flex flex-col py-4"
                >
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-3 my-2 bg-gray-700 rounded"
                    type="email"
                    placeholder="Email"
                    autoComplete="email"
                    required
                  />
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-3 my-2 bg-gray-700 rounded"
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-red-600 py-3 my-6 rounded font-semibold hover:bg-slate-600 transition-all duration-300"
                  >
                    Sign Up
                  </button>
                  <div className=" flex justify-between items-center font-medium mb-3 text-green-400">
                    <p className="mr-2">
                      {" "}
                      <input type="checkbox" /> Remember me ?
                    </p>
                    <p>Need Help ?</p>
                  </div>
                  <p>
                    <span className="text-pink-500">
                      Already have an account ?
                    </span>
                    <Link to="/signin"> Sign In</Link>{" "}
                  </p>
                </form>
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;