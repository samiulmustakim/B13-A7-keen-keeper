import { useParams } from "react-router";
import usePeople from "../../hooks/usePeople";
import { PacmanLoader } from "react-spinners";
import { FaPhoneAlt, FaRegComment, FaVideo } from "react-icons/fa";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { FiArchive } from "react-icons/fi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { PiChatCircleTextBold, PiPhoneCall } from "react-icons/pi";
import { LuVideo } from "react-icons/lu";
import { FriendContactContext } from "../../contextApi/FriendContactContext";
import { useContext } from "react";

const FriendDetails = () => {
    const { id } = useParams();
    const { friendsData, loading } = usePeople();

    const statusColor = {
        overdue: "bg-red-500",
        "almost due": "bg-[#efad44]",
        "on-track": "bg-[#244d3f]",
    };

    const expectedFriend = friendsData.find((data) => data.id === Number(id));

    if (loading) {
        return (
            <div className="flex justify-center items-center h-100">
                <PacmanLoader color="#244d3f" />
            </div>
        );
    }
    
    
    const { timeline, setTimeline } = useContext(FriendContactContext)

    const handleTimeLineCall = () => {
        setTimeline([...timeline,{...expectedFriend, type: "call"}])
    }
    const handleTimeLineMessage = () => {
        setTimeline([...timeline, {...expectedFriend, type: "message"}])
    }
    const handleTimeLineVideo = () => { 
        setTimeline([...timeline, {...expectedFriend, type: "video"}])
    }

    return (
        <div className="py-20">
            <div className="container mx-auto flex flex-col md:flex-row gap-7 px-4">
                {/* Profile Section */}
                <div className="flex flex-col rounded-lg">
                    <div className="flex bg-white shadow-md rounded-xl p-5 text-center flex-col items-center space-y-2">
                        <img
                            src={expectedFriend.picture}
                            alt="Profile"
                            className="w-20 h-20 rounded-full object-cover"
                        />

                        <h2 className="text-xl font-semibold">
                            {expectedFriend.name}
                        </h2>

                        <span
                            className={`capitalize text-sm text-white  px-2  rounded-full ${statusColor[expectedFriend.status] || " bg-gray-200"}`}
                        >
                            {expectedFriend.status}
                        </span>

                        <h1 className="flex flex-row gap-2">
                            {expectedFriend.tags.map((tag) => (
                                <span className="bg-[#cbfadb] font-medium text-sm uppercase px-3 p-1 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </h1>

                        <p className="text-md font-medium italic text-gray-600">
                            "{expectedFriend.bio}"
                        </p>
                        <p className="text-sm text-gray-500 ">
                            Preferred: {expectedFriend.email}
                        </p>
                    </div>

                    <div className="flex flex-col space-y-3 py-4">
                        <button className="p-4 cursor-pointer bg-white flex items-center justify-center shadow-md font-semibold gap-1">
                            <HiOutlineBellSnooze className="text-2xl" />
                            Snooze 2 weeks
                        </button>
                        <button className="p-4 cursor-pointer bg-white flex items-center justify-center shadow-md font-semibold gap-1">
                            <FiArchive className="text-2xl" />
                            Archive
                        </button>
                        <button className="p-4 cursor-pointer bg-white flex items-center justify-center shadow-md font-semibold gap-1 text-red-500 ">
                            <MdOutlineDeleteOutline className="text-2xl" />
                            Delete
                        </button>
                    </div>
                </div>

                {/* RIght sight */}
                <div className="">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
                        <div className="text-center bg-white p-9 rounded-md shadow-md p">
                            <p className="text-2xl text-[#244d3f] font-semibold">
                                {expectedFriend.days_since_contact}
                            </p>
                            <p className="text-sm text-gray-500">
                                Days Since Contact
                            </p>
                        </div>
                        <div className="text-center bg-white p-9 rounded-md shadow-md">
                            <p className="text-2xl text-[#244d3f] font-semibold">
                                {expectedFriend.goal}
                            </p>
                            <p className="text-sm text-gray-500">Goal (Days)</p>
                        </div>
                        <div className="text-center bg-white p-9 rounded-md shadow-md">
                            <p className="text-2xl text-[#244d3f] font-semibold">
                                {expectedFriend.next_due_date}
                            </p>
                            <p className="text-sm text-gray-500">Next Due</p>
                        </div>
                    </div>

                    <div className="mb-6 rounded-md flex justify-between bg-white shadow-md p-7">
                        <div className="space-y-3">
                            <h3 className="text-lg font-semibold">
                                Relationship Goal
                            </h3>
                            <p className="text-gray-800">
                                Connect every{" "}
                                <span className="font-bold">{expectedFriend.goal} days</span>
                            </p>
                        </div>
                        <button className=" mt-2 btn">Edit</button>
                    </div>

                    <div className="bg-white rounded-md shadow-md p-6">
                        <p className="text-gray-600 font-semibold text-xl pb-4">Quick Check-In</p>
                        <div className="grid md:grid-cols-2 grid-cols-3 lg:grid-cols-3 gap-5">
                            <button onClick={handleTimeLineCall} className="bg-gray-100 border border-gray-300 rounded-xl cursor-pointer flex flex-col p-4 justify-center items-center">
                                <PiPhoneCall className="text-4xl"/>
                                <p className="font-semibold pt-2">Call</p>
                            </button>

                            <button onClick={handleTimeLineMessage} className="bg-gray-100 cursor-pointer border border-gray-300 rounded-xl flex flex-col p-4 justify-center items-center">
                                <PiChatCircleTextBold className="text-4xl"/>
                                <p className="font-semibold pt-2">Text</p>
                            </button>

                            <button onClick={handleTimeLineVideo} className="bg-gray-100 cursor-pointer border border-gray-300 rounded-xl flex flex-col p-4 justify-center items-center">
                                <LuVideo className="text-4xl"/>
                                <p className="font-semibold pt-2">Video</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;
