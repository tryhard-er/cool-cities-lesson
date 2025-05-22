
import React from 'react';
import SectionCard from '../components/SectionCard';
import { UserAvatarIcon, ChatBubbleLeftRightIcon, PencilSquareIcon } from '../components/IconComponents';

interface MessageProps {
  speaker: string;
  text: string;
  translation: string;
  isCurrentUser: boolean;
  avatarColor: string;
}

const ChatMessage: React.FC<MessageProps> = ({ speaker, text, translation, isCurrentUser, avatarColor }) => {
  const bubbleClasses = isCurrentUser 
    ? 'bg-gradient-to-br from-pink-500 to-rose-600 text-white rounded-br-none' 
    : 'bg-gradient-to-br from-slate-100 to-slate-200 text-slate-800 rounded-bl-none';
  const alignment = isCurrentUser ? 'items-end' : 'items-start';

  return (
    <div className={`flex flex-col mb-4 ${alignment}`}>
      <div className={`flex items-end ${isCurrentUser ? 'flex-row-reverse' : 'flex-row'}`}>
        <UserAvatarIcon className={`w-8 h-8 md:w-10 md:h-10 rounded-full ${isCurrentUser ? 'ml-2 md:ml-3' : 'mr-2 md:mr-3'} flex-shrink-0 ${avatarColor}`} />
        <div className={`max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg p-3 md:p-4 rounded-xl shadow-md ${bubbleClasses}`}>
          <p className={`text-xs font-semibold mb-1 ${isCurrentUser ? 'text-pink-100' : 'text-slate-500'}`}>{speaker}</p>
          <p className="text-sm md:text-base">{text}</p>
          <p className={`text-xs mt-1 ${isCurrentUser ? 'opacity-80' : 'opacity-70'}`}>{translation}</p>
        </div>
      </div>
    </div>
  );
};

const Slide4ConversationPractice: React.FC = () => {
  const conversation = [
    { speaker: "Mari", text: "Hey Taro, what's Kyoto like? Is it a cool city?", translation: "ねえタロウ、京都はどんな感じ? いい街?", isCurrentUser: false, avatarColor: 'text-sky-500' },
    { speaker: "Taro", text: "Yes, it's amazing! There are a lot of temples and shrines. It has some beautiful gardens too.", translation: "うん、すごいよ! たくさんのお寺や神社があります。いくつかの美しい庭園もあります。", isCurrentUser: true, avatarColor: 'text-pink-400' },
    { speaker: "Mari", text: "Cool! What about shopping malls and restaurants?", translation: "いいね! ショッピングモールやレストランはどう?", isCurrentUser: false, avatarColor: 'text-sky-500' },
    { speaker: "Taro", text: "There's a big shopping mall near Kyoto Station. And there are quite a few traditional restaurants. It has a lot of cafes too.", translation: "京都駅の近くに大きなショッピングモールがあります。かなり多くの伝統的なレストランがあります。たくさんのカフェもあります。", isCurrentUser: true, avatarColor: 'text-pink-400' },
    { speaker: "Mari", text: "Are there any movie theaters or sports centers?", translation: "映画館やスポーツセンターはありますか?", isCurrentUser: false, avatarColor: 'text-sky-500' },
    { speaker: "Taro", text: "Yes, there are some movie theaters downtown. But there isn't a big sports center. It doesn't have many swimming pools either.", translation: "はい、ダウンタウンにいくつかの映画館があります。でも、大きなスポーツセンターはありません。プールもあまりありません。", isCurrentUser: true, avatarColor: 'text-pink-400' },
  ];

  return (
    <SectionCard 
        title="Conversation Practice"
        subtitle="会話練習"
        className="animate-fadeIn"
        icon={<ChatBubbleLeftRightIcon className="w-8 h-8" />}
    >
      <div className="bg-white/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-inner mb-8 border border-white/30">
        <h3 className="text-lg md:text-xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">
            Talking About Cities in Japan
        </h3>
        <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar">
          {conversation.map((msg, idx) => (
            <ChatMessage key={idx} {...msg} />
          ))}
        </div>
      </div>
      {/* Fix for pages/Slide4_ConversationPractice.tsx line 61: Converted style jsx to standard style tag */}
      <style>
        {`
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(129, 140, 248, 0.5); /* indigo-400 with opacity */
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(107, 114, 245, 0.7); /* indigo-500 with opacity */
          }
        `}
      </style>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-sky-100 to-blue-100 p-5 md:p-6 rounded-xl shadow-lg">
          <h4 className="text-md md:text-lg font-semibold text-blue-700 mb-2 flex items-center"><PencilSquareIcon className="w-5 h-5 mr-2 text-blue-500"/>Your Turn!</h4>
          <p className="text-blue-600 mb-1 text-sm">Talk about your city with a partner</p>
          <p className="text-xs text-blue-500 mb-3">パートナーとあなたの街について話しましょう</p>
          <p className="text-xs font-medium text-slate-700">Use these sentence patterns:</p>
          <ul className="list-disc list-inside text-xs text-slate-600 space-y-1 mt-1">
            <li>"There is a..." / "There are..."</li>
            <li>"It has..." / "It doesn't have..."</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-emerald-100 to-green-100 p-5 md:p-6 rounded-xl shadow-lg">
          <h4 className="text-md md:text-lg font-semibold text-green-700 mb-2 flex items-center"><ChatBubbleLeftRightIcon className="w-5 h-5 mr-2 text-green-500"/>Ask & Answer</h4>
          <p className="text-green-600 mb-1 text-sm">Ask questions about famous cities in Japan</p>
          <p className="text-xs text-green-500 mb-3">日本の有名な都市について質問をしましょう</p>
          <p className="text-xs font-medium text-slate-700">Examples:</p>
          <ul className="list-disc list-inside text-xs text-slate-600 space-y-1 mt-1">
            <li>What's Tokyo like?</li>
            <li>Are there any museums in Osaka?</li>
            <li>Does Sapporo have many parks?</li>
          </ul>
        </div>
      </div>
    </SectionCard>
  );
};

export default Slide4ConversationPractice;