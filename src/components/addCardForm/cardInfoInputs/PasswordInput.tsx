import styled from 'styled-components';
import { InputWrapper } from './template/InputWrapper';
import { ErrorMessage, Input } from './template/Input';
import { useErrorMessage } from '../../../hooks/useError';
import {
  useCardInfoActionContext,
  useCardInfoValueContext,
} from '../../../hooks/cardInfoContext';
import { useFocus } from '../../../hooks/useFocus';
import { useEffect } from 'react';

interface Props {
  viewNextInput: () => void;
}

export const passwordInputValidator = (input: string | string[]) => {
  if (typeof input === 'string') return;

  if (input.every((num) => num === '')) throw new Error('');

  if (input.some((num) => !/^[0-9]*$/.test(num)))
    throw new Error('카드 비밀 번호를 숫자로 입력해주세요.');

  if (input.some((num) => num === ''))
    throw new Error('모든 입력창을 채워주세요.');
};

export const PasswordInput = ({ viewNextInput }: Props) => {
  const { password } = useCardInfoValueContext();
  const { setPassword } = useCardInfoActionContext();
  const { inputRefs, focusInputByIndex } = useFocus(2);

  const error = useErrorMessage(password, passwordInputValidator);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = e.target.dataset.index;

    if (index === undefined) throw new Error('dataset-index가 없습니다.');

    setPassword(Number(index), e.target.value);

    if (e.target.value.length === 1) {
      focusInputByIndex(Number(index) + 1);
    }
  };

  const handleBackspacePress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return;

    const index = e.target.dataset.index;

    if (index === undefined || e.key !== 'Backspace') return;

    if (password[Number(index)] === '') focusInputByIndex(Number(index) - 1);
  };

  useEffect(() => {
    if (error === null) viewNextInput();
  }, [error]);

  return (
    <div>
      <Style.Label>
        <Style.Title>카드 비밀번호</Style.Title>
      </Style.Label>
      <Style.Wrapper>
        <InputWrapper width={43}>
          <Input
            ref={(element) => {
              if (element === null) return;
              inputRefs.current[0] = element;
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
              if (element === null) return;
              inputRefs.current[1] = element;
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
    </div>
  );
};

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
