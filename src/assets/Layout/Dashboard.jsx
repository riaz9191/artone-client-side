import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaBook, FaBookmark, FaBuffer, FaHome,  FaUsers, FaWallet } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const { user } = useAuth();
  const [cart] = useCart();
  //todo: admin
  // const isAdmin = true;
  const [isAdmin] = useAdmin();
  const isStudent = false;
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center ">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-72 h-auto bg-[#0E1117] text-white">
          {/* Sidebar content here */}
          <div className="flex  justify-center mt-5">
            <img
              src={user?.photoURL}
              className="rounded-full h-40 w-40 text-center "
              alt=""
            />
          </div>
          <div className="text-center mt-4 mb-10 font-bold">
            <p>{user?.displayName}</p>
          </div>
          {isAdmin && <><li>
            <NavLink to="/">
              <FaHome />
              Admin Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/">
              <FaBook />
              Manage Classes{" "}
              
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/allusers">
              <FaUsers />
             Manage Users
            </NavLink>
          </li>
         </>  }
          {isStudent && <><li>
            <NavLink to="/">
              <FaHome />
              Student Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/mycart">
              <FaBookmark />
              Selected Classes{" "}
              <span className="badge inl badge-secondary">
                +{cart?.length || 0}
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/">
              <FaBook />
              Enrolled Classes
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/">
              <FaWallet />
              Payment History
            </NavLink>
          </li></>}

          <div className="divider "></div>
          <li>
            <NavLink to="/">
              <FaBuffer></FaBuffer> Home
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/classes">Classes</NavLink>
          </li>
          <li>
            <NavLink to="/instructor">Instructor</NavLink>
          </li>
          <li>
            <img
              className="absolute top-[-110px] right-[-46px] h-32 opacity-60"
              src="https://i.ibb.co/RjkNb0D/v983-052-removebg-preview.png"
              alt=""
            />
            <img
              className="absolute h-32 mx-1 opacity-60 top-[-90px] right-[-20px]"
              src="https://i.ibb.co/RjkNb0D/v983-052-removebg-preview.png"
              alt=""
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
