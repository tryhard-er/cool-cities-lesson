
import React from 'react';
import SectionCard from '../components/SectionCard';
import { StarIcon, ThumbsDownIcon, LightbulbIcon, SparklesIcon } from '../components/IconComponents';

const Slide8SpeakingPracticeTask2: React.FC = () => {
  return (
    <SectionCard 
        title="Task 2: Cool vs Less Cool Cities"
        className="max-w-3xl mx-auto animate-fadeIn"
        icon={<SparklesIcon className="w-8 h-8" />}
    >
      <div className="bg-gradient-to-br from-lime-100 via-green-100 to-emerald-100 p-5 md:p-6 rounded-xl shadow-lg border border-lime-200">
        <h3 className="text-lg md:text-xl font-semibold text-lime-700 mb-2 flex items-center">
            🤔 Which Japanese city do you think is the coolest? Which is the least cool?
        </h3>
        <p className="text-lime-600 mb-6 text-sm md:text-base">あなたが思う一番クールな日本の都市はどこですか? 逆に、一番クールでない都市はどこですか?</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-white to-green-50 p-4 rounded-lg shadow-md border border-green-200 transform hover:scale-105 transition-transform duration-300">
            <h4 className="text-md md:text-lg font-medium text-green-600 mb-2 flex items-center">
                <StarIcon className="w-6 h-6 mr-2 text-yellow-400" />Coolest City
            </h4>
            <p className="text-xs md:text-sm text-slate-600">Explain why using patterns like:</p>
            <p className="text-xs md:text-sm text-green-500 font-semibold mt-1">"There are many..." "It has some..."</p>
          </div>
          <div className="bg-gradient-to-br from-white to-red-50 p-4 rounded-lg shadow-md border border-red-200 transform hover:scale-105 transition-transform duration-300">
            <h4 className="text-md md:text-lg font-medium text-red-600 mb-2 flex items-center">
                <ThumbsDownIcon className="w-6 h-6 mr-2 text-red-400" />Least Cool City
            </h4>
            <p className="text-xs md:text-sm text-slate-600">Explain why using patterns like:</p>
            <p className="text-xs md:text-sm text-red-500 font-semibold mt-1">"There isn't a..." "It doesn't have..."</p>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-gradient-to-r from-yellow-50 via-amber-50 to-orange-50 border-l-4 border-yellow-500 p-4 rounded-lg shadow-md text-center">
        <p className="font-semibold text-yellow-700 flex items-center justify-center">
            <LightbulbIcon className="w-5 h-5 mr-2 text-yellow-600" />
            Use comparative language and give reasons!
        </p>
        <p className="text-sm text-yellow-600 mt-1">比較表現を使い、理由も説明しましょう!</p>
      </div>
    </SectionCard>
  );
};

export default Slide8SpeakingPracticeTask2;