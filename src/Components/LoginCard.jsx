import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function LoginCard() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn == "logged") {
      navigate("/");
      return () => {};
    } else return () => {};
  }, [isLoggedIn]);
  useEffect(() => console.log(response), [response]);

  async function Login(e) {
    e.preventDefault();
    console.log("login is called");
    try {
      const response = await fetch(
        "https://winged-pen-417014.df.r.appspot.com/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Username: username,
            Password: password,
          }),
        }
      );

      setResponse(response);

      if (!response.ok) {
        throw new Error("Failed to log in");
      }

      // If login is successful, you can redirect the user to another page or perform other actions
      console.log("Login successful");
      localStorage.setItem("logged", JSON.stringify("logged"));
      setIsLoggedIn("logged");
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  }

  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form onSubmit={(e) => Login(e)} className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
          Log In
        </h5>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full text-white  focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Login
        </button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered?{" "}
          <Link to="/signup" className=" hover:underline dark:text-gray-300">
            Create account
          </Link>
        </div>
      </form>
    </div>
  );
}
