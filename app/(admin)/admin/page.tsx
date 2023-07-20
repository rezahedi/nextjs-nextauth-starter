import {getServerSession} from "next-auth/next";
import Image from "next/image";

export default async function Home() {
  const session = await getServerSession();

  return (
    <div className="grid gap-6 grid-cols-2">
      <MyWidgets title="Users" />
      <MyWidgets title="Records" />
      <MyWidgets title="Analytics" />
      <MyWidgets title="Messages" />
    </div>
  );
}

export const MyWidgets = ({title}: {title?: string}) => {
  return (
    <div className="widget">
      {title || "Widget Title"}
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
