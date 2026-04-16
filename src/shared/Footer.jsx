import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
    return (
        <footer className="bg-[#244d3f] text-white py-8 text-center">
            <div className="container mx-auto px-4">
                <h1 className="font-bold pt-7 text-6xl">
                        Keen
                        <span className="font-semibold">
                            Keeper
                        </span>
                    </h1>
                <p className="text-md my-6 ">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                <p className="text-xl pb-4">Social Links</p>

                <div className="flex justify-center gap-6 mb-6">
                    <a href="#" className="w-12 h-12 bg-white rounded-full flex justify-center items-center">
                        <AiFillInstagram className="text-black text-2xl"/>
                    </a>
                    <a href="#" className="w-12 h-12 bg-white rounded-full flex justify-center items-center">
                       <FaFacebookSquare className="text-black text-2xl"/>
                    </a>
                    <a href="#" className="w-12 h-12 bg-white rounded-full flex justify-center items-center">
                        <RiTwitterXFill className="text-black text-2xl"/>
                    </a>
                </div>

                <hr className="border-gray-500 pb-6"/>

                <div className="flex items-center justify-between">
                    <p className="text-sm ">
                        © 2026 KeenKeeper. All rights reserved.
                    </p>
                    <div className="">
                        <a href="#" className="mx-4 text-sm">
                            Privacy Policy
                        </a>
                        <a href="#" className="mx-4 text-sm">
                            Terms of Service
                        </a>
                        <a href="#" className="mx-4 text-sm">
                            Cookies
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
