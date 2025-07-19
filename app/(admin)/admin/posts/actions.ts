"use server";
import {prisma} from "@/db";
import {redirect} from "next/navigation";
import {getServerSession} from "next-auth/next";
import {authOptions} from "@/app/auth";

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

export async function readPost(id: string) {
  const post = await prisma.post.findUnique({
    where: {id},
  });

  return post;
}

export async function updatePost(data: FormData) {
  const id = data.get("id")?.valueOf().toString() || "";
  if (!id) {
    throw new Error("Post ID not found");
  }
  const title = data.get("title")?.valueOf().toString() || "";
  const content = data.get("content")?.valueOf().toString() || "";

  await prisma.post.update({
    where: {id},
    data: {
      title,
      content,
    },
  });
}

export async function updatePostWithRedirect(data: FormData) {
  await updatePost(data);
  redirect("/admin/posts");
}

export async function deletePost(id: string) {
  await prisma.post.delete({
    where: {id},
  });

  return true;
}
