
import React from 'react';
import { SparklesIcon } from './icons';

const Header: React.FC = () => {
    return (
        <header className="text-center p-4 md:p-6">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300 flex items-center justify-center gap-3">
                <SparklesIcon className="w-8 h-8 md:w-10 md:h-10" />
                AI Presentation Generator
            </h1>
            <p className="mt-2 text-lg text-slate-400">Transform your project ideas into structured presentation slides instantly.</p>
        </header>
    );
};

export default Header;
