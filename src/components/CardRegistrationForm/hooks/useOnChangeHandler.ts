const useOnChangeHandler = ({
  setState,
  count,
}: {
  setState: React.Dispatch<React.SetStateAction<any>>;
  count: number;
}) => {
  const generateOnChange = (index: number) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setState((prev: unknown[]) => {
        const newState = [...prev];
        newState[index] = e.target.value;
        return newState;
      });
    };
  };

  return Array.from({ length: count }, (_, i) => generateOnChange(i));
};

export default useOnChangeHandler;
