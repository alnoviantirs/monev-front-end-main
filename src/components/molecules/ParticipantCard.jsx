// src/components/organisms/ParticipantCard.jsx
import React, { useState } from "react";
import { ParticipantChart } from "../atoms/ParticipantChart";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export const ParticipantCard = () => {
    const [colors, setColors] = useState([]);

    return (
        <div className="bg-white border-2 border-gray-200 rounded-lg shadow-lg p-6 relative">
            {/* Header Section */}
            <div className="flex flex-wrap items-center justify-between mb-4">
                <div className="flex flex-wrap items-center">
                    <h2 className="text-gray-700 text-lg font-bold mr-2">Participant</h2>
                    <div className="flex items-center mr-4">
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: colors[0] }}></span>
                        <span className="text-gray-700 text-sm ml-1">Male</span>
                    </div>
                    <div className="flex items-center">
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: colors[1] }}></span>
                        <span className="text-gray-700 text-sm ml-1">Female</span>
                    </div>
                </div>
                <button className="mt-2 sm:mt-0 bg-green-500 text-white py-1 px-4 rounded-md hover:bg-green-700">
                    View All
                </button>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute left-0 right-0 top-1/2 flex justify-between items-center transform -translate-y-1/2">
                <div className="cursor-pointer p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                    <FaAngleLeft className="text-gray-700" />
                </div>
                <div className="cursor-pointer p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                    <FaAngleRight className="text-gray-700" />
                </div>
            </div>

            {/* Chart Section */}
            <div className="flex justify-center items-center mt-6">
                <div className="w-40 h-40">
                    <ParticipantChart setColors={setColors} />
                </div>
            </div>

            {/* Footer Section */}
            <div className="mt-4 flex justify-center">
                <p className="text-gray-500 text-sm">Workshop</p>
            </div>
        </div>
    );
};
