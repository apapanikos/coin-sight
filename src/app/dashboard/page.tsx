import { FC } from "react";
import { Button } from "@/components/ui/button";
import TestAuth from "@/components/TestAuth";

const Dashboard: FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>This is the dashboard's page content.</p>
      <TestAuth />
    </div>
  );
};

export default Dashboard;
