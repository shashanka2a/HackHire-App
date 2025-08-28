import { Button } from "./ui/button";
import { ArrowRight, Code, Target, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-sm">
              <Zap className="w-4 h-4 mr-2 text-blue-400" />
              Revolutionary Hiring Platform
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight">
                Stop Hiring from
                <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Resumes.
                </span>
                <span className="block">
                  Start Hiring from
                  <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent ml-3">
                    Code.
                  </span>
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                Ditch unreliable resumes. Evaluate real programming skills through hands-on coding challenges and make data-driven hiring decisions.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-3 hover-zoom-sm">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-muted-foreground/30 hover:border-muted-foreground/50 hover-zoom-sm">
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center hover-zoom-sm cursor-pointer p-2 rounded-lg transition-all duration-300 hover:bg-muted/20">
                <div className="text-2xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">10K+</div>
                <div className="text-sm text-muted-foreground">Challenges</div>
              </div>
              <div className="text-center hover-zoom-sm cursor-pointer p-2 rounded-lg transition-all duration-300 hover:bg-muted/20">
                <div className="text-2xl bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">500+</div>
                <div className="text-sm text-muted-foreground">Companies</div>
              </div>
              <div className="text-center hover-zoom-sm cursor-pointer p-2 rounded-lg transition-all duration-300 hover:bg-muted/20">
                <div className="text-2xl bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">99%</div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            {/* Code visualization */}
            <div className="relative w-full max-w-md">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-20"></div>
              
              {/* Code blocks */}
              <div className="relative bg-card border rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <Code className="w-5 h-5 text-muted-foreground" />
                </div>
                
                <div className="space-y-2 font-mono text-sm">
                  <div className="text-blue-400">
                    function <span className="text-yellow-400">solveChallenge</span>() {"{"}
                  </div>
                  <div className="pl-4 text-muted-foreground">
                    {"// Real coding skills"}
                  </div>
                  <div className="pl-4 text-green-400">
                    return <span className="text-orange-400">&quot;hired&quot;</span>;
                  </div>
                  <div className="text-blue-400">{"}"}</div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs px-3 py-1 rounded-full">
                  ✓ Passed
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full">
                  Score: 98%
                </div>
              </div>
            </div>

            {/* Floating icons */}
            <div className="absolute top-10 left-10 animate-bounce">
              <Target className="w-8 h-8 text-blue-400" />
            </div>
            <div className="absolute bottom-20 right-10 animate-pulse">
              <Zap className="w-6 h-6 text-purple-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}