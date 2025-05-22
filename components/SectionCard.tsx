
import React from 'react';

interface SectionCardProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  icon?: React.ReactNode;
}

const SectionCard: React.FC<SectionCardProps> = ({ title, subtitle, children, className, titleClassName, subtitleClassName, icon }) => {
  return (
    <div className={`bg-white/80 backdrop-blur-md p-5 md:p-8 rounded-2xl shadow-xl border border-white/20 ${className}`}>
      {title && (
        <div className="flex items-center justify-center mb-3 md:mb-4">
          {icon && <span className="mr-3 text-indigo-500">{icon}</span>}
          <h2 className={`text-2xl md:text-3xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 ${titleClassName}`}>
            {title}
          </h2>
        </div>
      )}
      {subtitle && <p className={`text-center text-slate-600 mb-6 md:mb-8 text-md md:text-lg ${subtitleClassName}`}>{subtitle}</p>}
      {children}
    </div>
  );
};

export default SectionCard;