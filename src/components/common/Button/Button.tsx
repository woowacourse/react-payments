import { Link } from "react-router";

import styles from "./Button.module.css";

const Button = ({
  text,
  link,
  onClick,
}: {
  text: string;
  link?: string;
  onClick?: () => void;
}) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <Link to={{ pathname: link }} className={styles.link}>
        {text}
      </Link>
    </button>
  );
};

export default Button;
