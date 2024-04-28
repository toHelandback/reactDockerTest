import { Fragment, useState, useEffect } from "react";
import AddUserModal, { showAddUserModal } from "./AddUserModal";
import EditUserModal, { showEditUserModal } from "./EditUserModal";

export default function AdminContent() {
  const [userToEdit, setUserToEdit] = useState({});
  const [showEditUserModal, setShowModal] = useState(false);

  const [users, setUsers] = useState([]);
  //   [
  //   {
  //     id: 1,
  //     email: "john@example.com",
  //     password: "123456",
  //     role: "admin",
  //   },
  //   {
  //     id: 2,
  //     email: "john@example.com",
  //     password: "123456",
  //     role: "user",
  //   },
  //   {
  //     id: 3,
  //     email: "john@example.com",
  //     password: "123456",
  //     role: "user",
  //   },
  // ]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://winged-pen-417014.df.r.appspot.com/user/listAll"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setUsers(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [users]);

  return (
    <Fragment>
      <div className="p-4 sm:ml-64">
        <div className="p-4 h-screen mb-4 rounded bg-[#3B4755]">
          <div className="flex items-bottom mb-8">
            <div className="flex w-1/2">
              {/* div for arranged buttons*/}

              <button
                type="button"
                onClick={showAddUserModal}
                className="space-x-2 text-gray-300 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 flex items-center justify-center"
              >
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
                <span>Add User</span>
              </button>
            </div>
            {/* end of div for two arranged buttons*/}
            <div className="flex justify-end items-center space-x-2 w-1/2">
              <span className="text-2xl font-bold text-gray-300">User</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                Admin
              </span>
            </div>
          </div>
          <span className="text-gray-300 text-2xl">Users</span>

          <div className="relative overflow-x-auto mt-2">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Username
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Users Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Role
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-300"
                    >
                      {user.username}
                    </th>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4">
                      {user.profileType.key == "A" ? "Admin" : "User"}
                    </td>
                    <td className="px-6 py-4 space-x-2">
                      <a
                        className="cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        onClick={() => {
                          setUserToEdit(user);
                          setShowModal(true);
                        }}
                      >
                        Edit
                      </a>
                      <a
                        className="cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        onClick={() => console.log("delete pressed")}
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <AddUserModal /> */}
      {showEditUserModal && (
        <EditUserModal user={userToEdit} onClose={() => setShowModal(false)} />
      )}
    </Fragment>
  );
}
