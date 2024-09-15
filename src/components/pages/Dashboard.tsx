import { FC } from "react";
import CryptoList from "@/components/Cryptolist";

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

const Dashboard: FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>This is the dashboard's page content.</p>
      <CryptoList />
    </div>
  );
};

export default Dashboard;
