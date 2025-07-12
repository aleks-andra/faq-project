import { useState, type FC } from "react";
import styles from "./faq.module.css";
import { FaqItems } from "./components/faq-items";
import type { Category, Question as QuestionType } from "./faq.types";
import data from "../../data/data.json";
import { FaqItem } from "./components/faq-item";
import { Question } from "./components/question";
import { mapCategoriesDtoToCategories, mapQuestionsDtoToQuestions } from "./faq.adapters";

export const Faq: FC = () => {
  const [categories, setCategories] = useState<Category>(mapCategoriesDtoToCategories(data.categories));
  const [questions, setQuestions] = useState<QuestionType>(mapQuestionsDtoToQuestions(data.categories));

  const handleFeedback = (questionId: number, categoryId: number, actionType: 'increase' | 'decrease') => {
    const question = questions[questionId];
    const category = categories[categoryId];
    const newQuestionRating = actionType === 'increase' ? question.rating + 1 : question.rating - 1;
    const newQuestions = { ...questions, [questionId]: { ...question, rating: newQuestionRating } };
    setQuestions(newQuestions);
    setCategories({ ...categories, [categoryId]: { ...category, rating: category.rating + newQuestionRating } });
  }

  return (
    <section className={styles.container}>
      <div className={styles.title}>FAQ</div>
      <div className={styles.faqContainer}>
        <FaqItems>
          {Object.values(categories).sort((a, b) => b.rating - a.rating).map((category) => {
            return (
              <FaqItem name={category.name} key={category.id}>
                {category.questionIds.sort((a, b) => questions[b].rating - questions[a].rating).map((questionId) => {
                  const question = questions[questionId];
                  return (
                    <Question
                      key={question.id}
                      name={question.question}
                      answer={question.answer}
                      onClick={(actionType) => handleFeedback(question.id, category.id, actionType)}
                    />
                  );
                })}
              </FaqItem>
            );
          })}
        </FaqItems>
      </div>
    </section>
  );
};