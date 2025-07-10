import { useState, type FC } from "react";
import styles from "./faq.module.css";
import { FaqItems } from "./components/faq-items";
import type { Category } from "./faq.types";
import data from "../../data/data.json";
import { FaqItem } from "./components/faq-item";
import { Question } from "./components/question";

export const Faq: FC = () => {
  const [categories, setCategories] = useState<Category[]>(data.categories);

  return (
    <section className={styles.container}>
      <div className={styles.title}>FAQ</div>
      <div className={styles.faqContainer}>
        <FaqItems>
          {categories.map((category) => {
            return (
              <FaqItem name={category.name} key={category.id}>
                {category.questions.map((question) => {
                  return (
                    <Question
                      key={question.id}
                      name={question.question}
                      answer={question.answer}
                      onClick={(actionType) => {
                       
                      }}
                    />
                  );
                })}
              </FaqItem>
            );
          })}
        </FaqItems>
        .
      </div>
    </section>
  );
};


const categories = {
  1: {
    id: 1,
    name: 'test',
    questionIds: [1,2,3],
  }
}

const questions = {
  1: {
    id: 1,
    question: 'dksjfkdsjfl',
    answer: 'dkfjdskfj',
    rating: 'lkksdlfjdlsjf'
  }
}