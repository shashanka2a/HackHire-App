"use client";

import { AppHeader } from "../AppHeader";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Switch } from "../ui/switch";
import { useState } from "react";
import { 
  Check, 
  X, 
  Star, 
  Zap, 
  Shield, 
  Users,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { RouterContext } from "../Router";

interface PricingProps extends RouterContext {}

export function Pricing(props: PricingProps) {
  const { navigate } = props;
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams and startups",
      price: { monthly: 49, annual: 39 },
      popular: false,
      features: [
        "Up to 50 candidates/month",
        "Basic challenge library",
        "Standard auto-scoring",
        "Email support",
        "Basic analytics",
        "2 team members"
      ],
      limitations: [
        "No custom challenges",
        "Limited integrations",
        "Basic reporting"
      ],
      cta: "Start Free Trial",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Professional",
      description: "Best for growing companies",
      price: { monthly: 149, annual: 119 },
      popular: true,
      features: [
        "Up to 200 candidates/month",
        "Full challenge library",
        "Advanced auto-scoring",
        "Priority support",
        "Advanced analytics",
        "10 team members",
        "Custom challenges",
        "API access",
        "Slack integration"
      ],
      limitations: [
        "Limited white-labeling"
      ],
      cta: "Start Free Trial",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      price: { monthly: "Custom", annual: "Custom" },
      popular: false,
      features: [
        "Unlimited candidates",
        "Custom challenge creation",
        "White-label solution",
        "Dedicated support",
        "Custom integrations",
        "Unlimited team members",
        "Advanced security",
        "SLA guarantee",
        "Custom reporting",
        "On-premise deployment"
      ],
      limitations: [],
      cta: "Contact Sales",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const features = [
    {
      category: "Core Features",
      items: [
        { name: "Challenge Library", starter: "Basic (500+)", pro: "Full (10,000+)", enterprise: "Full + Custom" },
        { name: "Auto Scoring", starter: "Standard", pro: "Advanced AI", enterprise: "Custom AI Models" },
        { name: "Candidate Limit", starter: "50/month", pro: "200/month", enterprise: "Unlimited" },
        { name: "Team Members", starter: "2", pro: "10", enterprise: "Unlimited" },
        { name: "Support", starter: "Email", pro: "Priority", enterprise: "Dedicated" }
      ]
    },
    {
      category: "Analytics & Reporting",
      items: [
        { name: "Basic Analytics", starter: true, pro: true, enterprise: true },
        { name: "Advanced Reporting", starter: false, pro: true, enterprise: true },
        { name: "Custom Dashboards", starter: false, pro: false, enterprise: true },
        { name: "Data Export", starter: false, pro: true, enterprise: true },
        { name: "Real-time Insights", starter: false, pro: true, enterprise: true }
      ]
    },
    {
      category: "Integrations",
      items: [
        { name: "Email Notifications", starter: true, pro: true, enterprise: true },
        { name: "Slack Integration", starter: false, pro: true, enterprise: true },
        { name: "ATS Integration", starter: false, pro: true, enterprise: true },
        { name: "Custom Webhooks", starter: false, pro: false, enterprise: true },
        { name: "API Access", starter: false, pro: true, enterprise: true }
      ]
    }
  ];

  const getPrice = (plan: any) => {
    if (typeof plan.price.monthly === 'string') return plan.price.monthly;
    return isAnnual ? plan.price.annual : plan.price.monthly;
  };

  const renderFeatureValue = (value: any) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-4 h-4 text-green-500" />
      ) : (
        <X className="w-4 h-4 text-red-500" />
      );
    }
    return <span className="text-sm">{value}</span>;
  };

  return (
    <>
      <AppHeader {...props} navigate={navigate} />
      
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-sm mb-6">
              <Sparkles className="w-4 h-4 mr-2 text-blue-400" />
              Transparent Pricing
            </div>
            
            <h1 className="text-4xl sm:text-5xl mb-6">
              Choose the Perfect
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent ml-3">
                Plan
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              Start hiring better developers today with our flexible pricing options. 
              All plans include a 14-day free trial.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4">
              <span className={`text-sm ${!isAnnual ? '' : 'text-muted-foreground'}`}>Monthly</span>
              <Switch 
                checked={isAnnual} 
                onCheckedChange={setIsAnnual}
                className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-blue-500 data-[state=checked]:to-purple-600"
              />
              <span className={`text-sm ${isAnnual ? '' : 'text-muted-foreground'}`}>
                Annual 
                <Badge className="ml-2 bg-green-500/20 text-green-400 border-green-500/30">
                  Save 20%
                </Badge>
              </span>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative border-border/50 ${
                  plan.popular 
                    ? 'ring-2 ring-blue-500/50 border-blue-500/50 scale-105' 
                    : 'hover:shadow-lg transition-all duration-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${plan.gradient} mb-4 mx-auto`}>
                    {index === 0 && <Zap className="w-6 h-6 text-white" />}
                    {index === 1 && <Users className="w-6 h-6 text-white" />}
                    {index === 2 && <Shield className="w-6 h-6 text-white" />}
                  </div>
                  
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  
                  <div className="mb-6">
                    {typeof getPrice(plan) === 'string' ? (
                      <div className="text-3xl">{getPrice(plan)}</div>
                    ) : (
                      <>
                        <div className="text-4xl">
                          <span className="text-2xl text-muted-foreground">$</span>
                          {getPrice(plan)}
                          <span className="text-lg text-muted-foreground">
                            /{isAnnual ? 'mo' : 'month'}
                          </span>
                        </div>
                        {isAnnual && (
                          <div className="text-sm text-muted-foreground">
                            Billed annually (${(plan.price.annual as number) * 12})
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.limitations.map((limitation, limitIndex) => (
                      <div key={limitIndex} className="flex items-center space-x-3 opacity-60">
                        <X className="w-4 h-4 text-red-500 flex-shrink-0" />
                        <span className="text-sm">{limitation}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700' 
                        : ''
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                    onClick={() => navigate('auth')}
                  >
                    {plan.cta}
                    {plan.cta !== 'Contact Sales' && <ArrowRight className="w-4 h-4 ml-2" />}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Feature Comparison */}
          <div className="mb-16">
            <h2 className="text-2xl text-center mb-8">Feature Comparison</h2>
            
            <div className="bg-card/50 rounded-lg border border-border/50 overflow-hidden">
              {features.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <div className="bg-muted/30 px-6 py-3 border-b border-border/50">
                    <h3 className="text-lg">{category.category}</h3>
                  </div>
                  
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-border/50 last:border-b-0">
                      <div className="text-sm">{item.name}</div>
                      <div className="text-center">{renderFeatureValue(item.starter)}</div>
                      <div className="text-center">{renderFeatureValue(item.pro)}</div>
                      <div className="text-center">{renderFeatureValue(item.enterprise)}</div>
                    </div>
                  ))}
                </div>
              ))}
              
              {/* Header row for feature table */}
              <div className="grid grid-cols-4 gap-4 px-6 py-3 bg-muted/50 border-b border-border/50">
                <div></div>
                <div className="text-center text-sm">Starter</div>
                <div className="text-center text-sm">Professional</div>
                <div className="text-center text-sm">Enterprise</div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl text-center mb-8">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {[
                {
                  q: "Can I change plans anytime?",
                  a: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
                },
                {
                  q: "What happens during the free trial?",
                  a: "You get full access to all features of your chosen plan for 14 days. No credit card required to start."
                },
                {
                  q: "Do you offer custom solutions?",
                  a: "Yes, our Enterprise plan includes custom solutions, white-labeling, and on-premise deployment options."
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept all major credit cards, PayPal, and can set up invoice billing for Enterprise customers."
                }
              ].map((faq, index) => (
                <Card key={index} className="border-border/50">
                  <CardContent className="p-6">
                    <h4 className="mb-2">{faq.q}</h4>
                    <p className="text-sm text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-12 border border-blue-500/20">
              <h3 className="text-2xl mb-4">
                Ready to Transform Your
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent ml-2">
                  Hiring Process?
                </span>
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Start your 14-day free trial today. No credit card required.
              </p>
              <Button 
                size="lg" 
                onClick={() => navigate('auth')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}