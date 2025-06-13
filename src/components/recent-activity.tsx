
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Clock, Music, User, DollarSign, AlertTriangle } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "user_registration",
    user: "Alex Chen",
    avatar: "/placeholder.svg",
    action: "New user registered",
    time: "2 minutes ago",
    badge: "New User",
    badgeVariant: "default" as const,
    icon: User
  },
  {
    id: 2,
    type: "content_upload",
    user: "Sarah Williams",
    avatar: "/placeholder.svg",
    action: "Uploaded new track 'Midnight Dreams'",
    time: "15 minutes ago",
    badge: "Upload",
    badgeVariant: "secondary" as const,
    icon: Music
  },
  {
    id: 3,
    type: "payment",
    user: "Mike Johnson",
    avatar: "/placeholder.svg",
    action: "Subscription payment processed",
    time: "1 hour ago",
    badge: "Payment",
    badgeVariant: "default" as const,
    icon: DollarSign
  },
  {
    id: 4,
    type: "content_flag",
    user: "Content Moderator",
    avatar: "/placeholder.svg",
    action: "Flagged content for review",
    time: "2 hours ago",
    badge: "Flag",
    badgeVariant: "destructive" as const,
    icon: AlertTriangle
  },
  {
    id: 5,
    type: "user_verification",
    user: "Emma Davis",
    avatar: "/placeholder.svg",
    action: "Artist verification approved",
    time: "3 hours ago",
    badge: "Verified",
    badgeVariant: "default" as const,
    icon: User
  }
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Recent Activity
        </CardTitle>
        <CardDescription>
          Latest actions and events in the system
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
            <Avatar className="h-10 w-10">
              <AvatarImage src={activity.avatar} alt={activity.user} />
              <AvatarFallback className="bg-primary/10">
                <activity.icon className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium leading-none">
                  {activity.user}
                </p>
                <Badge variant={activity.badgeVariant} className="text-xs">
                  {activity.badge}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                {activity.action}
              </p>
              <p className="text-xs text-muted-foreground">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
