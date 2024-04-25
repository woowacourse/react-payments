import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useState,
  FocusEvent,
  useEffect,
} from "react";
import Input from "../../common/Input/Input";
import styles from "../../../pages/CardInputPage/CardInputPage.module.css";

export default function CardPasswordInput({
  cardPassword,
  setCardPassword,
  isCompletedSections,
  setIsCompletedSections,
}: {
  cardPassword: string;
  setCardPassword: Dispatch<SetStateAction<string>>;
  isCompletedSections: boolean[];
  setIsCompletedSections: Dispatch<SetStateAction<boolean[]>>;
}) {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (isNaN(Number(e.target.value))) {
      setErrorMessage("숫자만 입력해주세요.");
      return;
    }
    setErrorMessage("");
    setCardPassword(e.target.value);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (e.target.value.length < 2) {
      setErrorMessage("비밀번호 앞 두 자리를 정확히 입력해주세요.");
      return;
    }

    setErrorMessage("");
  };

  useEffect(() => {
    const updatedIsCompletedSections = [...isCompletedSections];
    updatedIsCompletedSections[5] = cardPassword.length == 2;
    setIsCompletedSections(updatedIsCompletedSections);
    console.log(isCompletedSections);
  }, [cardPassword, setIsCompletedSections]);

  return (
    <>
      <div className={styles.label}>비밀번호 앞 두자리</div>
      <div className={styles.horizon__gap__container}>
        <Input
          onChange={handleChange}
          isError={errorMessage.length !== 0}
          maxLength={2}
          value={cardPassword}
          onBlur={handleBlur}
          type="password"
        />
      </div>
      <div className={styles.error_message}>
        {errorMessage !== "" && errorMessage}
      </div>
    </>
  );
}
