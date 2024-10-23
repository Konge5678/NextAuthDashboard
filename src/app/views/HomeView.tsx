"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import type { User } from "next-auth";

type Props = {
  user: User;
};

export default function HomeView({ user }: Props) {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/");
    },
  });

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
      <p>{user?.name} </p>
      <p>Role: {user?.role}</p>
    </div>
  );
}
