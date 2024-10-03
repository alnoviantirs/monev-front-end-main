import { Typography, Button } from "@material-tailwind/react";
import { logoutUser } from "../services/authService";
import DashboardStats from "../components/organisms/DashboardStats";

const DashboardPage = () => {
  return (
    <div className="p-4">
      <Typography variant="h2" className="mb-4">
        Halaman Dashboard
      </Typography>

      <DashboardStats />

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
