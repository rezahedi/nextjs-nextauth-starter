import {readPost, updatePostWithRedirect} from "../../actions";
import {CancelButton} from "@/components/admin";

export default async function Home({params}: {params: Promise<{id: string}>}) {
  const {id: postId} = await params;
  // await readpost and fetch error
  const post = await readPost(postId);

  return (
    <div>
      <h2>Edit Post</h2>
      <form className="myForm" action={updatePostWithRedirect}>
        <input type="hidden" name="id" value={post?.id} />
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            defaultValue={post?.title}
          />
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
    </div>
  );
}
