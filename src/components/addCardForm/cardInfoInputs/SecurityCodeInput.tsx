import { InputWrapper } from './template/InputWrapper';
import { ErrorMessage, Input } from './template/Input';
import styled from 'styled-components';
import { useErrorMessage } from '../../../hooks/useError';
import { MoveInputContainer } from '../MoveInputContainer';
import {
  useCardInfoActionContext,
  useCardInfoValueContext,
} from '../../../hooks/cardInfoContext';

interface Props {
  viewNextInput: () => void;
  viewPreviousInput: () => void;
}

const securityCodeInputValidator = (input: string | string[]) => {
  if (typeof input === 'object') return;

  if (!/^[0-9]*$/.test(input))
    throw new Error('보안 코드는 숫자만 입력가능합니다.');

  if (input.length !== 3)
    throw new Error('보안 코드 세자리를 모두 입력해주세요.');
};

export const SecurityCodeInput = ({
  viewNextInput,
  viewPreviousInput,
}: Props) => {
  const { securityCode } = useCardInfoValueContext();
  const { setSecurityCode } = useCardInfoActionContext();

  const error = useErrorMessage(securityCode, securityCodeInputValidator);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecurityCode(e.target.value);
  };

  return (
    <div>
      <Style.Label>
        <Style.Title>보안 코드(CVC/CVV)</Style.Title>
      </Style.Label>
      <InputWrapper width={84}>
        <Input
          autoFocus={true}
          value={securityCode}
          width={'84'}
          minLength={3}
          maxLength={3}
          placeholder="•••"
          onChange={handleInputChange}
          inputMode="numeric"
          type="password"
          autoComplete="off"
          required
        />
      </InputWrapper>
      <ErrorMessage>{error ?? ''}</ErrorMessage>
      <MoveInputContainer
        isLeftBtnShowed={true}
        isRightBtnShowed={error === null}
        viewNextInput={viewNextInput}
        viewPreviousInput={viewPreviousInput}
        progress={'4/5'}
      />
    </div>
  );
};

const Style = {
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
