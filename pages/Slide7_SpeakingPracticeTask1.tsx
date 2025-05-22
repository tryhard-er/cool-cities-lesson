
import React from 'react';
import SectionCard from '../components/SectionCard';
import { ChatBubbleLeftRightIcon, LightbulbIcon, PencilSquareIcon } from '../components/IconComponents';

const Slide7SpeakingPracticeTask1: React.FC = () => {
  return (
    <SectionCard 
        title="Task 1: Partner Discussion"
        className="max-w-2xl mx-auto animate-fadeIn"
        icon={<ChatBubbleLeftRightIcon className="w-8 h-8" />}
    >
      <div className="bg-gradient-to-br from-sky-100 via-cyan-100 to-blue-100 p-5 md:p-6 rounded-xl shadow-lg border border-sky-200">
        <h3 className="text-lg md:text-xl font-semibold text-sky-700 mb-2 flex items-center">
            <PencilSquareIcon className="w-6 h-6 mr-2 text-sky-500" />
            Describe your hometown using the target patterns.
        </h3>
        <p className="text-sky-600 mb-4 text-sm md:text-base">目標の文型を使って、あなたの故郷について説明してください。</p>
        
        <h4 className="text-md md:text-lg font-medium text-sky-700 mt-4 mb-2">Question prompts:</h4>
        <ul className="list-disc list-inside space-y-2 text-slate-700 pl-4 text-sm md:text-base">
          <li>What buildings and facilities does your city have?</li>
          <li>Are there any famous places? Parks? Shopping malls?</li>
          <li>What restaurants or entertainment places are there?</li>
          <li>Is it a good place to live? Why or why not?</li>
        </ul>
      </div>

      <div className="mt-8 bg-gradient-to-r from-yellow-50 via-amber-50 to-orange-50 border-l-4 border-yellow-500 p-4 rounded-lg shadow-md text-center">
        <p className="font-semibold text-yellow-700 flex items-center justify-center">
          <LightbulbIcon className="w-5 h-5 mr-2 text-yellow-600" />
          Remember to use "There is/are..." and "It has..."!
        </p>
        <p className="text-sm text-yellow-600 mt-1">目標の文型を必ず使いましょう!</p>
      </div>
    </SectionCard>
  );
};

export default Slide7SpeakingPracticeTask1;