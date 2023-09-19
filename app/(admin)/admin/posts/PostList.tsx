"use client";
import Link from "next/link";
import {Post} from "@prisma/client";
import {deletePost} from "./actions";
import {useState} from "react";

type PostWithAuthorName = Post & {authorName?: string | null};

const PostList = (props: {posts: PostWithAuthorName[]}) => {
  const [data, setData] = useState(props.posts);

  const removeRecord = (id: string) => {
    setData(data.filter((post) => post.id !== id));
  };

  return (
    <div className="contents">
      {data &&
        data.map((post) => (
          <Item key={post.id} post={post} removeRecord={removeRecord} />
        ))}
    </div>
  );
};

export default PostList;

const Item = (props: {
  post: PostWithAuthorName;
  removeRecord: (id: string) => void;
}) => {
  const {post, removeRecord} = props;

  const handleDelete = async (id: string) => {
    removeRecord(id);
    await deletePost(id);
  };

  return (
    <>
      <div>{post.title}</div>
      <div>{post.published ? "Yes" : "No"}</div>
      <div>{post.authorName}</div>
      <div className="flex gap-4">
        <Link href={`/admin/posts/edit/${post.id}`} className="btn">
          Edit
        </Link>
        <button className="btn danger" onClick={() => handleDelete(post.id)}>
          Remove
        </button>
      </div>
    </>
  );
};
