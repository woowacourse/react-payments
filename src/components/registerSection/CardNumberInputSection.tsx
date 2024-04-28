import * as S from '../../app.style';
import InputSection from './InputSection';
import { InitialCardNumberState } from '@/types';
import { Fragment, RefObject } from 'react';
import Label from '../composables/Label';
import Input from '../composables/Input';
import { MAX_LENGTH, CARD_NUMBER } from '@/constants/cardSection';

type RegisterCardNumberProps = {
  cardNumbers: InitialCardNumberState[];
  cardNumbersChangeHandler: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  refs: RefObject<HTMLInputElement>[];
};

const CardNumberInputSection = ({
  cardNumbers,
  cardNumbersChangeHandler,
  refs,
}: RegisterCardNumberProps) => {
  return (
    <S.Wrapper>
      <InputSection
        title={CARD_NUMBER.title}
        description={CARD_NUMBER.description}
        inputTitle={CARD_NUMBER.inputTitle}
      >
        {cardNumbers.map((cardNumber, index) => {
          const boundHtmlForId = 'cardNumbers' + index;
          return (
            <Fragment key={index}>
              <Label htmlFor={boundHtmlForId} />
              <Input
                id={boundHtmlForId}
                ref={refs[index]}
                placeholder="1234"
                type="text"
                maxLength={MAX_LENGTH.INDIVIDUAL_CARD_NUMBER}
                value={cardNumber.value}
                onChange={(e) => cardNumbersChangeHandler(e, index)}
                isError={cardNumber.isError}
              />
            </Fragment>
          );
        })}
      </InputSection>
      <S.ErrorContainer>
        <S.ErrorMessageSpan>
          {cardNumbers.some((cardNumber) => cardNumber.isError) && CARD_NUMBER.errorMessage}
        </S.ErrorMessageSpan>
      </S.ErrorContainer>
    </S.Wrapper>
  );
};

export default CardNumberInputSection;
