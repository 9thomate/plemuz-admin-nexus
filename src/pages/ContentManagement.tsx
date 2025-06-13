
import { ContentStats } from "@/components/content-management/content-stats"
import { ContentTable } from "@/components/content-management/content-table"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, FileText, Users, Settings } from "lucide-react"

const ContentManagement = () => {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-gradient">
          Content Management
        </h2>
        <div className="flex items-center space-x-2">
          <Button>
            <Upload className="mr-2 h-4 w-4" />
            Upload Content
          </Button>
        </div>
      </div>

      <ContentStats />

      <Tabs defaultValue="all-content" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all-content">All Content</TabsTrigger>
          <TabsTrigger value="pending">Pending Review</TabsTrigger>
          <TabsTrigger value="approved">Approved</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all-content" className="space-y-4">
          <ContentTable />
        </TabsContent>
        
        <TabsContent value="pending" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Pending Reviews</CardTitle>
              <CardDescription>
                Content waiting for moderation approval
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContentTable />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="approved" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Approved Content</CardTitle>
              <CardDescription>
                Content that has been approved and is live
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContentTable />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="rejected" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Rejected Content</CardTitle>
              <CardDescription>
                Content that was rejected during moderation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContentTable />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Content Guidelines
            </CardTitle>
            <CardDescription>
              Review and update content submission guidelines
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              Manage Guidelines
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Artist Management
            </CardTitle>
            <CardDescription>
              Manage artist profiles and permissions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              View Artists
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Content Settings
            </CardTitle>
            <CardDescription>
              Configure content policies and auto-moderation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full">
              Settings
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ContentManagement
