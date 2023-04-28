import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useNavigationTo = (path: string) => {
  const [history, setHistory] = useState<string[]>([]);
  const navigation = useNavigate();

  const navigationTo = () => {
    setHistory(prev => [...prev, path]);
    navigation(path);
  };

  return { navigationTo, history };
};
