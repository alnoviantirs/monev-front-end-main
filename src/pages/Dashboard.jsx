import { Typography, Button } from "@material-tailwind/react";
import { logoutUser } from "../services/authService";
import DashboardStats from "../components/organisms/DashboardStats";
import { ChartCard } from "../components/organisms/ParticipantStats";
import PostTestResultCards from "../components/organisms/PostTestStats";

const DashboardPage = () => {
  return (
    <div className="p-4">
      <Typography variant="h2" className="mb-4">
        Halaman Dashboard
      </Typography>

      <DashboardStats />

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ChartCard />
        </div>

      <Button
        color="red"
        onClick={logoutUser}
        className="bg-red-500 text-white p-2 rounded"
      >
        Logout
      </Button>
    </div>
  );
};

export default DashboardPage;
