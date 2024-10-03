import React, { useState } from "react";
import { Typography } from "@material-tailwind/react";
import { PostTestResultCards } from "../molecules/PostTestResultCards";

const Dropdown = ({ options, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("");

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        // Set selected to empty string when opening dropdown
        if (!isOpen) {
            setSelected(""); // Reset the displayed value to "Select Category"
        }
    };

    const handleOptionClick = (option) => {
        setSelected(option);
        onChange(option); // Update opsi yang dipilih di parent
        setIsOpen(false); // Tutup dropdown setelah pilihan
    };

    return (
        <div className="relative">
            <button
                onClick={toggleDropdown}
                className="border rounded-lg px-4 py-2 w-full text-left"
            >
                {selected || "Select Category"}
            </button>
            {isOpen && (
                <div className="absolute bg-white border rounded-lg shadow-lg mt-1 w-full z-10">
                    {options.map((option) => (
                        <div
                            key={option}
                            onClick={() => handleOptionClick(option)}
                            className="cursor-pointer px-4 py-2 hover:bg-gray-200"
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const DashboardStats = () => {
    const [selectedOption, setSelectedOption] = useState(""); // State untuk menyimpan opsi terpilih

    return (
        <div className="relative p-8 shadow-lg rounded-lg max-w-3xl bg-white">
            {/* Header */}
            <Typography variant="h5" className="font-bold mb-6">
                Post-test Result
            </Typography>

            {/* Dropdown Select di sebelah kanan pojok */}
            <div className="absolute top-0 right-0 mt-2 mr-4 w-48">
                <Dropdown
                    options={["Workshop", "Conference/Seminar", "Training"]}
                    onChange={setSelectedOption}
                />
            </div>

            {/* Post-test result cards */}
            <PostTestResultCards />
        </div>
    );
};

export default DashboardStats;
