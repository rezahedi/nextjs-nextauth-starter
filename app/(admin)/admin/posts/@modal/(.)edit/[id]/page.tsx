import {readPost} from "../../../actions";
import {CancelButton} from "@/components/admin";
import Modal from "@/components/Modal";
import MyFormSubmit from "./MyFormSubmit";

export default async function Home({params}: {params: {id: string}}) {
  // await readpost and fetch error
  const post = await readPost(params.id);

  return (
    <Modal className="w-full max-w-xl bg-[var(--background)] shadow-md rounded p-16">
      <div>
        <h2>Edit Post</h2>
        <MyFormSubmit
          post={{
            id: post?.id,
            title: post?.title,
            content: post?.content || "",
          }}
        />
      </div>
    </Modal>
  );
}
