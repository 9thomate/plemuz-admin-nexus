
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

const revenueData = [
  { month: "Jan", revenue: 45000, users: 2400 },
  { month: "Feb", revenue: 52000, users: 2800 },
  { month: "Mar", revenue: 48000, users: 2600 },
  { month: "Apr", revenue: 61000, users: 3200 },
  { month: "May", revenue: 55000, users: 2900 },
  { month: "Jun", revenue: 67000, users: 3400 },
  { month: "Jul", revenue: 74000, users: 3800 },
  { month: "Aug", revenue: 69000, users: 3600 },
  { month: "Sep", revenue: 78000, users: 4100 },
  { month: "Oct", revenue: 85000, users: 4400 },
  { month: "Nov", revenue: 91000, users: 4700 },
  { month: "Dec", revenue: 98000, users: 5000 }
]

const streamingData = [
  { day: "Mon", streams: 12500 },
  { day: "Tue", streams: 14200 },
  { day: "Wed", streams: 13800 },
  { day: "Thu", streams: 15600 },
  { day: "Fri", streams: 18900 },
  { day: "Sat", streams: 22100 },
  { day: "Sun", streams: 19700 }
]

const genreData = [
  { name: "Pop", value: 35, color: "#3B2AC0" },
  { name: "Hip Hop", value: 25, color: "#5432AB" },
  { name: "Rock", value: 20, color: "#6C3995" },
  { name: "Electronic", value: 12, color: "#d061c2" },
  { name: "Jazz", value: 5, color: "#432DB9" },
  { name: "Other", value: 3, color: "#64379C" }
]

export function DashboardCharts() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Revenue & User Growth</CardTitle>
          <CardDescription>
            Monthly revenue and user acquisition trends
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-2">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="month" className="text-muted-foreground" />
              <YAxis className="text-muted-foreground" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                stroke="#d061c2" 
                strokeWidth={3}
                dot={{ fill: "#d061c2", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: "#d061c2", strokeWidth: 2 }}
              />
              <Line 
                type="monotone" 
                dataKey="users" 
                stroke="#3B2AC0" 
                strokeWidth={3}
                dot={{ fill: "#3B2AC0", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: "#3B2AC0", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Daily Streams</CardTitle>
          <CardDescription>
            Stream count for the last 7 days
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-2">
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={streamingData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="day" className="text-muted-foreground" />
              <YAxis className="text-muted-foreground" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="streams" 
                stroke="#5432AB" 
                fill="url(#streamGradient)"
                strokeWidth={2}
              />
              <defs>
                <linearGradient id="streamGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#5432AB" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#5432AB" stopOpacity={0.05}/>
                </linearGradient>
              </defs>
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Genre Distribution</CardTitle>
          <CardDescription>
            Most popular music genres
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-2">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={genreData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {genreData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {genreData.map((genre, index) => (
              <div key={index} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: genre.color }}
                />
                <span className="text-sm text-muted-foreground">
                  {genre.name} ({genre.value}%)
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
