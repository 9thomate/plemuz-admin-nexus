
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, Users, TrendingUp, DollarSign } from "lucide-react"

const stats = [
  {
    title: "Total Subscribers",
    value: "12,847",
    description: "+8% from last month",
    icon: Users,
  },
  {
    title: "Monthly Revenue",
    value: "$64,235",
    description: "+12% from last month", 
    icon: DollarSign,
  },
  {
    title: "Churn Rate",
    value: "3.2%",
    description: "-0.5% from last month",
    icon: TrendingUp,
  },
  {
    title: "Active Plans",
    value: "4",
    description: "Basic, Pro, Premium, Enterprise",
    icon: CreditCard,
  },
]

export function SubscriptionStats() {
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
