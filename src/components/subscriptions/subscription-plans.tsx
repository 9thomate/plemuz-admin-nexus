
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Edit, Trash2, Users } from "lucide-react"

const plans = [
  {
    id: "basic",
    name: "Basic",
    price: "$9.99",
    period: "month",
    subscribers: 4521,
    status: "active",
    features: ["Up to 100 songs", "Basic analytics", "Email support"],
  },
  {
    id: "pro", 
    name: "Pro",
    price: "$19.99",
    period: "month",
    subscribers: 5832,
    status: "active",
    features: ["Up to 1000 songs", "Advanced analytics", "Priority support", "Custom branding"],
  },
  {
    id: "premium",
    name: "Premium",
    price: "$39.99",
    period: "month",
    subscribers: 2147,
    status: "active",
    features: ["Unlimited songs", "Full analytics suite", "24/7 support", "API access"],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "$99.99",
    period: "month",
    subscribers: 347,
    status: "active",
    features: ["Everything in Premium", "White-label solution", "Dedicated manager", "Custom integrations"],
  },
]

export function SubscriptionPlans() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
      {plans.map((plan) => (
        <Card key={plan.id} className="relative">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription>
                  <span className="text-2xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={plan.status === "active" ? "default" : "secondary"}>
                  {plan.status}
                </Badge>
                <Switch checked={plan.status === "active"} />
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              {plan.subscribers.toLocaleString()} subscribers
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium">Features:</h4>
              <ul className="space-y-1">
                {plan.features.map((feature, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-2 pt-4">
              <Button variant="outline" size="sm" className="flex-1">
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </Button>
              <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
