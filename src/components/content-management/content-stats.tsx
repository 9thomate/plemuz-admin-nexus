
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Music, Users, TrendingUp, Clock } from "lucide-react"

const stats = [
  {
    title: "Total Tracks",
    value: "24,571",
    description: "+12% from last month",
    icon: Music,
  },
  {
    title: "Active Artists",
    value: "3,247",
    description: "+18% from last month", 
    icon: Users,
  },
  {
    title: "Monthly Plays",
    value: "2.1M",
    description: "+25% from last month",
    icon: TrendingUp,
  },
  {
    title: "Pending Reviews",
    value: "127",
    description: "Requires attention",
    icon: Clock,
  },
]

export function ContentStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
