export type QuestionDto = {
  id: number;
  question: string;
  answer: string;
  rating: number;
};

export type CategoryDto = {
  id: number;
  name: string;
  questions: QuestionDto[];
};

export type Question = {
  [id: number]: {
    id: number;
    question: string;
    answer: string;
    rating: number;
  }
}

export type Category = {
  [id: number]: {
    id: number;
    name: string;
    questionIds: number[];
    rating: number;
  }
}

