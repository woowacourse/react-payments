import React, { useMemo } from 'react';
import CardPassword from '../components/CardPassword';
import useInputHandler from '../hooks/useInputHandler';
import { validatePassword } from '../validator';

export default {
  title: 'CardPassword',
  component: CardPassword,
};

const Template = () => {
  const {
    errorMessage: pwdErrorMessage,
    setErrorMessage: setPwdErrorMessage,
    inputValue: pwd,
    updateInputState: updatePwd,
  } = useInputHandler(validatePassword, {
    pwdNoA: '',
    pwdNoB: '',
  });

  const isCorrectPwd = useMemo(() => Object.values(pwd).join('').length === 2, [pwd]);

  return (
    <CardPassword
      errorMessage={pwdErrorMessage}
      setErrorMessage={setPwdErrorMessage}
      pwd={pwd}
      updatePwd={updatePwd}
      isCorrectPwd={isCorrectPwd}
    />
  );
};

export const Primary = Template.bind({});
