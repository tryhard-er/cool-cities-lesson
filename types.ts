
export interface VocabularyItem {
  id: string;
  english: string;
  japanese: string;
  romaji: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface SentenceExample {
  icon?: React.FC<React.SVGProps<SVGSVGElement>>; // Emoji or SVG for visual cue
  text: string;
  translation: string;
  isPositive: boolean; // true for positive statements, false for negative (e.g., "There isn't...")
}

export interface CityInfo {
  name: string;
  nameJp: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  descriptions: string[];
  descriptionsJp: string[];
}
    