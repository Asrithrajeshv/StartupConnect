import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

const COLORS = ["#7F5AF0", "#2CB67D", "#FF5470", "#FFD700"]

// Revenue Chart Component
export const RevenueChart = () => {
  const data = [
    { name: "Jan", revenue: 65000 },
    { name: "Feb", revenue: 72000 },
    { name: "Mar", revenue: 78450 },
    { name: "Apr", revenue: 82000 },
    { name: "May", revenue: 85000 },
    { name: "Jun", revenue: 92000 },
  ]

  return (
    <ResponsiveContainer width="100%" height={60}>
      <LineChart data={data}>
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="#7F5AF0"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

// Users Chart Component
export const UsersChart = () => {
  const data = [
    { name: "Jan", users: 2100 },
    { name: "Feb", users: 2300 },
    { name: "Mar", users: 2845 },
    { name: "Apr", users: 3100 },
    { name: "May", users: 3400 },
    { name: "Jun", users: 3800 },
  ]

  return (
    <ResponsiveContainer width="100%" height={60}>
      <LineChart data={data}>
        <Line
          type="monotone"
          dataKey="users"
          stroke="#2CB67D"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

// Burn Rate Chart Component
export const BurnRateChart = () => {
  const data = [
    { name: "Jan", burn: 45000 },
    { name: "Feb", burn: 44000 },
    { name: "Mar", burn: 42300 },
    { name: "Apr", burn: 41000 },
    { name: "May", burn: 40000 },
    { name: "Jun", burn: 39000 },
  ]

  return (
    <ResponsiveContainer width="100%" height={60}>
      <LineChart data={data}>
        <Line
          type="monotone"
          dataKey="burn"
          stroke="#FF5470"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

// Revenue Forecast Chart Component
export const RevenueForecastChart = () => {
  const data = [
    { name: "Jan", actual: 92000, forecast: 95000 },
    { name: "Feb", actual: 95000, forecast: 98000 },
    { name: "Mar", actual: 98000, forecast: 102000 },
    { name: "Apr", actual: 102000, forecast: 105000 },
    { name: "May", actual: 105000, forecast: 108000 },
    { name: "Jun", actual: 108000, forecast: 112000 },
    { name: "Jul", actual: null, forecast: 115000 },
    { name: "Aug", actual: null, forecast: 118000 },
    { name: "Sep", actual: null, forecast: 122000 },
    { name: "Oct", actual: null, forecast: 125000 },
    { name: "Nov", actual: null, forecast: 128000 },
    { name: "Dec", actual: null, forecast: 132000 },
  ]

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
        <XAxis dataKey="name" stroke="#666" />
        <YAxis stroke="#666" />
        <Tooltip
          contentStyle={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            border: "1px solid #333",
            borderRadius: "4px",
          }}
          labelStyle={{ color: "#fff" }}
        />
        <Line
          type="monotone"
          dataKey="actual"
          stroke="#7F5AF0"
          strokeWidth={2}
          dot={{ fill: "#7F5AF0", strokeWidth: 2 }}
        />
        <Line
          type="monotone"
          dataKey="forecast"
          stroke="#2CB67D"
          strokeWidth={2}
          strokeDasharray="5 5"
          dot={{ fill: "#2CB67D", strokeWidth: 2 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

// Market Segments Chart Component
export const MarketSegmentsChart = () => {
  const data = [
    { name: "Manufacturing", value: 42 },
    { name: "Retail", value: 28 },
    { name: "Technology", value: 18 },
    { name: "Others", value: 12 },
  ]

  return (
    <ResponsiveContainer width="100%" height={180}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            border: "1px solid #333",
            borderRadius: "4px",
          }}
          labelStyle={{ color: "#fff" }}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

// Competitor Landscape Chart Component
export const CompetitorLandscapeChart = () => {
  const data = [
    { name: "Competitor A", marketShare: 35, revenue: 1200000 },
    { name: "Competitor B", marketShare: 25, revenue: 850000 },
    { name: "Your Company", marketShare: 15, revenue: 500000 },
    { name: "Competitor C", marketShare: 15, revenue: 480000 },
    { name: "Competitor D", marketShare: 10, revenue: 320000 },
  ]

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
        <XAxis dataKey="name" stroke="#666" />
        <YAxis yAxisId="left" stroke="#666" />
        <YAxis yAxisId="right" orientation="right" stroke="#666" />
        <Tooltip
          contentStyle={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            border: "1px solid #333",
            borderRadius: "4px",
          }}
          labelStyle={{ color: "#fff" }}
        />
        <Bar
          yAxisId="left"
          dataKey="marketShare"
          fill="#7F5AF0"
          name="Market Share (%)"
        />
        <Bar
          yAxisId="right"
          dataKey="revenue"
          fill="#2CB67D"
          name="Revenue ($)"
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

// Funding Runway Chart Component
export const RunwayChart = () => {
  const data = [
    { name: "Jan", cash: 620000, burn: 42300 },
    { name: "Feb", cash: 577700, burn: 42300 },
    { name: "Mar", cash: 535400, burn: 42300 },
    { name: "Apr", cash: 493100, burn: 42300 },
    { name: "May", cash: 450800, burn: 42300 },
    { name: "Jun", cash: 408500, burn: 42300 },
    { name: "Jul", cash: 366200, burn: 42300 },
    { name: "Aug", cash: 323900, burn: 42300 },
    { name: "Sep", cash: 281600, burn: 42300 },
    { name: "Oct", cash: 239300, burn: 42300 },
    { name: "Nov", cash: 197000, burn: 42300 },
    { name: "Dec", cash: 154700, burn: 42300 },
  ]

  return (
    <ResponsiveContainer width="100%" height={180}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
        <XAxis dataKey="name" stroke="#666" />
        <YAxis stroke="#666" />
        <Tooltip
          contentStyle={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            border: "1px solid #333",
            borderRadius: "4px",
          }}
          labelStyle={{ color: "#fff" }}
        />
        <Line
          type="monotone"
          dataKey="cash"
          stroke="#7F5AF0"
          strokeWidth={2}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="burn"
          stroke="#FF5470"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

// Market Size Chart Component
export const MarketSizeChart = () => {
  const data = [
    { name: "2020", total: 6.2, serviceable: 1.8, yourShare: 0.24 },
    { name: "2021", total: 6.8, serviceable: 2.0, yourShare: 0.28 },
    { name: "2022", total: 7.5, serviceable: 2.2, yourShare: 0.32 },
    { name: "2023", total: 8.2, serviceable: 2.4, yourShare: 0.32 },
    { name: "2024", total: 9.0, serviceable: 2.6, yourShare: 0.35 },
    { name: "2025", total: 9.9, serviceable: 2.8, yourShare: 0.38 },
  ]

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
        <XAxis dataKey="name" stroke="#666" />
        <YAxis stroke="#666" />
        <Tooltip
          contentStyle={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            border: "1px solid #333",
            borderRadius: "4px",
          }}
          labelStyle={{ color: "#fff" }}
        />
        <Line
          type="monotone"
          dataKey="total"
          name="Total Market"
          stroke="#7F5AF0"
          strokeWidth={2}
          dot={{ fill: "#7F5AF0", strokeWidth: 2 }}
        />
        <Line
          type="monotone"
          dataKey="serviceable"
          name="Serviceable Market"
          stroke="#2CB67D"
          strokeWidth={2}
          dot={{ fill: "#2CB67D", strokeWidth: 2 }}
        />
        <Line
          type="monotone"
          dataKey="yourShare"
          name="Your Market Share"
          stroke="#FF5470"
          strokeWidth={2}
          dot={{ fill: "#FF5470", strokeWidth: 2 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

// Revenue Streams Chart Component
export const RevenueStreamsChart = () => {
  const data = [
    { name: "Subscription", value: 65 },
    { name: "Implementation", value: 20 },
    { name: "Consulting", value: 15 },
  ]

  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            border: "1px solid #333",
            borderRadius: "4px",
          }}
          labelStyle={{ color: "#fff" }}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

// 5-Year Financial Forecast Chart Component
export const FiveYearForecastChart = () => {
  const data = [
    { year: "Year 1", revenue: 1.2, profit: 0.32, users: 5.8 },
    { year: "Year 2", revenue: 3.5, profit: 0.98, users: 12.4 },
    { year: "Year 3", revenue: 7.8, profit: 2.3, users: 24.7 },
    { year: "Year 4", revenue: 14.2, profit: 4.8, users: 42.3 },
    { year: "Year 5", revenue: 22.5, profit: 8.2, users: 68.5 },
  ]

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
        <XAxis dataKey="year" stroke="#666" />
        <YAxis yAxisId="left" stroke="#666" />
        <YAxis yAxisId="right" orientation="right" stroke="#666" />
        <Tooltip
          contentStyle={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            border: "1px solid #333",
            borderRadius: "4px",
          }}
          labelStyle={{ color: "#fff" }}
        />
        <Bar
          yAxisId="left"
          dataKey="revenue"
          fill="#7F5AF0"
          name="Revenue ($M)"
        />
        <Bar
          yAxisId="left"
          dataKey="profit"
          fill="#2CB67D"
          name="Profit ($M)"
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="users"
          stroke="#FF5470"
          strokeWidth={2}
          dot={{ fill: "#FF5470", strokeWidth: 2 }}
          name="Users (K)"
        />
      </BarChart>
    </ResponsiveContainer>
  )
} 