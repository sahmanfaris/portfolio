import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800",
        className
      )}
    />
  );
}

export function SkeletonText({ className }: SkeletonProps) {
  return <Skeleton className={cn("h-4 w-full", className)} />;
}

export function SkeletonCard({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden",
        className
      )}
    >
      <Skeleton className="aspect-video w-full rounded-none" />
      <div className="p-6 space-y-3">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <div className="flex gap-2 pt-2">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-14 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function SkeletonServiceCard({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6",
        className
      )}
    >
      <Skeleton className="h-1 w-full rounded-none -mx-6 -mt-6 mb-6" />
      <Skeleton className="h-14 w-14 rounded-2xl" />
      <Skeleton className="h-6 w-2/3 mt-4" />
      <Skeleton className="h-4 w-full mt-3" />
      <Skeleton className="h-4 w-4/5 mt-2" />
      <div className="mt-4 space-y-2">
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-24" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-28" />
        </div>
      </div>
    </div>
  );
}

export function SkeletonHeading() {
  return (
    <div className="text-center mb-12 space-y-4">
      <Skeleton className="h-10 w-64 mx-auto" />
      <Skeleton className="h-5 w-96 max-w-full mx-auto" />
    </div>
  );
}
