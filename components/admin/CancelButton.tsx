"use client";
import Link from "next/link";
import {useRouter} from "next/navigation";

export default function CancelButton({route}: {route?: string}) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    console.log("cancel button clicked");
    // if there is history, go back
    if (window.history.length > 1) {
      console.log("router.back");
      e.preventDefault();
      router.back();
    } else if (route) {
      console.log("router.push", route);
      e.preventDefault();
      router.push(route);
    }
  };

  return (
    <Link href=".." className="btn secondary" onClick={(e) => handleClick(e)}>
      Cancel
    </Link>
  );
}
