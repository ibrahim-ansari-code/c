"use client";

import React, { useState } from 'react';
import { Playfair_Display, Inter } from 'next/font/google';
import Script from 'next/script';

const playfair = Playfair_Display({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

export default function TablingosLanding() {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-gray-100 ${inter.className}`}>
      <Script src="https://assets.calendly.com/assets/external/widget.js" />
      
      {/* Navigation */}
      <nav className="relative z-50 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className={`text-2xl font-bold text-white ${playfair.className}`}>
            Tablingos
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">Features</span>
            <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">Enterprise</span>
            <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">Support</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-blue-600/10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(220, 38, 38, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)'
        }}></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold leading-tight ${playfair.className}`}>
                <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                  Elegant Data
                </span>
                <br />
                <span className="text-red-500">Transformation</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                Professional-grade data onboarding that scales with your ambitions. Transform complexity into clarity with enterprise-level precision.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-500/20 blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-400">Live Transformation Pipeline</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-800/80 rounded-lg p-4 border border-gray-600/30">
                      <div className="text-xs text-gray-400 mb-2">Raw Input</div>
                      <div className="font-mono text-sm text-red-400">messy_data.csv → validation_errors: 247</div>
                    </div>
                    
                    <div className="flex justify-center">
                      <div className="w-px h-8 bg-gradient-to-b from-red-500 to-blue-500"></div>
                    </div>
                    
                    <div className="bg-gray-800/80 rounded-lg p-4 border border-gray-600/30">
                      <div className="text-xs text-gray-400 mb-2">Processed Output</div>
                      <div className="font-mono text-sm text-green-400">clean_data.json → ready_for_production</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Inline CTAs */}
      <section className="px-6 py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${playfair.className}`}>
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Enterprise-Grade Precision
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built for organizations that demand reliability, scalability, and sophistication in their data operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/30 rounded-xl p-8 h-full hover:border-red-500/30 transition-all duration-500">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg mb-6 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className={`text-2xl font-bold mb-4 text-white ${playfair.className}`}>
                  Advanced Schema Mapping
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Handles the most complex data structures with intelligent field recognition and automated relationship mapping.
                </p>
                
                <button 
                  onClick={() => setShowCalendly(true)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25"
                >
                  call
                </button>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/30 rounded-xl p-8 h-full hover:border-red-500/30 transition-all duration-500">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg mb-6 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className={`text-2xl font-bold mb-4 text-white ${playfair.className}`}>
                  Intelligent Error Recovery
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Maintains data integrity throughout processing with smart error detection and automated correction protocols.
                </p>
                
                <button 
                  onClick={() => setShowCalendly(true)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25"
                >
                  call
                </button>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/30 rounded-xl p-8 h-full hover:border-red-500/30 transition-all duration-500">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg mb-6 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className={`text-2xl font-bold mb-4 text-white ${playfair.className}`}>
                  API-First Architecture
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Integrates seamlessly with existing workflows through comprehensive REST and GraphQL endpoints.
                </p>
                
                <button 
                  onClick={() => setShowCalendly(true)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25"
                >
                  call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Showcase */}
      <section className="px-6 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-transparent to-blue-600/5"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${playfair.className}`}>
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                See The Transformation
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Watch complexity become clarity in real-time
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700/40 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-400">Before: Raw CSV Data</span>
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="font-mono text-sm text-gray-300 space-y-2">
                  <div>user_id,email,signup_date,status</div>
                  <div className="text-red-400">001,john@email,2024-01-15,active</div>
                  <div className="text-red-400">002,invalid-email,null,inactive</div>
                  <div className="text-red-400">003,jane@domain.com,,pending</div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="w-px h-16 bg-gradient-to-b from-red-500 via-purple-500 to-blue-500 relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700/40 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-400">After: Clean JSON</span>
                  <div className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">
                    Validated
                  </div>
                </div>
                <div className="font-mono text-sm text-green-400 space-y-2">
                  <div>{"{"}"users": [</div>
                  <div className="ml-4">{"{"}"id": "001", "email": "john@email.com", "status": "active"{"}"},</div>
                  <div className="ml-4">{"{"}"id": "003", "email": "jane@domain.com", "status": "pending"{"}"}}</div>
                  <div>]}</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h3 className={`text-3xl font-bold mb-4 ${playfair.className}`}>
                  Automatic Data Cleansing
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Our intelligent algorithms identify and correct common data issues, validate formats, and ensure consistency across your entire dataset.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800/40 rounded-lg p-4 border border-gray-700/30">
                  <div className="text-2xl font-bold text-red-500 mb-2">247</div>
                  <div className="text-sm text-gray-400">Errors Detected</div>
                </div>
                <div className="bg-gray-800/40 rounded-lg p-4 border border-gray-700/30">
                  <div className="text-2xl font-bold text-green-500 mb-2">245</div>
                  <div className="text-sm text-gray-400">Auto-Corrected</div>
                </div>
                <div className="bg-gray-800/40 rounded-lg p-4 border border-gray-700/30">
                  <div className="text-2xl font-bold text-blue-500 mb-2">99.2%</div>
                  <div className="text-sm text-gray-400">Success Rate</div>
                </div>
                <div className="bg-gray-800/40 rounded-lg p-4 border border-gray-700/30">
                  <div className="text-2xl font-bold text-purple-500 mb-2">2.3s</div>
                  <div className="text-sm text-gray-400">Processing Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Modal/Widget */}
      {showCalendly && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl w-full max-w-4xl h-[600px] relative">
            <button 
              onClick={() => setShowCalendly(false)}
              className="absolute top-4 right-4 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/ibrahim-ansari4161/new-meeting"
              style={{ minWidth: '320px', height: '100%' }}
            ></div>
          </div>
        </div>
      )}

      {/* Footer with CTA Block */}
      <footer className="px-6 py-16 border-t border-gray-800 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          {/* Footer CTA Block */}
          <div className="text-center mb-16 py-16 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/30 rounded-2xl">
            <h3 className={`text-4xl md:text-5xl font-bold mb-6 ${playfair.className}`}>
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Ready to Transform Your Data?
              </span>
            </h3>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join enterprise teams who trust Tablingos for mission-critical data operations.
            </p>
            <button 
              onClick={() => setShowCalendly(true)}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-12 rounded-lg text-lg transition-all duration-300 hover:shadow-xl hover:shadow-red-500/25 hover:scale-105"
            >
              call
            </button>
          </div>
          
          {/* Footer Links */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className={`text-2xl font-bold text-white ${playfair.className}`}>
              Tablingos
            </div>
            
            <div className="flex items-center space-x-8">
              <a 
                href="https://x.com/ibrahimansr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Twitter
              </a>
              <a 
                href="https://www.friedmann.ai/privacy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>&copy; 2024 Tablingos. Transforming data with elegance and precision.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
