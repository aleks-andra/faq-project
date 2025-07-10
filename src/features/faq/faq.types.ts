export type Category = {
  id: number;
  name: string;
  questions: Question[];
};

export type Question = {
  id: number;
  question: string;
  answer: string;
  rating: number;
};