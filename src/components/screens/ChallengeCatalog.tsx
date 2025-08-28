"use client";

import { useState } from "react";
import { AppHeader } from "../AppHeader";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { 
  Search, 
  Filter, 
  Clock, 
  Users, 
  Trophy, 
  Star,
  Code,
  Zap,
  Target,
  BookOpen
} from "lucide-react";
import { RouterContext } from "../Router";

interface ChallengeCatalogProps extends RouterContext {}

const challenges = [
  {
    id: 1,
    title: "JWT Auth with Magic Link Login",
    difficulty: "Medium",
    category: "Authentication",
    description: "Build a complete authentication system with JWT tokens and passwordless magic link login.",
    timeLimit: "2 hours",
    submissions: 1250,
    successRate: 85,
    points: 500,
    tags: ["JWT", "Authentication", "Email", "Security"],
    gradient: "from-green-500 to-emerald-500",
    company: "TechStart Inc"
  },
  {
    id: 2,
    title: "E-commerce Product Catalog",
    difficulty: "Hard",
    category: "Full-Stack",
    description: "Create a responsive e-commerce product catalog with search, filters, and shopping cart functionality.",
    timeLimit: "4 hours",
    submissions: 890,
    successRate: 68,
    points: 800,
    tags: ["React", "Node.js", "Database", "UI/UX"],
    gradient: "from-yellow-500 to-orange-500",
    company: "ShopFlow"
  },
  {
    id: 3,
    title: "Real-time Chat API",
    difficulty: "Hard",
    category: "Backend",
    description: "Design and implement a scalable real-time chat API with WebSocket support and message persistence.",
    timeLimit: "3 hours",
    submissions: 445,
    successRate: 42,
    points: 700,
    tags: ["WebSocket", "API Design", "Real-time", "Scaling"],
    gradient: "from-red-500 to-pink-500",
    company: "ChatCorp"
  },
  {
    id: 4,
    title: "Task Management Dashboard",
    difficulty: "Medium",
    category: "Frontend",
    description: "Build an interactive task management dashboard with drag-and-drop, filtering, and data visualization.",
    timeLimit: "3 hours",
    submissions: 567,
    successRate: 55,
    points: 600,
    tags: ["React", "Drag & Drop", "Charts", "UI/UX"],
    gradient: "from-blue-500 to-cyan-500",
    company: "ProductiveAI"
  },
  {
    id: 5,
    title: "Payment Integration System",
    difficulty: "Hard",
    category: "Integration",
    description: "Integrate Stripe payment processing with webhook handling and subscription management.",
    timeLimit: "3 hours",
    submissions: 2100,
    successRate: 78,
    points: 750,
    tags: ["Stripe", "Webhooks", "Subscriptions", "Security"],
    gradient: "from-purple-500 to-violet-500",
    company: "FinanceFlow"
  },
  {
    id: 6,
    title: "Content Management System",
    difficulty: "Hard",
    category: "Full-Stack",
    description: "Create a headless CMS with role-based permissions, content versioning, and RESTful API.",
    timeLimit: "4 hours",
    submissions: 320,
    successRate: 38,
    points: 900,
    tags: ["CMS", "RBAC", "API", "Database Design"],
    gradient: "from-indigo-500 to-blue-500",
    company: "ContentLab"
  },
  {
    id: 7,
    title: "Social Media Feed Algorithm",
    difficulty: "Medium",
    category: "Algorithm",
    description: "Design an algorithm for a social media feed that personalizes content based on user engagement.",
    timeLimit: "2 hours",
    submissions: 654,
    successRate: 72,
    points: 550,
    tags: ["Algorithms", "Machine Learning", "Data Processing"],
    gradient: "from-pink-500 to-rose-500",
    company: "SocialNet"
  },
  {
    id: 8,
    title: "File Upload & Processing Service",
    difficulty: "Medium",
    category: "Backend",
    description: "Build a file upload service with image processing, virus scanning, and cloud storage integration.",
    timeLimit: "2.5 hours",
    submissions: 423,
    successRate: 63,
    points: 650,
    tags: ["File Upload", "Image Processing", "AWS/GCP", "Security"],
    gradient: "from-teal-500 to-cyan-500",
    company: "FileVault"
  }
];

export function ChallengeCatalog(props: ChallengeCatalogProps) {
  const { navigate } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredChallenges = challenges.filter(challenge => {
    const matchesSearch = challenge.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         challenge.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         challenge.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesDifficulty = selectedDifficulty === "all" || 
                             challenge.difficulty.toLowerCase() === selectedDifficulty;
    
    const matchesCategory = selectedCategory === "all" || 
                           challenge.category.toLowerCase() === selectedCategory.toLowerCase();
    
    return matchesSearch && matchesDifficulty && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'hard': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const handleChallengeClick = (challenge: any) => {
    navigate('challenge-detail', { challenge });
  };

  return (
    <>
      <AppHeader {...props} navigate={navigate} />
      
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl">Challenge Catalog</h1>
                <p className="text-muted-foreground">
                  Browse and solve coding challenges to showcase your skills
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <Card className="border-border/50">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    {challenges.length}
                  </div>
                  <div className="text-sm text-muted-foreground">Total Challenges</div>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                    5,672
                  </div>
                  <div className="text-sm text-muted-foreground">Total Submissions</div>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    64%
                  </div>
                  <div className="text-sm text-muted-foreground">Avg Success Rate</div>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                    12
                  </div>
                  <div className="text-sm text-muted-foreground">Categories</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search challenges, topics, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="authentication">Authentication</SelectItem>
                <SelectItem value="frontend">Frontend</SelectItem>
                <SelectItem value="backend">Backend</SelectItem>
                <SelectItem value="full-stack">Full-Stack</SelectItem>
                <SelectItem value="integration">Integration</SelectItem>
                <SelectItem value="algorithm">Algorithm</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" size="icon">
              <Filter className="w-4 h-4" />
            </Button>
          </div>

          {/* Challenge Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredChallenges.map((challenge) => (
              <Card 
                key={challenge.id} 
                className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-border cursor-pointer"
                onClick={() => handleChallengeClick(challenge)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="mb-2 group-hover:text-blue-400 transition-colors">
                        {challenge.title}
                      </h3>
                      <Badge className={`text-xs ${getDifficultyColor(challenge.difficulty)} mb-2`}>
                        {challenge.difficulty}
                      </Badge>
                    </div>
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${challenge.gradient}`}>
                      <Code className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {challenge.description}
                  </p>
                  
                  {challenge.company && (
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">{challenge.company.charAt(0)}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Posted by {challenge.company}</span>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {challenge.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {challenge.tags.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{challenge.tags.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>{challenge.timeLimit}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <Users className="w-3 h-3" />
                      <span>{challenge.submissions}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <Target className="w-3 h-3" />
                      <span>{challenge.successRate}%</span>
                    </div>
                  </div>

                  {/* Points */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
                    <div className="flex items-center space-x-1">
                      <Trophy className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm">{challenge.points} pts</span>
                    </div>
                    <Button size="sm" variant="ghost" className="group-hover:bg-blue-500/10 group-hover:text-blue-400">
                      Solve Challenge
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {filteredChallenges.length === 0 && (
            <div className="text-center py-12">
              <div className="p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg mb-2">No challenges found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search criteria or filters
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}