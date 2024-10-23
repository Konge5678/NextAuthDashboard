"use client";

import { useState } from "react";
import Link from "next/link";
import type { User } from "next-auth";
import Image from "next/image";
import { CircleUser } from 'lucide-react';

type Props = {
  user?: User;
};

export default function NavBar({ user }: Props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const userImage = user?.image ? (
    <Image
      className="drop-shadow-xl shadow-black rounded-full cursor-pointer"
      src={user.image}
      width={40}
      height={40}
      alt={user.name ?? "Profile Pic"}
      priority={true}
      onClick={toggleDropdown}
    />
  ) : (
    <CircleUser
      className="drop-shadow-xl shadow-black rounded-full cursor-pointer"
      size={40}
      onClick={toggleDropdown}
    />
  );

  return (
    <nav className="bg-slate-900">
      <ul className="flex justify-between text-white py-2">
        <div className="flex text-2xl">
          <li className="pl-4">
            <Link href="/">Home</Link>
          </li>
          <li className="pl-4">
            <Link href="/dashboard">Dashboard</Link>
          </li>
        </div>
        <div className="flex items-center relative">
          <li className="pr-4">
            {userImage}
            {dropdownOpen && (
              <ul className="absolute right-0 mt-2 mr-4 w-32 bg-white rounded-md shadow-lg py-1 z-20">
                {user ? (
                  <li className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    <Link href="/api/auth/signout">Sign Out</Link>
                  </li>
                ) : (
                  <li className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    <Link href="/api/auth/signin">Sign In</Link>
                  </li>
                )}
              </ul>
            )}
          </li>
        </div>
      </ul>
    </nav>
  );
}