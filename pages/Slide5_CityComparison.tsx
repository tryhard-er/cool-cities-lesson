
import React from 'react';
import SectionCard from '../components/SectionCard';
import { CityInfo } from '../types';
import { 
    BuildingIcon, ToriiGateIcon, HousesIcon, FactoryIcon, 
    StarIcon, ThumbsDownIcon, ChatBubbleLeftRightIcon,
    // Fix for pages/Slide5_CityComparison.tsx line 108: Added SparklesIcon to imports
    SparklesIcon 
} from '../components/IconComponents';

const coolCities: CityInfo[] = [
  { 
    name: "Tokyo", 
    nameJp: "東京",
    icon: BuildingIcon,
    descriptions: [
      "There are a lot of entertainment districts.",
      "It has many shopping malls and restaurants.",
      "There are some beautiful parks in the city center."
    ],
    descriptionsJp: [
      "たくさんの繁華街があります。",
      "多くのショッピングモールやレストランがあります。",
      "市内中心部にいくつかの美しい公園があります。"
    ]
  },
  { 
    name: "Kyoto", 
    nameJp: "京都",
    icon: ToriiGateIcon,
    descriptions: [
      "There are quite a few historic temples and shrines.",
      "It has some traditional Japanese gardens.",
      "There's a beautiful river with outdoor dining."
    ],
    descriptionsJp: [
      "かなり多くの歴史的なお寺や神社があります。",
      "いくつかの伝統的な日本庭園があります。",
      "屋外ダイニングのある美しい川があります。"
    ]
  }
];

const lessCoolCities: CityInfo[] = [
  { 
    name: "Generic Suburban City", 
    nameJp: "郊外都市",
    icon: HousesIcon,
    descriptions: [
      "There isn't a city center with shops and cafes.",
      "It doesn't have many cultural attractions.",
      "There are only a few restaurants and cafes."
    ],
    descriptionsJp: [
      "お店やカフェのある市内中心部がありません。",
      "文化的な観光スポットがあまりありません。",
      "レストランやカフェは数か所しかありません。"
    ]
  },
  { 
    name: "Industrial City", 
    nameJp: "工業都市",
    icon: FactoryIcon,
    descriptions: [
      "There are a lot of factories but few parks.",
      "It doesn't have any famous tourist spots.",
      "There isn't much to do on weekends."
    ],
    descriptionsJp: [
      "工場がたくさんありますが、公園はほとんどありません。",
      "有名な観光スポットがありません。",
      "週末にすることがあまりありません。"
    ]
  }
];

const CityInfoCard: React.FC<{ city: CityInfo, isCool: boolean }> = ({ city, isCool }) => {
  const Icon = city.icon;
  const cardClasses = isCool 
    ? "bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-100 border-sky-300" 
    : "bg-gradient-to-br from-amber-100 via-orange-100 to-red-100 border-amber-300";
  const titleColor = isCool ? "text-blue-700" : "text-orange-700";
  const iconColor = isCool ? "text-blue-500" : "text-orange-500";

  return (
    <div className={`${cardClasses} p-5 md:p-6 rounded-xl shadow-lg border transition-all hover:shadow-xl`}>
      <h3 className={`text-xl md:text-2xl font-bold ${titleColor} mb-3 flex items-center`}>
        {Icon && <Icon className={`w-7 h-7 md:w-8 md:h-8 mr-3 ${iconColor}`} />}
        {city.name} <span className="text-base md:text-lg font-normal ml-2 text-slate-500">({city.nameJp})</span>
      </h3>
      <ul className="space-y-3">
        {city.descriptions.map((desc, index) => (
          <li key={index} className="text-slate-700 text-sm md:text-base">
            <p>{desc}</p>
            <p className="text-xs md:text-sm text-slate-500">{city.descriptionsJp[index]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Slide5CityComparison: React.FC = () => {
  return (
    <SectionCard 
        title="Cool vs Less Cool Cities"
        subtitle="日本のクールな都市とそうでもない都市"
        className="animate-fadeIn"
        icon={<SparklesIcon className="w-8 h-8" />}
    >
      <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4 flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
            <StarIcon className="w-7 h-7 mr-2 text-yellow-400" /> Cool Cities 
            <span className="text-lg md:text-xl block text-slate-500 ml-2 font-normal">クールな都市</span>
          </h2>
          <div className="space-y-6">
            {coolCities.map(city => <CityInfoCard key={city.name} city={city} isCool={true} />)}
          </div>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4 flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-red-600">
            <ThumbsDownIcon className="w-7 h-7 mr-2 text-red-400" /> Less Cool Cities 
            <span className="text-lg md:text-xl block text-slate-500 ml-2 font-normal">そうでもない都市</span>
          </h2>
          <div className="space-y-6">
            {lessCoolCities.map(city => <CityInfoCard key={city.name} city={city} isCool={false} />)}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-teal-50 via-cyan-50 to-sky-50 p-5 md:p-6 rounded-xl shadow-lg border border-teal-200">
        <h3 className="text-lg md:text-xl font-semibold text-teal-700 mb-3 text-center flex items-center justify-center">
            <ChatBubbleLeftRightIcon className="w-6 h-6 mr-2 text-teal-500" /> 
            Discussion Activity
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-teal-600">
          <div className="text-sm md:text-base">
            <p className="font-medium">What makes a city "cool" or "interesting" for you?</p>
            <p className="text-xs md:text-sm text-teal-500">あなたにとって、どんな都市が「クール」または「面白い」ですか?</p>
          </div>
          <div className="text-sm md:text-base">
            <p className="font-medium">What Japanese city would you like to visit? Why?</p>
            <p className="text-xs md:text-sm text-teal-500">どの日本の都市に行ってみたいですか? なぜですか?</p>
          </div>
        </div>
      </div>
    </SectionCard>
  );
};

export default Slide5CityComparison;