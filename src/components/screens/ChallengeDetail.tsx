"use client";

import { useState } from "react";
import { AppHeader } from "../AppHeader";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Progress } from "../ui/progress";
import { 
  ArrowLeft, 
  Play, 
  Clock, 
  Users, 
  Trophy, 
  Target,
  Code,
  BookOpen,
  CheckCircle,
  XCircle,
  TrendingUp
} from "lucide-react";
import { RouterContext } from "../Router";

interface ChallengeDetailProps extends RouterContext {}

export function ChallengeDetail(props: ChallengeDetailProps) {
  const { navigate, params } = props;
  const challenge = params?.challenge || {
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
  };

  const [selectedLanguage, setSelectedLanguage] = useState("javascript");

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'hard': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const handleStartChallenge = () => {
    navigate('submission', { challenge });
  };

  const problemStatement = `
## Challenge Overview
Build a complete authentication system for a web application that includes JWT token-based authentication and passwordless magic link login functionality.

## Requirements

### Core Features
1. **User Registration & Login**
   - Email/password registration
   - Secure password hashing (bcrypt)
   - JWT token generation and validation

2. **Magic Link Authentication**
   - Generate secure magic links
   - Send magic links via email
   - Token expiration (15 minutes)
   - One-time use tokens

3. **Security Features**
   - JWT token refresh mechanism
   - Rate limiting for login attempts
   - CSRF protection
   - Input validation and sanitization

### Technical Specifications

**Backend Requirements:**
- RESTful API endpoints
- Database schema for users and tokens
- Email service integration
- Middleware for JWT validation

**API Endpoints to Implement:**
\`\`\`
POST /api/auth/register
POST /api/auth/login
POST /api/auth/magic-link
GET /api/auth/verify-magic/:token
POST /api/auth/refresh
POST /api/auth/logout
GET /api/auth/me
\`\`\`

**Frontend Requirements:**
- Login/Register forms
- Magic link request form
- Token verification page
- Protected route handling
- User dashboard

### Database Schema
\`\`\`sql
Users:
  - id (UUID)
  - email (unique)
  - password_hash
  - created_at
  - updated_at

MagicTokens:
  - id (UUID)
  - user_id (foreign key)
  - token (unique)
  - expires_at
  - used_at
  - created_at
\`\`\`

### Evaluation Criteria
- **Security**: Proper JWT implementation, secure token generation
- **Code Quality**: Clean, well-structured code with error handling
- **Database Design**: Efficient schema and queries
- **User Experience**: Intuitive authentication flow
- **Testing**: Unit tests for critical auth functions

### Bonus Points
- Password reset functionality
- Two-factor authentication (2FA)
- Social login integration
- Session management
- Audit logging
  `;

  const sampleSolutions = {
    javascript: `// Backend: JWT Auth API (Express.js)
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { v4: uuidv4 } = require('uuid');

const app = express();

// Register endpoint
app.post('/api/auth/register', async (req, res) => {
  const { email, password } = req.body;
  
  // Validate input
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password required' });
  }
  
  try {
    // Hash password
    const saltRounds = 12;
    const passwordHash = await bcrypt.hash(password, saltRounds);
    
    // Save user to database
    const user = await User.create({
      id: uuidv4(),
      email,
      password_hash: passwordHash
    });
    
    // Generate JWT
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    res.json({ token, user: { id: user.id, email: user.email } });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
});

// Magic link endpoint
app.post('/api/auth/magic-link', async (req, res) => {
  const { email } = req.body;
  
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    // Generate magic token
    const magicToken = uuidv4();
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes
    
    await MagicToken.create({
      id: uuidv4(),
      user_id: user.id,
      token: magicToken,
      expires_at: expiresAt
    });
    
    // Send email
    const magicLink = \`\${process.env.FRONTEND_URL}/auth/verify/\${magicToken}\`;
    await sendMagicLinkEmail(email, magicLink);
    
    res.json({ message: 'Magic link sent to your email' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send magic link' });
  }
});`,
    python: `# Backend: JWT Auth API (FastAPI)
from fastapi import FastAPI, HTTPException, Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from pydantic import BaseModel
import bcrypt
import jwt
from datetime import datetime, timedelta
import uuid
import smtplib
from email.mime.text import MIMEText

app = FastAPI()
security = HTTPBearer()

class RegisterRequest(BaseModel):
    email: str
    password: str

class MagicLinkRequest(BaseModel):
    email: str

@app.post("/api/auth/register")
async def register(request: RegisterRequest):
    if not request.email or not request.password:
        raise HTTPException(status_code=400, detail="Email and password required")
    
    try:
        # Hash password
        salt = bcrypt.gensalt()
        password_hash = bcrypt.hashpw(request.password.encode('utf-8'), salt)
        
        # Save user to database
        user_id = str(uuid.uuid4())
        user = await User.create({
            "id": user_id,
            "email": request.email,
            "password_hash": password_hash
        })
        
        # Generate JWT
        payload = {
            "user_id": user_id,
            "email": request.email,
            "exp": datetime.utcnow() + timedelta(hours=24)
        }
        token = jwt.encode(payload, JWT_SECRET, algorithm="HS256")
        
        return {
            "token": token,
            "user": {"id": user_id, "email": request.email}
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail="Registration failed")

@app.post("/api/auth/magic-link")
async def send_magic_link(request: MagicLinkRequest):
    try:
        user = await User.find_by_email(request.email)
        if not user:
            raise HTTPException(status_code=404, detail="User not found")
        
        # Generate magic token
        magic_token = str(uuid.uuid4())
        expires_at = datetime.utcnow() + timedelta(minutes=15)
        
        await MagicToken.create({
            "id": str(uuid.uuid4()),
            "user_id": user.id,
            "token": magic_token,
            "expires_at": expires_at
        })
        
        # Send email
        magic_link = f"{FRONTEND_URL}/auth/verify/{magic_token}"
        await send_magic_link_email(request.email, magic_link)
        
        return {"message": "Magic link sent to your email"}
    except Exception as e:
        raise HTTPException(status_code=500, detail="Failed to send magic link")`,
    react: `// Frontend: React Auth Components
import React, { useState } from 'react';
import axios from 'axios';

const AuthForm = () => {
  const [mode, setMode] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const endpoint = mode === 'login' ? '/api/auth/login' : '/api/auth/register';
      const response = await axios.post(endpoint, { email, password });
      
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        // Redirect to dashboard
        window.location.href = '/dashboard';
      }
    } catch (error) {
      setMessage(error.response?.data?.error || 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  const handleMagicLink = async () => {
    if (!email) {
      setMessage('Please enter your email first');
      return;
    }

    setLoading(true);
    try {
      await axios.post('/api/auth/magic-link', { email });
      setMessage('Magic link sent to your email!');
    } catch (error) {
      setMessage(error.response?.data?.error || 'Failed to send magic link');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-form">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        {mode !== 'magic' && (
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        )}
        
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : mode === 'login' ? 'Login' : 'Register'}
        </button>
      </form>
      
      <button onClick={handleMagicLink} disabled={loading}>
        Send Magic Link
      </button>
      
      <button onClick={() => setMode(mode === 'login' ? 'register' : 'login')}>
        {mode === 'login' ? 'Need an account?' : 'Already have an account?'}
      </button>
      
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default AuthForm;`
  };

  const testCases = [
    { 
      input: "POST /api/auth/register with valid email/password", 
      output: "Returns JWT token and user object", 
      passed: true 
    },
    { 
      input: "POST /api/auth/magic-link with existing user email", 
      output: "Sends magic link email and returns success message", 
      passed: true 
    },
    { 
      input: "GET /api/auth/verify-magic/:token with valid token", 
      output: "Returns JWT token and marks token as used", 
      passed: true 
    },
    { 
      input: "JWT middleware protects authenticated routes", 
      output: "Returns 401 for invalid tokens, allows valid ones", 
      passed: false 
    },
  ];

  return (
    <>
      <AppHeader {...props} navigate={navigate} />
      
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Navigation */}
          <Button 
            variant="ghost" 
            onClick={() => navigate('challenges')}
            className="mb-6 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Challenges
          </Button>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Challenge Header */}
              <Card className="border-border/50">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <h1 className="text-2xl">{challenge.title}</h1>
                        <Badge className={`${getDifficultyColor(challenge.difficulty)}`}>
                          {challenge.difficulty}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-3">
                        {challenge.description}
                      </p>
                      
                      {challenge.company && (
                        <div className="flex items-center space-x-3 mb-4 p-3 bg-muted/30 rounded-lg border border-border/50">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm">{challenge.company.charAt(0)}</span>
                          </div>
                          <div>
                            <div className="text-sm">Posted by {challenge.company}</div>
                            <div className="text-xs text-muted-foreground">Looking for developers to join their team</div>
                          </div>
                        </div>
                      )}
                      <div className="flex flex-wrap gap-2">
                        {challenge.tags.map((tag: string, index: number) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${challenge.gradient} ml-4`}>
                      <Code className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardHeader>
              </Card>

              {/* Problem Statement */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="w-5 h-5" />
                    <span>Problem Statement</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-invert max-w-none">
                    <pre className="whitespace-pre-wrap text-sm leading-relaxed">
                      {problemStatement}
                    </pre>
                  </div>
                </CardContent>
              </Card>

              {/* Solution Examples */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle>Solution Examples</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs value={selectedLanguage} onValueChange={setSelectedLanguage}>
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                      <TabsTrigger value="python">Python</TabsTrigger>
                      <TabsTrigger value="java">Java</TabsTrigger>
                    </TabsList>
                    
                    {Object.entries(sampleSolutions).map(([lang, code]) => (
                      <TabsContent key={lang} value={lang} className="mt-4">
                        <div className="bg-muted/30 rounded-lg p-4 border border-border/50">
                          <pre className="text-sm overflow-x-auto">
                            <code>{code}</code>
                          </pre>
                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>
                </CardContent>
              </Card>

              {/* Test Cases */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle>Test Cases</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {testCases.map((test, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-border/50">
                        <div className="flex-1">
                          <div className="text-sm mb-1">
                            <span className="text-muted-foreground">Input:</span> {test.input}
                          </div>
                          <div className="text-sm">
                            <span className="text-muted-foreground">Expected:</span> {test.output}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {test.passed ? (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-500" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Action Button */}
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <Button 
                    onClick={handleStartChallenge}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg py-6"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Start Challenge
                  </Button>
                </CardContent>
              </Card>

              {/* Challenge Stats */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle>Challenge Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Time Limit</span>
                    </div>
                    <span className="text-sm">{challenge.timeLimit}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Submissions</span>
                    </div>
                    <span className="text-sm">{challenge.submissions}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Trophy className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Points</span>
                    </div>
                    <span className="text-sm">{challenge.points} pts</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Target className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">Success Rate</span>
                      </div>
                      <span className="text-sm">{challenge.successRate}%</span>
                    </div>
                    <Progress value={challenge.successRate} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              {/* Related Challenges */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle>Related Challenges</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { title: "OAuth Social Login Integration", difficulty: "Medium", points: 450 },
                    { title: "Password Reset Flow", difficulty: "Easy", points: 300 },
                    { title: "Two-Factor Authentication", difficulty: "Hard", points: 650 }
                  ].map((related, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-border/50 hover:bg-muted/50 transition-colors cursor-pointer">
                      <div className="flex-1">
                        <div className="text-sm mb-1">{related.title}</div>
                        <Badge className={`text-xs ${getDifficultyColor(related.difficulty)}`}>
                          {related.difficulty}
                        </Badge>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {related.points} pts
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}