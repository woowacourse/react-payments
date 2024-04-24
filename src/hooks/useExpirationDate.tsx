import { CARD_EXPIRATION_DATE_KEYS } from "@/constants/cardInfo";
import { ERRORS } from "@/constants/messages";
import { isAllDone } from "@/utils/input";
import { isValidDate, isValidMonth } from "@/utils/validators";
import {
  ChangeEvent,
  FocusEvent,
  useState,
  useCallback,
  useRef,
  useEffect,
} from "react";

const useExpirationDate = () => {
  const [expirationDate, setExpirationDate] = useState({
    data: {
      month: { value: "", isError: false, isDone: false },
      year: { value: "", isError: false, isDone: false },
    },
    status: {
      isError: false,
      errorMessage: "",
    },
  });
  const [nextInput, setShowNextInput] = useState<boolean>(false);

  const monthRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isAllDone(expirationDate.data)) {
      setShowNextInput(true);
    }
  }, [expirationDate.data]);

  const changeExpirationDate = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target as {
        name: (typeof CARD_EXPIRATION_DATE_KEYS)[number];
        value: string;
      };
      if (!CARD_EXPIRATION_DATE_KEYS.includes(name)) return;

      if (!Number.isInteger(Number(value))) {
        setExpirationDate({
          ...expirationDate,
          data: {
            ...expirationDate.data,
            [name]: { value: expirationDate.data[name].value, isError: true },
          },
          status: {
            isError: true,
            errorMessage: ERRORS.isNotInteger,
          },
        });
        return;
      }

      setExpirationDate({
        ...expirationDate,
        data: {
          ...expirationDate.data,
          [name]: {
            value,
            isError: false,
            isDone: false,
          },
        },
        status: {
          isError: false,
          errorMessage: "",
        },
      });

      if (value.length === 2) {
        if (name === "month") yearRef.current?.focus();
        else if (name === "year") yearRef.current?.blur();
      }
    },
    [expirationDate]
  );

  const blurExpirationDate = useCallback(
    (event: FocusEvent<HTMLInputElement>) => {
      const { name, value } = event.target as {
        name: (typeof CARD_EXPIRATION_DATE_KEYS)[number];
        value: string;
      };
      if (!CARD_EXPIRATION_DATE_KEYS.includes(name)) return;

      if (name === "month") {
        if (!isValidMonth(value)) {
          setExpirationDate({
            ...expirationDate,
            data: {
              ...expirationDate.data,
              month: {
                value,
                isError: true,
                isDone: false,
              },
            },
            status: {
              isError: true,
              errorMessage: ERRORS.isNotValidMonth,
            },
          });
          return;
        }
      } else if (name === "year") {
        if (
          !isValidDate({
            year: value,
            month: expirationDate.data.month.value,
          })
        ) {
          setExpirationDate({
            ...expirationDate,
            data: {
              month: {
                value: expirationDate.data.month.value,
                isError: true,
                isDone: false,
              },
              year: {
                value,
                isError: true,
                isDone: false,
              },
            },
            status: {
              isError: true,
              errorMessage: ERRORS.deprecatedCard,
            },
          });
          return;
        }
      }
      setExpirationDate({
        ...expirationDate,
        data: {
          ...expirationDate.data,
          [name]: { value, isDone: true, isError: false },
        },
      });
    },
    [expirationDate]
  );

  return {
    expirationDate,
    changeExpirationDate,
    blurExpirationDate,
    nextInput,
    refs: { monthRef, yearRef },
  };
};

export default useExpirationDate;
