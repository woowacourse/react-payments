const useLocalStorage = <T>(key: string) => {
  const localData = JSON.parse(localStorage.getItem(key) || '[]');

  const setLocalData = (data: T[]) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  return { localData, setLocalData };
};

export default useLocalStorage;
