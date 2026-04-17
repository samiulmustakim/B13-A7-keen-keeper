import React from "react";
import Navber from "./../shared/Navber";
import { Outlet } from "react-router";
import Footer from "./../shared/Footer";
import { ToastContainer } from "react-toastify";

const RootLayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#f8fafc]">
            <div className="grow ">
                <Navber></Navber>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default RootLayout;
