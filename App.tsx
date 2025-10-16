
import React, { useState, useCallback } from 'react';
import type { SlideData } from './types';
import { Header } from './components/header';
import Loader from './components/Loader';
import PresentationViewer from './components/PresentationViewer';
import { generatePresentationContent } from './services/geminiService';
import { SparklesIcon } from './components/icons';

const App: React.FC = () => {
  const [projectIdea, setProjectIdea] = useState<string>('');
  const [slides, setSlides] = useState<SlideData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async () => {
    if (!projectIdea.trim()) {
      setError('Please enter a project idea.');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    setSlides([]);

    try {
      const generatedSlides = await generatePresentationContent(projectIdea);
      setSlides(generatedSlides);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  }, [projectIdea]);

  return (
    <div className="min-h-screen bg-slate-900 font-sans">
      <div className="container mx-auto px-4 py-8">
        <Header />

        <main className="mt-8 max-w-4xl mx-auto">
          <div className="bg-slate-800/50 p-6 rounded-lg shadow-lg ring-1 ring-white/10">
            <label htmlFor="project-idea" className="block text-lg font-medium text-slate-300">
              Enter your project idea
            </label>
            <textarea
              id="project-idea"
              rows={4}
              value={projectIdea}
              onChange={(e) => setProjectIdea(e.target.value)}
              placeholder="e.g., A mobile app that uses AI to identify plants from photos and provides care instructions."
              className="w-full mt-2 p-3 bg-slate-900 border border-slate-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow text-slate-200 placeholder-slate-500"
              disabled={isLoading}
            />
            <button
              onClick={handleGenerate}
              disabled={isLoading || !projectIdea.trim()}
              className="mt-4 w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed transition-all duration-300 ease-in-out transform hover:scale-105 disabled:scale-100"
            >
              {isLoading ? (
                'Generating...'
              ) : (
                <>
                  <SparklesIcon className="w-5 h-5" />
                  Generate Presentation
                </>
              )}
            </button>
          </div>
          
          <div className="mt-8">
            {isLoading && <Loader />}
            {error && (
              <div className="bg-red-900/50 text-red-300 p-4 rounded-md border border-red-700 text-center">
                <p className="font-bold">An error occurred</p>
                <p>{error}</p>
              </div>
            )}
            {!isLoading && slides.length > 0 && <PresentationViewer slides={slides} />}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
