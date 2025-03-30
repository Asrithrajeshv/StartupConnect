import { LineChart, TrendingUp, Users, Brain, Rocket, DollarSign } from "lucide-react"

export function PlatformPreview({ type }: { type: "overview" | "payment" }) {
  if (type === "overview") {
    return (
      <div className="relative w-full h-[400px] bg-black/50 rounded-lg overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#7F5AF020_1px,transparent_1px),linear-gradient(to_bottom,#7F5AF020_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Main Chart */}
        <div className="absolute inset-x-8 top-8 h-48 bg-gradient-to-b from-[#7F5AF0]/20 to-transparent rounded-lg overflow-hidden">
          <div className="relative h-full">
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#2CB67D]/20 to-transparent" />
            <svg className="absolute bottom-0 left-0 right-0" height="128" width="100%">
              <path
                d="M0,100 Q60,80 120,90 T240,70 T360,50 T480,30"
                fill="none"
                stroke="#2CB67D"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>

        {/* Metric Cards */}
        <div className="absolute bottom-8 inset-x-8 grid grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-[#7F5AF0]/10 border border-[#7F5AF0]/30 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4 text-[#7F5AF0]" />
              <span className="text-sm text-white">Active Users</span>
            </div>
            <div className="text-lg font-bold text-[#7F5AF0]">12.8k</div>
            <div className="text-xs text-[#7F5AF0]/70">+18% this month</div>
          </div>
          <div className="p-4 rounded-lg bg-[#2CB67D]/10 border border-[#2CB67D]/30 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-4 h-4 text-[#2CB67D]" />
              <span className="text-sm text-white">Revenue</span>
            </div>
            <div className="text-lg font-bold text-[#2CB67D]">$48.5k</div>
            <div className="text-xs text-[#2CB67D]/70">+24% this month</div>
          </div>
          <div className="p-4 rounded-lg bg-[#FF5470]/10 border border-[#FF5470]/30 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2">
              <Rocket className="w-4 h-4 text-[#FF5470]" />
              <span className="text-sm text-white">Growth</span>
            </div>
            <div className="text-lg font-bold text-[#FF5470]">32%</div>
            <div className="text-xs text-[#FF5470]/70">MoM increase</div>
          </div>
        </div>

        {/* Floating Icons */}
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center">
          <Brain className="w-4 h-4 text-[#7F5AF0]" />
        </div>
        <div className="absolute top-16 right-16 w-8 h-8 rounded-full bg-[#2CB67D]/20 flex items-center justify-center">
          <LineChart className="w-4 h-4 text-[#2CB67D]" />
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full h-64 bg-black/50 rounded-lg overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#7F5AF020_1px,transparent_1px),linear-gradient(to_bottom,#7F5AF020_1px,transparent_1px)] bg-[size:16px_16px]" />
      
      {/* Payment Chart */}
      <div className="absolute inset-x-6 top-6 h-32 bg-gradient-to-b from-[#7F5AF0]/10 to-transparent rounded-lg overflow-hidden">
        <div className="relative h-full">
          <svg className="absolute bottom-0 left-0 right-0" height="128" width="100%">
            <path
              d="M0,100 C40,90 80,30 120,50 S160,90 200,70 S240,20 280,40 S320,90 360,60"
              fill="none"
              stroke="#7F5AF0"
              strokeWidth="2"
            />
            <path
              d="M0,80 C40,100 80,60 120,80 S160,40 200,60 S240,100 280,80 S320,40 360,60"
              fill="none"
              stroke="#2CB67D"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
          </svg>
        </div>
      </div>

      {/* Payment Stats */}
      <div className="absolute bottom-6 inset-x-6 grid grid-cols-2 gap-4">
        <div className="p-3 rounded-lg bg-[#7F5AF0]/10 border border-[#7F5AF0]/30 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp className="w-4 h-4 text-[#7F5AF0]" />
            <span className="text-xs text-white">High Growth</span>
          </div>
          <div className="text-lg font-bold text-[#7F5AF0]">8-12%</div>
          <div className="text-xs text-[#7F5AF0]/70">of revenue</div>
        </div>
        <div className="p-3 rounded-lg bg-[#2CB67D]/10 border border-[#2CB67D]/30 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp className="w-4 h-4 text-[#2CB67D] transform rotate-180" />
            <span className="text-xs text-white">Recovery</span>
          </div>
          <div className="text-lg font-bold text-[#2CB67D]">3-5%</div>
          <div className="text-xs text-[#2CB67D]/70">of revenue</div>
        </div>
      </div>
    </div>
  )
} 