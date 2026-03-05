"use client";

import React, { useState } from 'react';
import { Bebas_Neue, Manrope } from 'next/font/google';
import Script from 'next/script';

const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' });
const manrope = Manrope({ subsets: ['latin'] });

export default function TablingosLanding() {
  const [showCalendly, setShowCalendly] = useState(false);
  const [stickyVisible, setStickyVisible] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setStickyVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Script src="https://assets.calendly.com/assets/external/widget.js" />
      <div className={`min-h-screen bg-slate-900 text-white overflow-x-hidden ${manrope.className}`}>
        {/* Navigation */}
        <nav className="relative z-50 px-4 sm:px-6 lg:px-8 py-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className={`text-2xl font-bold text-white ${bebasNeue.className}`}>
              TABLINGOS
            </div>
            <button 
              onClick={() => setShowCalendly(true)}
              className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              call
            </button>
          </div>
        </nav>

        {/* Hero Section with Diagonal Energy */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full transform rotate-45"></div>
            <div className="absolute top-20 -left-20 w-64 h-64 bg-red-600/10 rounded-full transform -rotate-12"></div>
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-400/5 transform rotate-12 skew-x-12"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="transform -skew-y-1">
                <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-none ${bebasNeue.className}`}>
                  <span className="block transform skew-y-1">DATA</span>
                  <span className="block text-red-600 transform skew-y-1 translate-x-8">CHAOS</span>
                  <span className="block transform skew-y-1 translate-x-4">ENDS HERE</span>
                </h1>
                <p className="text-xl sm:text-2xl text-slate-300 mb-8 transform skew-y-1 max-w-lg">
                  Cut through the complexity. Our platform transforms any data format into exactly what you need, automatically.
                </p>
                <button 
                  onClick={() => setShowCalendly(true)}
                  className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105 skew-y-1 shadow-2xl"
                >
                  call
                </button>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-red-600/20 transform rotate-3 rounded-3xl"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 transform -rotate-1">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                      <div className="text-sm text-slate-400">TRANSFORMING DATA...</div>
                    </div>
                    <div className="bg-slate-900 p-4 rounded-lg transform skew-x-1">
                      <div className="text-xs text-green-400 mb-2">INPUT: messy_data.csv</div>
                      <div className="text-xs text-slate-500 font-mono">name,age,email\nJohn,25,john@...</div>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                    <div className="bg-slate-900 p-4 rounded-lg transform -skew-x-1">
                      <div className="text-xs text-blue-400 mb-2">OUTPUT: structured.json</div>
                      <div className="text-xs text-slate-300 font-mono">{"{"}"users": [{"name": "John"...{"}"}]}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section with Diagonal Flow */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 transform -skew-y-1"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${bebasNeue.className}`}>
                <span className="block transform -skew-x-3">POWER THROUGH</span>
                <span className="block text-blue-400 transform skew-x-3">COMPLEXITY</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="w-12 h-12 bg-red-600 rounded-lg mb-6 transform -rotate-12"></div>
                <h3 className={`text-2xl font-bold mb-4 ${bebasNeue.className}`}>REAL-TIME PREVIEW</h3>
                <p className="text-slate-300">Real-time transformation preview shows results before processing</p>
                <button 
                  onClick={() => setShowCalendly(true)}
                  className="mt-6 bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-semibold transition-all duration-300"
                >
                  call
                </button>
              </div>
              
              <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="w-12 h-12 bg-blue-500 rounded-lg mb-6 transform rotate-12"></div>
                <h3 className={`text-2xl font-bold mb-4 ${bebasNeue.className}`}>SMART DETECTION</h3>
                <p className="text-slate-300">Smart error detection prevents bad data from breaking workflows</p>
                <button 
                  onClick={() => setShowCalendly(true)}
                  className="mt-6 bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-semibold transition-all duration-300"
                >
                  call
                </button>
              </div>
              
              <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg mb-6 transform -rotate-6"></div>
                <h3 className={`text-2xl font-bold mb-4 ${bebasNeue.className}`}>CUSTOM RULES</h3>
                <p className="text-slate-300">Custom validation rules adapt to your specific requirements</p>
                <button 
                  onClick={() => setShowCalendly(true)}
                  className="mt-6 bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-semibold transition-all duration-300"
                >
                  call
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Data Flow Visualization */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-4xl sm:text-5xl font-bold mb-6 ${bebasNeue.className}`}>
                <span className="block transform skew-x-2">SEAMLESS</span>
                <span className="block text-red-600 transform -skew-x-2">TRANSFORMATION</span>
              </h2>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-red-600/10 to-blue-500/10 transform skew-y-1 rounded-3xl"></div>
              <div className="relative grid md:grid-cols-3 gap-8 p-8">
                <div className="text-center transform -rotate-2">
                  <div className="w-24 h-24 bg-slate-700 rounded-2xl mx-auto mb-6 flex items-center justify-center transform rotate-45">
                    <div className="w-12 h-12 bg-red-600 rounded-lg transform -rotate-45"></div>
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${bebasNeue.className}`}>MESSY INPUT</h3>
                  <p className="text-slate-400 text-sm">Any format, any structure</p>
                </div>
                
                <div className="text-center">
                  <div className="w-24 h-24 bg-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center animate-pulse">
                    <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${bebasNeue.className}`}>PROCESSING</h3>
                  <p className="text-slate-400 text-sm">Intelligent transformation</p>
                </div>
                
                <div className="text-center transform rotate-2">
                  <div className="w-24 h-24 bg-green-600 rounded-2xl mx-auto mb-6 flex items-center justify-center transform -rotate-12">
                    <div className="w-12 h-12 bg-white rounded-lg transform rotate-12"></div>
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${bebasNeue.className}`}>PERFECT OUTPUT</h3>
                  <p className="text-slate-400 text-sm">Ready for your system</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-800">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
          <div className="relative max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <div className={`text-3xl font-bold ${bebasNeue.className}`}>
                TABLINGOS
              </div>
              <div className="flex space-x-8">
                <a href="https://x.com/ibrahimansr" className="text-slate-400 hover:text-white transition-colors">
                  twitter
                </a>
                <a href="https://www.friedmann.ai/privacy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy
                </a>
              </div>
            </div>
            <div className="mt-8 text-center">
              <button 
                onClick={() => setShowCalendly(true)}
                className="bg-red-600 hover:bg-red-700 px-12 py-4 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105"
              >
                call
              </button>
            </div>
          </div>
        </footer>

        {/* Sticky CTA */}
        {stickyVisible && (
          <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
            <button 
              onClick={() => setShowCalendly(true)}
              className="bg-red-600 hover:bg-red-700 px-4 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-110 shadow-2xl rotate-90 origin-center"
              style={{ writingMode: 'vertical-rl' }}
            >
              call
            </button>
          </div>
        )}

        {/* Calendly Modal */}
        {showCalendly && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl w-full max-w-4xl h-[600px] relative">
              <button 
                onClick={() => setShowCalendly(false)}
                className="absolute top-4 right-4 z-10 bg-slate-900 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-700"
              >
                ×
              </button>
              <div 
                className="calendly-inline-widget w-full h-full rounded-2xl"
                data-url="https://calendly.com/ibrahim-ansari4161/new-meeting"
              ></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
