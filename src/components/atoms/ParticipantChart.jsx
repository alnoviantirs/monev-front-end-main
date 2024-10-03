import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const ParticipantChart = ({ setColors }) => {
    const data = {
        labels: ["Male", "Female"],
        datasets: [
            {
                label: "Total Participants",
                data: [1200, 800], // contoh data
                backgroundColor: ["#4e73df", "#f6c23e"], // Warna untuk chart
                hoverBackgroundColor: ["#2e59d9", "#f4b619"],
                borderColor: ["#ffffff", "#ffffff"],
                borderWidth: 2,
            },
        ],
    };

    // Mengatur warna ke state parent (hanya dipanggil saat komponen pertama kali di-mount)
    React.useEffect(() => {
        if (setColors) {
            setColors(data.datasets[0].backgroundColor);
        }
        // Dengan array kosong, useEffect hanya dipanggil sekali setelah mount
    }, []);

    const options = {
        cutout: "70%", // Adjust cutout to create the "donut" effect
        plugins: {
            legend: {
                display: false, // Hide the legend
            },
            tooltip: {
                enabled: false, // Disable tooltips
            },
        },
        elements: {
            center: {
                text: '2000', // Total Participants
            },
        },
    };

    return (
        <div className="relative">
            <Doughnut data={data} options={options} />
            {/* Displaying the total participants in the center */}
            <div className="absolute inset-0 flex flex-col justify-center items-center">
                <p className="text-gray-500 text-xs">Total Participants</p>
                <p className="text-gray-700 font-bold text-lg">2000</p>
            </div>
        </div>
    );
};
