import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import Dashboard from "@/components/pages/Dashboard";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/signin");
  }

  return <Dashboard />;
}
