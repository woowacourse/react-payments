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
import normalizeSpaces from "../../../utils/normalizeSpaces";
import filterEnglish from "../../../utils/filterEnglish";

const OWNER_NAME_PLACEHOLDER = "JOHN DOE";
export default function CardOwnerNameInputField({
  ownerName,
  setOwnerName,
  isCompletedSections,
  setIsCompletedSections,
  isOpenForm,
  setIsOpenForm,
}: {
  ownerName: string;
  setOwnerName: Dispatch<SetStateAction<string>>;
  isCompletedSections: boolean[];
  setIsCompletedSections: Dispatch<SetStateAction<boolean[]>>;
  isOpenForm: boolean[];
  setIsOpenForm: Dispatch<SetStateAction<boolean[]>>;
}) {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const onlyEngStr = filterEnglish(e.target.value.toUpperCase());
    const normalizedOwnerName = normalizeSpaces(onlyEngStr);
    if (
      onlyEngStr.length > normalizedOwnerName.length &&
      normalizedOwnerName.length !== 0
    ) {
      setErrorMessage("공백을 연속으로 입력할 수 없습니다.");
      return;
    }

    if (onlyEngStr.length < e.target.value.length) {
      setErrorMessage("영어만 입력 가능합니다.");
      setOwnerName(onlyEngStr);
      return;
    }

    setErrorMessage("");
    setOwnerName(normalizedOwnerName);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (e.target.value.length === 0) {
      setErrorMessage("이름을 입력해주세요.");
      return;
    }

    setErrorMessage("");
  };
  useEffect(() => {
    const currentState = ownerName.length !== 0;
    const updatedIsCompletedSections = [...isCompletedSections];
    updatedIsCompletedSections[3] = currentState;
    setIsCompletedSections(updatedIsCompletedSections);
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        const updatedIsOpenForm = [...isOpenForm];
        if (currentState === true) {
          updatedIsOpenForm[4] = true;
        }
        setIsOpenForm(updatedIsOpenForm);
      }
    };

    window.addEventListener("keypress", handleKeyPress);

    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [ownerName]);

  return (
    <>
      <div className={styles.label}>소유자 이름</div>
      <div className={styles.horizon__gap__container}>
        <Input
          onChange={handleChange}
          isError={errorMessage.length !== 0}
          placeholder={OWNER_NAME_PLACEHOLDER}
          autoFocus
          maxLength={26}
          value={ownerName}
          onBlur={handleBlur}
        />
      </div>
      <div className={styles.error_message}>
        {errorMessage !== "" && errorMessage}
      </div>
    </>
  );
}
