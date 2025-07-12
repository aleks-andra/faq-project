import { useState, type FC, type ReactNode } from "react";
import cx from "classnames";

import styles from "./faq-item.module.css";
import { ArrowButton } from "../arrow-button/arrow-button";

type Props = {
  name: string;
  children: ReactNode;
};

export const FaqItem: FC<Props> = ({ name, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.name}>{name}</div>
        <ArrowButton
          size="m"
          isRotated={isVisible}
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        />
      </div>

      <div className={cx(styles.questions, { [styles.expanded]: isVisible })}>
        {children}
      </div>
    </section>
  );
};
