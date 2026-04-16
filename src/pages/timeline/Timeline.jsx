import React, { useContext } from "react";
import { FriendContactContext } from "../../contextApi/FriendContactContext";
import callimg from "../../assets/Call.png";
import messageimg from "../../assets/Message.png";
import videoimg from "../../assets/video.png";

const Timeline = () => {
    const { timeline } = useContext(FriendContactContext);

    const typeConfig = {
        call: { img: callimg, label: "Call" },
        message: { img: messageimg, label: "Text" },
        video: { img: videoimg, label: "Video" },
    };

    return (
        <div className="container mx-auto py-10 space-y-3">
            {/* call  */}
            <div className="space-y-3">
                {timeline.map((item) => {
                    const config = typeConfig[item.type];
                    return (
                        <div className="flex items-center gap-4 bg-white p-6 rounded-md shadow-sm">
                            <img src={config.img} alt="" />
                            <div>
                                <h1 className="text-xl text-gray-600">
                                    <span className="font-semibold text-gray-800">
                                        {config.label}{ " " }
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
    );
};

export default Timeline;
