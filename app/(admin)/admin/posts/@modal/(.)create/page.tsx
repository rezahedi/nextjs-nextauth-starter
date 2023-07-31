"use client";
import {Modal} from "@/components";

export default function CreateModal() {
  return (
    <Modal>
      <h3>Create New Post</h3>
      <form>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea name="content" id="content" cols={30} rows={10}></textarea>
        </div>
        <div>
          <button type="submit">Create</button>
        </div>
      </form>
    </Modal>
  );
}
