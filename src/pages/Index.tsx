
import { AdminHeader } from "@/components/admin-header"
import { DashboardStats } from "@/components/dashboard-stats"
import { DashboardCharts } from "@/components/dashboard-charts"
import { RecentActivity } from "@/components/recent-activity"

const Index = () => {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-gradient">
          Dashboard Overview
        </h2>
        <div className="text-sm text-muted-foreground">
          Welcome back! Here's what's happening with Plemuz today.
        </div>
      </div>
      
      <DashboardStats />
      
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <DashboardCharts />
        </div>
        <div className="space-y-4">
          <RecentActivity />
        </div>
      </div>
    </div>
  )
}

export default Index
