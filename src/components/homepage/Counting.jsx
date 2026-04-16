import React from "react";
import usePeople from "../../hooks/usePeople";
import FriendsData from "./FriendsData";
import { PacmanLoader } from "react-spinners";

const Counting = () => {
    const { friendsData, loading } = usePeople();

    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-7 ">
                <div className="text-center bg-white shadow sm py-7 h-32">
                    <p className="text-3xl text-[#244d3f] font-bold">{friendsData.length}</p>
                    <h3 className="text-gray-500 ">Total Friends</h3>
                </div>
                <div className="text-center bg-white shadow sm py-7 h-32">
                    <p className="text-3xl text-[#244d3f] font-bold">3</p>
                    <h3 className="text-gray-500 ">On Track</h3>
                </div>
                <div className="text-center bg-white shadow sm py-7 h-32">
                    <p className="text-3xl text-[#244d3f] font-bold">6</p>
                    <h3 className="text-gray-500 ">Need Attention</h3>
                </div>
                <div className="text-center bg-white shadow sm py-7 h-32">
                    <p className="text-3xl text-[#244d3f] font-bold">12</p>
                    <h3 className="text-gray-500 ">Interactions This Month</h3>
                </div>
            </div>
            <hr className="border-gray-200 mt-9" />

            <h1 className="font-bold text-2xl text-[#244d3f] pt-9">
                Your Friends
            </h1>

            {loading ? (
                <div className="flex justify-center items-center h-100">
                     <PacmanLoader color="#244d3f" />
               </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-4 pb-22">
                    {friendsData.map((data) => (
                        <FriendsData data={data}></FriendsData>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Counting;
