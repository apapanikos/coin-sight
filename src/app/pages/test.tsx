import { Button } from "@/components/ui/button";
import { FC } from "react";

const TestPage: FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">ShadCN Test Page</h1>
      <Button onClick={() => alert("Button clicked!")}>Test Button</Button>
    </div>
  );
};

export default TestPage;
