import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loading() {
  return (
    <SkeletonTheme
      baseColor="var(--background)"
      highlightColor="var(--backgroundLight)"
    >
      <Skeleton />
    </SkeletonTheme>
  );
}
