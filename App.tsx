import React, { useState } from 'react';
import { PackageType } from './types';
import { SOCIAL_MEDIA_PACKAGES, LEAD_GEN_PACKAGES } from './constants';
import PackageCard from './components/PackageCard';
import SectionToggle from './components/SectionToggle';

const App: React.FC = () => {
  const [activePackageType, setActivePackageType] = useState<PackageType>(PackageType.SocialMedia);

  const packagesToDisplay = activePackageType === PackageType.SocialMedia ? SOCIAL_MEDIA_PACKAGES : LEAD_GEN_PACKAGES;

  return (
    <div className="min-h-screen w-full bg-brand-light-gray flex flex-col items-center font-sans">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-8">
        
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full mb-12 sm:mb-16">
            <img 
              src="https://static.wixstatic.com/media/481a8e_35300858fcff4e04ace05b8e87c89d09~mv2.png/v1/fill/w_186,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/481a8e_35300858fcff4e04ace05b8e87c89d09~mv2.png" 
              alt="Resolute Reality Logo" 
              className="h-12 sm:h-16 w-auto"
            />
            <div className="text-left sm:text-right mt-6 sm:mt-0">
                <h1 className="font-serif text-4xl sm:text-5xl font-bold text-brand-dark">Resolute Reality</h1>
            </div>
        </header>
        
        <main className="w-full">
            <SectionToggle
                activeType={activePackageType}
                setActiveType={setActivePackageType}
            />

            <section className="mt-16">
                <div className="mb-12">
                    <h2 className="text-4xl sm:text-5xl font-bold font-serif text-brand-dark">Our Packages</h2>
                </div>

                <div key={activePackageType} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
                    {packagesToDisplay.map((pkg, index) => (
                        <PackageCard key={index} packageInfo={pkg} />
                    ))}
                </div>
            </section>
        </main>
        
        <section className="mt-20 text-center">
            <h3 className="text-2xl font-bold font-serif text-brand-dark mb-4">Customised Solutions</h3>
            <p className="text-brand-gray max-w-2xl mx-auto">
                Not sure which plan fits your exact needs? Let’s sit together and build a custom package tailored to your goals.
            </p>
        </section>

        <footer className="mt-16 pt-8 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-brand-gray space-y-4 sm:space-y-0">
                <div>
                    <p>Copyright &copy; 2025 AD-Ityaadi Creative Solutions. All Rights Reserved.</p>
                </div>
                <div className="flex items-center space-x-6">
                    <a href="tel:8100108145" className="flex items-center hover:text-brand-dark transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.211-.998-.552-1.348l-5.25-5.25a2.25 2.25 0 00-3.182 0l-2.25 2.25a11.25 11.25 0 01-5.25-5.25l2.25-2.25a2.25 2.25 0 000-3.182l-5.25-5.25A2.25 2.25 0 006.75 2.25H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        8100 108 145
                    </a>
                    <a href="mailto:info@adityaadi.in" className="flex items-center hover:text-brand-dark transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        info@adityaadi.in
                    </a>
                </div>
            </div>
        </footer>
      </div>
    </div>
  );
};

export default App;