"use client";

import HomeView from "./views/HomeView";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/");
    },
  });

  return <HomeView user={session?.user ?? { id: "", role: "" }} />;
}
