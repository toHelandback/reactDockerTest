import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import NoPath from "./Pages/NoPath";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  useEffect(() => {
    const logged = localStorage.getItem("logged");
    if (logged) setIsLoggedIn(logged);
    else setIsLoggedIn(null);
  }, [isLoggedIn]);
  {
    console.log(isLoggedIn);
  }
  return (
    <div className="bg-[#3B4755]">
      <BrowserRouter>
        <Routes>
          {/* {isLoggedIn === "logged" ? (
            <> */}
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          {/* </>
          ) : (
            <> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* </>
          )} */}

          <Route path="*" element={<NoPath />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
