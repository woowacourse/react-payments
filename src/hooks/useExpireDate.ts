import { useEffect, useState } from 'react';
import { ExpirationDate } from '../types/card';

const useExpireDate = (initExpirationDate = { month: '', year: '' }) => {
  const [expirationDate, setExpirationDate] = useState<ExpirationDate>({
    expirationDateFields: {
      month: {
        value: initExpirationDate.month,
        errorMessage: '',
        isError: false,
      },
      year: {
        value: initExpirationDate.year,
        errorMessage: '',
        isError: false,
      },
    },
    isNextField: false,
  });
  const date = Object.keys(expirationDate.expirationDateFields);

  useEffect(() => {
    const checkCompleteInput = () => {
      const isNotAllError = Object.values(
        expirationDate.expirationDateFields
      ).reduce((pre, cur) => {
        if (!cur.isError && cur.value !== '' && cur.value.length === 2) {
          return pre + 1;
        }
        return pre;
      }, 0);
      return isNotAllError === 2;
    };
    if (checkCompleteInput()) {
      setExpirationDate((prev: ExpirationDate) => ({
        ...prev,
        isNextField: true,
      }));
    }
  }, [expirationDate.expirationDateFields]);

  const handleUpdateExpirationDateInput = (index: number, value: string) => {
    const cardKey = date[
      index
    ] as keyof typeof expirationDate.expirationDateFields;
    setExpirationDate((prevState: ExpirationDate) => {
      return {
        ...prevState,
        expirationDateFields: {
          ...prevState.expirationDateFields,
          [cardKey]: {
            ...prevState.expirationDateFields[cardKey],
            value: value,
          },
        },
      };
    });
  };

  const handleUpdateExpirationDateErrorMessages = (
    index: number,
    errorMessage: string,
    isError: boolean
  ) => {
    const cardKey = date[
      index
    ] as keyof typeof expirationDate.expirationDateFields;
    setExpirationDate((prevState: ExpirationDate) => {
      return {
        ...prevState,
        expirationDateFields: {
          ...prevState.expirationDateFields,
          [cardKey]: {
            ...prevState.expirationDateFields[cardKey],
            errorMessage: errorMessage,
            isError: isError,
          },
        },
      };
    });
  };
  return {
    expirationDate,
    handleUpdateExpirationDateInput,
    handleUpdateExpirationDateErrorMessages,
  };
};

export default useExpireDate;
