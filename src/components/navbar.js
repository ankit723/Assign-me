import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100" id="hell">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Subject</a>
                <ul className="p-2">
                  <li>
                    <a href="">Physics</a>
                  </li>
                  <li>
                    <a href="">BEE</a>
                  </li>
                  <li>
                    <a href="">IEE</a>
                  </li>
                  <li>
                    <a href="">Mathematics</a>
                  </li>
                  <li>
                    <a href="">Computer Science</a>
                  </li>
                  <li>
                    <a href="">IME</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
            </ul>
          </div>
          <a href="" className="btn btn-ghost text-xl">AsignMe.</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <details>
                <summary>Subject</summary>
                <ul className="p-2" style={{zIndex:"50"}}>
                  <li>
                    <a href="">Physics</a>
                  </li>
                  <li>
                    <a href="">BEE</a>
                  </li>
                  <li>
                    <a href="">IEE</a>
                  </li>
                  <li>
                    <a href="">Mathematics</a>
                  </li>
                  <li>
                    <a href="">Computer Science</a>
                  </li>
                  <li>
                    <a href="">IME</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a href="" className="btn">Sign In</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
