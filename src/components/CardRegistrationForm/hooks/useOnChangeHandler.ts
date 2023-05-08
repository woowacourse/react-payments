const useOnChangeHandler = ({
  key,
  count,
  setCard,
  setCardError,
  validate,
}: {
  key: string;
  count: number;
  setCard: React.Dispatch<React.SetStateAction<any>>;
  setCardError: React.Dispatch<React.SetStateAction<any>>;
  validate: (value: string) => void;
}) => {
  const generateOnChange = (index: number) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      try {
        validate(e.target.value);
        
        setCard((prev: any) => {
          const newState = [...prev[key]];
          newState[index] = e.target.value;
          return {
            ...prev,
            [key]: newState,
          };
        });
        setCardError((prev: {}) => ({
          ...prev,
          [key]: null,
        }));
      } catch (error) {
        setCardError((prev: {}) => ({
          ...prev,
          [key]: error as Error,
        }));
      }
    };
  };

  return Array.from({ length: count }, (_, i) => generateOnChange(i));
};

export default useOnChangeHandler;
