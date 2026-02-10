import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectDetailLoading() {
  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Back link */}
        <Skeleton className="h-5 w-32 mb-8" />

        {/* Project image */}
        <Skeleton className="aspect-video w-full rounded-2xl mb-8" />

        {/* Project info */}
        <div className="space-y-6">
          {/* Title and description */}
          <div>
            <Skeleton className="h-10 w-2/3" />
            <Skeleton className="h-5 w-full mt-4" />
            <Skeleton className="h-5 w-4/5 mt-2" />
          </div>

          {/* Tech stack */}
          <div>
            <Skeleton className="h-4 w-24 mb-3" />
            <div className="flex flex-wrap gap-2">
              {[...Array(6)].map((_, i) => (
                <Skeleton key={i} className="h-8 w-20 rounded-full" />
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Skeleton className="h-10 w-32 rounded-lg" />
            <Skeleton className="h-10 w-36 rounded-lg" />
          </div>

          {/* Long description */}
          <div className="pt-8 border-t border-zinc-100 dark:border-zinc-800">
            <Skeleton className="h-7 w-40 mb-4" />
            <div className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
