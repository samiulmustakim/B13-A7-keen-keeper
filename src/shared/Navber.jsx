import React from "react";
import { BiStats } from "react-icons/bi";
import { GoHome } from "react-icons/go";
import { IoMdTime } from "react-icons/io";
import { NavLink } from "react-router";

const Navber = () => {
    const navItem = (
        <ul className="flex items-center gap-8">
            <li>
                <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                        `flex items-center gap-1 font-medium text-gray-500 ${isActive ? "bg-[#244d3f] p-2 text-white px-3 rounded-sm" : ""}`
                    }
                >
                    <GoHome />
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={"/timeline"}
                    className={({ isActive }) =>
                        `flex items-center gap-1 font-medium text-gray-500 ${isActive ? "bg-[#244d3f] p-2 text-white px-3 rounded-sm" : ""}`
                    }
                >
                    <IoMdTime />
                    Timeline
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={"/stats"}
                    className={({ isActive }) =>
                        `flex items-center gap-1 font-medium text-gray-500 ${isActive ? "bg-[#244d3f] p-2 text-white px-3 rounded-sm" : ""}`
                    }
                >
                    <BiStats />
                    Stats
                </NavLink>
            </li>
        </ul>
    );
    return (
        <div className="shadow-sm bg-base-100 static">
            <div className="navbar w-11/12 mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {" "}
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />{" "}
                            </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 shadow"
                        >
                            {navItem}
                        </ul>
                    </div>
                    <h1 className="font-bold text-2xl">
                        Keen
                        <span className="font-semibold text-[#244d3f]">
                            Keeper
                        </span>
                    </h1>
                </div>
                <div className="navbar-end hidden lg:flex">{navItem}</div>
            </div>
        </div>
    );
};

export default Navber;
