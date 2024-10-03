import { Typography, Select, Option } from "@material-tailwind/react";
import { PostTestResultCards } from "../molecules/PostTestResultCards";

const DashboardStats = () => {
    return (
        <div className="relative p-8 shadow-lg rounded-lg max-w-2xl bg-white">
            {/* Header */}
            <Typography variant="h5" className="font-bold mb-6">
                Post-test Result
            </Typography>

            {/* Dropdown Select di sebelah kanan pojok */}
            <div className="absolute top-0 right-0 mt-2 mr-4">
                <Select label="Workshop" className="w-full">
                    <Option>Workshop 1</Option>
                    <Option>Workshop 2</Option>
                    <Option>Workshop 3</Option>
                </Select>
            </div>

            {/* Post-test result cards */}
            <PostTestResultCards />
        </div>
    );
};

export default DashboardStats;
