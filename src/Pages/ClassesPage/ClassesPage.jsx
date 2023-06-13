import { useContext } from "react";
import useClasses from "../../hooks/useClasses";
import { AuthContext } from "../../Providers/AuthProviders";

const ClassesPage = () => {
  const [classes] = useClasses();
  const {user} = useContext(AuthContext)
  console.log(classes)
  return (
    <div>
      <div>
        <h2 className="text-center font-bold text-4xl py-5">All Classes</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>
                  #
                </th>
                <th>Class Name</th>
                <th>Instructor Name</th>
                <th>Price</th>
                <th>Available Seat</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {classes.map((classItem, index) => (
                <tr key={classItem._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src="/tailwind-css-component-profile-2@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{classItem.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {classItem.instructor_name}
                    <br />
                  </td>
                  <td>${classItem.price}</td>
                  <td>${classItem.available_seats}</td>
                  <th>
                    <button className="btn btn-xs">Select Class</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClassesPage;
