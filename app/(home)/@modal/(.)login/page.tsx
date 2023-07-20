"use client";
import { Modal } from "@/components";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function LoginModal() {
  return (
    <Modal>
      <div className="login">
        <div className="loginModal">
          <h2>
            <Image src="/authjs.webp" alt="logo" width={32} height={32} />
            Login
          </h2>
          <h3>Sign in to your account</h3>
          <button onClick={() => signIn("google", { callbackUrl: "/" })}>
            <Image src="/google.svg" alt="Google Logo" width={24} height={24} />
            Sign in with Google
          </button>
          <button onClick={() => signIn("github", { callbackUrl: "/" })}>
            <Image
              src="/github.svg"
              alt="Github Logo"
              className="dark:invert"
              width={24}
              height={24}
            />
            Sign in with Github
          </button>
        </div>
      </div>
    </Modal>
  );
}
