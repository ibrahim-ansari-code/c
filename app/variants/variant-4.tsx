"use client";

import React, { useState } from 'react';
import { Fredoka_One, Nunito } from 'next/font/google';
import Script from 'next/script';

const fredoka = Fredoka_One({ subsets: ['latin'], weight: '400' });
const nunito = Nunito({ subsets: ['latin'], weight: ['400', '600', '700'] });

export default function TablingsLanding() {
  const [showCalendly, setShowCalendly] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-fbbf24 via-yellow-300 to-amber-200 ${nunito.className}`}>
      <Script src="https://assets.calendly.com/assets/external/widget.js" />
      
      {/* Floating Action Button */}
      {scrollY > 300 && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <button
            onClick={() => setShowCalendly(true)}
            className="bg-dc2626 hover:bg-red-700 text-white px-6 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold text-lg border-4 border-white"
          >
            📞 call
          </button>
        </div>
      )}

      {/* Navigation */}
      <nav className="relative z-40 px-4 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className={`text-3xl font-bold text-1e40af ${fredoka.className}`}>
            Tablingos
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-4 py-12 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-20">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-1e40af rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-dc2626 rounded-full opacity-30 animate-bounce"></div>
          
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold text-111827 mb-6 leading-tight ${fredoka.className}`}>
            Data Chaos
            <span className="block text-1e40af transform -rotate-2 inline-block">Ends Here!</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto font-semibold leading-relaxed">
            Cut through the complexity. Our platform transforms any data format into exactly what you need, automatically.
          </p>
          
          <button
            onClick={() => setShowCalendly(true)}
            className="bg-dc2626 hover:bg-red-700 text-white px-12 py-6 rounded-full text-2xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 border-4 border-white mb-12"
          >
            🚀 call
          </button>
          
          {/* Colorful Data Blocks */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="bg-1e40af text-white p-6 rounded-3xl transform rotate-3 hover:rotate-0 transition-transform duration-300 shadow-xl">
              <div className="text-3xl mb-2">📊</div>
              <div className="font-bold">Messy CSV</div>
            </div>
            <div className="bg-fbbf24 text-111827 p-6 rounded-3xl transform -rotate-2 hover:rotate-0 transition-transform duration-300 shadow-xl">
              <div className="text-3xl mb-2">⚡</div>
              <div className="font-bold">Magic Transform</div>
            </div>
            <div className="bg-dc2626 text-white p-6 rounded-3xl transform rotate-1 hover:rotate-0 transition-transform duration-300 shadow-xl">
              <div className="text-3xl mb-2">✨</div>
              <div className="font-bold">Perfect Structure</div>
            </div>
            <div className="bg-green-500 text-white p-6 rounded-3xl transform -rotate-1 hover:rotate-0 transition-transform duration-300 shadow-xl">
              <div className="text-3xl mb-2">🎯</div>
              <div className="font-bold">Ready to Use</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-fbbf24 via-1e40af to-dc2626"></div>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-6xl font-bold text-center text-111827 mb-16 ${fredoka.className}`}>
            Why Teams Love Us
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">👀</div>
              <h3 className="text-2xl font-bold text-1e40af mb-4">Real-time Preview</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Real-time transformation preview shows results before processing
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-3xl shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold text-fbbf24 mb-4">Smart Detection</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Smart error detection prevents bad data from breaking workflows
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-3xl shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">⚙️</div>
              <h3 className="text-2xl font-bold text-dc2626 mb-4">Custom Rules</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Custom validation rules adapt to your specific requirements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="px-4 py-20 bg-gradient-to-r from-1e40af to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className={`text-4xl md:text-6xl font-bold text-center mb-16 ${fredoka.className}`}>
            See It In Action
          </h2>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">From This Mess...</h3>
                <div className="bg-red-100 text-red-800 p-6 rounded-2xl font-mono text-sm">
                  name,email,phone<br/>
                  "John Doe",john@email,555-1234<br/>
                  Jane,jane.smith@company.com,<br/>
                  "Bob Wilson",bob@test,555-CALL
                </div>
              </div>
              
              <div>
                <h3 className="text-3xl font-bold mb-6">...To Perfect Structure!</h3>
                <div className="bg-green-100 text-green-800 p-6 rounded-2xl font-mono text-sm">
                  {"{"}"name": "John Doe", "email": "john@email.com", "phone": "+1-555-1234"{"}"},<br/>
                  {"{"}"name": "Jane Smith", "email": "jane.smith@company.com", "phone": null{"}"},<br/>
                  {"{"}"name": "Bob Wilson", "email": "bob@test.com", "phone": "+1-555-2255"{"}"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Modal */}
      {showCalendly && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative">
            <button
              onClick={() => setShowCalendly(false)}
              className="absolute top-4 right-4 z-10 bg-dc2626 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
            >
              ✕
            </button>
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/ibrahim-ansari4161/new-meeting"
              style={{ minWidth: '320px', height: '600px' }}
            ></div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-111827 text-white px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className={`text-3xl font-bold text-fbbf24 mb-6 md:mb-0 ${fredoka.className}`}>
              Tablingos
            </div>
            
            <div className="flex space-x-8">
              <a 
                href="https://x.com/ibrahimansr" 
                className="text-gray-300 hover:text-fbbf24 transition-colors text-lg font-semibold"
              >
                Twitter
              </a>
              <a 
                href="https://www.friedmann.ai/privacy" 
                className="text-gray-300 hover:text-fbbf24 transition-colors text-lg font-semibold"
              >
                Privacy
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-lg">
              Transform your data chaos into perfect structure. No more struggles, just seamless results.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
