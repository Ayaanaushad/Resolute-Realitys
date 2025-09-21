import React from 'react';
import { PackageType } from '../types';

interface SectionToggleProps {
  activeType: PackageType;
  setActiveType: (type: PackageType) => void;
}

const SocialIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const AdsIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-3.174 7.625-7.25V3.109c0-1.664-1.343-3.01-3-3.01S10.455 1.445 10.455 3.11v.344c0 .63.51 1.135 1.135 1.135h2.832c.626 0 1.135.504 1.135 1.135 0 .63-.509 1.135-1.135 1.135H9.455c-1.657 0-3 1.343-3 3v1.135A2.336 2.336 0 005.436 13.683z" />
    </svg>
);


const SectionToggle: React.FC<SectionToggleProps> = ({ activeType, setActiveType }) => {
    const options = [
        { type: PackageType.SocialMedia, label: 'Social Media Management', icon: SocialIcon },
        { type: PackageType.LeadGen, label: 'Lead Generation & Ads', icon: AdsIcon }
    ];

    return (
        <div className="flex justify-center items-center w-full">
            <div className="bg-slate-200/80 p-1.5 rounded-xl shadow-inner-sm w-full max-w-2xl flex justify-around">
                {options.map((option) => {
                    const isActive = activeType === option.type;
                    return (
                        <button
                            key={option.type}
                            onClick={() => setActiveType(option.type)}
                            className={`w-full flex items-center justify-center space-x-2 px-4 py-2.5 text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-light-gray focus:ring-brand-accent ${
                                isActive ? 'bg-white text-brand-dark shadow-md' : 'bg-transparent text-brand-gray hover:text-brand-dark'
                            }`}
                            aria-pressed={isActive}
                        >
                            <option.icon className="w-5 h-5" />
                            <span>{option.label}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default SectionToggle;