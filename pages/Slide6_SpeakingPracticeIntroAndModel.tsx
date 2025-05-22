
import React from 'react';
import SectionCard from '../components/SectionCard';
import { PresentationChartLineIcon, LightbulbIcon, SparklesIcon } from '../components/IconComponents';

const patterns = [
  "There is a...", "There are some...", "There are a lot of...",
  "There are quite a few...", "It has a...", "It has some...",
  "It has many...", "It has a few..."
];

const Slide6SpeakingPracticeIntroAndModel: React.FC = () => {
  return (
    <SectionCard 
        title="Speaking Practice: Describe Your City"
        subtitle="スピーキング練習: あなたの町を紹介しよう"
        className="animate-fadeIn"
        icon={<PresentationChartLineIcon className="w-8 h-8" />}
    >
      <div className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-5 md:p-6 rounded-xl shadow-lg border border-indigo-200">
        <h3 className="text-xl md:text-2xl font-semibold text-indigo-700 mb-4 flex items-center">
            <SparklesIcon className="w-6 h-6 mr-2 text-indigo-500" />
            Model Description: Nagoya (名古屋)
        </h3>
        <div className="space-y-4 text-slate-700 text-sm md:text-base">
          <p>
            <strong className="text-indigo-600">There are</strong> 3 cinemas, 5 museums, a shinkansen station, and a new shopping mall.
            <span className="block text-xs md:text-sm text-slate-500 mt-1">映画館が3つ、美術館が5つ、新幹線駅、そして新しいショッピングモールがあります。</span>
          </p>
          <p>
            <strong className="text-indigo-600">It also has</strong> some good hospitals.
            <span className="block text-xs md:text-sm text-slate-500 mt-1">また、いい病院もいくつかあります。</span>
          </p>
          <p>
            <strong className="text-indigo-600">There are</strong> some really good restaurants, and the prices are reasonable compared to Tokyo.
            <span className="block text-xs md:text-sm text-slate-500 mt-1">とても良いレストランがいくつかあり、東京と比べて料金はリーズナブルです。</span>
          </p>
          <p>
            It is surrounded by <strong className="text-indigo-600">lots of</strong> beautiful countryside.
            <span className="block text-xs md:text-sm text-slate-500 mt-1">たくさんの美しい田舎に囲まれています。</span>
          </p>
          <p>
            I think my city is a good place to live.
            <span className="block text-xs md:text-sm text-slate-500 mt-1">私の町は住むのに良い場所だと思います。</span>
          </p>
        </div>
        <div className="mt-6">
          <h4 className="text-md font-semibold text-indigo-600 mb-2 flex items-center">
            <LightbulbIcon className="w-5 h-5 mr-2 text-yellow-500" />
            Use these patterns: 使うべき文型:
          </h4>
          <div className="flex flex-wrap gap-2">
            {patterns.map(pattern => (
              <span key={pattern} className="bg-indigo-200 text-indigo-700 px-3 py-1.5 rounded-full text-xs sm:text-sm shadow-sm hover:bg-indigo-300 transition-colors cursor-default">
                {pattern}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-gradient-to-r from-yellow-50 via-amber-50 to-orange-50 border-l-4 border-yellow-500 p-4 rounded-lg shadow-md text-center">
        <p className="font-semibold text-yellow-700 flex items-center justify-center">
            <LightbulbIcon className="w-5 h-5 mr-2 text-yellow-600" />
            Remember to use the target sentence patterns!
        </p>
        <p className="text-sm text-yellow-600 mt-1">目標の文型を必ず使いましょう!</p>
      </div>
    </SectionCard>
  );
};

export default Slide6SpeakingPracticeIntroAndModel;