import {prisma} from "@/db";
import {redirect} from "next/navigation";
import {getServerSession} from "next-auth/next";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

async function handleCreatePost(data: FormData) {
  "use server";

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

export default function CreatePage() {
  return (
    <div className="max-w-md">
      <h2>Create New Post</h2>
      <form className="myForm" action={handleCreatePost}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea name="content" id="content" cols={30} rows={10}></textarea>
        </div>
        <div>
          <button className="btn" type="submit">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
