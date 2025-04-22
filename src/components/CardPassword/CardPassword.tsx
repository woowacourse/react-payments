import { ErrorMessage, Input, Label, Spacing, Title } from '@/components';
import { ERROR_MESSAGE } from '@/constants';
import { RegisterType } from '@/hooks/useForm';
import { CardPasswordInputType } from '@/types/input';
import * as S from './CardPassword.styles';
interface CardPasswordProps {
  register: RegisterType<CardPasswordInputType>;
  cardPasswordErrors: CardPasswordInputType;
}

export default function CardPassword({ register, cardPasswordErrors }: CardPasswordProps) {
  console.log(cardPasswordErrors);
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
          isError={!!cardPasswordErrors.password}
          aria-label="비밀번호 앞 2자리"
          inputMode="numeric"
          {...register('password', {
            validation: {
              required: true,
              length: 2,
              errorMessage: ERROR_MESSAGE.cardPassword?.length || '비밀번호는 2자여야 합니다.',
            },
          })}
        />
      </S.InputWrapper>
      <Spacing size={8} />
      <ErrorMessage>{cardPasswordErrors.password}</ErrorMessage>
    </div>
  );
}
