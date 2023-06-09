import React from "react";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Instructors</a>
      </li>
      <li>
        <a>Classes</a>
      </li>
      <li>
        <a>Dashboard </a>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar fixed z-10  bg-green-600 max-w-screen-xl text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black bg-opacity-30 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">ArtOne</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
