import React, { useContext, useState } from "react";
import { FriendContactContext } from "../../contextApi/FriendContactContext";
import callimg from "../../assets/Call.png";
import messageimg from "../../assets/Message.png";
import videoimg from "../../assets/video.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { CgChevronDoubleRightO } from "react-icons/cg";

const Timeline = () => {
    const { timeline } = useContext(FriendContactContext);
    const [filter, setFilter] = useState("all");

    const typeConfig = {
        call: { img: callimg, label: "Call" },
        message: { img: messageimg, label: "Text" },
        video: { img: videoimg, label: "Video" },
    };

    const filterTimeline =
        filter === "all"
            ? timeline
            : timeline.filter((item) => item.type === filter);

    return (
        <div className="bg-gray-100">
            <div className="container mx-auto py-14 space-y-4 px-4">
                <h1 className="text-5xl font-bold text-[#244d3f]">Timeline </h1>

                <div className="dropdown dropdown-bottom pb-3">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn m-1 justify-start w-80 flex items-center text-gray-500"
                    >
                        {filter === "all"
                            ? "Filter timeline"
                            : typeConfig[filter].label}{" "}
                        <IoMdArrowDropdown />
                    </div>
                    <ul
                        tabIndex="-1"
                        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                    >
                        <li>
                            <a onClick={() => setFilter("all")}>All</a>
                        </li>
                        <li>
                            <a onClick={() => setFilter("message")}>Text</a>
                        </li>
                        <li>
                            <a onClick={() => setFilter("call")}>Call</a>
                        </li>
                        <li>
                            <a onClick={() => setFilter("video")}>Video</a>
                        </li>
                    </ul>
                </div>

                {/* call  */}
                {filterTimeline.length === 0 ? (
                    <div className="flex justify-center items-center p-6 py-10 bg-gray-50 rounded-lg shadow-md">
                        <div className="flex flex-col gap-3 justify-center items-center">
                            <p>
                                <CgChevronDoubleRightO className="text-5xl text-gray-600" />
                            </p>
                            <p className="text-gray-600 text-xl font-semibold">
                                No data added to timeline.
                            </p>
                            <p className="text-gray-400  text-sm">
                                Looks like there is no activity yet. Start by
                                adding a new entry.
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {filterTimeline.map((item) => {
                            const config = typeConfig[item.type];
                            return (
                                <div className="flex items-center gap-4 bg-white p-6 rounded-md shadow-sm">
                                    <img src={config.img} alt="" />
                                    <div>
                                        <h1 className="text-xl text-gray-600">
                                            <span className="font-semibold text-gray-800">
                                                {config.label}{" "}
                                            </span>
                                            with {item.name}
                                        </h1>
                                        <h1 className="text-gray-600">
                                            Meetup with {item.next_due_date}
                                        </h1>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* <div className="space-y-3">
                {message.map((c) => {
                    return (
                        <div className="flex items-center gap-4 bg-white p-6 rounded-md shadow-sm">
                            <img src={messageimg} alt="" />
                            <div>
                                <h1 className="text-xl text-gray-600"><span className="font-semibold text-gray-800">Text</span> with {c.name}</h1>
                                <h1 className="text-gray-600">Meetup with {c.next_due_date}</h1>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="space-y-3">
                {video.map((c) => {
                    return (
                        <div className="flex items-center gap-4 bg-white p-6 rounded-md shadow-sm">
                            <img src={videoimg} alt="" />
                            <div>
                                <h1 className="text-xl text-gray-600"><span className="font-semibold text-gray-800">Video</span> with {c.name}</h1>
                                <h1 className="text-gray-600">Meetup with {c.next_due_date}</h1>
                            </div>
                        </div>
                    );
                })}
            </div> */}
            </div>
        </div>
    );
};

export default Timeline;
