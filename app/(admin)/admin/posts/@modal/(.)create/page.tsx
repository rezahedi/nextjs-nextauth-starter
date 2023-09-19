import {Modal} from "@/components";
import {createPost} from "../../actions";

export default async function CreateModal() {
  return (
    <Modal className="w-full max-w-md bg-[var(--background)] shadow-md rounded p-16">
      <h3 className="text-center text-lg">Create New Post</h3>
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
    </Modal>
  );
}
