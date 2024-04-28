import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function SignUpCard() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Username: "",
    Password: "",
    Email: "",
    ProfileType: "U",
    CreatedBy: 1,
  });
  function handleFormChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  async function handleSignUp(e) {
    e.preventDefault();
    console.log("form submitted with data: ", formData);

    // sign up api integeration

    try {
      const response = await fetch(
        "https://winged-pen-417014.df.r.appspot.com/user/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to sign up");
      }

      // Handle successful sign-up, such as displaying a success message or redirecting the user
      console.log("Sign-up successful");
      navigate("/");
    } catch (error) {
      console.error("Error signing up:", error.message);
    }

    setFormData({
      FirstName: "",
      LastName: "",
      Username: "",
      Password: "",
      Email: "",
      ProfileType: "",
      CreatedBy: "",
    });
  }
  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form className="space-y-6" action="#" onSubmit={handleSignUp}>
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
          Sign Up
        </h5>
        <div>
          {/* <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            First Name
          </label> */}
          <input
            type="text"
            name="FirstName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="first name"
            required
            value={formData.FirstName}
            onChange={handleFormChange}
          />
        </div>
        <div>
          {/* <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Last Name
          </label> */}
          <input
            type="text"
            name="LastName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="last name"
            required
            value={formData.LastName}
            onChange={handleFormChange}
          />
        </div>
        <div>
          {/* <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Username
          </label> */}
          <input
            type="text"
            name="Username"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="username"
            required
            value={formData.Username}
            onChange={handleFormChange}
          />
        </div>
        <div>
          {/* <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Email
          </label> */}
          <input
            type="email"
            name="Email"
            placeholder="sample@sample.com"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
            value={formData.Email}
            onChange={handleFormChange}
          />
        </div>
        <div>
          {/* <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Password
          </label> */}
          <input
            type="password"
            name="Password"
            placeholder="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
            value={formData.Password}
            onChange={handleFormChange}
          />
        </div>

        <button
          type="submit"
          className="w-full text-white  focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Sign Up
        </button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Already registered?{" "}
          <Link to="/login" className=" hover:underline dark:text-gray-300">
            Log In
          </Link>
        </div>
      </form>
    </div>
  );
}
