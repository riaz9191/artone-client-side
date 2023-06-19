import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const AllUsers = () => {
  const { user } = useAuth();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch(
      "http://localhost:5000/users"
    );

    return res.json();
  });
  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDeleteAdmin = (user) => {
    fetch(`http://localhost:5000/users/${user._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} Deleted from Super Power`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  //instrructor
  const handleMakeInstructor = (user) => {
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Instructor Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
 
  return (
    <div className="w-full">
      <Helmet>
        <title>All Users | ArtOne</title>
      </Helmet>
      <h3 className="text-4xl text-center py-5 font-semibold my-4">
        Total Users: {users.length}
      </h3>
      <div className="overflow-x-auto ">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th className="text-center">Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="flex flex-col">
                  {user.role === "admin" ? (
                    <button className="btn mt-2" disabled>
                      Admin
                    </button>
                  ) : (
                    <div className="btn-group btn-group-vertical">
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn"
                      >
                        Make Admin
                      </button>
                      {/* <button className="btn mt-2">Make Instructor</button> */}
                      {/* <button className="btn">Button</button> */}
                    </div>
                  )}
                  {user.role === "instructor" ? (
                    <button disabled className="btn mt-2" >
                      Instructor
                    </button>
                  ) : (
                    <div className="btn-group btn-group-vertical mt-2">
                      <button
                        onClick={() => handleMakeInstructor(user)}
                        className="btn"
                      >
                        Make Instructor
                      </button>
                      {/* <button className="btn mt-2">Make Instructor</button> */}
                      {/* <button className="btn">Button</button> */}
                    </div>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteAdmin(user)}
                    className="btn btn-ghost bg-red-600  text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
