interface InputErrorType {
  number: boolean[];
  month: boolean;
  year: boolean;
  owner: boolean;
  provider: boolean;
  cvc: boolean;
  password: boolean;
}

interface CompletedType {
  number: boolean;
  month: boolean;
  year: boolean;
  owner: boolean;
  provider: boolean;
  cvc: boolean;
  password: boolean;
}

const useCompleted = (inputError: InputErrorType) => {
  const isCompleted: CompletedType = {
    number: false,
    month: false,
    year: false,
    owner: false,
    provider: false,
    cvc: false,
    password: false,
  };

  Object.keys(inputError).forEach((key) => {
    const completedKey = key as keyof CompletedType;
    if (completedKey === 'number') {
      isCompleted[completedKey] = inputError[completedKey].every((error: boolean) => !error);
    } else {
      isCompleted[completedKey] = !inputError[completedKey];
    }
  });

  const checkCompleted = () => {
    return Object.values(isCompleted).every((value) => value);
  };

  return checkCompleted();
};

export default useCompleted;
