import { Header } from "@/components/header"
import { PageBackground } from "@/components/page-background"
import { Skeleton } from "@/components/ui/skeleton"

export default function StartupDetailLoading() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <PageBackground />
      <Header />

      <main className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        {/* Back Button */}
        <div className="mb-6">
          <Skeleton className="h-10 w-32 bg-gray-800" />
        </div>

        {/* Startup Header */}
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <Skeleton className="w-24 h-24 md:w-32 md:h-32 rounded-xl bg-gray-800" />
          <div className="flex-1">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <Skeleton className="h-10 w-64 bg-gray-800 mb-2" />
                <Skeleton className="h-6 w-48 bg-gray-800 mb-3" />
                <div className="flex flex-wrap gap-2 mb-4">
                  {[1, 2, 3, 4].map((i) => (
                    <Skeleton key={i} className="h-6 w-20 rounded-full bg-gray-800" />
                  ))}
                </div>
              </div>
              <div className="flex gap-2">
                <Skeleton className="h-10 w-10 rounded-full bg-gray-800" />
                <Skeleton className="h-10 w-10 rounded-full bg-gray-800" />
                <Skeleton className="h-10 w-24 rounded-md bg-gray-800" />
              </div>
            </div>
          </div>
        </div>

        {/* Funding Progress */}
        <Skeleton className="w-full h-48 rounded-xl bg-gray-800 mb-8" />

        {/* AI Insights */}
        <Skeleton className="w-full h-64 rounded-xl bg-gray-800 mb-8" />

        {/* Tabs */}
        <Skeleton className="w-full h-10 rounded-md bg-gray-800 mb-6" />

        {/* Tab Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Skeleton className="w-full h-8 bg-gray-800 mb-4" />
            <Skeleton className="w-full h-32 bg-gray-800 mb-6" />
            <Skeleton className="w-full h-8 bg-gray-800 mb-4" />
            <Skeleton className="w-full h-64 bg-gray-800 mb-6" />
            <Skeleton className="w-full h-8 bg-gray-800 mb-4" />
            <Skeleton className="w-full h-48 bg-gray-800" />
          </div>
          <div>
            <Skeleton className="w-full h-64 rounded-xl bg-gray-800 mb-6" />
            <Skeleton className="w-full h-48 rounded-xl bg-gray-800 mb-6" />
            <Skeleton className="w-full h-48 rounded-xl bg-gray-800" />
          </div>
        </div>

        {/* CTA Section */}
        <Skeleton className="w-full h-48 rounded-xl bg-gray-800 mt-8" />
      </main>
    </div>
  )
}

