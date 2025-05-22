
import React from 'react';
import SectionCard from '../components/SectionCard';
import { VocabularyItem } from '../types';
import { 
  MuseumIcon, ShoppingBagIcon, SoccerBallIcon, SwimmingIcon, CoffeeIcon, 
  ParkTreeIcon, HospitalIcon, LibraryIcon, MovieIcon, RestaurantIcon,
  PencilSquareIcon, BookOpenIcon
} from '../components/IconComponents';

const vocabularyList: VocabularyItem[] = [
  { id: 'museum', english: 'Museum', japanese: '博物館', romaji: 'Hakubutsukan', icon: MuseumIcon },
  { id: 'mall', english: 'Shopping Mall', japanese: 'ショッピングモール', romaji: 'Shoppingu Mōru', icon: ShoppingBagIcon },
  { id: 'sports', english: 'Sports Center', japanese: 'スポーツセンター', romaji: 'Supōtsu Sentā', icon: SoccerBallIcon },
  { id: 'pool', english: 'Swimming Pool', japanese: 'プール', romaji: 'Pūru', icon: SwimmingIcon },
  { id: 'coffee', english: 'Coffee Shop', japanese: '喫茶店', romaji: 'Kissaten', icon: CoffeeIcon },
  { id: 'park', english: 'Park', japanese: '公園', romaji: 'Kōen', icon: ParkTreeIcon },
  { id: 'hospital', english: 'Hospital', japanese: '病院', romaji: 'Byōin', icon: HospitalIcon },
  { id: 'library', english: 'Library', japanese: '図書館', romaji: 'Toshokan', icon: LibraryIcon },
  { id: 'movie', english: 'Movie Theater', japanese: '映画館', romaji: 'Eigakan', icon: MovieIcon },
  { id: 'restaurant', english: 'Restaurant', japanese: 'レストラン', romaji: 'Resutoran', icon: RestaurantIcon },
];

const VocabularyCardItem: React.FC<{ item: VocabularyItem }> = ({ item }) => {
  const IconComponent = item.icon;
  return (
    <div className="group bg-gradient-to-br from-pink-500 to-rose-500 p-4 rounded-xl shadow-lg text-white flex flex-col items-center justify-center aspect-square transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
      <IconComponent className="w-10 h-10 sm:w-12 sm:h-12 text-white/80 mb-2 group-hover:text-white transition-colors" />
      <h3 className="text-base sm:text-lg font-semibold text-center">{item.english}</h3>
      <p className="text-xs sm:text-sm opacity-90 text-center">{item.japanese}</p>
      <p className="text-xs opacity-70 group-hover:opacity-90 transition-opacity">({item.romaji})</p>
    </div>
  );
};

const Slide2Vocabulary: React.FC = () => {
  return (
    <SectionCard 
        title="Places in Town Vocabulary" 
        subtitle="街の場所の単語"
        className="animate-fadeIn"
        icon={<BookOpenIcon className="w-8 h-8" />}
    >
      <div className="text-center mb-6 md:mb-8">
        <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75 text-sm md:text-base">
          <span role="img" aria-label="speaker icon" className="mr-2 text-xl">🔊</span>
          Look, listen and repeat / 見て、聞いて、繰り返す
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-5 mb-8">
        {vocabularyList.map(item => (
          <VocabularyCardItem key={item.id} item={item} />
        ))}
      </div>

      <div className="bg-gradient-to-r from-purple-50 via-fuchsia-50 to-pink-50 border-l-4 border-purple-500 p-5 md:p-6 rounded-lg shadow-md text-center">
        <h3 className="text-lg md:text-xl font-semibold text-purple-700 mb-2 flex items-center justify-center">
            <PencilSquareIcon className="w-6 h-6 mr-2 text-purple-500" />
            Speaking Practice / スピーキングの練習
        </h3>
        <p className="text-purple-600">Point and say each place in English and Japanese</p>
        <p className="text-sm text-purple-500 mt-1">各場所を指差して、英語と日本語で言いましょう</p>
      </div>
    </SectionCard>
  );
};

export default Slide2Vocabulary;