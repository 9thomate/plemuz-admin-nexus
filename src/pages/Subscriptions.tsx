
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Plus, Edit, CreditCard, TrendingUp, Users, DollarSign, Calendar } from "lucide-react"

const Subscriptions = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingPlan, setEditingPlan] = useState<any>(null)

  // Mock data for demonstration
  const subscriptionPlans = [
    {
      id: 1,
      name: "Free",
      price: 0,
      billing: "monthly",
      features: ["Limited streaming", "Ads included", "Basic quality"],
      subscribers: 25670,
      revenue: 0,
      status: "active"
    },
    {
      id: 2,
      name: "Premium",
      price: 9.99,
      billing: "monthly",
      features: ["Unlimited streaming", "No ads", "High quality", "Offline downloads"],
      subscribers: 8420,
      revenue: 84200,
      status: "active"
    },
    {
      id: 3,
      name: "Premium Annual",
      price: 99.99,
      billing: "yearly",
      features: ["Unlimited streaming", "No ads", "High quality", "Offline downloads", "2 months free"],
      subscribers: 3280,
      revenue: 328000,
      status: "active"
    },
    {
      id: 4,
      name: "Artist Pro",
      price: 19.99,
      billing: "monthly",
      features: ["All Premium features", "Upload unlimited tracks", "Advanced analytics", "Priority support"],
      subscribers: 1250,
      revenue: 24975,
      status: "active"
    }
  ]

  const subscriptionMetrics = [
    { month: "Jan", free: 22000, premium: 7800, artist: 1100 },
    { month: "Feb", free: 23500, premium: 8200, artist: 1200 },
    { month: "Mar", free: 25670, premium: 8420, artist: 1250 },
  ]

  const recentSubscriptions = [
    { id: 1, user: "Alice Johnson", plan: "Premium", action: "subscribed", date: "2024-01-15", amount: "$9.99" },
    { id: 2, user: "Bob Smith", plan: "Artist Pro", action: "upgraded", date: "2024-01-15", amount: "$19.99" },
    { id: 3, user: "Carol Davis", plan: "Premium", action: "cancelled", date: "2024-01-14", amount: "-" },
    { id: 4, user: "David Wilson", plan: "Premium Annual", action: "subscribed", date: "2024-01-14", amount: "$99.99" },
  ]

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive"> = {
      active: "default",
      inactive: "secondary",
      discontinued: "destructive"
    }
    return <Badge variant={variants[status] || "default"}>{status}</Badge>
  }

  const getActionBadge = (action: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive"> = {
      subscribed: "default",
      upgraded: "default",
      cancelled: "destructive",
      downgraded: "secondary"
    }
    return <Badge variant={variants[action] || "default"}>{action}</Badge>
  }

  const totalRevenue = subscriptionPlans.reduce((sum, plan) => sum + plan.revenue, 0)
  const totalSubscribers = subscriptionPlans.reduce((sum, plan) => sum + plan.subscribers, 0)

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-gradient">
          Subscription & Plans
        </h2>
        <div className="text-sm text-muted-foreground">
          Manage subscription plans and track metrics
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="plans">Plans</TabsTrigger>
          <TabsTrigger value="metrics">Metrics</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${totalRevenue.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">
                  +12% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Subscribers</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalSubscribers.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">
                  +8% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24.5%</div>
                <p className="text-xs text-muted-foreground">
                  +2.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Churn Rate</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.2%</div>
                <p className="text-xs text-muted-foreground">
                  -0.5% from last month
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Plan Distribution</CardTitle>
                <CardDescription>Current subscriber distribution across plans</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {subscriptionPlans.map((plan) => {
                    const percentage = ((plan.subscribers / totalSubscribers) * 100).toFixed(1)
                    return (
                      <div key={plan.id} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 rounded-full bg-primary" />
                          <span className="text-sm font-medium">{plan.name}</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {plan.subscribers.toLocaleString()} ({percentage}%)
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Revenue by Plan</CardTitle>
                <CardDescription>Monthly revenue breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {subscriptionPlans.filter(plan => plan.revenue > 0).map((plan) => {
                    const percentage = ((plan.revenue / totalRevenue) * 100).toFixed(1)
                    return (
                      <div key={plan.id} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 rounded-full bg-primary" />
                          <span className="text-sm font-medium">{plan.name}</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          ${plan.revenue.toLocaleString()} ({percentage}%)
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="plans" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Subscription Plans</h3>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={() => setEditingPlan(null)}>
                  <Plus className="mr-2 h-4 w-4" />
                  Create Plan
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>{editingPlan ? 'Edit Plan' : 'Create New Plan'}</DialogTitle>
                  <DialogDescription>
                    {editingPlan ? 'Modify the subscription plan details.' : 'Create a new subscription plan for your users.'}
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      defaultValue={editingPlan?.name || ""}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="price" className="text-right">
                      Price
                    </Label>
                    <Input
                      id="price"
                      type="number"
                      step="0.01"
                      defaultValue={editingPlan?.price || ""}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="billing" className="text-right">
                      Billing
                    </Label>
                    <div className="col-span-3 flex items-center space-x-2">
                      <Switch id="billing" />
                      <Label htmlFor="billing">Yearly</Label>
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" onClick={() => setIsDialogOpen(false)}>
                    {editingPlan ? 'Update Plan' : 'Create Plan'}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Plan Name</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Billing</TableHead>
                    <TableHead>Subscribers</TableHead>
                    <TableHead>Revenue</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {subscriptionPlans.map((plan) => (
                    <TableRow key={plan.id}>
                      <TableCell className="font-medium">{plan.name}</TableCell>
                      <TableCell>${plan.price}</TableCell>
                      <TableCell>{plan.billing}</TableCell>
                      <TableCell>{plan.subscribers.toLocaleString()}</TableCell>
                      <TableCell>${plan.revenue.toLocaleString()}</TableCell>
                      <TableCell>{getStatusBadge(plan.status)}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem 
                              onClick={() => {
                                setEditingPlan(plan)
                                setIsDialogOpen(true)
                              }}
                            >
                              <Edit className="mr-2 h-4 w-4" />
                              Edit Plan
                            </DropdownMenuItem>
                            <DropdownMenuItem>View Analytics</DropdownMenuItem>
                            <DropdownMenuItem>Manage Features</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              Discontinue Plan
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="metrics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Subscription Growth</CardTitle>
                <CardDescription>Monthly subscriber growth by plan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {subscriptionMetrics.map((metric, index) => (
                    <div key={index} className="grid grid-cols-4 gap-4 text-sm">
                      <div className="font-medium">{metric.month}</div>
                      <div>Free: {metric.free.toLocaleString()}</div>
                      <div>Premium: {metric.premium.toLocaleString()}</div>
                      <div>Artist: {metric.artist.toLocaleString()}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Metrics</CardTitle>
                <CardDescription>Important subscription KPIs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Average Revenue Per User (ARPU)</span>
                    <span className="font-medium">$12.34</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Customer Lifetime Value (CLV)</span>
                    <span className="font-medium">$147.50</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Monthly Recurring Revenue (MRR)</span>
                    <span className="font-medium">$437,175</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Annual Recurring Revenue (ARR)</span>
                    <span className="font-medium">$5,246,100</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="activity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Recent Subscription Activity
              </CardTitle>
              <CardDescription>
                Latest subscription changes and user actions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Plan</TableHead>
                    <TableHead>Action</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentSubscriptions.map((subscription) => (
                    <TableRow key={subscription.id}>
                      <TableCell className="font-medium">{subscription.user}</TableCell>
                      <TableCell>{subscription.plan}</TableCell>
                      <TableCell>{getActionBadge(subscription.action)}</TableCell>
                      <TableCell>{subscription.date}</TableCell>
                      <TableCell className={subscription.action === 'cancelled' ? 'text-muted-foreground' : ''}>
                        {subscription.amount}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Subscriptions
