import { useState, type FC, type ReactNode } from "react";

import styles from "./faq-item.module.css";

type Props = {
  name: string;
  children: ReactNode;
};

export const FaqItem: FC<Props> = ({ name, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div>{name}</div>
        <button onClick={() => setIsVisible(!isVisible)}>click</button>
      </div>

      {isVisible && <div>{children}</div>}
    </section>
  );
};
