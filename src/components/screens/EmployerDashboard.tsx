"use client";

import { useState } from "react";
import { AppHeader } from "../AppHeader";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { 
  Users, 
  TrendingUp, 
  Clock, 
  Target,
  Plus,
  Filter,
  Download,
  Eye,
  Star,
  CheckCircle,
  AlertCircle,
  UserCheck,
  Calendar,
  BarChart3
} from "lucide-react";
import { RouterContext } from "../Router";

interface EmployerDashboardProps extends RouterContext {}

export function EmployerDashboard(props: EmployerDashboardProps) {
  const { navigate, user } = props;
  const [selectedTimeframe, setSelectedTimeframe] = useState("month");
  const [selectedPosition, setSelectedPosition] = useState("all");

  const stats = {
    totalCandidates: 1247,
    activeAssessments: 8,
    completedAssessments: 156,
    averageScore: 72,
    topPerformers: 34,
    pendingReviews: 23
  };

  const candidates = [
    {
      id: 1,
      name: "Sarah Chen",
      email: "sarah@example.com",
      position: "Frontend Developer",
      score: 94,
      completedAt: "2 hours ago",
      status: "completed",
      avatar: "SC",
      skills: ["React", "TypeScript", "CSS"],
      experience: "3 years",
      location: "San Francisco, CA"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      email: "marcus@example.com",
      position: "Backend Developer",
      score: 87,
      completedAt: "5 hours ago",
      status: "completed",
      avatar: "MR",
      skills: ["Node.js", "PostgreSQL", "AWS"],
      experience: "5 years",
      location: "Austin, TX"
    },
    {
      id: 3,
      name: "Emily Johnson",
      email: "emily@example.com",
      position: "Full Stack Developer",
      score: 78,
      completedAt: "1 day ago",
      status: "in_progress",
      avatar: "EJ",
      skills: ["Python", "Django", "React"],
      experience: "2 years",
      location: "New York, NY"
    },
    {
      id: 4,
      name: "David Park",
      email: "david@example.com",
      position: "DevOps Engineer",
      score: 91,
      completedAt: "2 days ago",
      status: "reviewed",
      avatar: "DP",
      skills: ["Docker", "Kubernetes", "Terraform"],
      experience: "4 years",
      location: "Seattle, WA"
    }
  ];

  const assessments = [
    {
      id: 1,
      title: "Frontend Developer Assessment",
      position: "Frontend Developer",
      candidatesCount: 34,
      avgScore: 82,
      status: "active",
      createdAt: "1 week ago",
      challenges: ["Component Design", "State Management", "API Integration"]
    },
    {
      id: 2,
      title: "Backend Engineer Challenge",
      position: "Backend Developer", 
      candidatesCount: 28,
      avgScore: 75,
      status: "active",
      createdAt: "2 weeks ago",
      challenges: ["Database Design", "API Development", "Performance Optimization"]
    },
    {
      id: 3,
      title: "Full Stack Developer Test",
      position: "Full Stack Developer",
      candidatesCount: 45,
      avgScore: 78,
      status: "completed",
      createdAt: "3 weeks ago",
      challenges: ["Frontend + Backend", "System Architecture", "Testing"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400 bg-green-500/20';
      case 'in_progress': return 'text-yellow-400 bg-yellow-500/20';
      case 'reviewed': return 'text-blue-400 bg-blue-500/20';
      case 'active': return 'text-green-400 bg-green-500/20';
      default: return 'text-muted-foreground bg-muted/20';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 75) return 'text-yellow-400';
    if (score >= 60) return 'text-orange-400';
    return 'text-red-400';
  };

  return (
    <>
      <AppHeader {...props} />
      
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl mb-2">
                Hiring Dashboard
              </h1>
              <p className="text-muted-foreground">
                Manage assessments and review candidate performance
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                <Plus className="w-4 h-4 mr-2" />
                Create Assessment
              </Button>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
            <Card className="border-border/50">
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-4 h-4 text-blue-500 mr-2" />
                  <span className="text-xl">{stats.totalCandidates}</span>
                </div>
                <p className="text-xs text-muted-foreground">Total Candidates</p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <Target className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-xl">{stats.activeAssessments}</span>
                </div>
                <p className="text-xs text-muted-foreground">Active Tests</p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle className="w-4 h-4 text-purple-500 mr-2" />
                  <span className="text-xl">{stats.completedAssessments}</span>
                </div>
                <p className="text-xs text-muted-foreground">Completed</p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <BarChart3 className="w-4 h-4 text-yellow-500 mr-2" />
                  <span className="text-xl">{stats.averageScore}%</span>
                </div>
                <p className="text-xs text-muted-foreground">Avg Score</p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-4 h-4 text-orange-500 mr-2" />
                  <span className="text-xl">{stats.topPerformers}</span>
                </div>
                <p className="text-xs text-muted-foreground">Top Performers</p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <AlertCircle className="w-4 h-4 text-red-500 mr-2" />
                  <span className="text-xl">{stats.pendingReviews}</span>
                </div>
                <p className="text-xs text-muted-foreground">Pending Review</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="candidates" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="candidates">Candidates</TabsTrigger>
              <TabsTrigger value="assessments">Assessments</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            {/* Candidates Tab */}
            <TabsContent value="candidates" className="space-y-6">
              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Select value={selectedPosition} onValueChange={setSelectedPosition}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="All Positions" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Positions</SelectItem>
                    <SelectItem value="frontend">Frontend Developer</SelectItem>
                    <SelectItem value="backend">Backend Developer</SelectItem>
                    <SelectItem value="fullstack">Full Stack Developer</SelectItem>
                    <SelectItem value="devops">DevOps Engineer</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="week">This Week</SelectItem>
                    <SelectItem value="month">This Month</SelectItem>
                    <SelectItem value="quarter">This Quarter</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline" size="icon">
                  <Filter className="w-4 h-4" />
                </Button>
              </div>

              {/* Candidates List */}
              <div className="grid gap-4">
                {candidates.map((candidate) => (
                  <Card key={candidate.id} className="border-border/50 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-12 w-12">
                            <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                              {candidate.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="text-lg mb-1">{candidate.name}</h3>
                            <p className="text-sm text-muted-foreground mb-2">{candidate.email}</p>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <span>{candidate.position}</span>
                              <span>•</span>
                              <span>{candidate.experience}</span>
                              <span>•</span>
                              <span>{candidate.location}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-6">
                          {/* Skills */}
                          <div className="hidden lg:flex flex-wrap gap-1 max-w-[200px]">
                            {candidate.skills.map((skill, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>

                          {/* Score */}
                          <div className="text-center">
                            <div className={`text-2xl ${getScoreColor(candidate.score)}`}>
                              {candidate.score}%
                            </div>
                            <div className="text-xs text-muted-foreground">Score</div>
                          </div>

                          {/* Status */}
                          <div className="text-center">
                            <Badge className={`${getStatusColor(candidate.status)} mb-1`}>
                              {candidate.status.replace('_', ' ')}
                            </Badge>
                            <div className="text-xs text-muted-foreground">
                              {candidate.completedAt}
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-2" />
                              Review
                            </Button>
                            {candidate.status === 'completed' && (
                              <Button 
                                size="sm"
                                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                              >
                                <UserCheck className="w-4 h-4 mr-2" />
                                Interview
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Assessments Tab */}
            <TabsContent value="assessments" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {assessments.map((assessment) => (
                  <Card key={assessment.id} className="border-border/50 hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg mb-2">{assessment.title}</CardTitle>
                          <Badge className={`${getStatusColor(assessment.status)} mb-2`}>
                            {assessment.status}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="text-muted-foreground">Candidates</div>
                            <div className="text-lg">{assessment.candidatesCount}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground">Avg Score</div>
                            <div className={`text-lg ${getScoreColor(assessment.avgScore)}`}>
                              {assessment.avgScore}%
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="text-sm text-muted-foreground mb-2">Challenges</div>
                          <div className="flex flex-wrap gap-1">
                            {assessment.challenges.map((challenge, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {challenge}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-border/50">
                          <div className="text-xs text-muted-foreground">
                            Created {assessment.createdAt}
                          </div>
                          <Button size="sm" variant="outline">
                            Manage
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Performance Trends */}
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle>Performance Trends</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] flex items-center justify-center bg-muted/30 rounded-lg border border-border/50">
                      <div className="text-center">
                        <TrendingUp className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground">Performance charts would appear here</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Score Distribution */}
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle>Score Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">90-100%</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-muted rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full w-[60%]"></div>
                          </div>
                          <span className="text-sm text-muted-foreground">15 candidates</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">80-89%</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-muted rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full w-[40%]"></div>
                          </div>
                          <span className="text-sm text-muted-foreground">28 candidates</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">70-79%</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-muted rounded-full h-2">
                            <div className="bg-yellow-500 h-2 rounded-full w-[80%]"></div>
                          </div>
                          <span className="text-sm text-muted-foreground">42 candidates</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">60-69%</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-muted rounded-full h-2">
                            <div className="bg-orange-500 h-2 rounded-full w-[30%]"></div>
                          </div>
                          <span className="text-sm text-muted-foreground">18 candidates</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Below 60%</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-muted rounded-full h-2">
                            <div className="bg-red-500 h-2 rounded-full w-[20%]"></div>
                          </div>
                          <span className="text-sm text-muted-foreground">8 candidates</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}