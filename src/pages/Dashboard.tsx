
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, BookOpen, Clock, Plus, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { SidebarTrigger } from "@/components/ui/sidebar";

const Dashboard = () => {
  const stats = [
    {
      title: "Active Grants",
      value: "8",
      icon: FileText,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Stories Available",
      value: "24",
      icon: BookOpen,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Hours Saved",
      value: "156",
      icon: Clock,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  const recentActivity = [
    { action: "Grant application completed", funder: "Ford Foundation", time: "2 hours ago" },
    { action: "Story added to library", title: "Youth Education Success", time: "1 day ago" },
    { action: "Proposal workspace created", funder: "Gates Foundation", time: "2 days ago" },
  ];

  return (
    <div className="flex-1 bg-white">
      <div className="border-b border-gray-200 bg-white px-6 py-4">
        <div className="flex items-center gap-4">
          <SidebarTrigger />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">Welcome back! Here's your grant writing overview.</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <Card key={stat.title} className="border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                <Link to="/grant-autofill" className="flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Start New Grant
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full border-gray-300">
                <Link to="/story-recommendations" className="flex items-center gap-2">
                  <Search className="w-4 h-4" />
                  View Story Matches
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                      <p className="text-sm text-gray-600">
                        {activity.funder || activity.title}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
