import {
  Dispatch,
  SetStateAction,
  useState,
  ChangeEvent,
  useEffect,
} from "react";
import { DATE_PLACEHOLDER } from "../../../constants";
import Input from "../../common/Input/Input";
import styles from "../../../pages/CardInputPage/CardInputPage.module.css";

interface DateError {
  monthError: string | null;
  yearError: string | null;
}

export default function CardExpirationDateInputField({
  date,
  setDate,
  isCompletedSections,
  setIsCompletedSections,
  isOpenForm,
  setIsOpenForm,
}: {
  date: Record<string, string>;
  setDate: Dispatch<SetStateAction<Record<string, string>>>;
  isCompletedSections: boolean[];
  setIsCompletedSections: Dispatch<SetStateAction<boolean[]>>;
  isOpenForm: boolean[];
  setIsOpenForm: Dispatch<SetStateAction<boolean[]>>;
}) {
  const [errorMessages, setErrorMessages] = useState<DateError>({
    monthError: null,
    yearError: null,
  });

  const checkValidDate = ({
    month = date.month,
    year = date.year,
  }: {
    month?: string;
    year?: string;
  }) => {
    const updatedErrorMessages: DateError = {
      monthError: null,
      yearError: null,
    };

    const isExpiredDate = checkExpired(month, year);

    if (year.length > 0 && year.length < 2) {
      updatedErrorMessages.yearError = "유효하지 않은 날짜입니다.";
    }

    if (isExpiredDate === "INVALID_MONTH") {
      updatedErrorMessages.monthError = "이미 만료된 카드입니다.";
    }

    if (isExpiredDate === "INVALID_YEAR") {
      updatedErrorMessages.yearError = "이미 만료된 카드입니다.";
    }

    if (isNaN(Number(month))) {
      updatedErrorMessages.monthError = "숫자만 입력해주세요.";
    }
    if (Number(month) <= 0 || Number(month) > 12) {
      updatedErrorMessages.monthError = "유효하지 않은 날짜입니다.";
    }

    if (isNaN(Number(year))) {
      updatedErrorMessages.yearError = "숫자만 입력해주세요.";
    }

    setErrorMessages({
      monthError: updatedErrorMessages.monthError || null,
      yearError: updatedErrorMessages.yearError || null,
    });
  };

  useEffect(() => {
    const updatedIsCompletedSections = [...isCompletedSections];
    const currentState =
      date.month.length == 2 &&
      date.year.length == 2 &&
      !errorMessages.monthError &&
      !errorMessages.yearError;
    updatedIsCompletedSections[2] = currentState;
    setIsCompletedSections(updatedIsCompletedSections);
    const updatedIsOpenForm = [...isOpenForm];
    if (currentState === true) {
      updatedIsOpenForm[3] = true;
    }
    setIsOpenForm(updatedIsOpenForm);
  }, [date]);

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

  const handleMonth = (e: ChangeEvent<HTMLInputElement>) => {
    const input = Number(e.target.value);

    if (input <= 1 || e.target.value.length >= 2)
      setDate({ ...date, month: e.target.value });
    else if (input >= 2 && input <= 9)
      setDate({ ...date, month: e.target.value.padStart(2, "0") });

    checkValidDate({ month: e.target.value });

    if (
      (e.target.value.length === 2 && e.target.nextSibling) ||
      Number(e.target.value) > 2
    ) {
      (e.target.nextSibling as HTMLInputElement).focus();
    }
  };

  const handleYear = (e: ChangeEvent<HTMLInputElement>) => {
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
          autoFocus
          isError={errorMessages?.monthError !== null}
        />
        <Input
          onChange={handleYear}
          placeholder={DATE_PLACEHOLDER.YEAR}
          maxLength={2}
          value={date.year}
          isError={errorMessages?.yearError !== null}
        />
      </div>
      {
        <div className={styles.error_message}>
          {errorMessages !== null &&
            (errorMessages?.monthError || errorMessages?.yearError) && (
              <div className={styles.error_message}>
                {errorMessages?.monthError || errorMessages?.yearError}
              </div>
            )}
        </div>
      }
    </>
  );
}
