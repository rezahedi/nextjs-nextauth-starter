"use client";
import {signOut} from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import {useSession} from "next-auth/react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function UserProfile() {
  const {data: session, status} = useSession();

  const handleSignOutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    signOut();
  };

  if (status === "loading") return <Skeleton width={100} />;

  if (!session) {
    return (
      <Link href="/login" className="user-profile">
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          ></path>
        </svg>
        Sign In
      </Link>
    );
  }

  return (
    <Link
      href="/api/auth/signout"
      title="Click to SignOut"
      onClick={handleSignOutClick}
      className="user-profile"
    >
      <Image
        src={
          session?.user?.image ||
          `https://avatars.dicebear.com/api/micah/${session?.user?.name}.svg`
        }
        alt="User Profile Image"
        width={24}
        height={24}
        className="rounded"
      />
      {session?.user?.name}
    </Link>
  );
}
