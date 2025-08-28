import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      title: "VP of Engineering",
      company: "TechFlow",
      avatar: "SC",
      rating: 5,
      quote: "HackHire transformed our hiring process. We've reduced bad hires by 80% and our developers are much more engaged in the process.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      name: "Marcus Rodriguez",
      title: "CTO",
      company: "StartupLabs",
      avatar: "MR",
      rating: 5,
      quote: "The auto-scoring feature is incredible. What used to take our team hours now takes minutes, and the quality is consistently better.",
      gradient: "from-green-500 to-teal-500"
    },
    {
      name: "Emily Johnson",
      title: "Head of Talent",
      company: "InnovateCorp",
      avatar: "EJ",
      rating: 5,
      quote: "Finally, a platform that helps us identify real programming talent. The challenges are realistic and the insights are actionable.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "David Park",
      title: "Engineering Manager",
      company: "CloudScale",
      avatar: "DP",
      rating: 5,
      quote: "Our hiring success rate increased from 60% to 95% after implementing HackHire. The ROI has been incredible.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      name: "Lisa Wang",
      title: "Technical Recruiter",
      company: "DevFirst",
      avatar: "LW",
      rating: 5,
      quote: "The leaderboard feature creates healthy competition and helps candidates showcase their best work. Win-win for everyone.",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      name: "Alex Thompson",
      title: "Senior Developer",
      company: "CodeMasters",
      avatar: "AT",
      rating: 5,
      quote: "As someone who reviews code regularly, I love how HackHire provides consistent, objective evaluation criteria.",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  const companyLogos = [
    "TechFlow", "StartupLabs", "InnovateCorp", "CloudScale", "DevFirst", "CodeMasters",
    "DataDyne", "AppSphere", "ByteForge", "NetCore", "DevOps Pro", "AI Systems"
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl mb-6">
            Loved by 
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent ml-3">
              Hiring Teams
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            See what engineering leaders, recruiters, and developers are saying about HackHire.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative group hover:shadow-lg transition-all duration-300">
              {/* Quote icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-8 h-8" />
              </div>
              
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className={`bg-gradient-to-r ${testimonial.gradient} text-white`}>
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.title} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Logos */}
        <div className="text-center">
          <h3 className="text-lg text-muted-foreground mb-8">
            Trusted by 500+ Companies Worldwide
          </h3>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center opacity-60">
            {companyLogos.map((company, index) => (
              <div 
                key={index}
                className="flex items-center justify-center h-12 px-4 py-2 bg-muted/30 rounded-lg border border-border/30 hover:border-border/50 transition-colors"
              >
                <span className="text-sm text-muted-foreground">{company}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl mb-4">
              Join the 
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent ml-2">
                Revolution
              </span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Be part of the companies that are transforming technical hiring with data-driven assessments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-sm text-muted-foreground">⚡ Setup in 5 minutes</div>
              <div className="text-sm text-muted-foreground">🎯 No credit card required</div>
              <div className="text-sm text-muted-foreground">📊 Free 14-day trial</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}