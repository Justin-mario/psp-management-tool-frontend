import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerAdmin } from "../redux/admin/adminActions";
import { useDispatch, useSelector } from "react-redux";
import { Toaster, toast } from "react-hot-toast";

const HomePage = () => {
  const [companyName, setCompanyName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { loading, adminInfo } = useSelector((state) => state.admin);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("You clicked on the submit button")
    if (!companyName && !username && !email && !password) {
      toast.error("Please fill all fields correctly");
    } else {
      let user = { username, email, password, companyName };
      dispatch(registerAdmin(user));
    }
  };

  useEffect(() => {
    console.log("Admin Info:", adminInfo);

    if (adminInfo && typeof adminInfo === "object") {
      if (
        adminInfo === "Something went wrong" ||
        adminInfo === "Invalid username or password"
      ) {
        console.log("Error: Something went wrong. Redirecting to home.");
        navigate("/");
        return;
      }
      if (adminInfo && adminInfo.username) {
        console.log(
          "Success: Admin Info has a username. Redirecting to dashboard."
        );
        toast.success("You have registered successfully");
        navigate("/dashboard");
      }
    } else {
      console.error("Admin Info is not a valid object:", adminInfo);
    }
  }, [adminInfo, navigate]);

  return (
    <div className="w-[50%] md:mx-auto pt-[10rem] px-4 md:px-0">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <div className="lg:mb-10 mb-6">
            <label htmlFor="name" className="font-lexend mr-6">
              Company Name:
            </label>
            <input
              type="text"
              className="p-1 flex w-full rounded-md text-black border border-deepgreen"
              name="companyName"
              // value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
          <div className="lg:mb-10 mb-6">
            <label htmlFor="name" className="font-lexend mr-6">
              Username:
            </label>
            <input
              type="text"
              className="p-1 flex w-full rounded-md text-black border border-deepgreen"
              name="username"
              // value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="lg:mb-10 mb-6">
            <label htmlFor="name" className="font-lexend mr-6">
              Email:
            </label>
            <input
              type="email"
              className="p-1 flex w-full rounded-md text-black border border-deepgreen"
              name="email"
              // value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="lg:mb-10 mb-6">
            <label htmlFor="name" className="font-lexend mr-6">
              Password:
            </label>
            <input
              type="password"
              className="p-1 flex w-full rounded-md text-black border border-deepgreen"
              name="password"
              // value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {loading && loading ? (
            <p className="italic mt-0">loading.....</p>
          ) : null}
          <div className="lg:mb-10 mb-6 flex items-center justify-start">
            <button className="bg-gray-600 font-bold flex items-center justify-center px-10 py-3 text-white hover:bg-black">
              Register
            </button>
          </div>
        </div>
      </form>
      <div className="flex flex-row justify-between">
        <p className="text-xl">
            Already have an account?{" "}
            <Link
            to={"/signin"}
            className="text-blue-500 hover:text-red-600 duration-300"
            >
            Sign In
            </Link>
        </p>
        <p className='text-xl'>Are you a developer? Sign in <Link to={"/developer-signin"} className='text-blue-500 hover:text-red-600 duration-300'>here</Link></p>
      </div>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#000",
            color: "#fff",
          },
        }}
      />
    </div>
  );
};

export default HomePage;
