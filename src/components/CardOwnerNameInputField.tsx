import { Dispatch, SetStateAction, useState } from "react";
import Input from "./Input";

const OWNER_NAME_PLACEHOLDER = "JOHN DOE";

export default function CardOwnerNameInputField({
  ownerName,
  setOwnerName,
}: {
  ownerName: string;
  setOwnerName: Dispatch<SetStateAction<string>>;
}) {
  const [errorMessage, setErrorMessage] = useState("");

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

    if (onlyEngStr.length < e.target.value.length) {
      setErrorMessage("영어만 입력 가능합니다.");
      setOwnerName(onlyEngStr);
      return;
    }

    const normalizedOwnerName = normalizeSpaces(onlyEngStr);
    if (onlyEngStr.length > normalizedOwnerName.length) {
      setErrorMessage("공백을 연속으로 입력할 수 없습니다.");
      return;
    }

    setErrorMessage("");

    setOwnerName(normalizedOwnerName);
  };

  return (
    <>
      <div>소유자 이름</div>
      <div>
        <Input
          onChange={handleChange}
          placeholder={OWNER_NAME_PLACEHOLDER}
          maxLength={26} // 비자 21자, 마스터카드 26자!
          style={{ textTransform: "uppercase" }}
          value={ownerName}
        />
      </div>
      {errorMessage !== "" && <div>{errorMessage}</div>}
    </>
  );
}
