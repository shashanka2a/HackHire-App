import { AlertTriangle, CheckCircle, FileText, Code2, TrendingUp, Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function ProblemSolution() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl mb-6">
            The Hiring Problem is 
            <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent ml-3">
              Real
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Traditional resume-based hiring gives weak signals about actual programming ability. 
            It's time for a better way.
          </p>
        </div>

        {/* Problem vs Solution Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Problem Side */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-2 bg-red-500/20 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-2xl">The Resume Problem</h3>
            </div>

            <div className="space-y-4">
              <Card className="border-red-500/20 bg-red-500/5">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <FileText className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="mb-2">Weak Signal</h4>
                      <p className="text-sm text-muted-foreground">
                        Resumes tell you what candidates say they can do, not what they actually can do.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-500/20 bg-red-500/5">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Users className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="mb-2">Bias & Inconsistency</h4>
                      <p className="text-sm text-muted-foreground">
                        Different reviewers focus on different things. University names over actual skills.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-500/20 bg-red-500/5">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <TrendingUp className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="mb-2">Poor Hire Quality</h4>
                      <p className="text-sm text-muted-foreground">
                        70% of bad hires could be avoided with better technical assessment.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Solution Side */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-2xl">The HackHire Solution</h3>
            </div>

            <div className="space-y-4">
              <Card className="border-green-500/20 bg-green-500/5">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Code2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="mb-2">Real Code, Real Skills</h4>
                      <p className="text-sm text-muted-foreground">
                        Candidates solve actual programming challenges that mirror your work environment.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-500/20 bg-green-500/5">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <TrendingUp className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="mb-2">Objective Scoring</h4>
                      <p className="text-sm text-muted-foreground">
                        AI-powered automatic scoring eliminates bias and provides consistent evaluation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-500/20 bg-green-500/5">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="mb-2">Better Hires</h4>
                      <p className="text-sm text-muted-foreground">
                        Companies using HackHire report 3x better hire quality and 50% faster hiring.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl mb-4">
              Ready to Hire Based on 
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent ml-2">
                Real Skills?
              </span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join hundreds of companies that have transformed their hiring process with data-driven technical assessments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}