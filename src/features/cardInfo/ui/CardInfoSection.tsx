import CustomInput from '../../../shared/ui/CustomInput';
import { ErrorProps } from '../../../shared/type/types';
import * as S from './CardInfoSection.styles';
import { ComponentProps } from 'react';

interface CardInfoSectionProps {
  id: string;
  title: string;
  description: string;
  subTitle: string;
  inputArr: ComponentProps<typeof CustomInput>[];
  maxLength: number;
  error?: ErrorProps;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CardInfoSection({
  id,
  title,
  description,
  subTitle,
  inputArr,
  maxLength,
  error,
  onChange,
}: CardInfoSectionProps) {
  const errorKey = `${id}Error` as keyof ErrorProps;

  const isError = error && error[errorKey].errorIndex !== -1 && error[errorKey].errorMessage !== '';

  return (
    <S.CardInfoMainSection>
      <div>
        <S.CardInfoTitle>{title}</S.CardInfoTitle>
        <S.CardInfoDescription>{description}</S.CardInfoDescription>
      </div>
      <S.CardInfoSubSection>
        <S.CardInfoSubTitle>{subTitle}</S.CardInfoSubTitle>
        <S.CardInfoInputContainer>
          {inputArr.map((input, index: number) => (
            <CustomInput
              key={`${id}-custom-input-${index}`}
              {...input}
              onChange={onChange}
              maxLength={maxLength}
              error={isError && error[errorKey].errorIndex === index}
            />
          ))}
        </S.CardInfoInputContainer>
        <S.CardInfoError>{error && error[errorKey].errorMessage}</S.CardInfoError>
      </S.CardInfoSubSection>
    </S.CardInfoMainSection>
  );
}
