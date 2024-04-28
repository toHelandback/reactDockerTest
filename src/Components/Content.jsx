import { Fragment } from "react";
import CreateFolderModal, { showCreateFolderModal } from "./CreateFolderModal";
import UploadDataModal, { showUploadDataModal } from "./UploadDataModal";
import { useNavigate } from "react-router-dom";
export default function Content() {
  const navigate = useNavigate();
  return (
    <Fragment>
      <div className="p-4 sm:ml-64">
        <div className="p-4 h-screen rounded bg-[#3B4755]">
          <div className="flex items-bottom">
            <div className="flex w-1/2">
              {/* div htmlFor two arranged buttons*/}
              <button
                type="button"
                onClick={showUploadDataModal}
                className="space-x-2 text-gray-300 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 flex items-center justify-center"
              >
                <svg
                  className="w-3 h-3 text-gray-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13V1m0 0L1 5m4-4 4 4"
                  />
                </svg>
                <span>Upload Data</span>
              </button>
              <button
                onClick={showCreateFolderModal}
                type="button"
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
                <span>Create Folder</span>
              </button>
            </div>
            {/* end of div htmlFor two arranged buttons*/}
            <div
              className="flex justify-end items-center space-x-2 w-1/2 cursor-pointer"
              onClick={() => {
                localStorage.removeItem("logged");
                navigate("/login");
              }}
            >
              <span className="text-2xl font-bold text-gray-300">User</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                Admin
              </span>
            </div>
          </div>
          <div className="my-8">
            <form className="w-1/3">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium sr-only text-gray-300"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-300 border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  placeholder="Search Files"
                  required
                />
              </div>
            </form>
          </div>
          <span className="text-gray-300 text-2xl">All Files</span>

          <div className="relative overflow-x-auto mt-4 rounded">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td
                    scope="row"
                    className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-gray-300"
                  >
                    <i className="fa-regular fa-folder"></i> <span>Images</span>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-4 py-2">
                    <i className="fa-regular fa-image ml-10"></i>{" "}
                    <span>Image.jpg</span>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-4 py-2">
                    <i className="fa-regular fa-image ml-10"></i>{" "}
                    <span>Image.jpg</span>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-4 py-2">
                    <i className="fa-regular fa-image ml-10"></i>{" "}
                    <span>Image.jpg</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <CreateFolderModal />
      <UploadDataModal />
    </Fragment>
  );
}
