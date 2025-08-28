"use client";

import { useState } from "react";
import { AppHeader } from "../AppHeader";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { 
  Trophy, 
  Target, 
  Clock, 
  TrendingUp, 
  Code, 
  Award,
  Calendar,
  Play,
  CheckCircle,
  XCircle,
  Users,
  Star,
  Zap,
  BookOpen
} from "lucide-react";
import { RouterContext } from "../Router";

interface CandidateDashboardProps extends RouterContext {}

export function CandidateDashboard(props: CandidateDashboardProps) {
  const { navigate, params, user } = props;
  const [selectedTimeframe, setSelectedTimeframe] = useState("week");

  // Check for submission result from navigation
  const submissionResult = params?.submissionResult;

  const stats = {
    totalPoints: 2450,
    rank: 156,
    totalUsers: 15420,
    challengesSolved: 34,
    totalChallenges: 120,
    streakDays: 7,
    averageScore: 85
  };

  const recentSubmissions = [
    {
      id: 1,
      challenge: "JWT Auth with Magic Link Login",
      difficulty: "Medium",
      score: 95,
      status: "passed",
      submittedAt: "2 hours ago",
      points: 500,
      language: "JavaScript/Express",
      company: "TechStart Inc"
    },
    {
      id: 2,
      challenge: "Task Management Dashboard",
      difficulty: "Medium",
      score: 78,
      status: "partial",
      submittedAt: "1 day ago",
      points: 450,
      language: "React",
      company: "ProductiveAI"
    },
    {
      id: 3,
      challenge: "Payment Integration System",
      difficulty: "Hard",
      score: 88,
      status: "passed",
      submittedAt: "2 days ago",
      points: 750,
      language: "Node.js",
      company: "FinanceFlow"
    },
    {
      id: 4,
      challenge: "E-commerce Product Catalog",
      difficulty: "Hard",
      score: 65,
      status: "failed",
      submittedAt: "3 days ago",
      points: 0,
      language: "Full-Stack",
      company: "ShopFlow"
    }
  ];

  const achievements = [
    {
      id: 1,
      title: "First Blood",
      description: "Solved your first challenge",
      icon: "🏆",
      earned: true,
      earnedAt: "1 week ago"
    },
    {
      id: 2,
      title: "Speed Demon",
      description: "Solved 5 challenges in under 30 minutes",
      icon: "⚡",
      earned: true,
      earnedAt: "3 days ago"
    },
    {
      id: 3,
      title: "Language Master",
      description: "Solved challenges in 3 different languages",
      icon: "🌟",
      earned: true,
      earnedAt: "2 days ago"
    },
    {
      id: 4,
      title: "Perfect Score",
      description: "Get 100% on 10 challenges",
      icon: "💯",
      earned: false,
      progress: 7
    },
    {
      id: 5,
      title: "Hard Mode",
      description: "Complete 5 hard challenges",
      icon: "🔥",
      earned: false,
      progress: 1
    },
    {
      id: 6,
      title: "Consistency",
      description: "7-day solving streak",
      icon: "📅",
      earned: true,
      earnedAt: "Today"
    }
  ];

  const recommendedChallenges = [
    {
      title: "Real-time Chat API",
      difficulty: "Hard",
      category: "Backend",
      points: 700,
      estimatedTime: "3 hours",
      company: "ChatCorp"
    },
    {
      title: "File Upload & Processing Service",
      difficulty: "Medium", 
      category: "Backend",
      points: 650,
      estimatedTime: "2.5 hours",
      company: "FileVault"
    },
    {
      title: "Social Media Feed Algorithm",
      difficulty: "Medium",
      category: "Algorithm",
      points: 550,
      estimatedTime: "2 hours",
      company: "SocialNet"
    }
  ];

  const skillProgress = [
    { skill: "Authentication & Security", level: 85, challenges: 12 },
    { skill: "API Development", level: 78, challenges: 15 },
    { skill: "Frontend Frameworks", level: 70, challenges: 9 },
    { skill: "Database Design", level: 65, challenges: 8 },
    { skill: "System Architecture", level: 55, challenges: 5 }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'text-green-400 bg-green-500/20';
      case 'medium': return 'text-yellow-400 bg-yellow-500/20';
      case 'hard': return 'text-red-400 bg-red-500/20';
      default: return 'text-muted-foreground bg-muted/20';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'passed': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'failed': return <XCircle className="w-4 h-4 text-red-500" />;
      case 'partial': return <Target className="w-4 h-4 text-yellow-500" />;
      default: return null;
    }
  };

  return (
    <>
      <AppHeader {...props} />
      
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Welcome Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl mb-2">
                  Welcome back, <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">{user?.name || 'Developer'}</span>!
                </h1>
                <p className="text-muted-foreground">
                  Keep up the great work on your coding journey
                </p>
              </div>
              <Button 
                onClick={() => navigate('challenges')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
              >
                <Play className="w-4 h-4 mr-2" />
                Solve Challenge
              </Button>
            </div>

            {/* Submission Success Alert */}
            {submissionResult && (
              <div className="mt-6 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <div>
                    <h3 className="text-green-400 mb-1">Challenge Completed!</h3>
                    <p className="text-sm text-muted-foreground">
                      You solved "{submissionResult.challenge}" and earned {submissionResult.points} points! 
                      ({submissionResult.score}/{submissionResult.total} test cases passed)
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="border-border/50">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center mb-2">
                  <Trophy className="w-5 h-5 text-yellow-500 mr-2" />
                  <span className="text-2xl">{stats.totalPoints}</span>
                </div>
                <p className="text-sm text-muted-foreground">Total Points</p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-5 h-5 text-blue-500 mr-2" />
                  <span className="text-2xl">#{stats.rank}</span>
                </div>
                <p className="text-sm text-muted-foreground">Global Rank</p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center mb-2">
                  <Target className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-2xl">{stats.challengesSolved}</span>
                </div>
                <p className="text-sm text-muted-foreground">Challenges Solved</p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center mb-2">
                  <Zap className="w-5 h-5 text-orange-500 mr-2" />
                  <span className="text-2xl">{stats.streakDays}</span>
                </div>
                <p className="text-sm text-muted-foreground">Day Streak</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Progress Overview */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5" />
                    <span>Progress Overview</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Challenge Completion</span>
                      <span className="text-sm text-muted-foreground">
                        {stats.challengesSolved}/{stats.totalChallenges}
                      </span>
                    </div>
                    <Progress value={(stats.challengesSolved / stats.totalChallenges) * 100} className="h-2" />
                    
                    <div className="grid grid-cols-3 gap-4 pt-4">
                      <div className="text-center">
                        <div className="text-lg text-green-400">12</div>
                        <div className="text-xs text-muted-foreground">Easy</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg text-yellow-400">18</div>
                        <div className="text-xs text-muted-foreground">Medium</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg text-red-400">4</div>
                        <div className="text-xs text-muted-foreground">Hard</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Submissions */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="w-5 h-5" />
                    <span>Recent Submissions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentSubmissions.map((submission) => (
                      <div key={submission.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border/50">
                        <div className="flex items-center space-x-4">
                          {getStatusIcon(submission.status)}
                          <div>
                            <h4 className="mb-1">{submission.challenge}</h4>
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <Badge className={`text-xs ${getDifficultyColor(submission.difficulty)}`}>
                                {submission.difficulty}
                              </Badge>
                              <span>•</span>
                              <span>{submission.language}</span>
                              <span>•</span>
                              <span>{submission.submittedAt}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm">{submission.score}%</div>
                          <div className="text-xs text-muted-foreground">+{submission.points} pts</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Skill Progress */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="w-5 h-5" />
                    <span>Skill Progress</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {skillProgress.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">{skill.skill}</span>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}% • {skill.challenges} challenges
                          </span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Achievements */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="w-5 h-5" />
                    <span>Achievements</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {achievements.slice(0, 4).map((achievement) => (
                    <div key={achievement.id} className={`p-3 rounded-lg border ${
                      achievement.earned 
                        ? 'bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-yellow-500/30' 
                        : 'bg-muted/30 border-border/50'
                    }`}>
                      <div className="flex items-start space-x-3">
                        <span className="text-2xl">{achievement.icon}</span>
                        <div className="flex-1">
                          <h4 className="text-sm mb-1">{achievement.title}</h4>
                          <p className="text-xs text-muted-foreground mb-2">
                            {achievement.description}
                          </p>
                          {achievement.earned ? (
                            <Badge variant="secondary" className="text-xs">
                              Earned {achievement.earnedAt}
                            </Badge>
                          ) : (
                            <div className="space-y-1">
                              <div className="text-xs text-muted-foreground">
                                Progress: {achievement.progress}/10
                              </div>
                              <Progress value={((achievement.progress || 0) / 10) * 100} className="h-1" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Recommended Challenges */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Star className="w-5 h-5" />
                    <span>Recommended</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {recommendedChallenges.map((challenge, index) => (
                    <div key={index} className="p-3 bg-muted/30 rounded-lg border border-border/50 hover:bg-muted/50 transition-colors cursor-pointer">
                      <h4 className="text-sm mb-2">{challenge.title}</h4>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Badge className={`text-xs ${getDifficultyColor(challenge.difficulty)}`}>
                            {challenge.difficulty}
                          </Badge>
                          <span>{challenge.category}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{challenge.estimatedTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="text-xs text-muted-foreground">
                          +{challenge.points} points
                        </div>
                        <Button size="sm" variant="ghost" className="h-6 text-xs px-2">
                          Start
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}