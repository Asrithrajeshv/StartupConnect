<section className="relative py-20 md:py-32">
  <div className="text-center max-w-4xl mx-auto px-4">
    {/* Main heading */}
    <h1 className="text-4xl md:text-5xl font-bold mb-12">
      Implements dynamic funding models. List your business, get funded, and access powerful analytics all in one place.
    </h1>

    {/* Buttons container with increased bottom margin */}
    <div className="flex flex-wrap justify-center gap-4 mb-20">
      <Button className="bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-600 hover:to-emerald-600">
        <Upload className="mr-2 h-4 w-4" /> Upload Resume
      </Button>
      
      <Button variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-500/10">
        <DollarSign className="mr-2 h-4 w-4" /> Investor Platform
      </Button>
      
      <Button variant="outline" className="border-emerald-500 text-emerald-500 hover:bg-emerald-500/10">
        <LineChart className="mr-2 h-4 w-4" /> Startup Dashboard
      </Button>
      
      <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-500/10">
        <LayoutGrid className="mr-2 h-4 w-4" /> Platform Overview
      </Button>
    </div>

    {/* Stats container with increased spacing and better positioning */}
    <div className="relative mt-24 flex flex-wrap justify-center gap-8">
      <div className="bg-black/50 backdrop-blur-sm rounded-lg px-8 py-4">
        <p className="text-gray-400">Total Investments Processed:</p>
        <p className="text-emerald-500 font-bold text-2xl">$42.8 Million</p>
      </div>
      
      <div className="bg-black/50 backdrop-blur-sm rounded-lg px-8 py-4">
        <p className="text-gray-400">Successful Startups:</p>
        <p className="text-pink-500 font-bold text-2xl">320+</p>
      </div>
      
      <div className="bg-black/50 backdrop-blur-sm rounded-lg px-8 py-4">
        <p className="text-gray-400">Active Investors:</p>
        <p className="text-purple-500 font-bold text-2xl">1,250+</p>
      </div>
    </div>
  </div>

  {/* Scroll indicator with more space from stats */}
  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 mt-32">
    <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center animate-bounce">
      <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
    </div>
  </div>
</section> 