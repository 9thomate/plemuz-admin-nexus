
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Search, Plus, Filter, Users, Mic, Music, Building2, Shield, DollarSign } from "lucide-react"

const ContentManagement = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  // Mock data for demonstration
  const artists = [
    { id: 1, name: "Sarah Johnson", email: "sarah@example.com", status: "active", followers: "12.5K", songs: 24 },
    { id: 2, name: "Mike Chen", email: "mike@example.com", status: "pending", followers: "8.2K", songs: 18 },
    { id: 3, name: "Emma Davis", email: "emma@example.com", status: "suspended", followers: "25.1K", songs: 42 },
  ]

  const muzcasters = [
    { id: 1, name: "Alex Rodriguez", email: "alex@example.com", status: "active", subscribers: "15.3K", content: 67 },
    { id: 2, name: "Lisa Wang", email: "lisa@example.com", status: "active", subscribers: "9.8K", content: 23 },
    { id: 3, name: "John Smith", email: "john@example.com", status: "review", subscribers: "18.7K", content: 89 },
  ]

  const producers = [
    { id: 1, name: "David Lee", email: "david@example.com", status: "active", projects: 15, collaborations: 8 },
    { id: 2, name: "Maria Garcia", email: "maria@example.com", status: "active", projects: 22, collaborations: 12 },
    { id: 3, name: "Tom Wilson", email: "tom@example.com", status: "inactive", projects: 5, collaborations: 3 },
  ]

  const organizations = [
    { id: 1, name: "Universal Records", email: "contact@universal.com", status: "active", artists: 45, type: "Label" },
    { id: 2, name: "Indie Collective", email: "hello@indie.com", status: "pending", artists: 12, type: "Collective" },
    { id: 3, name: "Beat Factory", email: "info@beatfactory.com", status: "active", artists: 8, type: "Studio" },
  ]

  const sponsoredContent = [
    { id: 1, title: "Summer Beats Campaign", sponsor: "Nike", status: "active", budget: "$5,000", reach: "45K" },
    { id: 2, title: "New Artist Spotlight", sponsor: "Spotify", status: "scheduled", budget: "$3,200", reach: "28K" },
    { id: 3, title: "Genre Discovery", sponsor: "Apple Music", status: "completed", budget: "$8,500", reach: "67K" },
  ]

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
      active: "default",
      pending: "secondary",
      suspended: "destructive",
      review: "outline",
      inactive: "secondary",
      scheduled: "secondary",
      completed: "default"
    }
    return <Badge variant={variants[status] || "default"}>{status}</Badge>
  }

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-gradient">
          Content Management
        </h2>
        <div className="text-sm text-muted-foreground">
          Manage all content creators and moderation
        </div>
      </div>

      <Tabs defaultValue="artists" className="space-y-4">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="artists">Artists</TabsTrigger>
          <TabsTrigger value="muzcasters">Muzcasters</TabsTrigger>
          <TabsTrigger value="producers">Producers</TabsTrigger>
          <TabsTrigger value="organizations">Organizations</TabsTrigger>
          <TabsTrigger value="moderation">Moderation</TabsTrigger>
          <TabsTrigger value="sponsored">Sponsored</TabsTrigger>
        </TabsList>

        <div className="flex items-center space-x-2">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="suspended">Suspended</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add New
          </Button>
        </div>

        <TabsContent value="artists" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-5 w-5" />
                Artists Management
              </CardTitle>
              <CardDescription>
                Manage artist profiles and their content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Followers</TableHead>
                    <TableHead>Songs</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {artists.map((artist) => (
                    <TableRow key={artist.id}>
                      <TableCell className="font-medium">{artist.name}</TableCell>
                      <TableCell>{artist.email}</TableCell>
                      <TableCell>{getStatusBadge(artist.status)}</TableCell>
                      <TableCell>{artist.followers}</TableCell>
                      <TableCell>{artist.songs}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Profile</DropdownMenuItem>
                            <DropdownMenuItem>Edit Details</DropdownMenuItem>
                            <DropdownMenuItem>Manage Content</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              Suspend Account
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

        <TabsContent value="muzcasters" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mic className="mr-2 h-5 w-5" />
                Muzcasters Management
              </CardTitle>
              <CardDescription>
                Manage content creators and their channels
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Subscribers</TableHead>
                    <TableHead>Content</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {muzcasters.map((muzcaster) => (
                    <TableRow key={muzcaster.id}>
                      <TableCell className="font-medium">{muzcaster.name}</TableCell>
                      <TableCell>{muzcaster.email}</TableCell>
                      <TableCell>{getStatusBadge(muzcaster.status)}</TableCell>
                      <TableCell>{muzcaster.subscribers}</TableCell>
                      <TableCell>{muzcaster.content}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Channel</DropdownMenuItem>
                            <DropdownMenuItem>Edit Profile</DropdownMenuItem>
                            <DropdownMenuItem>Content Analytics</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              Review Content
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

        <TabsContent value="producers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Music className="mr-2 h-5 w-5" />
                Producers Management
              </CardTitle>
              <CardDescription>
                Manage music producers and their collaborations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Projects</TableHead>
                    <TableHead>Collaborations</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {producers.map((producer) => (
                    <TableRow key={producer.id}>
                      <TableCell className="font-medium">{producer.name}</TableCell>
                      <TableCell>{producer.email}</TableCell>
                      <TableCell>{getStatusBadge(producer.status)}</TableCell>
                      <TableCell>{producer.projects}</TableCell>
                      <TableCell>{producer.collaborations}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Portfolio</DropdownMenuItem>
                            <DropdownMenuItem>Edit Profile</DropdownMenuItem>
                            <DropdownMenuItem>Manage Projects</DropdownMenuItem>
                            <DropdownMenuItem>View Analytics</DropdownMenuItem>
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

        <TabsContent value="organizations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building2 className="mr-2 h-5 w-5" />
                Organizations Management
              </CardTitle>
              <CardDescription>
                Manage record labels, studios, and collectives
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Artists</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {organizations.map((org) => (
                    <TableRow key={org.id}>
                      <TableCell className="font-medium">{org.name}</TableCell>
                      <TableCell>{org.email}</TableCell>
                      <TableCell>{org.type}</TableCell>
                      <TableCell>{getStatusBadge(org.status)}</TableCell>
                      <TableCell>{org.artists}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Manage Artists</DropdownMenuItem>
                            <DropdownMenuItem>View Contracts</DropdownMenuItem>
                            <DropdownMenuItem>Financial Overview</DropdownMenuItem>
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

        <TabsContent value="moderation" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Reviews</CardTitle>
                <Shield className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">
                  Content awaiting moderation
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Flagged Content</CardTitle>
                <Shield className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">
                  Content reported by users
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Auto-Blocked</CardTitle>
                <Shield className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">
                  Content blocked by AI filters
                </p>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Content Moderation Queue</CardTitle>
              <CardDescription>
                Review and moderate flagged content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <p className="font-medium">Song: "Midnight Vibes"</p>
                      <p className="text-sm text-muted-foreground">Artist: John Doe • Reported: Inappropriate lyrics</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">Review</Button>
                      <Button variant="destructive" size="sm">Block</Button>
                      <Button size="sm">Approve</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sponsored" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="mr-2 h-5 w-5" />
                Sponsored Content Management
              </CardTitle>
              <CardDescription>
                Manage advertising campaigns and sponsored content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Campaign</TableHead>
                    <TableHead>Sponsor</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Budget</TableHead>
                    <TableHead>Reach</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sponsoredContent.map((campaign) => (
                    <TableRow key={campaign.id}>
                      <TableCell className="font-medium">{campaign.title}</TableCell>
                      <TableCell>{campaign.sponsor}</TableCell>
                      <TableCell>{getStatusBadge(campaign.status)}</TableCell>
                      <TableCell>{campaign.budget}</TableCell>
                      <TableCell>{campaign.reach}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Campaign</DropdownMenuItem>
                            <DropdownMenuItem>Edit Details</DropdownMenuItem>
                            <DropdownMenuItem>View Analytics</DropdownMenuItem>
                            <DropdownMenuItem>Pause Campaign</DropdownMenuItem>
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
      </Tabs>
    </div>
  )
}

export default ContentManagement
