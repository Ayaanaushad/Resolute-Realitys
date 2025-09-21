import React from 'react';
import { Package } from '../types';

interface PackageCardProps {
  packageInfo: Package;
}

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


const PackageCard: React.FC<PackageCardProps> = ({ packageInfo }) => {
  const { title, price, priceUnit, features, addOn, highlight } = packageInfo;
  const formattedPrice = new Intl.NumberFormat('en-IN').format(price);

  const cardClasses = `relative flex flex-col h-full bg-white rounded-2xl p-8 border border-slate-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-brand-accent`;

  return (
    <div className={cardClasses}>
      {highlight && (
          <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
            <span className="inline-flex items-center px-4 py-1 text-sm font-semibold text-white bg-brand-dark rounded-full">
              Most Popular
            </span>
          </div>
        )}
      <div className="flex-grow">
        <h3 className="text-2xl font-bold font-serif text-brand-dark mb-2">{title}</h3>
        <div className="flex items-baseline mb-6">
          <span className="text-4xl font-extrabold text-brand-dark">₹{formattedPrice}</span>
          <span className="text-brand-gray ml-1.5">{priceUnit}</span>
        </div>
        <ul className="space-y-4 text-brand-gray">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckIcon className="w-6 h-6 text-brand-accent mr-3 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        {addOn && (
            <div className="mt-6 p-4 bg-brand-light-gray rounded-lg border border-slate-200">
                <p className="font-semibold text-brand-dark">
                    Add-on: <span className="font-bold">₹{new Intl.NumberFormat('en-IN').format(addOn.price)}</span>
                </p>
                <p className="text-sm text-brand-gray">{addOn.description}</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default PackageCard;