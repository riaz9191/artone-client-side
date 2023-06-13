import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };
  const navItems = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <Link to='/instructor'>Instructors</Link>
      </li>
      <li>
        <Link to='/classes'>Classes</Link>
      </li>
      <li>
        <a>Dashboard </a>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-80 bg-green-800 max-w-screen-xl text-white">
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
          {user && (
            <img
              src={user?.photoURL ? user.photoURL : 'https://img.freepik.com/free-icon/user_318-159711.jpg'}
              className="h-10 w-10 rounded-3xl mr-3"
              alt=""
            />
          )}
         
          {user ? (
            <>
              <Link onClick={handleLogout} className="pr-10">
                LogOut
              </Link>
            </>
          ) : (
            <>
              <Link to="login" className="pr-10">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
