"use client";
import {updatePost} from "../../../actions";
import {useRouter} from "next/navigation";
import {CancelButton} from "@/components/admin";

export default function MyFormSubmit({
  post,
}: {
  post: {id?: string; title?: string; content?: string};
}) {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    await updatePost(data);
    router.back();
  };

  return (
    <form className="myForm" onSubmit={handleSubmit}>
      <input type="hidden" name="id" value={post?.id} />
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" defaultValue={post?.title} />
      </div>
      <div>
        <label htmlFor="content">Content</label>
        <textarea
          name="content"
          id="content"
          cols={30}
          rows={10}
          defaultValue={post?.content || ""}
        ></textarea>
      </div>
      <div className="flex gap-4">
        <button className="btn" type="submit">
          Update
        </button>
        <CancelButton route="/admin/posts" />
      </div>
    </form>
  );
}
