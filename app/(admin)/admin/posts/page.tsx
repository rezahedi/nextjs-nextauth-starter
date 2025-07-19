import {prisma} from "@/db";
import {getServerSession} from "next-auth/next";
import {authOptions} from "@/app/auth";
import Link from "next/link";
import PostList from "./PostList";

export default async function Home() {
  const session = await getServerSession(authOptions);

  const posts = await prisma.post
    .findMany({
      include: {
        author: {
          select: {
            name: true,
          },
        },
      },
      where: {
        author: {
          id: session?.user?.id,
        },
      },
    })
    .then((posts) =>
      posts.map((post) => ({
        ...post,
        authorName: post.author?.name,
      }))
    );

  return (
    <div className="flex flex-col gap-4">
      <div className="myTable cols3">
        <div>
          <b>Title</b>
        </div>
        <div>
          <b>Published</b>
        </div>
        <div>
          <b>Author</b>
        </div>
        <div>
          <b>Actions</b>
        </div>
        <PostList posts={posts} />
      </div>
      <Link href="/admin/posts/create" className="btn">
        Create New Post
      </Link>
    </div>
  );
}
