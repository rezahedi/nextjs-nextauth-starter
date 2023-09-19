import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Modal from "@/components/Modal";

export default function Loading() {
  return (
    <Modal className="w-full max-w-xl bg-[var(--background)] shadow-md rounded p-16">
      <div>
        <h2>Edit Post</h2>
        <SkeletonTheme
          baseColor="var(--background)"
          highlightColor="var(--backgroundLight)"
        >
          <Skeleton className="my-10" height={30} />
          <Skeleton height={100} />
        </SkeletonTheme>
      </div>
    </Modal>
  );
}
