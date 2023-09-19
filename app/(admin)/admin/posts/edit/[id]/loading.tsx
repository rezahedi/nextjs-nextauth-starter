import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loading() {
  return (
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
  );
}
