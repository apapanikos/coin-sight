"use client"; // Ensure this component is marked as a Client Component

import { useSession } from "next-auth/react";

const TestAuth = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session) {
    return <p>You need to sign in.</p>;
  }

  return <p>Welcome back, {session.user?.name}!</p>;
};

export default TestAuth;
