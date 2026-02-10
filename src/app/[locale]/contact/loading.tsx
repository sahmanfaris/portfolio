import { Skeleton, SkeletonHeading } from "@/components/ui/skeleton";

export default function ContactLoading() {
  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <SkeletonHeading />

        {/* Two column layout */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left column - Contact info & Map */}
          <div className="space-y-6">
            {/* Contact info cards */}
            <div className="space-y-4">
              {/* Email card */}
              <div className="flex items-center gap-4 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <Skeleton className="h-12 w-12 rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-5 w-48" />
                </div>
              </div>

              {/* Location card */}
              <div className="flex items-center gap-4 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <Skeleton className="h-12 w-12 rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-5 w-40" />
                </div>
              </div>
            </div>

            {/* Availability card */}
            <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
              <div className="flex items-center gap-3 mb-4">
                <Skeleton className="h-10 w-10 rounded-xl" />
                <Skeleton className="h-6 w-32" />
              </div>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4 mt-2" />
            </div>

            {/* Remote connectivity card */}
            <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
              <div className="flex items-center gap-3 mb-4">
                <Skeleton className="h-10 w-10 rounded-xl" />
                <Skeleton className="h-6 w-40" />
              </div>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5 mt-2" />
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden">
              <Skeleton className="h-48 w-full rounded-none" />
            </div>
          </div>

          {/* Right column - Contact form */}
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8">
            <Skeleton className="h-7 w-48 mb-6" />
            
            <div className="space-y-6">
              {/* Name field */}
              <div>
                <Skeleton className="h-4 w-16 mb-2" />
                <Skeleton className="h-12 w-full rounded-lg" />
              </div>

              {/* Email field */}
              <div>
                <Skeleton className="h-4 w-12 mb-2" />
                <Skeleton className="h-12 w-full rounded-lg" />
              </div>

              {/* Subject field */}
              <div>
                <Skeleton className="h-4 w-20 mb-2" />
                <Skeleton className="h-12 w-full rounded-lg" />
              </div>

              {/* Message field */}
              <div>
                <Skeleton className="h-4 w-16 mb-2" />
                <Skeleton className="h-32 w-full rounded-lg" />
              </div>

              {/* Submit button */}
              <Skeleton className="h-12 w-full rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
