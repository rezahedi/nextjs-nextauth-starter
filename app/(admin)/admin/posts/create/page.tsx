import {createPost} from "../actions";

export default function Home() {
  return (
    <div className="max-w-md">
      <h2>Create New Post</h2>
      <form className="myForm" action={createPost}>
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
