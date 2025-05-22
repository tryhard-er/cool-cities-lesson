
import React from 'react';
import SectionCard from '../components/SectionCard';
// Fix: Added SparklesIcon to imports
import { CheckIcon, BookOpenIcon, SparklesIcon } from '../components/IconComponents';

// Fix for pages/Slide1_CoolCities.tsx line 27
// Added style prop to CityIconElementProps and applied it to the div
interface CityIconElementProps {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const CityIconElement: React.FC<CityIconElementProps> = ({ className, children, style }) => (
  <div className={`text-3xl md:text-4xl ${className}`} style={style}>{children}</div>
);

const CitySkyline: React.FC = () => {
  const icons = ["🏛️", "🛍️", "⚽", "🏊", "☕", "🌳", "🏥", "📚", "🎬", "🍴"];
  return (
    <div className="mt-8 mb-4">
      <div className="flex justify-center items-end h-20 md:h-24 space-x-2 md:space-x-3 relative overflow-hidden">
        {/* City silhouette base */}
        <div className="absolute bottom-0 left-0 right-0 h-12 md:h-16 bg-slate-800 opacity-70 rounded-t-lg">
           <svg width="100%" height="100%" viewBox="0 0 100 20" preserveAspectRatio="none" className="absolute bottom-0">
            <path d="M0 20 Q 25 5, 50 20 T 100 20 L 100 20 L 0 20 Z" fill="rgba(51, 65, 85, 0.5)" />
             <path d="M0 20 Q 15 10, 30 20 Q 45 5, 60 20 T 100 15 L 100 20 L 0 20 Z" fill="rgba(71, 85, 105, 0.6)" />
          </svg>
        </div>
        {/* Floating icons */}
        {icons.map((icon, index) => (
          <CityIconElement 
            key={index} 
            className={`opacity-60 transform animate-float`}
            style={{ animationDelay: `${index * 0.2}s`, animationDuration: `${3 + index * 0.1}s` }}
            >
            {icon}
          </CityIconElement>
        ))}
      </div>
      {/* Fix for pages/Slide1_CoolCities.tsx line 33: Converted style jsx to standard style tag */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          .animate-float {
            animation-name: float;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
          }
        `}
      </style>
    </div>
  );
};


const Slide1CoolCities: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <div className="text-center mb-6 md:mb-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-xl">
          Cool Cities in Japan
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mt-2 drop-shadow-lg">
          日本のクールな都市
        </p>
      </div>

      <div className="text-center mb-8 md:mb-10">
        <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-md md:text-lg font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-default">
          Places in Town ・ 街の場所
        </span>
      </div>
      
      <SectionCard className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-r from-blue-50 via-sky-50 to-cyan-50 border-l-4 border-blue-500 p-4 md:p-5 rounded-lg shadow-md mb-6">
            <p className="text-lg font-semibold text-blue-700 flex items-center">
                <BookOpenIcon className="w-6 h-6 mr-2 text-blue-500 flex-shrink-0" />
                Goal: Talk about towns using “There is / There are” and “It has…”
            </p>
            <p className="text-md text-blue-600 ml-8">
                ⽬標: 「〜があります」「〜があります」を使って、街について話そう
            </p>
        </div>

        <div className="bg-gradient-to-r from-yellow-50 via-amber-50 to-orange-50 border-l-4 border-yellow-500 p-4 md:p-5 rounded-lg shadow-md">
            <h3 className="text-lg md:text-xl font-semibold text-yellow-700 mb-3 flex items-center">
                {/* Fix for pages/Slide1_CoolCities.tsx line 80: Ensure SparklesIcon is imported and used correctly */}
                <SparklesIcon className="w-6 h-6 mr-2 text-yellow-500 flex-shrink-0" />
                By the end of this lesson, you will be able to…
            </h3>
            <p className="text-md text-yellow-600 mb-4 ml-8">このレッスンが終わる頃には、以下のことができるようになります：</p>
            <ul className="space-y-3 text-slate-700 ml-8">
            <li className="flex items-start">
                <CheckIcon className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                Describe places in a city using “There is / are…”
                <br />
                <span className="text-sm text-slate-500">「There is / are...」を使って、都市の場所を説明する</span>
                </div>
            </li>
            <li className="flex items-start">
                <CheckIcon className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                Talk about city features using “It has…”
                <br />
                <span className="text-sm text-slate-500">「It has...」を使って、都市の特徴について話す</span>
                </div>
            </li>
            <li className="flex items-start">
                <CheckIcon className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                Compare different Japanese cities
                <br />
                <span className="text-sm text-slate-500">⽇本の都市を⽐較することができる</span>
                </div>
            </li>
            </ul>
        </div>
        <p className="text-center mt-8 text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500">
            📘 Let’s Explore! <span className="text-slate-500 text-base">楽しく探検していこう！</span>
        </p>
      </SectionCard>
      <CitySkyline />
    </div>
  );
};

export default Slide1CoolCities;