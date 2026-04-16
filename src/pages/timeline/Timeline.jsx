import React, { useContext } from "react";
import { FriendContactContext } from "../../contextApi/FriendContactContext";
import callimg from "../../assets/Call.png"
import messageimg from "../../assets/Message.png"
import videoimg from "../../assets/video.png"

const Timeline = () => {
    const { call, setCall, message, setMessage, video, setVideo } =
        useContext(FriendContactContext);
    console.log(call, "call");
    console.log(message, "message");
    console.log(video, "video");

    return (
        <div className="container mx-auto py-10">
            {/* call  */}
            <div>
                {call.map((c) => {
                    return (
                        <div className="flex items-center gap-4">
                            <img src={callimg} alt="" />
                            <div>
                                <h1 className="text-xl text-gray-600"><span className="font-semibold text-gray-800">Meetup</span> with {c.name}</h1>
                                <h1 className="text-gray-600">Meetup with {c.next_due_date}</h1>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Timeline;
