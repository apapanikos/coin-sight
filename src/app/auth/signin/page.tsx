// src/app/auth/signin/page.tsx

"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { useState } from "react";

const providers = [
  { name: "GitHub", icon: FaGithub, id: "github" },
  { name: "Google", icon: FcGoogle, id: "google" },
  { name: "Facebook", icon: FaFacebook, id: "facebook" },
];

const SignInPage = () => {
  const [loading, setLoading] = useState(false);

  const handleSignIn = (providerId: string) => {
    setLoading(true);
    signIn(providerId, { callbackUrl: "/" });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md p-6 space-y-4">
        <h1 className="text-2xl font-bold text-center">Sign In</h1>
        {providers.map((provider) => (
          <Button
            key={provider.id}
            variant="default"
            className="w-full flex items-center justify-center space-x-2"
            onClick={() => handleSignIn(provider.id)}
            disabled={loading}
          >
            <provider.icon className="w-5 h-5" />
            <span>Sign in with {provider.name}</span>
          </Button>
        ))}
      </Card>
    </div>
  );
};

export default SignInPage;
