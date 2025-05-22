
import React from 'react';
import SectionCard from '../components/SectionCard';
import { BuildingIcon, ParkTreeIcon, RestaurantIcon, SparklesIcon, LightbulbIcon, PresentationChartLineIcon } from '../components/IconComponents';

const Slide9SpeakingPracticeTask3: React.FC = () => {
  return (
    <SectionCard 
        title="Task 3: Design Your Ideal City"
        className="max-w-2xl mx-auto animate-fadeIn"
        icon={<SparklesIcon className="w-8 h-8" />}
    >
      <div className="bg-gradient-to-br from-purple-100 via-fuchsia-100 to-pink-100 p-5 md:p-6 rounded-xl shadow-lg border border-purple-200">
        <h3 className="text-lg md:text-xl font-semibold text-purple-700 mb-2 flex items-center">
            <BuildingIcon className="w-6 h-6 mr-2 text-purple-500" />
            Imagine and describe your ideal Japanese city.
        </h3>
        <p className="text-purple-600 mb-6 text-sm md:text-base">理想的な日本の都市を想像して説明してください。</p>
        
        <div className="space-y-4 text-slate-700 text-sm md:text-base">
          <div className="flex items-center p-3 bg-white/50 rounded-lg shadow-sm">
            <BuildingIcon className="w-5 h-5 mr-3 text-purple-500 flex-shrink-0" />
            <p className="font-medium">What <strong className="text-purple-600">buildings</strong> would it have?</p>
          </div>
          <div className="flex items-center p-3 bg-white/50 rounded-lg shadow-sm">
            <ParkTreeIcon className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
            <p className="font-medium">What <strong className="text-green-600">parks or nature</strong> spots?</p>
          </div>
          <div className="flex items-center p-3 bg-white/50 rounded-lg shadow-sm">
            <RestaurantIcon className="w-5 h-5 mr-3 text-orange-500 flex-shrink-0" />
            <p className="font-medium">What <strong className="text-orange-600">restaurants or cafes</strong>?</p>
          </div>
          <div className="flex items-center p-3 bg-white/50 rounded-lg shadow-sm">
            <SparklesIcon className="w-5 h-5 mr-3 text-yellow-500 flex-shrink-0" />
            <p className="font-medium">What kind of <strong className="text-yellow-600">transportation</strong>?</p>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-md md:text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 inline-flex items-center px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <PresentationChartLineIcon className="w-6 h-6 mr-2" />
            Present your ideal city to the class!
          </p>
        </div>
      </div>
      <div className="mt-8 bg-gradient-to-r from-yellow-50 via-amber-50 to-orange-50 border-l-4 border-yellow-500 p-4 rounded-lg shadow-md text-center">
        <p className="font-semibold text-yellow-700 flex items-center justify-center">
            <LightbulbIcon className="w-5 h-5 mr-2 text-yellow-600" />
            Be creative and use the sentence patterns!
        </p>
        <p className="text-sm text-yellow-600 mt-1">創造力を働かせて、習った文型を使いましょう!</p>
      </div>
    </SectionCard>
  );
};

export default Slide9SpeakingPracticeTask3;