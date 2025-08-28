"use client";

import { useState } from "react";
import { Landing } from "./screens/Landing";
import { Auth } from "./screens/Auth";
import { ChallengeCatalog } from "./screens/ChallengeCatalog";
import { ChallengeDetail } from "./screens/ChallengeDetail";
import { Submission } from "./screens/Submission";
import { CandidateDashboard } from "./screens/CandidateDashboard";
import { EmployerDashboard } from "./screens/EmployerDashboard";
import { ReviewerPanel } from "./screens/ReviewerPanel";
import { Pricing } from "./screens/Pricing";
import { About } from "./screens/About";

export type Screen = 
  | 'landing'
  | 'auth'
  | 'challenges'
  | 'challenge-detail'
  | 'submission'
  | 'candidate-dashboard'
  | 'employer-dashboard'
  | 'reviewer-panel'
  | 'pricing'
  | 'about';

export interface RouterContext {
  currentScreen: Screen;
  navigate: (screen: Screen, params?: any) => void;
  params: any;
  user: any;
  setUser: (user: any) => void;
}

export function Router() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing');
  const [params, setParams] = useState<any>({});
  const [user, setUser] = useState<any>(null);

  const navigate = (screen: Screen, newParams?: any) => {
    setCurrentScreen(screen);
    if (newParams) {
      setParams(newParams);
    }
  };

  const routerContext: RouterContext = {
    currentScreen,
    navigate,
    params,
    user,
    setUser
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'landing':
        return <Landing {...routerContext} />;
      case 'auth':
        return <Auth {...routerContext} />;
      case 'challenges':
        return <ChallengeCatalog {...routerContext} />;
      case 'challenge-detail':
        return <ChallengeDetail {...routerContext} />;
      case 'submission':
        return <Submission {...routerContext} />;
      case 'candidate-dashboard':
        return <CandidateDashboard {...routerContext} />;
      case 'employer-dashboard':
        return <EmployerDashboard {...routerContext} />;
      case 'reviewer-panel':
        return <ReviewerPanel {...routerContext} />;
      case 'pricing':
        return <Pricing {...routerContext} />;
      case 'about':
        return <About {...routerContext} />;
      default:
        return <Landing {...routerContext} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {renderScreen()}
    </div>
  );
}