import { forwardRef } from 'react';
import { InputWrapper } from './template/InputWrapper';
import { ErrorMessage, Input } from './template/Input';
import styled from 'styled-components';
import { useError } from '../../../hooks/useError';
import { MoveInput } from '../MoveInput';

interface Props {
  ownerName: string;
  setOwnerName: React.Dispatch<React.SetStateAction<string>>;
  viewNextInput: () => void;
  viewPreviousInput: () => void;
}

const ownerNameInputValidator = (input: string | string[]) => {
  if (typeof input === 'object') throw new Error('입력 객체 에러');

  if (input.length === 0) return;

  if (/\s{2,}/.test(input))
    throw new Error('공백은 두번 연속 사용할 수 없습니다.');

  if (!/^[A-Z\s]+$/.test(input))
    throw new Error('이름은 영문으로만 입력 가능합니다.');
};

export const OwnerNameInput = forwardRef<HTMLInputElement[], Props>(
  function OwnerNameInput(
    { ownerName, setOwnerName, viewNextInput, viewPreviousInput },
    refs
  ) {
    const error = useError(ownerName, ownerNameInputValidator);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setOwnerName(e.target.value.toUpperCase());
    };

    const handlePressKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!(e.target instanceof HTMLInputElement)) return;

      if (e.key === 'Backspace' && e.target.value === '') viewPreviousInput();

      if (e.key !== 'Enter') return;

      e.preventDefault();

      if (error !== null) return;

      viewNextInput();
    };

    return (
      <div>
        <Style.Label>
          <Style.Title>카드 소유자 이름(선택)</Style.Title>
          <Style.NameLength>{ownerName.length}/20</Style.NameLength>
        </Style.Label>
        <InputWrapper width={318}>
          <Input
            ref={(element) => {
              if (!(element instanceof HTMLInputElement)) return;
              if (typeof refs !== 'object') return;
              if (refs?.current) refs.current[0] = element;
            }}
            autoFocus={true}
            value={ownerName}
            width={'318'}
            minLength={1}
            maxLength={20}
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
            onChange={handleInputChange}
            onKeyDown={handlePressKey}
          />
        </InputWrapper>
        <ErrorMessage>{error ?? ''}</ErrorMessage>
        <MoveInput
          isLeftBtnShowed={true}
          isRightBtnShowed={error === null}
          viewNextInput={viewNextInput}
          viewPreviousInput={viewPreviousInput}
          progress={'3/5'}
        />
      </div>
    );
  }
);

const Style = {
  Label: styled.div`
    width: 318px;

    display: flex;
    justify-content: space-between;

    font-size: 12px;
  `,
  NameLength: styled.span`
    color: #2f2f2f;
  `,
  Title: styled.span`
    color: #2f2f2f;
  `,
};
