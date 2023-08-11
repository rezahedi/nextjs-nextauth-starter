"use server";
import {prisma} from "@/db";
import {redirect} from "next/navigation";
import {getServerSession} from "next-auth/next";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

export async function createPost(data: FormData) {
  const session = await getServerSession(authOptions);

  const title = data.get("title")?.valueOf().toString() || "";
  const content = data.get("content")?.valueOf().toString() || "";
  const authorId = session?.user?.id;

  await prisma.post.create({
    data: {
      title,
      content,
      published: true,
      authorId: authorId,
    },
  });

  redirect("/admin/posts");
}
