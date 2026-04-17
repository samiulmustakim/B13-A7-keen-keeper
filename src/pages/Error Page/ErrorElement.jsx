import React from "react";
import { useNavigate } from "react-router";

const ErrorElement = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="text-center space-y-6">

                <h1 className="text-[150px] font-extrabold text-[#244d3f] leading-none">
                    404
                </h1>

                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-gray-700">
                        Oops! Page not found
                    </h2>
                    <p className="text-gray-400 text-sm">
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                </div>

                <button
                   onClick={()=> navigate(-1)}
                    className="mt-4 px-8 py-3 bg-[#244d3f] text-white rounded-full font-semibold hover:bg-[#1a3a2e] transition cursor-pointer"
                >
                    ← Go Back
                </button>
            </div>
        </div>
    );
};

export default ErrorElement;