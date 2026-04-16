import React from "react";

const HeroSection = () => {
    return (
        <div>
            <div className="text-center container mx-auto space-y-5 py-10 pt-15">
                <h1 className="text-4xl font-bold">
                    Friends to keep close in your life
                </h1>
                <p>
                    Your personal shelf of meaningful connections. Browse, tend,
                    and nurture the relationships that matter most.
                </p>
                <button className="btn bg-[#244d3f] text-white">
                    {" "}
                    + Add a Friend
                </button>
            </div>
        </div>
    );
};

export default HeroSection;
