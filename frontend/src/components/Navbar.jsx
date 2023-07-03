import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-blue-200 h-16">
      <div className="font-bold text-green-500 py-3">RIG GABBAGE SOLUTION</div>
      <div className="flex items-center gap-10 mr-9 cursor-pointer underline-none">
        <div>
          <Link className="no-underline text-black" to="/about">
            About
          </Link>
        </div>
        <div>
          <Link className="no-underline text-black" to="/services">
            Services
          </Link>
        </div>
        <div>
          <Link className="no-underline text-black" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
