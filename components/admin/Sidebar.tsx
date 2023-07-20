"use client";
import Image from "next/image";
import {signOut} from "next-auth/react";

const Sidebar = () => {
  return (
    <aside>
      <h1>
        <Image src="/authjs.webp" alt="logo" width={32} height={32} /> Admin
      </h1>
      <nav>
        <ul>
          <li>
            <a href="/admin">Dashboard</a>
          </li>
          <li>
            <a href="/admin/users">Users</a>
          </li>
        </ul>
      </nav>
      <button onClick={() => signOut()}>Sign out</button>
    </aside>
  );
};

export default Sidebar;
