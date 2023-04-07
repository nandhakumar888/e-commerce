import React from "react";
import { Link } from "react-router-dom";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <footer className="bg-black py-6">
      <div className="container mx-auto">
        <p className="text-white text-center">
          Copyright &copy; books Shop 2023. All rights reserved
        </p>
      </div>
      <SocialMedia />
      <div className="text-center mt-10">
        <button className=" px-5 py-3 rounded-lg font-medium bg-pink-700 text-black  hover:bg-slate-600 transition duration-300">
          <Link to="/signin">Sign Out</Link>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
