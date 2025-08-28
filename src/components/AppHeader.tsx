"use client";

import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { 
  Menu, 
  X, 
  Code, 
  Trophy, 
  BarChart3, 
  Users, 
  Settings,
  LogOut,
  Search,
  Bell
} from "lucide-react";
import { useState } from "react";
import { RouterContext } from "./Router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface AppHeaderProps extends RouterContext {}

export function AppHeader({ currentScreen, navigate, params, user, setUser }: AppHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isLanding = currentScreen === 'landing';
  const isAuthenticated = !!user;

  const handleAuth = () => {
    navigate('auth');
  };

  const handleLogout = () => {
    setUser(null);
    navigate('landing');
  };

  return (
    <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => navigate('landing')}
              className="flex-shrink-0 hover:opacity-80 transition-opacity"
            >
              <h1 className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-xl">
                HackHire
              </h1>
            </button>
          </div>

          {/* Navigation */}
          {isAuthenticated && !isLanding && (
            <nav className="hidden md:flex items-center space-x-6">
              <Button
                variant={currentScreen === 'challenges' ? 'secondary' : 'ghost'}
                size="sm"
                onClick={() => navigate('challenges')}
                className="flex items-center space-x-2"
              >
                <Code className="w-4 h-4" />
                <span>Challenges</span>
              </Button>
              
              {user?.role === 'candidate' && (
                <Button
                  variant={currentScreen === 'candidate-dashboard' ? 'secondary' : 'ghost'}
                  size="sm"
                  onClick={() => navigate('candidate-dashboard')}
                  className="flex items-center space-x-2"
                >
                  <BarChart3 className="w-4 h-4" />
                  <span>Dashboard</span>
                </Button>
              )}
              
              {user?.role === 'employer' && (
                <Button
                  variant={currentScreen === 'employer-dashboard' ? 'secondary' : 'ghost'}
                  size="sm"
                  onClick={() => navigate('employer-dashboard')}
                  className="flex items-center space-x-2"
                >
                  <Users className="w-4 h-4" />
                  <span>Dashboard</span>
                </Button>
              )}
              
              {user?.role === 'reviewer' && (
                <Button
                  variant={currentScreen === 'reviewer-panel' ? 'secondary' : 'ghost'}
                  size="sm"
                  onClick={() => navigate('reviewer-panel')}
                  className="flex items-center space-x-2"
                >
                  <Trophy className="w-4 h-4" />
                  <span>Review</span>
                </Button>
              )}
            </nav>
          )}

          {/* Landing Page Navigation */}
          {isLanding && (
            <nav className="hidden md:block">
              <div className="flex items-baseline space-x-8">
                <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </a>
                <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                  Testimonials
                </a>
                <button 
                  onClick={() => navigate('pricing')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Pricing
                </button>
                <button 
                  onClick={() => navigate('about')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </button>
              </div>
            </nav>
          )}

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Search - only when authenticated */}
            {isAuthenticated && !isLanding && (
              <Button variant="ghost" size="sm">
                <Search className="w-4 h-4" />
              </Button>
            )}

            {/* Notifications - only when authenticated */}
            {isAuthenticated && !isLanding && (
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-4 h-4" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-gradient-to-r from-red-500 to-pink-500">
                  3
                </Badge>
              </Button>
            )}

            {/* User Menu or Auth */}
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-2 px-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm">
                        {user.name?.charAt(0) || 'U'}
                      </AvatarFallback>
                    </Avatar>
                    <span className="hidden sm:block">{user.name}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem className="flex items-center space-x-2">
                    <Settings className="w-4 h-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    onClick={handleLogout}
                    className="flex items-center space-x-2 text-red-500"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="hidden md:flex items-center space-x-4">
                <Button variant="ghost" onClick={handleAuth}>
                  Sign In
                </Button>
                <Button 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                  onClick={handleAuth}
                >
                  Get Started
                </Button>
              </div>
            )}

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border/50">
              {isLanding ? (
                <>
                  <a href="#features" className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors">
                    Features
                  </a>
                  <a href="#testimonials" className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors">
                    Testimonials
                  </a>
                  <button 
                    onClick={() => navigate('pricing')}
                    className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Pricing
                  </button>
                  <button 
                    onClick={() => navigate('about')}
                    className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About
                  </button>
                </>
              ) : isAuthenticated ? (
                <>
                  <button 
                    onClick={() => navigate('challenges')}
                    className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Challenges
                  </button>
                  <button 
                    onClick={() => navigate('candidate-dashboard')}
                    className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Dashboard
                  </button>
                </>
              ) : null}
              
              {!isAuthenticated && (
                <div className="px-3 py-2 space-y-2">
                  <Button variant="ghost" className="w-full justify-start" onClick={handleAuth}>
                    Sign In
                  </Button>
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                    onClick={handleAuth}
                  >
                    Get Started
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}