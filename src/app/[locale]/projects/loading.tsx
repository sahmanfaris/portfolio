import { Skeleton, SkeletonCard, SkeletonHeading } from "@/components/ui/skeleton";

export default function ProjectsLoading() {
  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <SkeletonHeading />

        {/* Projects grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {[...Array(6)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 flex justify-center">
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-8 py-6">
            <Skeleton className="h-5 w-48 mx-auto" />
            <Skeleton className="h-6 w-32 mx-auto mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
