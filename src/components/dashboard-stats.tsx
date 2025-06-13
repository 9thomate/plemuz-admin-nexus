
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Music, DollarSign, TrendingUp, PlayCircle, UserCheck } from "lucide-react"

const stats = [
  {
    title: "Total Users",
    value: "24,682",
    change: "+12.5%",
    changeType: "positive" as const,
    icon: Users,
    description: "Active users this month"
  },
  {
    title: "Total Artists",
    value: "3,247",
    change: "+8.2%",
    changeType: "positive" as const,
    icon: Music,
    description: "Registered artists"
  },
  {
    title: "Monthly Revenue",
    value: "$127,394",
    change: "+23.1%",
    changeType: "positive" as const,
    icon: DollarSign,
    description: "Subscription revenue"
  },
  {
    title: "Streams Today",
    value: "89,432",
    change: "+15.3%",
    changeType: "positive" as const,
    icon: PlayCircle,
    description: "Total plays today"
  },
  {
    title: "Active Subscriptions",
    value: "18,234",
    change: "+5.7%",
    changeType: "positive" as const,
    icon: UserCheck,
    description: "Premium subscribers"
  },
  {
    title: "Growth Rate",
    value: "34.5%",
    change: "+2.1%",
    changeType: "positive" as const,
    icon: TrendingUp,
    description: "User acquisition"
  }
]

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat, index) => (
        <Card key={index} className="group hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {stat.title}
            </CardTitle>
            <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <stat.icon className="h-4 w-4 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="flex items-center space-x-1 text-xs text-muted-foreground">
              <span className={`font-medium ${
                stat.changeType === 'positive' ? 'text-emerald-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
              <span>from last month</span>
            </div>
            <CardDescription className="mt-1">
              {stat.description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
