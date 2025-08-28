import { 
  BookOpen, 
  Zap, 
  Trophy, 
  BarChart3, 
  Code, 
  Users, 
  Timer, 
  Shield,
  Sparkles,
  Target
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useStaggeredAnimation, useScrollAnimation } from "../hooks/useScrollAnimation";

export function Features() {
  const { ref: featuresRef, visibleItems } = useStaggeredAnimation(8, 150);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2);
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.2);
  
  const features = [
    {
      icon: BookOpen,
      title: "Challenge Catalog",
      description: "10,000+ curated coding challenges across all skill levels and programming languages. From algorithms to system design.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: Zap,
      title: "Auto-Scoring",
      description: "AI-powered automatic evaluation of code quality, efficiency, and correctness. Get instant, objective results without human bias.",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10"
    },
    {
      icon: Trophy,
      title: "Live Leaderboards",
      description: "Real-time rankings and competitive coding environments. Gamify assessments to engage top talent and identify standout performers.",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/10"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Deep insights into candidate performance, hiring metrics, and team efficiency. Make data-driven decisions with comprehensive reports.",
      gradient: "from-green-500 to-teal-500",
      bgGradient: "from-green-500/10 to-teal-500/10"
    },
    {
      icon: Code,
      title: "Multi-Language Support",
      description: "Support for 20+ programming languages with real-time code execution and testing in secure sandboxed environments.",
      gradient: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-500/10 to-blue-500/10"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Invite hiring managers, technical leads, and team members to review and evaluate candidates collaboratively.",
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-500/10 to-rose-500/10"
    },
    {
      icon: Timer,
      title: "Timed Assessments",
      description: "Customizable time limits and deadlines. Create pressure scenarios that mirror real development environments.",
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-500/10 to-orange-500/10"
    },
    {
      icon: Shield,
      title: "Anti-Cheating",
      description: "Advanced plagiarism detection, code similarity analysis, and secure testing environments to ensure assessment integrity.",
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-500/10 to-pink-500/10"
    }
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-sm mb-6">
            <Sparkles className="w-4 h-4 mr-2 text-blue-400" />
            Platform Features
          </div>
          
          <h2 className="text-3xl sm:text-4xl mb-6">
            Everything You Need to
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent ml-3">
              Hire Smart
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground">
            Comprehensive tools and features designed to streamline your technical hiring process 
            from challenge creation to final decision.
          </p>
        </div>

        {/* Features Grid */}
        <div ref={featuresRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isVisible = visibleItems[index];
            return (
              <Card 
                key={index} 
                className={`relative group hover:shadow-lg hover-lift hover-zoom-sm border-border/50 hover:border-border cursor-pointer transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`}></div>
                
                <CardHeader className="relative">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.gradient} mb-4 w-fit`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div 
          ref={statsRef}
          className={`mt-20 text-center transition-all duration-700 ${
            statsVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-gradient-to-r from-muted/50 to-muted/30 rounded-2xl p-8 border border-border/50">
            <h3 className="text-2xl mb-8">Trusted by Industry Leaders</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="space-y-2">
                <div className="text-3xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">3x</div>
                <div className="text-sm text-muted-foreground">Better Hire Quality</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">50%</div>
                <div className="text-sm text-muted-foreground">Faster Hiring</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">90%</div>
                <div className="text-sm text-muted-foreground">Time Saved</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">99%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}