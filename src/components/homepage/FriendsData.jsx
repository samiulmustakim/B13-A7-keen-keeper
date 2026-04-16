import React from "react";
import { Link } from "react-router";

const FriendsData = ({ data }) => {
    const statusColor = {
        overdue: "bg-red-500",
       "almost due": "bg-[#efad44]",
        "on-track": "bg-[#244d3f]"

    }
    return (
        <Link to={`/friend/${data.id}`} className=" bg-white flex flex-col justify-center items-center text-center space-y-2 py-7 rounded-xl shadow-md">
            <img src={data.picture} className="rounded-full w-25" alt="" />
            <p className="text-2xl font-semibold">{data.name}</p>
            <div className="space-y-6">
                <p>{data.days_since_contact}d ago</p>
                <h1 className="space-x-3 flex sm:flex-row md:flex-col lg:flex-row gap-3">
                    {data.tags.map((tag) => (
                        <span className="bg-[#cbfadb] uppercase font-semibold px-3 p-2 rounded-full">
                            {tag}
                        </span>
                    ))}
                </h1>
                <span className={`capitalize text-white p-2 px-3 font-semibold rounded-full ${statusColor[data.status] ||" bg-gray-200"}`}>{data.status}</span>
            </div>
        </Link>
    );
};

export default FriendsData;
