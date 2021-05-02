import { createContext, useState } from 'react';

const TargetCardIdContext = createContext({
  state: { targetCardId: '' },
  actions: {
    setTargetCardId: () => {},
  },
});

const TargetCardIdProvider = ({ children }) => {
  const [targetCardId, setTargetCardId] = useState('');

  const value = {
    state: { targetCardId },
    actions: { setTargetCardId },
  };

  return <TargetCardIdContext.Provider value={value}>{children}</TargetCardIdContext.Provider>;
};

export { TargetCardIdContext, TargetCardIdProvider };
