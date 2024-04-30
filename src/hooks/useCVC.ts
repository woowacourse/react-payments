import { useEffect, useState } from 'react';
import { CVC } from '../types/card';

const useCVC = (initCVC = '') => {
  const [CVC, setCVC] = useState<CVC>({
    CVCField: {
      CVC: { value: initCVC, errorMessage: '', isError: false },
    },
    isNextField: false,
  });

  useEffect(() => {
    const checkCompleteInput = () => {
      const isNotAllError = Object.values(CVC.CVCField).reduce((pre, cur) => {
        if (!cur.isError && cur.value !== '' && cur.value.length === 3) {
          return pre + 1;
        }
        return pre;
      }, 0);
      return isNotAllError === 1;
    };
    if (checkCompleteInput()) {
      setCVC((prev: CVC) => ({
        ...prev,
        isNextField: true,
      }));
    }
  }, [CVC.CVCField]);

  const handleUpdateCVCInput = (value: string) => {
    const cardKey = 'CVC' as keyof typeof CVC.CVCField;
    setCVC((prevState: CVC) => {
      return {
        ...prevState,
        CVCField: {
          ...prevState.CVCField,
          [cardKey]: {
            ...prevState.CVCField[cardKey],
            value: value,
          },
        },
      };
    });
  };

  const handleUpdateCVCErrorMessages = (
    errorMessage: string,
    isError: boolean
  ) => {
    const cardKey = 'CVC' as keyof typeof CVC.CVCField;
    setCVC((prevState: CVC) => {
      return {
        ...prevState,
        CVCField: {
          ...prevState.CVCField,
          [cardKey]: {
            ...prevState.CVCField[cardKey],
            errorMessage: errorMessage,
            isError: isError,
          },
        },
      };
    });
  };

  return {
    CVC,
    handleUpdateCVCInput,
    handleUpdateCVCErrorMessages,
  };
};

export default useCVC;
