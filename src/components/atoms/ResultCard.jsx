import { Typography } from "@material-tailwind/react";

export const ResultCard = ({ title, value, color }) => {
    return (
        <div
            className={`p-4 rounded-lg w-full flex flex-col items-center`}
            style={{ backgroundColor: color }}
        >
            <Typography variant="small" className="text-white">
                {title}
            </Typography>
            <Typography variant="h3" className="font-bold text-white">
                {value}
            </Typography>
        </div>
    );
};
