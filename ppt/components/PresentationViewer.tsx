
import React, { useState, useCallback } from 'react';
import type { SlideData } from '../types';
import Slide from './Slide';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';

interface PresentationViewerProps {
  slides: SlideData[];
}

const PresentationViewer: React.FC<PresentationViewerProps> = ({ slides }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.min(prev + 1, slides.length - 1));
  }, [slides.length]);

  const goToPrev = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <div className="aspect-video bg-slate-800/50 rounded-lg shadow-2xl ring-1 ring-white/10 overflow-hidden relative">
        <Slide slide={slides[currentSlideIndex]} />
      </div>
      <div className="flex items-center justify-between mt-4 px-2">
        <button
          onClick={goToPrev}
          disabled={currentSlideIndex === 0}
          className="flex items-center gap-2 px-4 py-2 bg-slate-700 rounded-md hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeftIcon />
          Prev
        </button>
        <span className="text-slate-400 font-medium">
          Slide {currentSlideIndex + 1} of {slides.length}
        </span>
        <button
          onClick={goToNext}
          disabled={currentSlideIndex === slides.length - 1}
          className="flex items-center gap-2 px-4 py-2 bg-slate-700 rounded-md hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Next
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
};

export default PresentationViewer;
