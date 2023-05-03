import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useNavigationTo = () => {
  const [history, setHistory] = useState<string[]>([]);
  const navigation = useNavigate();

  const navigationTo = (path: string) => {
    setHistory(prev => [...prev, path]);
    navigation(path);
  };

  return { navigationTo, history };
};
