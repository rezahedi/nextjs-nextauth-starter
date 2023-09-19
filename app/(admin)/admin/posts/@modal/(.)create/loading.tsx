import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {Modal} from "@/components";

export default function Loading() {
  return (
    <Modal className="w-full max-w-md bg-[var(--background)] shadow-md rounded p-16">
      <SkeletonTheme
        baseColor="var(--background)"
        highlightColor="var(--backgroundLight)"
      >
        <Skeleton />
        <Skeleton height={60} />
      </SkeletonTheme>
    </Modal>
  );
}
