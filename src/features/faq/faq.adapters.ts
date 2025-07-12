import type { Category, CategoryDto, Question } from "./faq.types";
import {
  loadCategoriesFromStorage,
  loadQuestionsFromStorage,
} from "./faq.use-cases";

export const mapCategoriesDtoToCategories = (
  categories: CategoryDto[]
): Category => {
  const storedCategories = loadCategoriesFromStorage();

  return categories.reduce<Category>((acc, category) => {
    acc[category.id] = {
      id: category.id,
      name: category.name,
      questionIds: category.questions.map((question) => question.id),
      rating: storedCategories[category.id] || 0,
    };
    return acc;
  }, {});
};

export const mapQuestionsDtoToQuestions = (
  categories: CategoryDto[]
): Question => {
  const storedQuestions = loadQuestionsFromStorage();

  return categories.reduce<Question>((acc, category) => {
    category.questions.forEach((question) => {
      acc[question.id] = {
        ...question,
        rating: storedQuestions[question.id] || question.rating,
      };
    });
    return acc;
  }, {});
};
