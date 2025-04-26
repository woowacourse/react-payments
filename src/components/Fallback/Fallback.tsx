import { useNavigate } from "react-router";
import Button from "@/components/Button/Button";
import styles from "./Fallback.module.css";

interface FallbackProps {
  message: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export default function FallbackComponent({
  message,
  buttonText = "홈으로 이동",
  onButtonClick,
}: FallbackProps) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (onButtonClick) return onButtonClick();
    navigate("/");
  };

  return (
    <div className={styles.container} role="alert">
      <div className={styles.icon}>⚠️</div>
      <p className={styles.message}>{message}</p>
      <Button
        size="large"
        variant="rounded"
        onClick={handleClick}
        aria-label={buttonText}
      >
        {buttonText}
      </Button>
    </div>
  );
}
