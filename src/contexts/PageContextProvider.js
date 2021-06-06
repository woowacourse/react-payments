import { createContext, useState } from 'react';

const PageContext = createContext();

const PageContextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('cardList');

  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage }}>{children}</PageContext.Provider>
  );
};

export default PageContextProvider;
export { PageContext };
