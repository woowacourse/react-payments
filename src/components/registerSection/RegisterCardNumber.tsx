import * as S from '../../app.style';
import InputSection from './InputSection';
import { CARD_NUMBER } from '../../constants/cardSection';
import { InitialCardNumberState } from 'types';
import { Fragment, forwardRef, RefObject } from 'react';
import Label from '../composables/Label';
import Input from '../composables/Input';
import { MAX_LENGTH } from '../../App';

type RegisterCardNumberProps = {
  cardNumbers: InitialCardNumberState[];
  cardNumbersChangeHandler: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  refs: RefObject<HTMLInputElement>[];
};

const RegisterCardNumber = forwardRef<HTMLInputElement, RegisterCardNumberProps>((props, ref) => {
  const { cardNumbers, cardNumbersChangeHandler, refs } = props;

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
                maxLength={MAX_LENGTH.CARD_NUMBERS}
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
});

export default RegisterCardNumber;
