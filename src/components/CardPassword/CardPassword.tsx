import { Title, Label, Input, Spacing, ErrorMessage } from '@/components';
import { CardPasswordInputType } from '@/types/input';
import { checkAllNumber } from '@/utils/validation';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import * as S from './CardPassword.styles';
import { ERROR_MESSAGE } from '@/constants';

interface CardPasswordProps {
  cardPassword: CardPasswordInputType;
  setCardPassword: (value: CardPasswordInputType) => void;
  cardPasswordErrorMessage: CardPasswordInputType;
  setCardPasswordErrorMessage: Dispatch<SetStateAction<CardPasswordInputType>>;
}

export default function CardPassword({
  cardPassword,
  setCardPassword,
  cardPasswordErrorMessage,
  setCardPasswordErrorMessage,
}: CardPasswordProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (!checkAllNumber(value)) return;

    setCardPassword(value);

    if (value.length < 2) {
      setCardPasswordErrorMessage(ERROR_MESSAGE.cardPassword?.length || '비밀번호는 2자리 이상이어야 합니다.');
    } else {
      setCardPasswordErrorMessage('');
    }
  };

  return (
    <div>
      <Title description="앞의 2자리를 입력해주세요">비밀번호를 입력해 주세요</Title>
      <Spacing size={24} />
      <Label id="card-password">비밀번호 앞 2자리</Label>
      <Spacing size={8} />
      <S.InputWrapper>
        <Input
          type="password"
          placeholder="**"
          maxLength={2}
          value={cardPassword}
          onChange={handleChange}
          isError={cardPasswordErrorMessage !== ''}
          aria-label="비밀번호 앞 2자리"
          inputMode="numeric"
        />
      </S.InputWrapper>
      <Spacing size={8} />
      <ErrorMessage>{cardPasswordErrorMessage}</ErrorMessage>
    </div>
  );
}
