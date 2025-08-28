"use client";

import { useState } from "react";
import { AppHeader } from "../AppHeader";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Textarea } from "../ui/textarea";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { 
  Eye, 
  CheckCircle, 
  XCircle, 
  Clock, 
  Code,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  Download,
  Play,
  Star,
  AlertTriangle
} from "lucide-react";
import { RouterContext } from "../Router";

interface ReviewerPanelProps extends RouterContext {}

export function ReviewerPanel(props: ReviewerPanelProps) {
  const { navigate, user } = props;
  const [selectedSubmission, setSelectedSubmission] = useState<any>(null);
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);

  const pendingSubmissions = [
    {
      id: 1,
      candidate: "Sarah Chen",
      email: "sarah@example.com",
      challenge: "Two Sum Algorithm",
      position: "Frontend Developer",
      submittedAt: "2 hours ago",
      timeSpent: "25 min",
      language: "JavaScript",
      avatar: "SC",
      priority: "high",
      code: `function twoSum(nums, target) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        map.set(nums[i], i);
    }
    
    return [];
}`,
      testResults: [
        { test: "Basic test case", passed: true, time: "2ms" },
        { test: "Edge case - duplicates", passed: true, time: "1ms" },
        { test: "Large array", passed: true, time: "5ms" },
        { test: "No solution case", passed: false, time: "3ms" }
      ],
      autoScore: 85
    },
    {
      id: 2,
      candidate: "Marcus Rodriguez",
      email: "marcus@example.com",
      challenge: "Binary Tree Traversal",
      position: "Backend Developer",
      submittedAt: "4 hours ago",
      timeSpent: "42 min",
      language: "Python",
      avatar: "MR",
      priority: "medium",
      autoScore: 78
    },
    {
      id: 3,
      candidate: "Emily Johnson",
      email: "emily@example.com",
      challenge: "API Design Challenge",
      position: "Full Stack Developer",
      submittedAt: "6 hours ago",
      timeSpent: "55 min",
      language: "Node.js",
      avatar: "EJ",
      priority: "low",
      autoScore: 92
    }
  ];

  const completedReviews = [
    {
      id: 1,
      candidate: "David Park",
      challenge: "System Design",
      finalScore: 88,
      reviewedAt: "1 day ago",
      decision: "approved",
      avatar: "DP"
    },
    {
      id: 2,
      candidate: "Lisa Wang",
      challenge: "Algorithm Optimization",
      finalScore: 65,
      reviewedAt: "2 days ago",
      decision: "rejected",
      avatar: "LW"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-400 bg-red-500/20';
      case 'medium': return 'text-yellow-400 bg-yellow-500/20';
      case 'low': return 'text-green-400 bg-green-500/20';
      default: return 'text-muted-foreground bg-muted/20';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 85) return 'text-green-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const handleApprove = () => {
    // Handle approval logic
    setSelectedSubmission(null);
  };

  const handleReject = () => {
    // Handle rejection logic
    setSelectedSubmission(null);
  };

  const handleNeedsReview = () => {
    // Handle needs review logic
    setSelectedSubmission(null);
  };

  return (
    <>
      <AppHeader {...props} />
      
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl mb-2">Review Panel</h1>
              <p className="text-muted-foreground">
                Review and evaluate candidate submissions
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30">
                {pendingSubmissions.length} pending reviews
              </Badge>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export Reports
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Submissions List */}
            <div className="space-y-6">
              <Tabs defaultValue="pending">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="pending">Pending ({pendingSubmissions.length})</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>

                <TabsContent value="pending" className="space-y-4 mt-6">
                  {pendingSubmissions.map((submission) => (
                    <Card 
                      key={submission.id} 
                      className={`border-border/50 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                        selectedSubmission?.id === submission.id ? 'ring-2 ring-blue-500/50 border-blue-500/50' : ''
                      }`}
                      onClick={() => setSelectedSubmission(submission)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm">
                                {submission.avatar}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h4 className="text-sm">{submission.candidate}</h4>
                              <p className="text-xs text-muted-foreground">{submission.position}</p>
                            </div>
                          </div>
                          <Badge className={`text-xs ${getPriorityColor(submission.priority)}`}>
                            {submission.priority}
                          </Badge>
                        </div>

                        <div className="space-y-2">
                          <h5 className="text-sm">{submission.challenge}</h5>
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <div className="flex items-center space-x-2">
                              <Clock className="w-3 h-3" />
                              <span>{submission.timeSpent}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Code className="w-3 h-3" />
                              <span>{submission.language}</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">{submission.submittedAt}</span>
                            <div className={`text-sm ${getScoreColor(submission.autoScore)}`}>
                              Auto: {submission.autoScore}%
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="completed" className="space-y-4 mt-6">
                  {completedReviews.map((review) => (
                    <Card key={review.id} className="border-border/50">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm">
                                {review.avatar}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h4 className="text-sm">{review.candidate}</h4>
                              <p className="text-xs text-muted-foreground">{review.challenge}</p>
                            </div>
                          </div>
                          <Badge className={review.decision === 'approved' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}>
                            {review.decision}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{review.reviewedAt}</span>
                          <div className={`text-sm ${getScoreColor(review.finalScore)}`}>
                            Final: {review.finalScore}%
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
              </Tabs>
            </div>

            {/* Review Panel */}
            <div className="lg:col-span-2">
              {selectedSubmission ? (
                <div className="space-y-6">
                  {/* Candidate Info */}
                  <Card className="border-border/50">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-12 w-12">
                            <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                              {selectedSubmission.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="text-xl">{selectedSubmission.candidate}</h3>
                            <p className="text-muted-foreground">{selectedSubmission.email}</p>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                              <span>{selectedSubmission.position}</span>
                              <span>•</span>
                              <span>{selectedSubmission.challenge}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-2xl ${getScoreColor(selectedSubmission.autoScore)}`}>
                            {selectedSubmission.autoScore}%
                          </div>
                          <div className="text-sm text-muted-foreground">Auto Score</div>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>

                  {/* Code Review */}
                  <Card className="border-border/50">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Code className="w-5 h-5" />
                        <span>Code Submission</span>
                        <Badge variant="secondary">{selectedSubmission.language}</Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-muted/30 rounded-lg p-4 border border-border/50">
                        <pre className="text-sm overflow-x-auto">
                          <code>{selectedSubmission.code}</code>
                        </pre>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Test Results */}
                  {selectedSubmission.testResults && (
                    <Card className="border-border/50">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <Play className="w-5 h-5" />
                          <span>Test Results</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {selectedSubmission.testResults?.map((result: any, index: number) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-border/50">
                            <div className="flex items-center space-x-3">
                              {result.passed ? (
                                <CheckCircle className="w-4 h-4 text-green-500" />
                              ) : (
                                <XCircle className="w-4 h-4 text-red-500" />
                              )}
                              <span className="text-sm">{result.test}</span>
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {result.time}
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  )}

                  {/* Review Section */}
                  <Card className="border-border/50">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <MessageSquare className="w-5 h-5" />
                        <span>Review & Feedback</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Rating */}
                      <div>
                        <label className="text-sm mb-2 block">Manual Score (0-100)</label>
                        <div className="flex items-center space-x-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Button
                              key={star}
                              variant="ghost"
                              size="sm"
                              onClick={() => setRating(star)}
                              className={rating >= star ? 'text-yellow-400' : 'text-muted-foreground'}
                            >
                              <Star className="w-5 h-5" fill={rating >= star ? 'currentColor' : 'none'} />
                            </Button>
                          ))}
                          <span className="text-sm text-muted-foreground ml-4">
                            {rating === 0 ? 'No rating' : `${rating * 20}%`}
                          </span>
                        </div>
                      </div>

                      {/* Feedback */}
                      <div>
                        <label className="text-sm mb-2 block">Detailed Feedback</label>
                        <Textarea
                          value={feedback}
                          onChange={(e) => setFeedback(e.target.value)}
                          placeholder="Provide detailed feedback on code quality, efficiency, best practices, etc..."
                          className="min-h-[100px]"
                        />
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center space-x-3 pt-4">
                        <Button 
                          onClick={handleApprove}
                          className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                        >
                          <ThumbsUp className="w-4 h-4 mr-2" />
                          Approve
                        </Button>
                        <Button 
                          onClick={handleReject}
                          variant="destructive"
                        >
                          <ThumbsDown className="w-4 h-4 mr-2" />
                          Reject
                        </Button>
                        <Button 
                          onClick={handleNeedsReview}
                          variant="outline"
                        >
                          <AlertTriangle className="w-4 h-4 mr-2" />
                          Needs Review
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <Card className="border-border/50 h-[600px] flex items-center justify-center">
                  <div className="text-center">
                    <Eye className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg mb-2">Select a Submission to Review</h3>
                    <p className="text-muted-foreground">
                      Choose a submission from the left panel to start reviewing
                    </p>
                  </div>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}