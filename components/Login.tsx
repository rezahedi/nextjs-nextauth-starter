"use client";
import { signIn, signOut } from "next-auth/react";
import { Session } from "next-auth";
import Image from "next/image";

const Login = ({ session }: { session: Session | null }) => {
  if (session && session.user) {
    // User signed in
    return (
      <div className="border flex items-center justify-center">
        <h3>Login component client rendered</h3>
        <p>
          Signed in as
          <Image
            src={
              session.user.image ||
              `https://avatars.dicebear.com/api/micah/${session.user.name}.svg`
            }
            width={40}
            height={40}
            alt={session.user.name || `Profile Icon`}
            className="rounded-full"
          />
          {session.user && session.user.email}
        </p>
        <button onClick={() => signOut()}>Sign out by click event</button>
      </div>
    );
  }

  return (
    <div className="rounded-xl border-slate-100 p-8 flex items-center justify-center w-min gap-2 border flex-col-reverse">
      <h3>Login component client rendered</h3>
      <button
        className="whitespace-nowrap rounded-md border border-slate-100 p-2"
        onClick={() => signIn("google")}
      >
        Google Sign in
      </button>
      <button
        className="whitespace-nowrap rounded-md border border-slate-100 p-2"
        onClick={() => signIn("github")}
      >
        Github Sign in
      </button>
    </div>
  );
};

export default Login;
