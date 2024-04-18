import { Dispatch, SetStateAction, useState } from "react";
import Input from "../../common/Input/Input";
import styles from "../../../App.module.css";

const OWNER_NAME_PLACEHOLDER = "JOHN DOE";
export default function CardOwnerNameInputField({
  ownerName,
  setOwnerName,
}: {
  ownerName: string;
  setOwnerName: Dispatch<SetStateAction<string>>;
}) {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const normalizeSpaces = (str: string): string => {
    return str.replace(/\s+/g, " ").trimStart();
  };

  const filterEnglish = (str: string) => {
    return str
      .split("")
      .filter((char: string) => {
        if (
          char === " " ||
          (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90)
        )
          return true;
        return false;
      })
      .join("");
  };
  const handleChange = (e) => {
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

  const handleBlur = (e) => {
    console.log("blur");
    if (e.target.value.length === 0) {
      setErrorMessage("이름을 입력해주세요.");
      return;
    }

    setErrorMessage("");
  };

  return (
    <>
      <div className={styles.label}>소유자 이름</div>
      <div className={styles.horizon__gap__container}>
        <Input
          onChange={handleChange}
          isError={errorMessage.length !== 0}
          placeholder={OWNER_NAME_PLACEHOLDER}
          maxLength={26} // 비자 21자, 마스터카드 26자!
          value={ownerName}
          onBlur={handleBlur}
        />
      </div>
      {errorMessage !== "" && (
        <div className={styles.error_message}>{errorMessage}</div>
      )}
    </>
  );
}
