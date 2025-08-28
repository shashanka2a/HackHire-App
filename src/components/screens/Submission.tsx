"use client";

import { useState, useEffect } from "react";
import { AppHeader } from "../AppHeader";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Progress } from "../ui/progress";
import { 
  ArrowLeft, 
  Play, 
  Save, 
  Clock, 
  CheckCircle, 
  XCircle,
  AlertCircle,
  RotateCcw,
  Upload,
  Download
} from "lucide-react";
import { RouterContext } from "../Router";

interface SubmissionProps extends RouterContext {}

export function Submission(props: SubmissionProps) {
  const { navigate, params, user } = props;
  const challenge = params?.challenge || {
    title: "JWT Auth with Magic Link Login",
    difficulty: "Medium",
    timeLimit: "2 hours",
    points: 500
  };

  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [code, setCode] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(2 * 60 * 60); // 2 hours in seconds
  const [testResults, setTestResults] = useState<any[]>([]);
  const [hasRun, setHasRun] = useState(false);

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getTimeColor = () => {
    if (timeLeft > 600) return "text-green-400"; // > 10 min
    if (timeLeft > 300) return "text-yellow-400"; // > 5 min
    return "text-red-400"; // < 5 min
  };

  const languageTemplates = {
    javascript: `// Express.js + JWT Authentication System
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());

// TODO: Implement user registration endpoint
app.post('/api/auth/register', async (req, res) => {
  // Your implementation here
});

// TODO: Implement magic link generation
app.post('/api/auth/magic-link', async (req, res) => {
  // Your implementation here
});

// TODO: Implement magic link verification
app.get('/api/auth/verify-magic/:token', async (req, res) => {
  // Your implementation here
});

// TODO: Implement JWT middleware
const authenticateToken = (req, res, next) => {
  // Your implementation here
};

app.listen(3000, () => {
  console.log('Auth server running on port 3000');
});`,
    python: `# FastAPI + JWT Authentication System
from fastapi import FastAPI, HTTPException, Depends
from fastapi.security import HTTPBearer
from pydantic import BaseModel
import bcrypt
import jwt
from datetime import datetime, timedelta
import uuid

app = FastAPI()
security = HTTPBearer()

class RegisterRequest(BaseModel):
    email: str
    password: str

# TODO: Implement user registration endpoint
@app.post("/api/auth/register")
async def register(request: RegisterRequest):
    # Your implementation here
    pass

# TODO: Implement magic link generation
@app.post("/api/auth/magic-link")
async def send_magic_link(email: str):
    # Your implementation here
    pass

# TODO: Implement magic link verification
@app.get("/api/auth/verify-magic/{token}")
async def verify_magic_link(token: str):
    # Your implementation here
    pass

# TODO: Implement JWT middleware
async def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(security)):
    # Your implementation here
    pass`,
    react: `// React Authentication Components
import React, { useState, useContext, createContext } from 'react';
import axios from 'axios';

// Authentication Context
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // TODO: Implement login function
  const login = async (email, password) => {
    // Your implementation here
  };

  // TODO: Implement register function
  const register = async (email, password) => {
    // Your implementation here
  };

  // TODO: Implement magic link request
  const requestMagicLink = async (email) => {
    // Your implementation here
  };

  // TODO: Implement magic link verification
  const verifyMagicLink = async (token) => {
    // Your implementation here
  };

  const value = {
    user,
    login,
    register,
    requestMagicLink,
    verifyMagicLink,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Login Component
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, requestMagicLink } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Implement form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* TODO: Implement form UI */}
    </form>
  );
};`,
    nodejs: `// Node.js Authentication Utilities
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

// TODO: Implement password hashing utilities
class PasswordUtil {
  static async hash(password) {
    // Your implementation here
  }

  static async verify(password, hash) {
    // Your implementation here
  }
}

// TODO: Implement JWT utilities
class JWTUtil {
  static generate(payload) {
    // Your implementation here
  }

  static verify(token) {
    // Your implementation here
  }
}

// TODO: Implement magic link utilities
class MagicLinkUtil {
  static generateToken() {
    // Your implementation here
  }

  static async sendEmail(email, magicLink) {
    // Your implementation here
  }
}

module.exports = {
  PasswordUtil,
  JWTUtil,
  MagicLinkUtil
};`,
    sql: `-- Database Schema for Authentication System

-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Magic tokens table
CREATE TABLE magic_tokens (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  token VARCHAR(255) UNIQUE NOT NULL,
  expires_at TIMESTAMP NOT NULL,
  used_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_magic_tokens_token ON magic_tokens(token);
CREATE INDEX idx_magic_tokens_user_id ON magic_tokens(user_id);
CREATE INDEX idx_magic_tokens_expires_at ON magic_tokens(expires_at);

-- TODO: Add any additional tables or indexes you need`
  };

  const testCases = [
    { 
      id: 1, 
      input: "POST /api/auth/register with valid email/password", 
      expected: "Returns 201 with JWT token and user object",
      description: "User registration should hash password and return JWT"
    },
    { 
      id: 2, 
      input: "POST /api/auth/magic-link with existing user email", 
      expected: "Returns 200 and sends magic link email",
      description: "Magic link generation and email sending"
    },
    { 
      id: 3, 
      input: "GET /api/auth/verify-magic/:token with valid unexpired token", 
      expected: "Returns 200 with JWT token and marks token as used",
      description: "Magic link verification and token invalidation"
    },
    { 
      id: 4, 
      input: "Protected route access with valid JWT token", 
      expected: "Returns 200 and allows access to resource",
      description: "JWT middleware authentication and authorization"
    }
  ];

  useEffect(() => {
    if (languageTemplates[selectedLanguage as keyof typeof languageTemplates]) {
      setCode(languageTemplates[selectedLanguage as keyof typeof languageTemplates]);
    }
  }, [selectedLanguage]);

  const handleRunCode = async () => {
    setIsRunning(true);
    setHasRun(true);
    
    // Simulate code execution
    setTimeout(() => {
      const results = testCases.map((test, index) => ({
        ...test,
        passed: Math.random() > (index === 3 ? 0.7 : 0.2), // Make last test case harder
        actualOutput: index < 3 ? test.expected : "[1,3]",
        executionTime: Math.floor(Math.random() * 100) + 10,
        memoryUsed: Math.floor(Math.random() * 50) + 20
      }));
      
      setTestResults(results);
      setIsRunning(false);
    }, 2000);
  };

  const handleSubmit = () => {
    // Navigate to dashboard with success message
    navigate('candidate-dashboard', { 
      submissionResult: {
        challenge: challenge.title,
        score: testResults.filter(t => t.passed).length,
        total: testResults.length,
        points: challenge.points
      }
    });
  };

  const handleReset = () => {
    setCode(languageTemplates[selectedLanguage as keyof typeof languageTemplates]);
    setTestResults([]);
    setHasRun(false);
  };

  const passedTests = testResults.filter(t => t.passed).length;
  const totalTests = testResults.length;
  const allTestsPassed = hasRun && passedTests === totalTests;

  return (
    <>
      <AppHeader {...props} />
      
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => navigate('challenge-detail', { challenge })}
                className="text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Problem
              </Button>
              <div>
                <h1 className="text-xl">{challenge.title}</h1>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span>Difficulty: {challenge.difficulty}</span>
                  <span>Points: {challenge.points}</span>
                </div>
              </div>
            </div>

            {/* Timer */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Clock className={`w-4 h-4 ${getTimeColor()}`} />
                <span className={`text-lg ${getTimeColor()}`}>
                  {formatTime(timeLeft)}
                </span>
              </div>
              {hasRun && (
                <Badge variant={allTestsPassed ? "default" : "destructive"}>
                  {passedTests}/{totalTests} Tests Passed
                </Badge>
              )}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 h-[calc(100vh-12rem)]">
            {/* Code Editor */}
            <div className="space-y-4">
              <Card className="border-border/50 h-full flex flex-col">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Code Editor</CardTitle>
                    <div className="flex items-center space-x-2">
                      <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                        <SelectTrigger className="w-[140px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="javascript">JavaScript/Express</SelectItem>
                          <SelectItem value="python">Python/FastAPI</SelectItem>
                          <SelectItem value="react">React Frontend</SelectItem>
                          <SelectItem value="nodejs">Node.js Utils</SelectItem>
                          <SelectItem value="sql">Database Schema</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button variant="outline" size="sm" onClick={handleReset}>
                        <RotateCcw className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 p-0">
                  <Textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Write your solution here..."
                    className="h-full min-h-[400px] resize-none border-0 rounded-none font-mono text-sm"
                  />
                </CardContent>
                <div className="p-4 border-t border-border/50">
                  <div className="flex items-center space-x-3">
                    <Button 
                      onClick={handleRunCode}
                      disabled={isRunning || !code.trim()}
                      className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      {isRunning ? "Running..." : "Run Code"}
                    </Button>
                    
                    {allTestsPassed && (
                      <Button 
                        onClick={handleSubmit}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        Submit Solution
                      </Button>
                    )}
                    
                    <Button variant="outline" size="sm">
                      <Save className="w-4 h-4 mr-2" />
                      Save Draft
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Results Panel */}
            <div className="space-y-4">
              <Tabs defaultValue="test-cases" className="h-full flex flex-col">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="test-cases">Test Cases</TabsTrigger>
                  <TabsTrigger value="console">Console</TabsTrigger>
                </TabsList>

                <TabsContent value="test-cases" className="flex-1">
                  <Card className="border-border/50 h-full">
                    <CardHeader>
                      <CardTitle className="text-lg">Test Results</CardTitle>
                      {isRunning && (
                        <div className="space-y-2">
                          <div className="text-sm text-muted-foreground">Running tests...</div>
                          <Progress value={66} className="h-2" />
                        </div>
                      )}
                    </CardHeader>
                    <CardContent className="space-y-4 max-h-[400px] overflow-y-auto">
                      {testResults.length === 0 && !isRunning ? (
                        <div className="text-center py-8 text-muted-foreground">
                          <AlertCircle className="w-8 h-8 mx-auto mb-2" />
                          <p>Run your code to see test results</p>
                        </div>
                      ) : (
                        testResults.map((result) => (
                          <div 
                            key={result.id} 
                            className={`p-4 rounded-lg border ${
                              result.passed 
                                ? 'border-green-500/30 bg-green-500/10' 
                                : 'border-red-500/30 bg-red-500/10'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center space-x-2">
                                {result.passed ? (
                                  <CheckCircle className="w-4 h-4 text-green-500" />
                                ) : (
                                  <XCircle className="w-4 h-4 text-red-500" />
                                )}
                                <span className="text-sm">Test Case {result.id}</span>
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {result.executionTime}ms • {result.memoryUsed}MB
                              </div>
                            </div>
                            
                            <div className="text-sm space-y-1">
                              <div><span className="text-muted-foreground">Input:</span> {result.input}</div>
                              <div><span className="text-muted-foreground">Expected:</span> {result.expected}</div>
                              <div><span className="text-muted-foreground">Actual:</span> {result.actualOutput}</div>
                              {result.description && (
                                <div className="text-xs text-muted-foreground italic">{result.description}</div>
                              )}
                            </div>
                          </div>
                        ))
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="console" className="flex-1">
                  <Card className="border-border/50 h-full">
                    <CardHeader>
                      <CardTitle className="text-lg">Console Output</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-muted/30 rounded-lg p-4 h-[400px] overflow-y-auto font-mono text-sm">
                        {isRunning ? (
                          <div className="text-blue-400">
                            Compiling and executing code...<br/>
                            Running test cases...<br/>
                            <span className="animate-pulse">●</span>
                          </div>
                        ) : hasRun ? (
                          <div className="space-y-1">
                            <div className="text-green-400">✓ Code compiled successfully</div>
                            <div className="text-blue-400">Running {totalTests} test cases...</div>
                            {testResults.map((result, index) => (
                              <div key={index} className={result.passed ? "text-green-400" : "text-red-400"}>
                                Test {result.id}: {result.passed ? "PASS" : "FAIL"} ({result.executionTime}ms)
                              </div>
                            ))}
                            <div className="text-yellow-400 mt-2">
                              Summary: {passedTests}/{totalTests} tests passed
                            </div>
                          </div>
                        ) : (
                          <div className="text-muted-foreground">
                            Console output will appear here when you run your code...
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}