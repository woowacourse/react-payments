import { createContext, useState } from 'react';

const NickNameContext = createContext();

function NickNameContextProvider({ children }) {
  const [nickName, setNickname] = useState('');
  const [validation, setValidation] = useState(false);

  const onNickNameChange = ({ target }) => {
    setNickname(target.value);
    setValidation(/[ㄱ-ㅎㅏ-ㅣ가-힣0-9a-zA-Z]/.test(target.value));
  };

  return (
    <NickNameContext.Provider
      value={{ nickName, validation, onNickNameChange }}
    >
      {children}
    </NickNameContext.Provider>
  );
}

export { NickNameContext, NickNameContextProvider };
