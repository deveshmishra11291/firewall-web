import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FirewallVideoBackground } from './components/canvas/FirewallVideoBackground';
import { MagneticCursor } from './components/animations/MagneticCursor';
import { SmoothScrollProvider } from './components/providers/SmoothScrollProvider';
import { SpiralIntroLoader } from './components/animations/SpiralIntroLoader';

import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { PromptInjectionPage } from './pages/solutions/PromptInjectionPage';
import { DataLeakagePage } from './pages/solutions/DataLeakagePage';
import { McpRuntimePage } from './pages/solutions/McpRuntimePage';
import { ExcessiveAgencyPage } from './pages/solutions/ExcessiveAgencyPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  return (
    <BrowserRouter>
      <SmoothScrollProvider>
        {/* 3D Spiral Intro Loader on Initial Visit - KEPT INTACT */}
        <SpiralIntroLoader />

        {/* AI Agent Firewall Background Video with 60fps Scroll-Driven Zoom */}
        <FirewallVideoBackground />
        
        {/* Studio Magnetic Cursor */}
        <MagneticCursor />
        
        <div className="min-h-screen flex flex-col bg-transparent text-white relative z-10 selection:bg-[#d9ba84] selection:text-black">
          <Navbar />
          
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product" element={<ProductPage />} />
              <Route path="/solutions/prompt-injection" element={<PromptInjectionPage />} />
              <Route path="/solutions/data-leakage" element={<DataLeakagePage />} />
              <Route path="/solutions/mcp-runtime" element={<McpRuntimePage />} />
              <Route path="/solutions/excessive-agency" element={<ExcessiveAgencyPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </SmoothScrollProvider>
    </BrowserRouter>
  );
}

export default App;
