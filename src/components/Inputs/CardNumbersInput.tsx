import * as S from './common.style';
import { Fragment } from 'react/jsx-runtime';
import { CARD_NUMBER } from '../../constants/cardSection';
import InputSection from '../InputSection';
import Input from '../composables/Input';
import InputLabel from '../composables/InputLabel';
import { UseInputReturn } from '../../hooks/useInput';
import { MAX_LENGTH } from '../../constants/rules';

interface Props {
  cardNumbersArray: UseInputReturn<HTMLInputElement>[];
  setNextContentDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CardNumbersInput({ cardNumbersArray, setNextContentDisplay }: Props) {
  const goNextStep = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (e.target.value.length === MAX_LENGTH.cardNumbers) {
      if (cardNumbersArray.length - 1 !== index) {
        cardNumbersArray[index + 1].ref.current?.focus();
      } else {
        setNextContentDisplay(true);
      }
    }
  };

  return (
    <S.Wrapper>
      <InputSection
        title={CARD_NUMBER.title}
        description={CARD_NUMBER.description}
        inputTitle={CARD_NUMBER.inputTitle}
      >
        {cardNumbersArray.map((cardNumbers, index) => {
          const { value, isError, onChangeHandler, onBlurHandler } = cardNumbers;
          const section = index + 1;

          return (
            <Fragment key={index}>
              <InputLabel
                htmlFor={'cardNumbers' + section}
                description={`카드 번호 ${section}번째 입력 섹션`}
              />
              <Input
                isAutoFocus={index === 0}
                id={'cardNumbers' + section}
                placeholder="1234"
                type="text"
                maxLength={MAX_LENGTH.cardNumbers}
                value={value}
                onChange={(e) => {
                  onChangeHandler(e);
                  goNextStep(e, index);
                }}
                onBlur={onBlurHandler}
                isError={isError}
                ref={cardNumbers.ref}
              />
            </Fragment>
          );
        })}
      </InputSection>
      <S.ErrorWrapper>
        <S.ErrorMessage>
          {cardNumbersArray.find(({ isError }) => isError)?.errorMessage}
        </S.ErrorMessage>
      </S.ErrorWrapper>
    </S.Wrapper>
  );
}
