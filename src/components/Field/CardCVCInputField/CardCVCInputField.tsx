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
import formState from "../../../Interfaces/formState";

const CVC_PLACEHOLDER = "123";
export default function CardCVCInputField({
  cardCVC,
  setCardCVC,
  isCompletedSections,
  setIsCompletedSections,
  isOpenForm,
  setIsOpenForm,
  setIsCardPreviewFront,
}: {
  cardCVC: string;
  setCardCVC: Dispatch<SetStateAction<string>>;
  isCompletedSections: formState;
  setIsCompletedSections: Dispatch<SetStateAction<formState>>;
  isOpenForm: formState;
  setIsOpenForm: Dispatch<SetStateAction<formState>>;
  setIsCardPreviewFront: Dispatch<SetStateAction<boolean>>;
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

  const handleFocus = () => {
    setIsCardPreviewFront(false);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setIsCardPreviewFront(true);
    if (e.target.value.length < 3) {
      setErrorMessage("CVC를 정확히 입력해주세요.");
      return;
    }

    setErrorMessage("");
  };

  useEffect(() => {
    const updatedIsCompletedSections = Object.assign({}, isCompletedSections);
    const isInputCompleted = cardCVC.length == 3;
    updatedIsCompletedSections.cardCVCInput = isInputCompleted;
    setIsCompletedSections(updatedIsCompletedSections);
    const updatedIsOpenForm = Object.assign({}, isOpenForm);
    if (isInputCompleted === true) {
      updatedIsOpenForm.cardPasswordInput = true;
    }
    setIsOpenForm(updatedIsOpenForm);
  }, [cardCVC]);

  return (
    <>
      <div className={styles.label}>CVC</div>
      <div className={styles.horizon__gap__container}>
        <Input
          onChange={handleChange}
          onFocus={handleFocus}
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
