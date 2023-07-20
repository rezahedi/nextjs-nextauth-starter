import {getServerSession} from "next-auth/next";
import {MyWidget} from "@/components/admin";

export default async function Home() {
  const session = await getServerSession();

  return (
    <div className="grid gap-6 grid-cols-2">
      <MyWidget title="Users" />
      <MyWidget title="Records" />
      <MyWidget title="Analytics" />
      <MyWidget title="Messages" />
    </div>
  );
}
