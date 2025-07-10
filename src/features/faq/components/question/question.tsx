import { useState, type FC } from "react";
import styles from "./question.module.css";

type Props = {
  name: string;
  answer: string;
  onClick: (actionType: 'increase' | 'decrease') => void;
};

export const Question: FC<Props> = ({ name, answer, onClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div>{name}</div>
        <button
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
          click
        </button>
      </div>
      {isVisible && (
        <div>
          <div>{answer}</div>
          <div className={styles.actions}>
            <p>
            Информация была полезной?
            </p>
            <div >
              <button onClick={() => onClick('increase')}>Да</button>
              <button onClick={() => onClick('decrease')}>Нет</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
