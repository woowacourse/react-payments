export const getData = (dataName: string) => {
  const dataInLocalStorage = Object.keys(localStorage).filter((key) =>
    key.startsWith(dataName)
  );

  return dataInLocalStorage.map((_, idx) => {
    const data = localStorage.getItem(`${dataName}${idx}`);

    if (!data) return [];

    return validateJson(data);
  });
};

export const validateJson = (data: string) => {
  try {
    return JSON.parse(data);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);

      return [];
    }
    return [];
  }
};
