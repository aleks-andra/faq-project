import type { Category, CategoryDto, Question } from "./faq.types";

export const mapCategoriesDtoToCategories = (categories: CategoryDto[]): Category => {
  return categories.reduce<Category>((acc, category) => {
    acc[category.id] = {
      id: category.id,
      name: category.name,
      questionIds: category.questions.map((question) => question.id),
      rating: 0,
    };
    return acc;
  }, {});
};

export const mapQuestionsDtoToQuestions = (categories: CategoryDto[]): Question => {
  return categories.reduce<Question>((acc, category) => {
    category.questions.forEach((question) => {
      acc[question.id] = question;
    });
    return acc;
  }, {});
};