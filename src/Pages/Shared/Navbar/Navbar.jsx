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
    <div className="">
      <div className="navbar bg-base-100 container">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a className="cursor-pointer normal-case text-xl flex flex-col">
            ArtOne
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <a className="">Sign In</a>
          <img height={40} width={40} src="https://w7.pngwing.com/pngs/690/196/png-transparent-logo-school-school-design-s-white-artwork-symbol.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
