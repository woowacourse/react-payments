import { Dispatch, SetStateAction, useState } from "react";
import { DATE_PLACEHOLDER } from "../../../constants";
import Input from "../../common/Input/Input";
import styles from "../../../App.module.css";

export default function CardExpirationDateInputField({
  date,
  setDate,
}: {
  date: Record<string, string>;
  setDate: Dispatch<SetStateAction<Record<string, string>>>;
}) {
  const [errorMessages, setErrorMessages] = useState<Array<[number, string]>>(
    []
  );

  // 여긴 최신 오류 순서가 아닌 0부터 시작함..
  const checkValidDate = ({
    month = date.month,
    year = date.year,
  }: {
    month?: string;
    year?: string;
  }) => {
    const updatedErrorMessages: any[] = new Array(Object.keys(date).length)
      .fill(0)
      .map(() => []);

    const isExpiredDate = checkExpired(month, year);

    if (year.length > 0 && year.length < 2)
      updatedErrorMessages[1] = [1, "유효하지 않은 날짜입니다."];
    if (isExpiredDate === "INVALID_MONTH")
      updatedErrorMessages[0] = [0, "이미 만료된 카드입니다."];
    if (isExpiredDate === "INVALID_YEAR")
      updatedErrorMessages[1] = [1, "이미 만료된 카드입니다."];

    if (isNaN(Number(month)))
      updatedErrorMessages[0] = [0, "숫자만 입력해주세요."];
    if (Number(month) <= 0 || Number(month) > 12)
      updatedErrorMessages[0] = [0, "유효하지 않은 날짜입니다."];

    if (isNaN(Number(year)))
      updatedErrorMessages[1] = [1, "숫자만 입력해주세요."];

    setErrorMessages(updatedErrorMessages.filter((data) => data.length !== 0));
  };

  const checkExpired = (month: string, year: string) => {
    if (year.length < 2 || month.length < 2) return false;
    const today = new Date();
    const todayMonth = today.getMonth() + 1;
    const todayYear = today.getFullYear() - 2000;

    if (Number(year) === todayYear && Number(month) < todayMonth) {
      return "INVALID_MONTH";
    }

    if (Number(year) < todayYear) {
      return "INVALID_YEAR";
    }

    return false;
  };

  const handleMonth = (e: any) => {
    const input = Number(e.target.value);

    if (input <= 1 || e.target.value.length >= 2)
      setDate({ ...date, month: e.target.value });
    else if (input >= 2 && input <= 9)
      setDate({ ...date, month: e.target.value.padStart(2, "0") });

    checkValidDate({ month: e.target.value });
  };

  const handleYear = (e: any) => {
    setDate({ ...date, year: e.target.value });
    checkValidDate({ year: e.target.value });
  };

  return (
    <>
      <div className={styles.label}>유효기간</div>
      <div className={styles.horizon__gap__container}>
        <Input
          onChange={handleMonth}
          placeholder={DATE_PLACEHOLDER.MONTH}
          maxLength={2}
          value={date.month}
          isError={errorMessages.filter(([i]) => i === 0).length !== 0}
        />
        <Input
          onChange={handleYear}
          placeholder={DATE_PLACEHOLDER.YEAR}
          maxLength={2}
          value={date.year}
          isError={errorMessages.filter(([i]) => i === 1).length !== 0}
        />
      </div>
      {errorMessages.length !== 0 && (
        <div className={styles.error_message}>
          {errorMessages[errorMessages.length - 1][1]}
        </div>
      )}
    </>
  );
}
