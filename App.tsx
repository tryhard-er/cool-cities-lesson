
import React from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Slide0Intro from './pages/Slide0_Intro';
import Slide1CoolCities from './pages/Slide1_CoolCities';
import Slide2Vocabulary from './pages/Slide2_Vocabulary';
import Slide3SentencePatterns from './pages/Slide3_SentencePatterns';
import Slide4ConversationPractice from './pages/Slide4_ConversationPractice';
import Slide5CityComparison from './pages/Slide5_CityComparison';
import Slide6SpeakingPracticeIntroAndModel from './pages/Slide6_SpeakingPracticeIntroAndModel';
import Slide7SpeakingPracticeTask1 from './pages/Slide7_SpeakingPracticeTask1';
import Slide8SpeakingPracticeTask2 from './pages/Slide8_SpeakingPracticeTask2';
import Slide9SpeakingPracticeTask3 from './pages/Slide9_SpeakingPracticeTask3';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from './components/IconComponents';

const slideOrder = [
  "/",
  "/cool-cities",
  "/vocabulary",
  "/sentence-patterns",
  "/conversation-practice",
  "/city-comparison",
  "/speaking-practice-intro",
  "/speaking-practice-task1",
  "/speaking-practice-task2",
  "/speaking-practice-task3"
];

const slideTitles = [
  "Intro: What Makes a City COOL?",
  "Lesson: Cool Cities in Japan",
  "Vocabulary: Places in Town",
  "Grammar: Sentence Patterns",
  "Practice: Conversation",
  "Culture: City Comparison",
  "Speaking: Describe Your City Intro",
  "Speaking Task 1: Partner Talk",
  "Speaking Task 2: Cool vs Not Cool",
  "Speaking Task 3: Ideal City Design"
];

const App: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentIndex = slideOrder.indexOf(location.pathname);
  const currentTitle = slideTitles[currentIndex] || "Cool Cities Lesson";

  const goToNextSlide = () => {
    if (currentIndex < slideOrder.length - 1) {
      navigate(slideOrder[currentIndex + 1]);
    }
  };

  const goToPrevSlide = () => {
    if (currentIndex > 0) {
      navigate(slideOrder[currentIndex - 1]);
    }
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white/20 backdrop-blur-lg shadow-lg p-3 md:p-4 sticky top-0 z-50 border-b border-white/30">
        <div className="container mx-auto flex justify-between items-center">
          <button
            onClick={goToPrevSlide}
            disabled={currentIndex === 0}
            className="p-2 rounded-full text-white hover:bg-white/30 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Previous Slide"
          >
            <ArrowLeftCircleIcon className="w-7 h-7 md:w-8 md:h-8" />
          </button>
          <div className="text-center mx-2">
            <h1 className="text-lg md:text-xl font-semibold text-white truncate max-w-xs md:max-w-md lg:max-w-lg">
              {currentTitle}
            </h1>
            <p className="text-xs text-white/80">({currentIndex + 1}/{slideOrder.length})</p>
          </div>
          <button
            onClick={goToNextSlide}
            disabled={currentIndex === slideOrder.length - 1}
            className="p-2 rounded-full text-white hover:bg-white/30 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Next Slide"
          >
            <ArrowRightCircleIcon className="w-7 h-7 md:w-8 md:h-8" />
          </button>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-3 sm:p-4 md:p-6 lg:p-8">
        <Routes>
          <Route path="/" element={<Slide0Intro />} />
          <Route path="/cool-cities" element={<Slide1CoolCities />} />
          <Route path="/vocabulary" element={<Slide2Vocabulary />} />
          <Route path="/sentence-patterns" element={<Slide3SentencePatterns />} />
          <Route path="/conversation-practice" element={<Slide4ConversationPractice />} />
          <Route path="/city-comparison" element={<Slide5CityComparison />} />
          <Route path="/speaking-practice-intro" element={<Slide6SpeakingPracticeIntroAndModel />} />
          <Route path="/speaking-practice-task1" element={<Slide7SpeakingPracticeTask1 />} />
          <Route path="/speaking-practice-task2" element={<Slide8SpeakingPracticeTask2 />} />
          <Route path="/speaking-practice-task3" element={<Slide9SpeakingPracticeTask3 />} />
        </Routes>
      </main>

      <footer className="bg-black/20 text-white/70 text-xs py-2 px-4 text-center mt-auto">
         Interactive Lesson by Genspark | UI Enhanced
      </footer>
    </div>
  );
};

export default App;