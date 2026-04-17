import React, { useContext } from "react";
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { FriendContactContext } from "../../contextApi/FriendContactContext";

const Stats = () => {
    const { timeline } = useContext(FriendContactContext);

    const data = [
        {
            name: "Text",
            value: timeline.filter((item) => item.type === "message").length,
            fill: "#7f37f5",
        },
        {
            name: "Call",
            value: timeline.filter((item) => item.type === "call").length,
            fill: "#244d3f",
        },
        {
            name: "Video",
            value: timeline.filter((item) => item.type === "video").length,
            fill: "#37a163",
        },
    ];

    return (
        <div className="bg-gray-100 py-20 px-4">
            <div className="container mx-auto pb-10">
                <h1 className="text-4xl font-bold">Friendship Analytics</h1>
            </div>
            <div className="container mx-auto bg-white shadow-md text-xl p-7">
                <h1 className="font-semibold">By Interaction Type</h1>
                <div className="flex justify-center items-center py-15">
                    <ResponsiveContainer width="100%" height={400}>
                        <PieChart>
                            <Pie
                                data={data}
                                innerRadius="60%"
                                outerRadius="80%"
                                cornerRadius="50%"
                                paddingAngle={5}
                                dataKey="value"
                                isAnimationActive={true}
                            />
                            <Tooltip />
                            <Legend wrapperStyle={{ padding: "20px" }} />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Stats;
