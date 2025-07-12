import type { FC } from "react";
import { Arrow } from "../../../../assets/icons/icons";
import styles from "./arrow-button.module.css";
import cx from "classnames";

type Props = {
    size?: "s" | "m";
    isRotated?: boolean;
    onClick?: () => void;
}

export const ArrowButton: FC<Props> = ({ size = "s", isRotated = false, onClick }) => {
  return (
    <button className={cx(styles.arrowButton, {
      [styles.rotatedArrow]: isRotated,
    })}
    onClick={onClick}
    >
      <Arrow size={size} />
    </button>
  );
};