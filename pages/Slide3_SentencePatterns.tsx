
import React from 'react';
import SectionCard from '../components/SectionCard';
import { SentenceExample } from '../types';
import { 
    CoffeeIcon, LibraryIcon, RestaurantIcon, ParkTreeIcon, SwimmingIcon, 
    HospitalIcon, MuseumIcon, ShoppingBagIcon, MovieIcon, SoccerBallIcon, 
    CheckIcon, CrossIcon, ToriiGateIcon, LightbulbIcon, PencilSquareIcon 
} from '../components/IconComponents';

const thereIsArePatterns: SentenceExample[] = [
  { icon: CoffeeIcon, text: "There is a coffee shop.", translation: "喫茶店が一つあります。", isPositive: true },
  { icon: LibraryIcon, text: "There are some libraries.", translation: "図書館がいくつかあります。", isPositive: true },
  { icon: RestaurantIcon, text: "There are a lot of restaurants.", translation: "レストランがたくさんあります。", isPositive: true },
  { icon: ParkTreeIcon, text: "There are quite a few parks.", translation: "公園がかなりあります。", isPositive: true },
  { icon: SwimmingIcon, text: "There isn't a swimming pool.", translation: "プールがありません。", isPositive: false },
];

const itHasPatterns: SentenceExample[] = [
  { icon: HospitalIcon, text: "It has a hospital.", translation: "その街は病院を持っています。", isPositive: true },
  { icon: MuseumIcon, text: "It has some museums.", translation: "その街はいくつかの博物館を持っています。", isPositive: true },
  { icon: ShoppingBagIcon, text: "It has a lot of shopping malls.", translation: "その街はたくさんのショッピングモールがあります。", isPositive: true },
  { icon: MovieIcon, text: "It has quite a few movie theaters.", translation: "その街にはかなりの映画館があります。", isPositive: true },
  { icon: SoccerBallIcon, text: "It doesn't have a sports center.", translation: "その街にはスポーツセンターがありません。", isPositive: false },
];

const SentencePatternItem: React.FC<{ example: SentenceExample }> = ({ example }) => {
  const Icon = example.icon;
  const accentColor = example.isPositive ? "text-green-500" : "text-red-500";
  const bgColor = example.isPositive ? "bg-green-50 hover:bg-green-100" : "bg-red-50 hover:bg-red-100";
  
  return (
    <div className={`flex items-start space-x-3 p-3 rounded-lg transition-colors duration-200 ${bgColor}`}>
      {Icon && <Icon className={`w-6 h-6 ${example.isPositive ? 'text-sky-500' : 'text-slate-400'} flex-shrink-0 mt-1`} />}
      {!Icon && example.isPositive && <CheckIcon className={`w-6 h-6 ${accentColor} flex-shrink-0 mt-1`} />}
      {!Icon && !example.isPositive && <CrossIcon className={`w-6 h-6 ${accentColor} flex-shrink-0 mt-1`} />}
      <div>
        <p className="font-medium text-slate-800">{example.text}</p>
        <p className="text-sm text-slate-500">{example.translation}</p>
      </div>
    </div>
  );
};

const Slide3SentencePatterns: React.FC = () => {
  return (
    <SectionCard 
        title="Sentence Patterns"
        subtitle="場所を説明するための文型"
        className="animate-fadeIn"
        icon={<LightbulbIcon className="w-8 h-8" />}
    >
      <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
        <div className="bg-gradient-to-br from-sky-100 to-blue-100 p-5 md:p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-blue-700 mb-1 text-center">"There is/are..." Patterns</h3>
          <p className="text-sm text-blue-600 mb-4 text-center">~があります</p>
          <div className="space-y-2">
            {thereIsArePatterns.map((ex, idx) => <SentencePatternItem key={`there-${idx}`} example={ex} />)}
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-100 to-indigo-100 p-5 md:p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold text-purple-700 mb-1 text-center">"It has..." Patterns</h3>
          <p className="text-sm text-purple-600 mb-4 text-center">~を持っています</p>
          <div className="space-y-2">
            {itHasPatterns.map((ex, idx) => <SentencePatternItem key={`it-${idx}`} example={ex} />)}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 p-5 md:p-6 rounded-xl shadow-lg mb-8">
        <h3 className="text-xl font-semibold text-green-700 mb-2 flex items-center">
          <ToriiGateIcon className="w-7 h-7 mr-2 text-green-600"/> Example: Describing Kyoto / 例: 京都を説明する
        </h3>
        <p className="text-green-800 leading-relaxed">
          <strong className="text-green-600">There are a lot of</strong> temples in Kyoto. <strong className="text-green-600">It has</strong> some shopping malls and <strong className="text-green-600">quite a few</strong> museums. <strong className="text-green-600">There are</strong> beautiful parks too!
        </p>
        <p className="text-sm text-green-600 mt-2">
          京都にはたくさんのお寺があります。いくつかのショッピングモールと、かなりの博物館があります。美しい公園もあります!
        </p>
      </div>
      
      <div className="bg-gradient-to-r from-yellow-50 via-amber-50 to-orange-50 border-l-4 border-yellow-500 p-5 md:p-6 rounded-lg shadow-md text-center">
        <h3 className="text-lg md:text-xl font-semibold text-yellow-700 mb-2 flex items-center justify-center">
            <PencilSquareIcon className="w-6 h-6 mr-2 text-yellow-600" />
            Speaking Practice / スピーキングの練習
        </h3>
        <p className="text-yellow-600">Make sentences about your city using these patterns</p>
        <p className="text-sm text-yellow-500 mt-1">これらのパターンを使って、あなたの街について文を作りましょう</p>
      </div>
    </SectionCard>
  );
};

export default Slide3SentencePatterns;