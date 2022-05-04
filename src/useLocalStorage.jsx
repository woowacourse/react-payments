import { useState } from "react";

export default function useLocalStorage(key) {
  const [data, setData] = useState(
    JSON.parse(window.localStorage.getItem(key)) || []
  );

  const saveData = (data) => {
    setData(data);
    window.localStorage.setItem(key, JSON.stringify(data));
  };

  return [data, saveData];
}
