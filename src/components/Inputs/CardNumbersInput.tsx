import * as S from './common.style';
import { Fragment } from 'react/jsx-runtime';
import { CARD_NUMBER } from '../../constants/cardSection';
import InputSection from '../InputSection';
import ScreenReaderOnlyLabel from '../composables/ScreenReaderOnlyLabel';
import Input from '../composables/Input';
import { UseInputReturn } from '../../hooks/useInput';

interface Props {
  cardNumbersArray: UseInputReturn<HTMLInputElement>[];
  setNextContentDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CardNumbersInput({ cardNumbersArray, setNextContentDisplay }: Props) {
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
              <ScreenReaderOnlyLabel
                htmlFor={'cardNumbers' + section}
                description={`카드 번호 ${section}번째 입력 섹션`}
              />
              <Input
                isAutoFocus={index === 0}
                id={'cardNumbers' + section}
                placeholder="1234"
                type="text"
                maxLength={4}
                value={value}
                onChange={(e) => {
                  onChangeHandler(e);
                  if (e.target.value.length === 4) {
                    if (cardNumbersArray.length - 1 !== index) {
                      cardNumbersArray[index + 1].ref.current?.focus();
                    } else {
                      setNextContentDisplay(true);
                    }
                  }
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
