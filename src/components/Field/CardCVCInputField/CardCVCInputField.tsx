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

const CVC_PLACEHOLDER = "123";
export default function CardCVCInputField({
  cardCVC,
  setCardCVC,
  isCompletedSections,
  setIsCompletedSections,
  isOpenForm,
  setIsOpenForm,
}: {
  cardCVC: string;
  setCardCVC: Dispatch<SetStateAction<string>>;
  isCompletedSections: boolean[];
  setIsCompletedSections: Dispatch<SetStateAction<boolean[]>>;
  isOpenForm: boolean[];
  setIsOpenForm: Dispatch<SetStateAction<boolean[]>>;
}) {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (isNaN(Number(e.target.value))) {
      setErrorMessage("숫자만 입력해주세요.");
      return;
    }
    setErrorMessage("");
    setCardCVC(e.target.value);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (e.target.value.length < 3) {
      setErrorMessage("CVC를 정확히 입력해주세요.");
      return;
    }

    setErrorMessage("");
  };

  useEffect(() => {
    const updatedIsCompletedSections = [...isCompletedSections];
    const currentState = cardCVC.length == 3;
    updatedIsCompletedSections[4] = currentState;
    setIsCompletedSections(updatedIsCompletedSections);
    const updatedIsOpenForm = [...isOpenForm];
    if (currentState === true) {
      updatedIsOpenForm[5] = true;
    }
    setIsOpenForm(updatedIsOpenForm);
  }, [cardCVC]);

  return (
    <>
      <div className={styles.label}>CVC</div>
      <div className={styles.horizon__gap__container}>
        <Input
          onChange={handleChange}
          isError={errorMessage.length !== 0}
          placeholder={CVC_PLACEHOLDER}
          maxLength={3}
          autoFocus
          value={cardCVC}
          onBlur={handleBlur}
        />
      </div>
      <div className={styles.error_message}>
        {errorMessage !== "" && errorMessage}
      </div>
    </>
  );
}
