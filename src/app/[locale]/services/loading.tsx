import { Skeleton, SkeletonServiceCard, SkeletonHeading } from "@/components/ui/skeleton";

export default function ServicesLoading() {
  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <SkeletonHeading />

        {/* Services grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <SkeletonServiceCard key={i} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20">
          <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-12 text-center">
            <Skeleton className="h-10 w-80 max-w-full mx-auto" />
            <Skeleton className="h-5 w-[500px] max-w-full mx-auto mt-4" />
            <Skeleton className="h-14 w-44 rounded-xl mx-auto mt-8" />
          </div>
        </div>
      </div>
    </div>
  );
}
