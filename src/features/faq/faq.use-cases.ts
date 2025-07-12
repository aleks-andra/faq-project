import type { Category, Question } from "./faq.types";

const CATEGORIES_STORAGE_KEY = "faq_categories_ratings";
const QUESTIONS_STORAGE_KEY = "faq_questions_ratings";

export const saveCategoriesToStorage = (categories: Category) => {
  try {
    const categoriesData = Object.values(categories).map((category) => ({
      id: category.id,
      rating: category.rating,
    }));
    localStorage.setItem(
      CATEGORIES_STORAGE_KEY,
      JSON.stringify(categoriesData)
    );
  } catch (error) {
    console.error("Не удалось сохранить категории в localStorage:", error);
  }
};

export const saveQuestionsToStorage = (questions: Question) => {
  try {
    const questionsData = Object.values(questions).map((question) => ({
      id: question.id,
      rating: question.rating,
    }));
    localStorage.setItem(QUESTIONS_STORAGE_KEY, JSON.stringify(questionsData));
  } catch (error) {
    console.error("Не удалось сохранить вопросы в localStorage:", error);
  }
};

export const loadCategoriesFromStorage = (): Record<number, number> => {
  try {
    const stored = localStorage.getItem(CATEGORIES_STORAGE_KEY);
    if (!stored) return {};

    const categoriesData = JSON.parse(stored);
    return categoriesData.reduce(
      (acc: Record<number, number>, item: { id: number; rating: number }) => {
        acc[item.id] = item.rating;
        return acc;
      },
      {}
    );
  } catch (error) {
    console.error("Не удалось загрузить категории из localStorage:", error);
    return {};
  }
};

export const loadQuestionsFromStorage = (): Record<number, number> => {
  try {
    const stored = localStorage.getItem(QUESTIONS_STORAGE_KEY);
    if (!stored) return {};

    const questionsData = JSON.parse(stored);
    return questionsData.reduce(
      (acc: Record<number, number>, item: { id: number; rating: number }) => {
        acc[item.id] = item.rating;
        return acc;
      },
      {}
    );
  } catch (error) {
    console.error("Не удалось загрузить вопросы из localStorage:", error);
    return {};
  }
};
