import { useNavigate } from "react-router-dom";
import type { ComponentPropsWithoutRef } from "react";
import Button from "../Button/Button";
import leftIcon from "../../../assets/left-icon.svg";
import styles from "./style.module.css";

interface HeaderProps extends ComponentPropsWithoutRef<"header"> {
  content: string;
  isOverlayPage?: boolean;
}

const Header = ({
  content,
  isOverlayPage = false,
  ...attributes
}: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className={styles.header} {...attributes}>
      {isOverlayPage && (
        <Button
          variant="textButton"
          icon={leftIcon}
          onClick={() => navigate(-1)}
        />
      )}
      <h3 className="center-hoz-item">{content}</h3>
    </header>
  );
};

export default Header;
