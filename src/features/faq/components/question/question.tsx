import { useState, type FC } from "react";
import styles from "./question.module.css";
import { ArrowButton } from "../arrow-button/arrow-button";
import cx from "classnames";

type Props = {
  name: string;
  answer: string;
  onClick: (actionType: "increase" | "decrease") => void;
};

export const Question: FC<Props> = ({ name, answer, onClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasFeedback, setHasFeedback] = useState(false);

  const handleClick = (actionType: "increase" | "decrease") => {
    setHasFeedback(true);
    onClick(actionType);
  };

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.feedbackTitle}>Вопрос</div>
        <div className={styles.questionWrapper}>
          <div className={styles.question}>{name}</div>
          <ArrowButton
            isRotated={isVisible}
            onClick={() => {
              setIsVisible(!isVisible);
            }}
          />
        </div>
      </div>
      {isVisible && (
        <div  className={styles.answerContainer}>
          <div className={styles.feedbackTitle}>Ответ</div>
          <div className={styles.answerWrapper}>
            <div>{answer}</div>
            {!hasFeedback ? (
              <div className={styles.actions}>
                <p className={styles.feedbackPrompt}>
                  Информация была полезной?
                </p>
                <div className={styles.feedbackButtons}>
                  <button
                    className={styles.feedbackButton}
                    onClick={() => handleClick("increase")}
                  >
                    Да
                  </button>
                  <button
                    className={styles.feedbackButton}
                    onClick={() => handleClick("decrease")}
                  >
                    Нет
                  </button>
                </div>
              </div>
            ) : (
              <p className={cx(styles.feedbackPrompt, styles.sentFeedback)}>Отзыв отправлен, спасибо!</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
