import { forwardRef } from 'react';
import styled from 'styled-components';
import { InputWrapper } from './template/InputWrapper';
import { ErrorMessage, Input } from './template/Input';
import { useError } from '../../../hooks/useError';
import { MoveInput } from '../MoveInput';

interface Props {
  password: string[];
  setPassword: React.Dispatch<React.SetStateAction<string[]>>;
  handleSubmitNewCardInfo: () => void;
  focusPasswordInputByIndex: (index: number) => void;
  viewPreviousInput: () => void;
}

const passwordInputValidator = (input: string | string[]) => {
  if (typeof input === 'string') return;

  if (input.some((num) => !/^[0-9]*$/.test(num)))
    throw new Error('카드 비밀 번호를 숫자로 입력해주세요.');

  if (input.some((num) => num === ''))
    throw new Error('모든 입력창을 채워주세요.');
};

export const PasswordInput = forwardRef<HTMLInputElement[], Props>(
  function PasswordInput(
    {
      password,
      setPassword,
      handleSubmitNewCardInfo,
      focusPasswordInputByIndex,
      viewPreviousInput,
    },
    refs
  ) {
    const error = useError(password, passwordInputValidator);

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      const index = e.target.dataset.index;

      if (index === undefined) throw new Error('dataset-index가 없습니다.');

      setPassword((current) => {
        const newPassword = [...current];

        newPassword[Number(index)] = e.target.value;

        return newPassword;
      });

      if (e.target.value.length === 1) {
        focusPasswordInputByIndex(Number(index) + 1);
      }
    };

    const handleBackspacePress = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!(e.target instanceof HTMLInputElement)) return;

      const index = e.target.dataset.index;

      if (index === undefined) return;

      if (e.key !== 'Backspace') return;

      if (password[Number(index)] === '') {
        if (Number(index) === 0) viewPreviousInput();

        focusPasswordInputByIndex(Number(index) - 1);
      }
    };

    return (
      <div>
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
              autoFocus={true}
              value={password[0]}
              width={43}
              maxLength={1}
              type="password"
              autoComplete="off"
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
              autoComplete="off"
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
        <ErrorMessage>{error ?? ''}</ErrorMessage>
        <MoveInput
          isLeftBtnShowed={true}
          isRightBtnShowed={error === null}
          viewPreviousInput={viewPreviousInput}
          viewNextInput={handleSubmitNewCardInfo}
          progress={'5/5'}
        />
      </div>
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
