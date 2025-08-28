import { AppHeader } from "../AppHeader";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { 
  Target, 
  Users, 
  Zap, 
  Award,
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowRight,
  Code,
  TrendingUp,
  Shield
} from "lucide-react";
import { RouterContext } from "../Router";

interface AboutProps extends RouterContext {}

export function About(props: AboutProps) {
  const { navigate } = props;
  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-founder",
      bio: "Former Engineering Director at Google. Passionate about improving technical hiring.",
      avatar: "SC",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-founder",
      bio: "Ex-Principal Engineer at Meta. Expert in distributed systems and AI.",
      avatar: "MR",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Emily Johnson",
      role: "Head of Product",
      bio: "Former Product Manager at Microsoft. Focused on developer experience.",
      avatar: "EJ",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "David Park",
      role: "Head of Engineering",
      bio: "Previously Staff Engineer at Stripe. Scaling systems expert.",
      avatar: "DP",
      social: {
        linkedin: "#",
        github: "#"
      }
    }
  ];

  const stats = [
    { label: "Active Companies", value: "500+", icon: Users },
    { label: "Developers Assessed", value: "50K+", icon: Code },
    { label: "Success Rate", value: "94%", icon: Target },
    { label: "Time Saved", value: "2M+ hrs", icon: Zap }
  ];

  const values = [
    {
      title: "Developer First",
      description: "We're developers building for developers. Every feature is designed with the developer experience in mind.",
      icon: Code,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Data Driven",
      description: "Real skills over resume keywords. Our AI-powered assessments provide objective, unbiased evaluation.",
      icon: TrendingUp,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Privacy & Security",
      description: "Enterprise-grade security with SOC 2 compliance. Your data and candidates' privacy are our top priority.",
      icon: Shield,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Continuous Innovation",
      description: "We're constantly improving our platform based on the latest research in computer science education and assessment.",
      icon: Award,
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <>
      <AppHeader {...props} navigate={navigate} />
      
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="text-4xl sm:text-5xl mb-6">
              We're on a Mission to
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent ml-3">
                Fix Hiring
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              HackHire was born from frustration with traditional technical interviews. 
              We believe the best way to assess programming skills is through real code, not resumes.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <IconComponent className="w-5 h-5 text-blue-400 mr-2" />
                      <span className="text-2xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        {stat.value}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-3xl mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  In 2022, our founders Sarah and Marcus were frustrated by the ineffective hiring processes 
                  they experienced at major tech companies. Too many great developers were overlooked because 
                  they didn't fit traditional resume patterns, while others excelled at interviews but struggled 
                  with real programming tasks.
                </p>
                <p>
                  We started HackHire with a simple belief: the best way to evaluate a developer's skills 
                  is to see them code. Not through whiteboard algorithms or resume screening, but through 
                  practical challenges that mirror real-world development work.
                </p>
                <p>
                  Today, HackHire helps over 500 companies worldwide hire better developers faster, while 
                  giving candidates a fair chance to showcase their actual abilities.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-500/20">
              <h3 className="text-xl mb-4">The Problem We Solve</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-red-500/20 rounded-lg">
                    <Target className="w-4 h-4 text-red-400" />
                  </div>
                  <div>
                    <h4 className="text-sm mb-1">70% of bad hires</h4>
                    <p className="text-xs text-muted-foreground">
                      Could be prevented with better technical assessment
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-yellow-500/20 rounded-lg">
                    <Zap className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-sm mb-1">6 weeks average</h4>
                    <p className="text-xs text-muted-foreground">
                      Time to hire with traditional methods
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <Users className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-sm mb-1">Unconscious bias</h4>
                    <p className="text-xs text-muted-foreground">
                      In resume-based screening processes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do, from product decisions to how we treat our community.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="border-border/50 hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${value.gradient} mb-4 w-fit`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl mb-4">Meet the Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're a diverse group of engineers, designers, and researchers passionate about improving technical hiring.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="border-border/50 text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <Avatar className="h-20 w-20 mx-auto mb-4">
                      <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg">
                        {member.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-lg mb-1">{member.name}</h3>
                    <Badge variant="secondary" className="mb-3">{member.role}</Badge>
                    <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                    <div className="flex justify-center space-x-3">
                      {member.social.linkedin && (
                        <Button variant="ghost" size="sm">
                          <Linkedin className="w-4 h-4" />
                        </Button>
                      )}
                      {member.social.twitter && (
                        <Button variant="ghost" size="sm">
                          <Twitter className="w-4 h-4" />
                        </Button>
                      )}
                      {member.social.github && (
                        <Button variant="ghost" size="sm">
                          <Github className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Investors/Advisors */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl mb-4">Backed by Industry Leaders</h2>
              <p className="text-muted-foreground">
                Supported by leading VCs and advisors from top tech companies
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
              {["Accel Partners", "First Round", "Y Combinator", "Andreessen Horowitz"].map((investor, index) => (
                <div key={index} className="text-center p-4 bg-muted/20 rounded-lg">
                  <span className="text-sm text-muted-foreground">{investor}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-12 border border-blue-500/20">
              <h3 className="text-2xl mb-4">Let's Build the Future of Hiring Together</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you're a company looking to hire better developers or a developer wanting to showcase 
                your skills, we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={() => navigate('auth')}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}