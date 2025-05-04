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
    <Link to={{ pathname: link }} className={styles.link}>
      <button className={styles.button} onClick={onClick}>
        {text}
      </button>
    </Link>
  );
};

export default Button;
