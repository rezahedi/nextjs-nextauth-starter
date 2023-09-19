import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loading() {
  return (
    <div className="flex flex-col gap-4">
      <div className="myTable cols3">
        <div>
          <b>Title</b>
        </div>
        <div>
          <b>Published</b>
        </div>
        <div>
          <b>Author</b>
        </div>
        <div>
          <b>Actions</b>
        </div>
        <div className="contents">
          <SkeletonTheme
            baseColor="var(--background)"
            highlightColor="var(--backgroundLight)"
          >
            <Skeleton className="mb-6" height={30} count={10} />
            <Skeleton className="mb-6" height={30} count={10} />
            <Skeleton className="mb-6" height={30} count={10} />
            <Skeleton className="mb-6" height={30} count={10} />
          </SkeletonTheme>
        </div>
      </div>
    </div>
  );
}
