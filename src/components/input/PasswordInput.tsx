import { forwardRef, useEffect } from 'react';
import styled from 'styled-components';
import { InputWrapper } from './template/InputWrapper';
import { Input } from './template/Input';

interface Props {
  password: string[];
  setPassword: React.Dispatch<React.SetStateAction<string[]>>;
  activateNextButton: () => void;
  focusPasswordInputByIndex: (index: number) => void;
  focusFirstPasswordInput: () => void;
}

export const PasswordInput = forwardRef<HTMLInputElement[], Props>(
  function PasswordInput(
    {
      password,
      setPassword,
      activateNextButton,
      focusPasswordInputByIndex,
      focusFirstPasswordInput,
    },
    refs
  ) {
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      const index = e.target.dataset.index;

      if (index === undefined) throw new Error('dataset-index가 없습니다.');

      validatePassword(e);

      setPassword((current) => {
        const newPassword = [...current];

        newPassword[Number(index)] = e.target.value;

        return newPassword;
      });

      if (e.target.value.length === 1) {
        focusPasswordInputByIndex(Number(index) + 1);
        if (Number(index) === 1) activateNextButton();
      }
    };

    const handleBackspacePress = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!(e.target instanceof HTMLInputElement)) return;

      const index = e.target.dataset.index;

      if (index === undefined) return;

      if (e.key === 'Backspace' && password[Number(index)] === '') {
        e.preventDefault();
        focusPasswordInputByIndex(Number(index) - 1);
      }
    };

    const validatePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!/^[0-9]*$/.test(e.target.value)) {
        e.preventDefault();

        alert('유효한 비밀번호가 아닙니다.');
        e.target.value = '';
        setPassword(['', '']);

        focusPasswordInputByIndex(0);
      }
    };

    useEffect(() => {
      focusFirstPasswordInput();
    }, []);

    return (
      <>
        <Style.Label>
          <Style.Title>카드 비밀번호</Style.Title>
        </Style.Label>
        <Style.Wrapper>
          <InputWrapper width={43}>
            <Input
              ref={(element) => {
                if (typeof refs !== 'object') return;
                if (element === null) return;
                if (refs?.current) refs.current[0] = element;
              }}
              value={password[0]}
              width={43}
              maxLength={1}
              type="password"
              inputMode="numeric"
              required
              data-index="0"
              onChange={handleChangeInput}
              onKeyDown={handleBackspacePress}
              placeholder="•"
            />
          </InputWrapper>
          <InputWrapper width={43}>
            <Input
              ref={(element) => {
                if (typeof refs !== 'object') return;
                if (element === null) return;
                if (refs?.current) refs.current[1] = element;
              }}
              value={password[1]}
              width={43}
              maxLength={1}
              type="password"
              inputMode="numeric"
              required
              data-index="1"
              onChange={handleChangeInput}
              onKeyDown={handleBackspacePress}
              placeholder="•"
            />
          </InputWrapper>
          <Style.DotContainer>•</Style.DotContainer>
          <Style.DotContainer>•</Style.DotContainer>
        </Style.Wrapper>
      </>
    );
  }
);

const Style = {
  Wrapper: styled.div`
    display: flex;
    justify-content: space-between;

    width: 193px;
  `,
  Input: styled.input`
    width: 43px;
    height: 45px;
    text-align: center;

    padding: 0;
  `,
  DotContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 43px;
    height: 45px;
  `,
  Label: styled.div`
    width: 318px;

    display: flex;
    justify-content: space-between;

    font-size: 12px;
  `,
  Title: styled.span`
    color: #2f2f2f;
  `,
};
