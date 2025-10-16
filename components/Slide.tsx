
import React from 'react';
import type { SlideData } from '../types';

interface SlideProps {
  slide: SlideData;
}

const Slide: React.FC<SlideProps> = ({ slide }) => {
  const formattedContent = slide.content.split('\n').map((line, index) => {
    const trimmedLine = line.trim();
    if (trimmedLine.startsWith('* ') || trimmedLine.startsWith('- ')) {
      return (
        <li key={index} className="text-slate-300 list-disc ml-5 mb-2">
          {trimmedLine.substring(2)}
        </li>
      );
    }
    return trimmedLine ? <p key={index} className="text-slate-300 mb-2">{trimmedLine}</p> : null;
  });

  return (
    <div className="p-8 h-full flex flex-col">
      <h3 className="text-2xl font-bold text-blue-300 mb-6 pb-2 border-b border-slate-600">{slide.title}</h3>
      <div className="flex-grow overflow-y-auto">
        <ul className="space-y-2">{formattedContent}</ul>
      </div>
    </div>
  );
};

export default Slide;
