"use client";

import React, { useState } from 'react';
import { Bebas_Neue, Source_Sans_3 } from 'next/font/google';
import Script from 'next/script';

const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' });
const sourceSans = Source_Sans_3({ subsets: ['latin'], weight: ['400', '600'] });

export default function TablingosLanding() {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <div className={`min-h-screen bg-slate-50 ${sourceSans.className}`}>
      <Script src="https://assets.calendly.com/assets/external/widget.js" />
      
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className={`text-2xl font-bold text-gray-900 ${bebasNeue.className}`}>
            Tablingos
          </div>
          <button 
            onClick={() => setShowCalendly(true)}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            call
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className={`text-6xl md:text-8xl font-bold text-gray-900 mb-8 leading-tight ${bebasNeue.className}`}>
          Transform Messy Data<br />Into Perfect Structure
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Stop wrestling with data imports. Our no-code platform handles validation, transformation, and ETL automatically—from billing data to EEG signals.
        </p>
        <button 
          onClick={() => setShowCalendly(true)}
          className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
        >
          call
        </button>
      </section>

      {/* Data Transformation Preview */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className={`text-2xl font-bold text-gray-900 mb-4 ${bebasNeue.className}`}>Before</h3>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 font-mono text-sm">
              <div className="text-red-600">❌ Messy CSV Data</div>
              <div className="mt-2 text-gray-700">
                name,email,phone<br />
                John Doe,john@,invalid<br />
                ,missing@email.com,<br />
                Jane Smith,jane@co,123
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className={`text-2xl font-bold text-gray-900 mb-4 ${bebasNeue.className}`}>After</h3>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 font-mono text-sm">
              <div className="text-green-600">✅ Clean Structured Data</div>
              <div className="mt-2 text-gray-700">
                {"{"}"name": "John Doe", "email": "john@example.com", "phone": "+1234567890"{"}"},<br />
                {"{"}"name": "Jane Smith", "email": "jane@company.com", "phone": "+1234567891"{"}"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className={`text-5xl md:text-6xl font-bold text-gray-900 text-center mb-16 ${bebasNeue.className}`}>
            Effortless Data Transformation
          </h2>
          
          <div className="space-y-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="bg-gray-50 rounded-xl p-6 h-32 flex items-center justify-center">
                  <div className="text-4xl">🎯</div>
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className={`text-3xl font-bold text-gray-900 mb-4 ${bebasNeue.className}`}>
                  Visual Data Mapping
                </h3>
                <p className="text-lg text-gray-600">
                  Drag-and-drop transformation rules make complex data mapping intuitive. No coding required.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="md:w-1/2">
                <div className="bg-gray-50 rounded-xl p-6 h-32 flex items-center justify-center">
                  <div className="text-4xl">🛡️</div>
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className={`text-3xl font-bold text-gray-900 mb-4 ${bebasNeue.className}`}>
                  Automated Validation
                </h3>
                <p className="text-lg text-gray-600">
                  Catch errors before they reach your system with intelligent validation that adapts to your data.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="bg-gray-50 rounded-xl p-6 h-32 flex items-center justify-center">
                  <div className="text-4xl">🔄</div>
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className={`text-3xl font-bold text-gray-900 mb-4 ${bebasNeue.className}`}>
                  Universal Compatibility
                </h3>
                <p className="text-lg text-gray-600">
                  From CSV to complex nested formats, handle any data structure with seamless transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Modal/Section */}
      {showCalendly && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl h-5/6 relative">
            <button 
              onClick={() => setShowCalendly(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl z-10"
            >
              ×
            </button>
            <div 
              className="calendly-inline-widget w-full h-full rounded-lg"
              data-url="https://calendly.com/ibrahim-ansari4161/new-meeting"
            ></div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className={`text-3xl font-bold mb-6 md:mb-0 ${bebasNeue.className}`}>
              Tablingos
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <button 
                onClick={() => setShowCalendly(true)}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                call
              </button>
              <div className="flex gap-6">
                <a href="https://x.com/ibrahimansr" className="text-gray-300 hover:text-white transition-colors">
                  twitter
                </a>
                <a href="https://www.friedmann.ai/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
