import { Skeleton, SkeletonCard, SkeletonHeading } from "@/components/ui/skeleton";

export default function HomeLoading() {
  return (
    <>
      {/* Hero Section Skeleton */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left space-y-6">
              <Skeleton className="h-10 w-48 rounded-full mx-auto lg:mx-0" />
              <Skeleton className="h-16 w-full max-w-md mx-auto lg:mx-0" />
              <Skeleton className="h-8 w-72 mx-auto lg:mx-0" />
              <div className="space-y-3 max-w-xl mx-auto lg:mx-0">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-4/5" />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Skeleton className="h-12 w-40 rounded-lg" />
                <Skeleton className="h-12 w-36 rounded-lg" />
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <Skeleton className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section Skeleton */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SkeletonHeading />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="text-center p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                <Skeleton className="h-12 w-12 rounded-xl mx-auto" />
                <Skeleton className="h-8 w-16 mx-auto mt-4" />
                <Skeleton className="h-4 w-24 mx-auto mt-2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section Skeleton */}
      <section className="py-24 bg-zinc-50/50 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SkeletonHeading />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section Skeleton */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SkeletonHeading />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                <Skeleton className="h-12 w-12 rounded-xl" />
                <Skeleton className="h-5 w-32 mt-4" />
                <Skeleton className="h-4 w-full mt-2" />
                <Skeleton className="h-4 w-3/4 mt-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section Skeleton */}
      <section className="py-24 bg-zinc-50/50 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SkeletonHeading />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <div className="flex items-center gap-4 mb-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-3 w-32" />
                  </div>
                </div>
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full mt-2" />
                <Skeleton className="h-4 w-2/3 mt-2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section Skeleton */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Skeleton className="h-12 w-96 max-w-full mx-auto" />
            <Skeleton className="h-5 w-[500px] max-w-full mx-auto" />
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Skeleton className="h-12 w-40 rounded-lg mx-auto sm:mx-0" />
              <Skeleton className="h-12 w-36 rounded-lg mx-auto sm:mx-0" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
