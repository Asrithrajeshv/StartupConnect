import React from "react"

export default function PlatformDemoLoading() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="text-center mb-16">
          <div className="h-12 bg-gray-800 rounded-lg w-2/3 mx-auto mb-4 animate-pulse"></div>
          <div className="h-6 bg-gray-800 rounded w-1/2 mx-auto animate-pulse"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative bg-black/90 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-800 animate-pulse">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 space-y-4">
                <div className="h-8 bg-gray-800 rounded w-3/4"></div>
                <div className="h-20 bg-gray-800 rounded"></div>
                <div className="grid grid-cols-2 gap-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-16 bg-gray-800 rounded"></div>
                  ))}
                </div>
              </div>
              <div className="md:w-1/3 flex items-center justify-center">
                <div className="w-48 h-48 bg-gray-800 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}