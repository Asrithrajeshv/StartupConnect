import { Header } from "@/components/header"
import { PageBackground } from "@/components/page-background"
import { Skeleton } from "@/components/ui/skeleton"

export default function CatalogueLoading() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <PageBackground />
      <Header />

      <main className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        {/* Page Header */}
        <div className="mb-8">
          <Skeleton className="h-8 w-48 bg-gray-800 mb-4" />
          <Skeleton className="h-10 w-96 bg-gray-800 mb-2" />
          <Skeleton className="h-4 w-full max-w-2xl bg-gray-800" />
        </div>

        {/* AI Recommendations Skeleton */}
        <div className="mb-8 p-px rounded-xl overflow-hidden">
          <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <Skeleton className="h-8 w-8 rounded-full bg-gray-800" />
              <Skeleton className="h-6 w-64 bg-gray-800" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <Skeleton className="h-10 w-10 rounded-full bg-gray-800" />
                  <div>
                    <Skeleton className="h-5 w-32 bg-gray-800 mb-1" />
                    <Skeleton className="h-4 w-20 bg-gray-800" />
                  </div>
                </div>

                <Skeleton className="h-4 w-full bg-gray-800 mb-2" />
                <Skeleton className="h-4 w-5/6 bg-gray-800 mb-6" />

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Skeleton className="h-8 w-8 rounded-full bg-gray-800" />
                      <div>
                        <Skeleton className="h-3 w-16 bg-gray-800 mb-1" />
                        <Skeleton className="h-4 w-10 bg-gray-800" />
                      </div>
                    </div>
                  ))}
                </div>

                <Skeleton className="h-24 w-full bg-gray-800 mb-6" />

                <div className="flex gap-3">
                  <Skeleton className="h-10 w-full bg-gray-800" />
                  <Skeleton className="h-10 w-full bg-gray-800" />
                </div>
              </div>

              <div className="hidden md:block">
                <Skeleton className="h-6 w-48 bg-gray-800 mb-4" />
                {[1, 2, 3].map((i) => (
                  <Skeleton key={i} className="h-16 w-full bg-gray-800 mb-3" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filters Skeleton */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <Skeleton className="h-10 w-full md:w-64 bg-gray-800" />
          <div className="flex items-center gap-3 w-full md:w-auto">
            <Skeleton className="h-10 w-24 bg-gray-800" />
            <Skeleton className="h-10 w-20 bg-gray-800" />
          </div>
        </div>

        {/* Tabs Skeleton */}
        <Skeleton className="h-10 w-48 bg-gray-800 mb-6" />

        {/* Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Skeleton key={i} className="h-96 rounded-xl bg-gray-800" />
          ))}
        </div>
      </main>
    </div>
  )
}

