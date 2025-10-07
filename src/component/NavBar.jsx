import React from "react";
import { Link, NavLink } from "react-router";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>isActive ? "underline text-purple-600" : "hover:underline" }
              >
                Home
              </NavLink>

              <NavLink
                to="/apps"
                className={({ isActive }) =>
                  isActive ? "underline text-purple-600" : "hover:underline"
                }
              >
                Apps
              </NavLink>

              <NavLink
                to="/installation"
                className={({ isActive }) =>
                  isActive ? "underline text-purple-600" : "hover:underline"
                }
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl ">
          <img className="w-10 h-10 " src="../assets/logo.png" alt="" />
          <span
            className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text 
            text-transparent
            "
          >
            PhStore
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "underline text-purple-600" : "hover:underline"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/apps"
              className={({ isActive }) =>
                isActive ? "underline text-purple-600" : "hover:underline"
              }
            >
              Apps
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/installation"
              className={({ isActive }) =>
                isActive ? "underline text-purple-600" : "hover:underline"
              }
            >
              Installation
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
          <img src="../assets/Vector.png" alt="" />
          Contribute
        </a>
      </div>
    </div>
  );
};

export default NavBar;
