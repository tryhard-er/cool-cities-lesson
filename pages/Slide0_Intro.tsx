
import React from 'react';
import SectionCard from '../components/SectionCard';
import { SparklesIcon, LightbulbIcon, CheckIcon } from '../components/IconComponents';

const Slide0Intro: React.FC = () => {
  return (
    <SectionCard 
      className="max-w-3xl mx-auto animate-fadeIn"
      title="What Makes a City COOL?"
      icon={<SparklesIcon className="w-8 h-8" />}
    >
      <div className="text-center mb-6">
        <img 
          src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9reW8lMjBuaWdodHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" 
          alt="Vibrant nightscape of Tokyo with city lights and reflections" 
          className="rounded-xl shadow-lg w-full object-cover h-48 md:h-64"
          aria-describedby="tokyo-image-description"
        />
        <p id="tokyo-image-description" className="sr-only">A dynamic image of a Japanese city at night, possibly Tokyo or Osaka, showcasing bright lights, bustling streets, and a modern, youthful vibe.</p>
      </div>
      
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 md:p-5 rounded-lg mb-6 shadow-md transition-all hover:shadow-lg">
        <h3 className="text-xl font-semibold mb-2 flex items-center"><LightbulbIcon className="w-6 h-6 mr-2" />Imagine this…</h3>
        <p className="ml-8">You have one free weekend.</p>
        <p className="ml-8">You can go anywhere in Japan.</p>
        <p className="ml-8">You want fun, food, and something <strong className="text-yellow-300">epic</strong> to post.</p>
      </div>

      <div className="space-y-3 mb-6 text-center">
        <p className="text-xl md:text-2xl font-medium text-slate-700">❓ Where do you go?</p>
        <p className="text-xl md:text-2xl font-medium text-slate-700">❓ What do you do?</p>
      </div>
      
      <div className="bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-800 p-4 md:p-5 rounded-lg mb-6 shadow-md transition-all hover:shadow-lg">
        <h3 className="text-xl font-semibold mb-2 flex items-center"><SparklesIcon className="w-6 h-6 mr-2 text-orange-700" />Today’s Mission:</h3>
        <p className="ml-8">Find the <strong className="text-red-600">coolest city</strong> in Japan</p>
        <p className="ml-8">...and sell it like it’s your dream destination!</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-slate-700 mb-3 flex items-center">
            <CheckIcon className="w-6 h-6 mr-2 text-green-500" />
            By the end of this class, you'll:
        </h3>
        <ul className="list-inside space-y-2 text-slate-600 pl-8">
          <li className="flex items-center"><CheckIcon className="w-5 h-5 mr-2 text-green-500" /> Use “There is…” and “It has…” like a pro.</li>
          <li className="flex items-center"><CheckIcon className="w-5 h-5 mr-2 text-green-500" /> Describe and compare places with flair.</li>
          <li className="flex items-center"><CheckIcon className="w-5 h-5 mr-2 text-green-500" /> Speak about cities confidently (even if you're shy 😉).</li>
        </ul>
      </div>
    </SectionCard>
  );
};

export default Slide0Intro;