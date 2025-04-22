import * as S from './CardInfoSection.styles';
import { ErrorProps } from '../../../shared/model/types';
import CustomInput from '../../../shared/ui/CustomInput';

const inputArr = [{ type: 'text', placeholder: '123', name: 'cardCVC' }];

export default function CardCVCSection({
  error,
  onChange,
}: {
  error: ErrorProps;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const isError =
    error && error['cardExpirationDateError'].errorIndex !== -1 && error['cardExpirationDateError'].errorMessage !== '';

  return (
    <S.CardInfoMainSection>
      <div>
        <S.CardInfoTitle>CVC 번호를 입력해 주세요</S.CardInfoTitle>
        <S.CardInfoDescription></S.CardInfoDescription>
      </div>
      <S.CardInfoSubSection>
        <S.CardInfoSubTitle>CVC</S.CardInfoSubTitle>
        <S.CardInfoInputContainer>
          {inputArr.map((input, index: number) => (
            <CustomInput
              key={`cardExpirationDate-custom-input-${index}`}
              {...input}
              onChange={onChange}
              maxLength={3}
              error={isError && error['cardExpirationDateError'].errorIndex === index}
            />
          ))}
        </S.CardInfoInputContainer>
        <S.CardInfoError>{error && error['cardExpirationDateError'].errorMessage}</S.CardInfoError>
      </S.CardInfoSubSection>
    </S.CardInfoMainSection>
  );
}
