import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Header = () => {


  const {user, logOut} = useContext(AuthContext)


  const handleLogOut = () =>{
    logOut()
    .then()
    .catch((error)=>{
      toast.error(error.message)
    })
  }


  const links = (
    <>
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            background: isActive ? "green" : "",
            color: isActive ? "black" : "black",
          })}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/list/read"
          style={({ isActive }) => ({
            background: isActive ? "green" : "",
            color: isActive ? "black" : "black",
          })}
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pages"
          style={({ isActive }) => ({
            background: isActive ? "green" : "",
            color: isActive ? "black" : "black",
          })}
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 mt-9 sm:w-full">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <NavLink to='/'><span className="lg:text-3xl font-extrabold">Book Review</span></NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        {!user? <><NavLink to={'/register'}><button className="btn bg-green-400 sm:btn-sm">Sign Up</button></NavLink>
        <NavLink to={'/login'}><button className="btn bg-blue-400">Sign In</button></NavLink></>: <button onClick={handleLogOut} className="btn btn-accent">Sign Out</button>}
        
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Header;
